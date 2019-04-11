const { unbox, compile, obtain } = require("./reporters");
const Reporter = require("./Reporter");
const defaultReporters = { compile, unbox, obtain };

class ReporterAggregator {
  constructor(initializationOptions) {
    this.initializeReporters(initializationOptions);
  }

  initializeReporters(initializationOptions) {
    const { emitter } = initializationOptions;
    for (let reporterName in defaultReporters) {
      new Reporter({
        options: defaultReporters[reporterName],
        emitter
      });
    }
  }
}

module.exports = ReporterAggregator;