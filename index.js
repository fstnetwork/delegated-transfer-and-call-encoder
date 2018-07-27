import { signMessage } from "./lib/signAndRecover";

console.log(
  signMessage(
    "hello world",
    "0x8094b1d2cd79b47a9e9c440e15452b8af50584b064bddfafd11da50030e64932"
  )
);
