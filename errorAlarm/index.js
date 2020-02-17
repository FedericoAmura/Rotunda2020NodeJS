function logError(error) {
  console.log(`Appending error: ${error}`);
}

// We override the function, returning a similar one that executes in a stateful scope
logError = (function (_super) {
  // A monitor state is defined, saving the data we need for our alarm
  const ONE_MINUTE = 60 * 1000;
  this.state = {
    calls: Array(10), // we save the timestamp of previous 10 calls
    index: 0, // used for cycling the calls array
    lastMailSent: null, // the timestamp of the last time the alarm (email) fired
  };
  const monitor = this;

  return function () {
    const current = monitor.state.index;
    const next = current === 9 ? 0 : current+1;
    const now = new Date();

    // Saving current execution data
    monitor.state.calls[current] = now;
    monitor.state.index = next;

    // If our alarm criteria is fulfilled, then the alarm fires
    if (monitor.state.calls[current]-monitor.state.calls[next] < ONE_MINUTE
    && now - monitor.state.lastMailSent > ONE_MINUTE) {
      // In last minute, we found 10 function executions and no mail was sent
      console.log('Sending mail');
      monitor.state.lastMailSent = now;
    }

    // console.log(monitor.state);

    return _super.apply(this, arguments);
  }
}(logError));

logError('1-Error'); // No mails
logError('2-Error');
logError('3-Error');
logError('4-Error');
logError('5-Error');
logError('6-Error');
logError('7-Error');
logError('8-Error');
logError('9-Error');
logError('10-Error'); // Just when this is reached, the mail will be sent
logError('11-Error'); // No more mails
logError('12-Error');
logError('13-Error');
logError('14-Error');
logError('15-Error');
logError('16-Error');
