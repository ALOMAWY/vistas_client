// import React, { useState, useRef, useCallback } from "react";
// import ReactCrop, { Crop } from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// const ImageCropper = () => {
//   const [src, setSrc] = useState<string | null>(null);
//   const [crop, setCrop] = useState<Crop>({
//     unit: "%",
//     width: 50,
//     aspect: 1, // Square aspect ratio (1:1)
//   });
//   const [croppedImage, setCroppedImage] = useState<string | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);

//   const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => setSrc(reader.result as string));
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const onImageLoaded = (image: HTMLImageElement) => {
//     imageRef.current = image;
//   };

//   const onCropComplete = useCallback(() => {
//     if (imageRef.current && crop.width && crop.height) {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       if (!ctx) return;

//       const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
//       const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

//       // Set the final cropped image size
//       const TARGET_SIZE = 225;
//       canvas.width = TARGET_SIZE;
//       canvas.height = TARGET_SIZE;

//       // Calculate the crop area in the original image
//       const cropX = crop.x! * scaleX;
//       const cropY = crop.y! * scaleY;
//       const cropWidth = crop.width * scaleX;
//       const cropHeight = crop.height * scaleY;

//       // Draw cropped image onto the canvas, resizing to 225x225
//       ctx.drawImage(
//         imageRef.current,
//         cropX,
//         cropY,
//         cropWidth,
//         cropHeight,
//         0,
//         0,
//         TARGET_SIZE,
//         TARGET_SIZE
//       );

//       // Convert to blob and set the final cropped image
//       canvas.toBlob((blob) => {
//         if (blob) {
//           const croppedURL = URL.createObjectURL(blob);
//           setCroppedImage(croppedURL);
//         }
//       }, "image/jpeg");
//     }
//   }, [crop]);

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={onSelectFile} />
//       {src && (
//         <ReactCrop
//           src={src}
//           crop={crop}
//           onChange={(newCrop) => setCrop(newCrop)}
//           onComplete={onCropComplete}
//           onImageLoaded={onImageLoaded}
//         />
//       )}
//       {croppedImage && (
//         <div>
//           <h4>Cropped Image (225x225):</h4>
//           <img src={croppedImage} alt="Cropped Preview" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageCropper;
