var React = require('react');

var styles = {"marquee":"_styles-module__marquee__2bxe3","marqueeContent":"_styles-module__marqueeContent__2FT6B","fullWidth":"_styles-module__fullWidth__1aqaS","noAnimation":"_styles-module__noAnimation__Mhukv"};

var Marquee = function Marquee(_ref) {
  var children = _ref.children,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 80 : _ref$speed,
      _ref$pauseOnHover = _ref.pauseOnHover,
      pauseOnHover = _ref$pauseOnHover === void 0 ? false : _ref$pauseOnHover,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'left' : _ref$direction,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? 'infinite' : _ref$loop,
      _ref$play = _ref.play,
      play = _ref$play === void 0 ? true : _ref$play,
      _ref$fillGaps = _ref.fillGaps,
      fillGaps = _ref$fillGaps === void 0 ? true : _ref$fillGaps,
      onAnimationCycleComplete = _ref.onAnimationCycleComplete,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _React$useState = React.useState(false),
      isMounted = _React$useState[0],
      setIsMounted = _React$useState[1];

  var containerRef = React.useRef(null);
  var marqueeRef = React.useRef(null);
  React.useEffect(function () {
    if (!isMounted) {
      return;
    }

    var containerEl = containerRef.current;
    var marqueeEl = marqueeRef.current;

    var init = function init() {
      var containerWidth = containerEl.clientWidth;
      var marqueeWidth = marqueeEl.clientWidth;

      var setFillGaps = function setFillGaps() {
        var loopCount = Math.ceil(containerEl.clientWidth / marqueeEl.clientWidth);

        while (containerEl.children.length > 1) {
          containerEl.removeChild(containerEl.lastChild);
        }

        for (var index = 0; index < loopCount; index++) {
          containerEl.appendChild(containerEl.children[0].cloneNode(true));
        }
      };

      var duration = marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
      containerEl.style.setProperty('--marquee-duration', duration + "s");
      containerEl.style.setProperty('--marquee-pause-on-hover', pauseOnHover ? 'paused' : 'running');
      containerEl.style.setProperty('--marquee-direction', direction === 'left' ? 'normal' : 'reverse');
      containerEl.style.setProperty('--marquee-loop', loop);
      containerEl.style.setProperty('--marquee-play', play ? 'running' : 'paused');

      if (fillGaps) {
        setFillGaps();
      }
    };

    init();
    var resizeTimer;

    var onResize = function onResize() {
      init();
      containerEl.classList.add(styles.noAnimation);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        containerEl.classList.remove(styles.noAnimation);
      }, 300);
    };

    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, [isMounted]);
  React.useEffect(function () {
    setIsMounted(true);
  }, []);
  var classNames = [styles.marquee, className].join(' ');
  return React.createElement("div", {
    className: classNames,
    ref: containerRef
  }, React.createElement("div", {
    className: styles.marqueeContent + " " + (!fillGaps ? styles.fullWidth : ''),
    ref: marqueeRef,
    onAnimationIteration: onAnimationCycleComplete
  }, children), !fillGaps && React.createElement("div", {
    className: styles.marqueeContent + " " + styles.fullWidth
  }, children));
};

module.exports = Marquee;
//# sourceMappingURL=index.js.map
