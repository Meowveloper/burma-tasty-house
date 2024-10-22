
function base64ToFile(base64: string, fileName: string): File {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)![1]; // Get MIME type from base64 string
  const bstr = atob(arr[1]); // Decode base64 string to binary data
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n); // Convert to character codes
  }

  // Create a Blob with the binary data
  const blob = new Blob([u8arr], { type: mime });

  // Convert the Blob to a File object, setting the name and metadata if needed
  return new File([blob], fileName, { type: mime });
}

export default base64ToFile;