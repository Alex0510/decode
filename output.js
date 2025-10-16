//Thu Oct 16 2025 12:49:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ENV_URL = "https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/evn.js";
(async () => {
  const _0x1445x2 = 30000;
  let _0x1445x3;
  function _0x1445x4() {
    _0x1445x6.logErr("❌ 脚本执行超时");
    _0x1445x6.msg(_0x1445x6.name, "❌ 执行超时", "请检查网络或重试");
    _0x1445x6.done({});
  }
  try {
    _0x1445x3 = setTimeout(_0x1445x4, _0x1445x2);
    const _0x1445x5 = await _0x1445xf();
    const _0x1445x6 = new _0x1445x5("酷狗概念版自动领取VIP-Eric", {
      logLevel: "info"
    });
    if ($request && $request.url) {
      let _0x1445x7 = $request.url;
      let _0x1445x8 = $request.headers;
      let _0x1445x9 = new URLSearchParams(_0x1445x7.split("?")[1]);
      let _0x1445xa = {
        appid: _0x1445x9.get("appid"),
        clientver: _0x1445x9.get("clientver"),
        clienttime: _0x1445x9.get("clienttime"),
        mid: _0x1445x9.get("mid"),
        uuid: _0x1445x9.get("uuid"),
        dfid: _0x1445x9.get("dfid"),
        token: _0x1445x9.get("token"),
        userid: _0x1445x9.get("userid"),
        srcappid: _0x1445x9.get("srcappid")
      };
      _0x1445x6.log("所有可用的Header字段:");
      for (let _0x1445xb in _0x1445x8) {
        _0x1445x6.log("  " + _0x1445xb + ": " + _0x1445x8[_0x1445xb] + "");
      }
      let _0x1445xc = {
        "authority": _0x1445x8[":authority"] || _0x1445x8.authority || _0x1445x8.Host || _0x1445x8.host,
        "accept": _0x1445x8.accept || _0x1445x8.Accept,
        "origin": _0x1445x8.origin || _0x1445x8.Origin,
        "accept-encoding": _0x1445x8["accept-encoding"] || _0x1445x8["Accept-Encoding"],
        "user-agent": _0x1445x8["user-agent"] || _0x1445x8["User-Agent"],
        "accept-language": _0x1445x8["accept-language"] || _0x1445x8["Accept-Language"],
        "referer": _0x1445x8.referer || _0x1445x8.Referer
      };
      function _0x1445xd(_0x1445xb, _0x1445xe) {
        if (typeof $prefs !== "undefined") {
          return $prefs.setValueForKey(JSON.stringify(_0x1445xe), _0x1445xb);
        } else {
          if (typeof $persistentStore !== "undefined") {
            return $persistentStore.write(JSON.stringify(_0x1445xe), _0x1445xb);
          } else {
            if (typeof $persistent !== "undefined") {
              return $persistent.setItem(_0x1445xb, JSON.stringify(_0x1445xe));
            }
          }
        }
      }
      _0x1445xd("urlParams", _0x1445xa);
      _0x1445xd("headerParams", _0x1445xc);
      _0x1445xd("originalUrl", _0x1445x7);
      _0x1445x6.log("保存的 URL Params:", JSON.stringify(_0x1445xa));
      _0x1445x6.log("保存的 Header Params:", JSON.stringify(_0x1445xc));
      _0x1445x6.log("保存的 Original URL:", _0x1445x7);
      _0x1445x6.log("数据已保存到持久化存储-Eric为您提供");
      _0x1445x6.msg("获取数据成功", "数据已持久化保存", "");
    } else {
      _0x1445x6.log("未检测到请求对象");
    }
  } catch (error) {
    _0x1445x6.logErr("脚本执行出错: ", error);
    _0x1445x6.msg(_0x1445x6.name, "❌ 执行失败", error.message || "未知错误");
  } finally {
    if (_0x1445x3) {
      clearTimeout(_0x1445x3);
    }
    _0x1445x6.done({});
  }
  async function _0x1445xf() {
    try {
      let _0x1445x10 = "";
      if (typeof $prefs !== "undefined") {
        _0x1445x10 = $prefs.valueForKey("Eric_Env_Code") || "";
      } else {
        if (typeof $persistentStore !== "undefined") {
          _0x1445x10 = $persistentStore.read("Eric_Env_Code") || "";
        } else {
          if (typeof $persistent !== "undefined") {
            _0x1445x10 = $persistent.read("Eric_Env_Code") || "";
          }
        }
      }
      if (_0x1445x10) {
        console.log("✅ 使用缓存的Env代码");
        eval(_0x1445x10);
        return _0x1445x5;
      }
      console.log("⏬ 下载Env代码...");
      const _0x1445x11 = await new Promise((_0x1445x12, _0x1445x13) => {
        if (typeof $httpClient !== "undefined") {
          $httpClient.get({
            url: ENV_URL
          }, (_0x1445x14, _0x1445x15, _0x1445x11) => {
            if (_0x1445x14) {
              _0x1445x13(_0x1445x14);
            } else {
              _0x1445x12(_0x1445x11);
            }
          });
        } else {
          if (typeof $task !== "undefined") {
            $task.fetch({
              url: ENV_URL
            }).then(_0x1445x15 => {
              return _0x1445x12(_0x1445x15.body);
            }, _0x1445x14 => {
              return _0x1445x13(_0x1445x14);
            });
          } else {
            _0x1445x13(new Error("未知环境"));
          }
        }
      });
      if (typeof $prefs !== "undefined") {
        $prefs.setValueForKey(_0x1445x11, "Eric_Env_Code");
      } else {
        if (typeof $persistentStore !== "undefined") {
          $persistentStore.write(_0x1445x11, "Eric_Env_Code");
        } else {
          if (typeof $persistent !== "undefined") {
            $persistent.write(_0x1445x11, "Eric_Env_Code");
          }
        }
      }
      eval(_0x1445x11);
      return _0x1445x5;
    } catch (e) {
      console.log("❌ 加载Env失败: " + e);
      throw new Error("无法加载Env环境");
    }
  }
})();