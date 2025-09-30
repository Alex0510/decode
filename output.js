//Tue Sep 30 2025 03:39:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x527ca4, _0x10444d, _0x29a80d) => _0x10444d in _0x527ca4 ? __defProp(_0x527ca4, _0x10444d, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x29a80d
}) : _0x527ca4[_0x10444d] = _0x29a80d;
var __spreadValues = (_0x17a3fa, _0x98710c) => {
  for (var _0x50ccc4 in _0x98710c || (_0x98710c = {})) if (__hasOwnProp.call(_0x98710c, _0x50ccc4)) {
    __defNormalProp(_0x17a3fa, _0x50ccc4, _0x98710c[_0x50ccc4]);
  }
  if (__getOwnPropSymbols) {
    for (var _0x50ccc4 of __getOwnPropSymbols(_0x98710c)) {
      if (__propIsEnum.call(_0x98710c, _0x50ccc4)) {
        __defNormalProp(_0x17a3fa, _0x50ccc4, _0x98710c[_0x50ccc4]);
      }
    }
  }
  return _0x17a3fa;
};
var __spreadProps = (_0x3932e8, _0x1ca31a) => __defProps(_0x3932e8, __getOwnPropDescs(_0x1ca31a));
(function () {
  "use strict";

  function _0x502092() {
    const _0x11e9ba = navigator.userAgent || "";
    const _0x4e61e1 = /iPhone OS/i.test(_0x11e9ba);
    const _0x1e0b5e = /Safari/i.test(_0x11e9ba);
    if (_0x4e61e1 && !_0x1e0b5e) {
      return true;
    }
    function _0x14b455(_0x42ee2e) {
      const _0x1ed4fb = /Version\/(\d+)\.(\d+)?(?:\.(\d+))?/;
      const _0x18efc8 = _0x42ee2e.match(_0x1ed4fb);
      if (!_0x18efc8) {
        return null;
      }
      return {
        major: parseInt(_0x18efc8[1]),
        minor: parseInt(_0x18efc8[2] || "0"),
        patch: parseInt(_0x18efc8[3] || "0")
      };
    }
    const _0x441ca5 = /^((?!chrome|android).)*safari/i.test(_0x11e9ba);
    const _0x596e0f = _0x14b455(_0x11e9ba);
    const _0x4ebeff = _0x596e0f && _0x596e0f.major >= 17;
    const _0xab1fa3 = _0x441ca5 && _0x4ebeff;
    return _0xab1fa3;
  }
  const _0x4054b7 = "shld_bt_ck";
  const _0x19e702 = "";
  const _0xe709d1 = "/shop/shld/work/v1/pat";
  const _0x42ce02 = "/shop/shld/work/v1/q";
  const _0x370b5e = 15000;
  function _0x2bcad6() {
    return "wd=" + (navigator.webdriver ? 1 : 0);
  }
  function _0x66da16(_0x376d40, _0x19410c, _0x168d94 = _0x370b5e) {
    const _0x2ab240 = new AbortController();
    const _0x532164 = _0x2ab240.signal;
    function _0x91f6ad(_0x2d770e, _0x2db5e9) {
      const _0x104e71 = new Error(_0x2d770e);
      Object.assign(_0x104e71, _0x2db5e9);
      return _0x104e71;
    }
    return new Promise((_0x25e76f, _0x1ebfc4) => {
      const _0x143145 = setTimeout(() => {
        _0x2ab240.abort();
        _0x1ebfc4(_0x91f6ad("Request timed out", {
          reqTo: _0x376d40.includes("pat") ? "patRTo" : "chRTo"
        }));
      }, _0x168d94);
      fetch(_0x376d40, __spreadProps(__spreadValues({}, _0x19410c), {
        signal: _0x532164
      })).then(_0x2870bc => {
        clearTimeout(_0x143145);
        _0x25e76f(_0x2870bc);
      }).catch(_0x287efa => {
        clearTimeout(_0x143145);
        _0x1ebfc4(_0x287efa);
      });
    });
  }
  const _0x4fa6f4 = async _0x4e11f1 => {
    const _0x469ca8 = await _0x66da16("" + _0x19e702 + _0x42ce02 + "?" + _0x2bcad6(), {
      method: "POST",
      body: JSON.stringify(_0x4e11f1),
      credentials: "include"
    });
    return _0x469ca8;
  };
  async function _0x43f02c(_0x59f118, _0xbee714, _0x44513e) {
    const _0x3ed63a = typeof BigInt !== "undefined";
    if (!_0x3ed63a) {
      const _0x1d77d9 = {
        flagskv: {
          chSkip: true,
          patOkNoCk: _0x59f118,
          patSkip: _0xbee714 ? undefined : true,
          patStts: _0x44513e
        }
      };
      _0x4fa6f4(_0x1d77d9);
      return _0x1d77d9;
    }
    return false;
  }
  new TextEncoder();
  async function _0x4a134b(_0x5b94a5, _0x41ad7d, _0x1cad8e, _0x19608c, _0x3317fc, _0x30917d) {
    function _0x4762bd() {
      const _0x2a8ad0 = new Date();
      const _0x12409b = _0x2a8ad0 - _0x3317fc;
      const _0x185203 = _0x30917d || _0x370b5e;
      return _0x12409b > _0x185203;
    }
    const _0x54f4c0 = BigInt(_0x1cad8e);
    const _0x3d5627 = BigInt(_0x19608c);
    const _0x1f85f5 = BigInt(0);
    const _0x464112 = BigInt(1);
    async function _0x143956(_0x405433, _0x2b8d12, _0x42cbd1) {
      if (_0x4762bd()) {
        return null;
      }
      if (BigInt(_0x405433.length) === _0x54f4c0) {
        if (_0x2b8d12 === _0x3d5627) {
          return [..._0x405433];
        }
        return null;
      }
      for (let _0x35a47a = _0x42cbd1; _0x35a47a <= _0x41ad7d; _0x35a47a++) {
        if (_0x35a47a < _0x5b94a5) {
          continue;
        }
        if (_0x2b8d12 * BigInt(_0x35a47a) > _0x3d5627) {
          continue;
        }
        if (_0x3d5627 % (_0x2b8d12 * BigInt(_0x35a47a)) !== _0x1f85f5 && BigInt(_0x405433.length) + _0x464112 < _0x54f4c0) {
          continue;
        }
        _0x405433.push(_0x35a47a);
        const _0x725ec6 = await _0x143956(_0x405433, _0x2b8d12 * BigInt(_0x35a47a), _0x35a47a);
        if (_0x725ec6) {
          return _0x725ec6;
        }
        _0x405433.pop();
      }
      return null;
    }
    return await _0x143956([], _0x464112, _0x5b94a5);
  }
  async function _0x19c19b(_0x26a183) {
    const _0x2d65c4 = new Date();
    let _0x5a4e87 = null;
    _0x5a4e87 = await _0x4a134b(_0x26a183 == null ? undefined : _0x26a183.low, _0x26a183 == null ? undefined : _0x26a183.high, _0x26a183 == null ? undefined : _0x26a183.parts, _0x26a183 == null ? undefined : _0x26a183.result, _0x2d65c4, _0x26a183 == null ? undefined : _0x26a183.timeout);
    const _0x28df00 = new Date() - _0x2d65c4;
    _0x5a4e87 == null && (_0x5a4e87 = []);
    return {
      number: _0x5a4e87,
      took: _0x28df00
    };
  }
  function _0x5e97b0() {
    const _0x446a74 = _0x4054b7 + "=";
    const _0x13662c = document.cookie.split(";");
    for (let _0xda4c47 = 0; _0xda4c47 < _0x13662c.length; _0xda4c47++) {
      let _0x175398 = _0x13662c[_0xda4c47];
      while (_0x175398.charAt(0) == " ") {
        _0x175398 = _0x175398.substring(1, _0x175398.length);
      }
      if (_0x175398.indexOf(_0x446a74) == 0) {
        return _0x175398.substring(_0x446a74.length, _0x175398.length);
      }
    }
    return null;
  }
  function _0x240014() {
    const _0x5bc731 = _0x5e97b0();
    if (!_0x5bc731) {
      return false;
    }
    const [_0x3f0f33, _0x2d1c1c] = _0x5bc731.split("|");
    if (!_0x3f0f33) {
      return false;
    }
    if (!_0x2d1c1c) {
      return true;
    }
    const _0x2c3316 = new Date(parseInt(_0x2d1c1c + 1000, 10));
    if (isNaN(_0x2c3316.getTime())) {
      return false;
    }
    return new Date().getTime() < _0x2c3316.getTime();
  }
  const _0x5ce9aa = _0x19c19b;
  const _0x8e4827 = _0x43f02c;
  let _0x323b0b;
  let _0x52a783;
  let _0x21e1d7;
  const _0x10f148 = async () => {
    var _0x31ea69;
    const _0x331d09 = await _0x66da16("" + _0x19e702 + _0x42ce02 + "?" + _0x2bcad6(), {
      method: "GET",
      credentials: "include"
    });
    const _0x25807e = _0x331d09 == null ? undefined : _0x331d09.status;
    if (_0x25807e !== 200) {
      _0x4fa6f4({
        flagskv: {
          chStts: _0x25807e,
          patOkNoCk: _0x323b0b
        }
      });
      return;
    }
    try {
      const _0x1bc74f = await _0x331d09.json();
      return _0x1bc74f;
    } catch (_0x1103b4) {
      _0x4fa6f4({
        flagskv: {
          chNoData: true,
          unknown: (_0x31ea69 = _0x1103b4 == null ? undefined : _0x1103b4.message) == null ? undefined : _0x31ea69.slice(0, 500)
        }
      });
    }
  };
  async function _0x459a74(_0x1b4aa2, _0x15dfbd) {
    let _0x4ede68 = await _0x10f148();
    if (!_0x4ede68) {
      return;
    }
    const {
      number: _0x5db87e,
      took: _0x30cccb
    } = await _0x5ce9aa(_0x4ede68);
    const _0x48cb19 = __spreadProps(__spreadValues({}, _0x4ede68), {
      flagskv: {
        patOkNoCk: _0x323b0b,
        patSkip: _0x1b4aa2 ? undefined : true,
        patStts: _0x15dfbd
      },
      number: _0x5db87e,
      took: _0x30cccb
    });
    const _0x41b593 = (_0x4ede68 == null ? undefined : _0x4ede68.timeout) !== null && (_0x4ede68 == null ? undefined : _0x4ede68.timeout) !== undefined ? _0x4ede68 == null ? undefined : _0x4ede68.timeout : _0x370b5e;
    _0x30cccb > _0x41b593 && (_0x48cb19.flagskv = __spreadProps(__spreadValues({}, _0x48cb19.flagskv), {
      chCTo: true
    }));
    _0x4fa6f4(_0x48cb19);
    return _0x48cb19;
  }
  async function _0x561255() {
    var _0xafb817;
    try {
      if (_0x240014()) {
        return {
          ck: true
        };
      }
      _0x52a783 = _0x502092();
      if (_0x52a783) {
        const _0x19e619 = await _0x66da16("" + _0x19e702 + _0xe709d1 + "?" + _0x2bcad6() + "&c_ts=" + new Date().getTime(), {
          method: "GET",
          credentials: "include"
        });
        _0x21e1d7 = _0x19e619 == null ? undefined : _0x19e619.status;
        if (_0x21e1d7 === 200) {
          if (_0x240014()) {
            return {
              patOkCk: true
            };
          }
          _0x323b0b = true;
        }
      }
      if (_0x8e4827) {
        const _0x1840ff = await _0x8e4827(_0x323b0b, _0x52a783, _0x21e1d7);
        if (_0x1840ff) {
          return _0x1840ff;
        }
      }
      const _0xe546b9 = await _0x459a74(_0x52a783, _0x21e1d7);
      return _0xe546b9;
    } catch (_0x12c01b) {
      let _0x32d4c6 = {
        unknown: (_0xafb817 = _0x12c01b == null ? undefined : _0x12c01b.message) == null ? undefined : _0xafb817.slice(0, 500)
      };
      (_0x12c01b == null ? undefined : _0x12c01b.message) === "Request timed out" && (_0x32d4c6 = {
        [_0x12c01b == null ? undefined : _0x12c01b.reqTo]: true
      });
      _0x4fa6f4({
        flagskv: _0x32d4c6
      });
      const _0x1748ae = await _0x459a74(_0x52a783, _0x21e1d7);
      return _0x1748ae;
    }
  }
  function _0x151be2(_0x100ae1, _0xdedb46) {
    window.dispatchEvent(new CustomEvent("shldDone", {
      detail: {
        id: _0x100ae1,
        result: _0xdedb46
      }
    }));
  }
  setTimeout(async () => {
    try {
      const _0x5668c5 = await _0x561255();
      _0x151be2("shld-result", _0x5668c5);
    } catch (_0x2b3b39) {
      _0x151be2("shld-error", _0x2b3b39);
    }
  }, 1);
})();