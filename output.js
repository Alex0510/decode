//Fri Jan 09 2026 00:39:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x1fba1b = new Env("TF测试自动加入-Eric");
if ($request && $request.url) {
  let _0x4df7bd = $request.url,
    _0x5052cd = $request.headers,
    _0x523c44 = new URL(_0x4df7bd),
    _0x116796 = _0x523c44.pathname.split("/"),
    _0x5b5a14 = _0x116796.indexOf("accounts"),
    _0x3f8217 = null,
    _0x1d35d0 = null;
  if (_0x5b5a14 !== -1 && _0x5b5a14 + 1 < _0x116796.length) {
    _0x3f8217 = _0x116796[_0x5b5a14 + 1];
    let _0x315d91 = _0x116796.indexOf("ru");
    _0x315d91 !== -1 && _0x315d91 + 1 < _0x116796.length ? _0x1d35d0 = _0x116796[_0x315d91 + 1] : _0x1fba1b.log("没有找到 ru 参数");
  } else _0x1fba1b.log("没有找到账户 ID");
  let _0x45cfb3 = {
    ":authority": "testflight.apple.com",
    "content-type": _0x5052cd["content-type"],
    "x-session-id": _0x5052cd["x-session-id"],
    "x-session-digest": _0x5052cd["x-session-digest"],
    "x-apple-store-front": _0x5052cd["x-apple-store-front"],
    "x-request-id": _0x5052cd["x-request-id"],
    "x-apple-amd-m": _0x5052cd["x-apple-amd-m"],
    "x-apple-device-model": _0x5052cd["x-apple-device-model"],
    "user-agent": _0x5052cd["user-agent"],
    "content-length": _0x5052cd["content-length"]
  };
  function _0x38eef3(_0x30e964, _0x2d770b) {
    if (typeof $prefs !== "undefined") return $prefs.setValueForKey(JSON.stringify(_0x2d770b), _0x30e964);else {
      if (typeof $persistentStore !== "undefined") return $persistentStore.write(JSON.stringify(_0x2d770b), _0x30e964);else {
        if (typeof $persistent !== "undefined") return $persistent.setItem(_0x30e964, JSON.stringify(_0x2d770b));
      }
    }
  }
  _0x3f8217 && _0x38eef3("accountId", _0x3f8217);
  _0x38eef3("headertf", _0x45cfb3);
  if (_0x3f8217 && _0x1d35d0) {
    let _0xbfaf40 = "https://testflight.apple.com/v3/accounts/" + _0x3f8217 + "/ru/" + _0x1d35d0 + "/accept";
    const _0x2e2ebc = {
      "url": _0xbfaf40,
      "headers": _0x45cfb3,
      "method": "POST"
    };
    _0x1fba1b.post(_0x2e2ebc, function (_0x4e3acf, _0x399ad1, _0x36c681) {
      if (_0x4e3acf) _0x1fba1b.log("POST 请求出错 (ru: " + _0x1d35d0 + "):", _0x4e3acf);else {
        {
          _0x1fba1b.log("POST tf测试代码 (ru: " + _0x1d35d0 + "):", _0x399ad1.statusCode);
          try {
            const _0x4ee63d = JSON.parse(_0x36c681),
              _0x3d8d19 = _0x4ee63d.data?.["name"];
            _0x3d8d19 ? ($notification.post("TestFlight 测试资格获取成功", "", "已成功获取 " + _0x3d8d19 + " 的 TF 测试资格 (ru: " + _0x1d35d0 + ")"), _0x1fba1b.log("已成功获取 " + _0x3d8d19 + " 的 TF 测试资格 (ru: " + _0x1d35d0 + ")")) : _0x1fba1b.log("未能获取到 \"name\" 参数的值");
          } catch (_0x214083) {
            _0x1fba1b.log("解析 POST 响应数据时出错:", _0x214083);
          }
        }
      }
      _0x1fba1b.done();
    });
  }
}