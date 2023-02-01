export type CameraApi = {
  capture: () => Promise<{ uri: string }>,
  setTorchMode: (mode: String) => void;
  requestDeviceCameraAuthorization: () => Promise<boolean>,
  checkDeviceCameraAuthorizationStatus: () => Promise<boolean>,
};
