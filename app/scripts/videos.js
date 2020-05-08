const VimeoPlayer = require("@vimeo/player");
const YouTubePlayer = require("youtube-player");

// https://github.com/vimeo/player.js/
// <div class="vimeo-video" data-id=""></div>
class Vimeo {
  resizeHelper() {
    const self = this;
    Promise.all([
      this.player.getVideoWidth(),
      this.player.getVideoHeight(),
    ]).then(function (dimensions) {
      var width = dimensions[0];
      var height = dimensions[1];
      var ratio = height / width;

      const calc = function () {
        console.log(self, self.ratio.a, ratio);
        let _condition = self.ratio.b > ratio;
        if (self.objectFit == "contain") {
          _condition = self.ratio.a < ratio;
        }
        if (_condition) {
          // bind height
          const unit = Math.ceil(self.el.innerHeight());
          self.el.css({
            width: unit / ratio,
            height: unit,
          });
        } else {
          // bind width
          const unit = Math.ceil(self.el.innerWidth());
          self.el.css({
            width: unit,
            height: unit * ratio,
          });
        }
      };
      calc();
      $(window).resize(
        window._.debounce(() => {
          calc();
        })
      );
    });
  }

  constructor(el) {
    this.el = $(el);
    this.ratio = {
      a: 0.5625,
      b: 0.75,
    };
    this.id = this.el.data("id");
    this.background = this.el.hasClass("background");
    this.objectFit = "contain";

    const options = {
      id: this.id,
      width: this.el.innerWidth(),
      loop: false,
      responsive: true,
    };
    if (this.background) {
      options = Object.assign(options, {
        muted: true,
        controls: false,
      });
    }

    this.player = new VimeoPlayer(el, options);

    this.resizeHelper();
  }
}

// https://github.com/gajus/youtube-player
class Youtube {
  constructor(el) {
    const $this = $(el);
    const ratio = 0.5625; // 16:9
    this.background = $this.hasClass("background");

    this.player = YouTubePlayer(el, {
      width: $this.innerWidth(),
      height: $this.innerWidth() * ratio,
      videoId: $this.data("id"),
      autoplay: this.background ? 1 : 0,
      controls: this.background ? 0 : 1,
    });

    this.player.on("ready", (event) => {
      const $player = $(event.target.getIframe());
      const calc = () => {
        console.log(
          event.target,
          event.target.getIframe(),
          $player.innerWidth(),
          $player.innerWidth() * ratio
        );
        event.target.setSize(
          $player.innerWidth(),
          $player.innerWidth() * ratio
        );
      };
      $(window).resize(
        window._.debounce(() => {
          calc();
        }, 100)
      );
      calc();
    });
  }
}

module.exports = {
  Vimeo,
  Youtube,
};
