import { useState, useEffect } from 'react';
import app from 'firebase/app';
import firebase from './firebase';

interface UploadDataResponse {
  metaData: firebase.storage.FullMetadata;
  downloadUrl: any;
}
interface ProgressResponse { value: number }

function FirebaseFileUploadApi(type: string): [{
  data: UploadDataResponse | undefined;
  isLoading: boolean;
  isError: any;
  progress: ProgressResponse | null;
},
Function
] {
  // the data from the file upload response
  const [data, setData] = useState<UploadDataResponse | undefined>();

  // sets properties on the file to be uploaded
  const [fileData, setFileData] = useState<File | null>();

  // if we are loading a file or not
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // if an error happened during the process
  const [isError, setIsError] = useState<any>(false);

  // used for tracking the % of upload completed
  const [progress, setProgress] = useState<ProgressResponse | null>(null);

  // this function will be called when the any properties in the dependency array changes
  useEffect(() => {
    const uploadData = async () => {
      // initialize upload information
      setIsError(false);
      setIsLoading(true);

      setProgress({ value: 0 });

      if (!fileData) return;

      try {
        const fName = `${(new Date()).getTime()}-${fileData.name}`;

        // setting the firebase properties for the file upload
        const ref = firebase.store.child(`${type}/${fName}`);
        const uploadTask = ref.put(fileData);

        // tracking the state of the upload to assist in updating the
        // application UI
        uploadTask.on(
          app.storage.TaskEvent.STATE_CHANGED,
          (_progress: any) => {
            const value = (_progress.bytesTransferred / _progress.totalBytes);
            console.log(`Upload is ${value * 100}% done`);
            setProgress({ value });
          },
          (_error: any) => {
            setIsLoading(false);
            setIsError(_error);
          },
          async () => {
            setIsError(false);
            setIsLoading(false);

            // need to get the url to download the file
            const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();

            // set the data when upload has completed
            setData({
              metaData: uploadTask.snapshot.metadata,
              downloadUrl
            });

            // reset progress
            setProgress(null);
          }
        );
      } catch (_error) {
        setIsLoading(false);
        setIsError(_error);
      }
    };

    // eslint-disable-next-line no-unused-expressions
    fileData && uploadData();
  }, [fileData, type]);

  return [{
    data, isLoading, isError, progress
  }, setFileData];
}

export default FirebaseFileUploadApi;
