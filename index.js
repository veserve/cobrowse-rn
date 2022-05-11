import CBEngine from 'cobrowse-sdk-react-native';

class Cobrowse {
  constructor() {
    this.license = null;
    this.api = null;
  }

  start(opts = {}) {
    CBEngine.license = this.license;
    CBEngine.api = this.api;
    CBEngine.start();
  }
}

export default new Cobrowse;
