import CBEngine from 'cobrowse-sdk-react-native';
import { Redacted } from 'cobrowse-sdk-react-native';

class Cobrowse {
  constructor() {
    this.license = null;
    this.api = null;
    this.started = false;
  }

  setUserId(userId) {
    CBEngine.customData = {
      user_id: userId,
      cobrowseId: userId,
    };
  }

  async getSixDigitCode() {
    if (!this.started) {
      return null;
    }
    const session = await CBEngine.createSession();
    return session.code;
  }

  start() {
    CBEngine.license = this.license;
    CBEngine.api = this.api;
    CBEngine.start();
    this.started = true;
  }
}

export const VCobrowse = new Cobrowse;
export const Redacted = Redacted;
