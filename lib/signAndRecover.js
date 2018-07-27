import { ec } from "elliptic";
import { keccak256 } from "js-sha3";

const secp256k1 = new ec("secp256k1");

export function signMessage(msg, privateKeyHexString) {
  const keyPair = secp256k1.keyFromPrivate(
    privateKeyHexString.replace("0x", "")
  );

  const privateKey = keyPair.getPrivate("hex");

  const msgHash = keccak256(msg);

  const signature = secp256k1.sign(msgHash, privateKey, "hex", {
    canonical: true
  });

  return signature;
}

export function recoverMessage(msg, v, r, s) {}

export function verifyMessage(msg, v, r, s) {}
