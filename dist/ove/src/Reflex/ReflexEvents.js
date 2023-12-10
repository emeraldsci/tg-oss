///////////////////////////////////////////////////////////
// ReflexEvents
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////
class ReflexEvents {
  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor() {
    this._events = {};
  }

  /////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  /////////////////////////////////////////////////////////
  on(events, fct) {
    events.split(" ").forEach(event => {
      this._events[event] = this._events[event] || [];
      this._events[event].push(fct);
    });

    return this;
  }

  /////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  /////////////////////////////////////////////////////////
  off(events, fct) {
    // eslint-disable-next-line eqeqeq
    if (events == undefined) {
      this._events = {};
      return;
    }

    events.split(" ").forEach(event => {
      if (event in this._events === false) return;

      if (fct) {
        this._events[event].splice(this._events[event].indexOf(fct), 1);
      } else {
        this._events[event] = [];
      }
    });

    return this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  emit(event /* , args... */) {
    if (this._events[event] === undefined) return;

    const tmpArray = this._events[event].slice();

    for (let i = 0; i < tmpArray.length; ++i) {
      const result = tmpArray[i].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );

      if (result !== undefined) {
        return result;
      }
    }

    return undefined;
  }
}

export default ReflexEvents;
