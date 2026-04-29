var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@signpdf/utils/dist/const.js
var require_const = __commonJS({
  "node_modules/@signpdf/utils/dist/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SUBFILTER_ETSI_CADES_DETACHED = exports.SUBFILTER_ADOBE_X509_SHA1 = exports.SUBFILTER_ADOBE_PKCS7_SHA1 = exports.SUBFILTER_ADOBE_PKCS7_DETACHED = exports.SIG_FLAGS = exports.DEFAULT_SIGNATURE_LENGTH = exports.DEFAULT_BYTE_RANGE_PLACEHOLDER = exports.ANNOTATION_FLAGS = void 0;
    var DEFAULT_SIGNATURE_LENGTH = exports.DEFAULT_SIGNATURE_LENGTH = 8192;
    var DEFAULT_BYTE_RANGE_PLACEHOLDER = exports.DEFAULT_BYTE_RANGE_PLACEHOLDER = "**********";
    var SUBFILTER_ADOBE_PKCS7_DETACHED = exports.SUBFILTER_ADOBE_PKCS7_DETACHED = "adbe.pkcs7.detached";
    var SUBFILTER_ADOBE_PKCS7_SHA1 = exports.SUBFILTER_ADOBE_PKCS7_SHA1 = "adbe.pkcs7.sha1";
    var SUBFILTER_ADOBE_X509_SHA1 = exports.SUBFILTER_ADOBE_X509_SHA1 = "adbe.x509.rsa.sha1";
    var SUBFILTER_ETSI_CADES_DETACHED = exports.SUBFILTER_ETSI_CADES_DETACHED = "ETSI.CAdES.detached";
    var SIG_FLAGS = exports.SIG_FLAGS = {
      /**
       * If set, the document contains at least one signature field.
       */
      SIGNATURES_EXIST: 1,
      /**
       * If set, the document contains signatures that may be invalidated
       * if the file is saved (written) in a way that alters its previous contents.
       */
      APPEND_ONLY: 2
    };
    var ANNOTATION_FLAGS = exports.ANNOTATION_FLAGS = {
      /**
       * If set, do not display the annotation if it does not belong to one of the
       * standard annotation types and no annotation handler is available.
       */
      INVISIBLE: 1,
      /**
       * If set, do not display or print the annotation or allow it to interact with the user,
       * regardless of its annotation type or whether an annotation handler is available.
       */
      HIDDEN: 2,
      /**
       * If set, print the annotation when the page is printed. If clear, never print the
       * annotation, regardless of whether it is displayed on the screen.
       */
      PRINT: 4,
      /**
       * If set, do not scale the annotation’s appearance to match the magnification of the page.
       */
      NO_ZOOM: 8,
      /**
       * If set, do not rotate the annotation’s appearance to match the rotation of the page.
       */
      NO_ROTATE: 16,
      /**
       * If set, do not display the annotation on the screen or allow it to interact with the user.
       */
      NO_VIEW: 32,
      /**
       * If set, do not allow the annotation to interact with the user.
       */
      READ_ONLY: 64
    };
  }
});

// node_modules/@signpdf/utils/dist/SignPdfError.js
var require_SignPdfError = __commonJS({
  "node_modules/@signpdf/utils/dist/SignPdfError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SignPdfError = exports.ERROR_VERIFY_SIGNATURE = exports.ERROR_TYPE_UNKNOWN = exports.ERROR_TYPE_PARSE = exports.ERROR_TYPE_INPUT = void 0;
    var ERROR_TYPE_UNKNOWN = exports.ERROR_TYPE_UNKNOWN = 1;
    var ERROR_TYPE_INPUT = exports.ERROR_TYPE_INPUT = 2;
    var ERROR_TYPE_PARSE = exports.ERROR_TYPE_PARSE = 3;
    var ERROR_VERIFY_SIGNATURE = exports.ERROR_VERIFY_SIGNATURE = 4;
    var SignPdfError = class extends Error {
      static {
        __name(this, "SignPdfError");
      }
      constructor(msg, type = ERROR_TYPE_UNKNOWN) {
        super(msg);
        this.type = type;
      }
    };
    exports.SignPdfError = SignPdfError;
    SignPdfError.TYPE_UNKNOWN = ERROR_TYPE_UNKNOWN;
    SignPdfError.TYPE_INPUT = ERROR_TYPE_INPUT;
    SignPdfError.TYPE_PARSE = ERROR_TYPE_PARSE;
    SignPdfError.VERIFY_SIGNATURE = ERROR_VERIFY_SIGNATURE;
  }
});

// node_modules/@signpdf/utils/dist/convertBuffer.js
var require_convertBuffer = __commonJS({
  "node_modules/@signpdf/utils/dist/convertBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.convertBuffer = convertBuffer;
    var _SignPdfError = require_SignPdfError();
    function convertBuffer(input, name) {
      if (typeof input === "string") {
        return Buffer.from(input, "base64");
      }
      if (input instanceof Buffer || input instanceof Uint8Array) {
        return Buffer.from(input);
      }
      throw new _SignPdfError.SignPdfError(`${name} expected as Buffer, Uint8Array or base64-encoded string.`, _SignPdfError.SignPdfError.TYPE_INPUT);
    }
    __name(convertBuffer, "convertBuffer");
  }
});

// node_modules/@signpdf/utils/dist/extractSignature.js
var require_extractSignature = __commonJS({
  "node_modules/@signpdf/utils/dist/extractSignature.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.extractSignature = void 0;
    var _SignPdfError = require_SignPdfError();
    var getSubstringIndex = /* @__PURE__ */ __name((str, substring, n) => {
      let times = 0;
      let index = null;
      while (times < n && index !== -1) {
        index = str.indexOf(substring, index + 1);
        times += 1;
      }
      return index;
    }, "getSubstringIndex");
    var extractSignature = /* @__PURE__ */ __name((pdf, signatureCount = 1) => {
      if (!(pdf instanceof Buffer)) {
        throw new _SignPdfError.SignPdfError("PDF expected as Buffer.", _SignPdfError.SignPdfError.TYPE_INPUT);
      }
      const byteRangePos = getSubstringIndex(pdf, "/ByteRange [", signatureCount);
      if (byteRangePos === -1) {
        throw new _SignPdfError.SignPdfError("Failed to locate ByteRange.", _SignPdfError.SignPdfError.TYPE_PARSE);
      }
      const byteRangeEnd = pdf.indexOf("]", byteRangePos);
      if (byteRangeEnd === -1) {
        throw new _SignPdfError.SignPdfError("Failed to locate the end of the ByteRange.", _SignPdfError.SignPdfError.TYPE_PARSE);
      }
      const byteRange = pdf.slice(byteRangePos, byteRangeEnd + 1).toString();
      const matches = /\/ByteRange \[(\d+) +(\d+) +(\d+) +(\d+) *\]/.exec(byteRange);
      if (matches === null) {
        throw new _SignPdfError.SignPdfError("Failed to parse the ByteRange.", _SignPdfError.SignPdfError.TYPE_PARSE);
      }
      const ByteRange = matches.slice(1).map(Number);
      const signedData = Buffer.concat([pdf.slice(ByteRange[0], ByteRange[0] + ByteRange[1]), pdf.slice(ByteRange[2], ByteRange[2] + ByteRange[3])]);
      const signatureHex = pdf.slice(ByteRange[0] + ByteRange[1] + 1, ByteRange[2]).toString("binary").replace(/(?:00|>)+$/, "");
      const signature = Buffer.from(signatureHex, "hex").toString("binary");
      return {
        ByteRange: matches.slice(1, 5).map(Number),
        signature,
        signedData
      };
    }, "extractSignature");
    exports.extractSignature = extractSignature;
  }
});

// node_modules/@signpdf/utils/dist/findByteRange.js
var require_findByteRange = __commonJS({
  "node_modules/@signpdf/utils/dist/findByteRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findByteRange = void 0;
    var _SignPdfError = require_SignPdfError();
    var _const = require_const();
    var findByteRange = /* @__PURE__ */ __name((pdf, placeholder = _const.DEFAULT_BYTE_RANGE_PLACEHOLDER) => {
      if (!(pdf instanceof Buffer)) {
        throw new _SignPdfError.SignPdfError("PDF expected as Buffer.", _SignPdfError.SignPdfError.TYPE_INPUT);
      }
      let byteRangePlaceholder;
      let byteRangePlaceholderPosition;
      const byteRangeStrings = [];
      const byteRanges = [];
      let offset = 0;
      do {
        const position = pdf.indexOf("/ByteRange", offset);
        if (position === -1) {
          break;
        }
        const rangeStart = pdf.indexOf("[", position);
        const rangeEnd = pdf.indexOf("]", rangeStart);
        const byteRangeString = pdf.subarray(position, rangeEnd + 1);
        byteRangeStrings.push(byteRangeString.toString());
        const range = pdf.subarray(rangeStart + 1, rangeEnd).toString().split(" ").filter((c) => c !== "").map((c) => c.trim());
        byteRanges.push(range);
        const placeholderName = `/${placeholder}`;
        if (range[0] === "0" && range[1] === placeholderName && range[2] === placeholderName && range[3] === placeholderName) {
          if (typeof byteRangePlaceholder !== "undefined") {
            throw new _SignPdfError.SignPdfError("Found multiple ByteRange placeholders.", _SignPdfError.SignPdfError.TYPE_INPUT);
          }
          byteRangePlaceholder = byteRangeString.toString();
          byteRangePlaceholderPosition = position;
        }
        offset = rangeEnd;
      } while (true);
      return {
        byteRangePlaceholder,
        byteRangePlaceholderPosition,
        byteRangeStrings,
        byteRanges
      };
    }, "findByteRange");
    exports.findByteRange = findByteRange;
  }
});

// node_modules/@signpdf/utils/dist/removeTrailingNewLine.js
var require_removeTrailingNewLine = __commonJS({
  "node_modules/@signpdf/utils/dist/removeTrailingNewLine.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeTrailingNewLine = void 0;
    var _SignPdfError = require_SignPdfError();
    var sliceLastChar = /* @__PURE__ */ __name((pdf, character) => {
      const lastChar = pdf.subarray(pdf.length - 1).toString();
      if (lastChar === character) {
        return pdf.subarray(0, pdf.length - 1);
      }
      return pdf;
    }, "sliceLastChar");
    var removeTrailingNewLine = /* @__PURE__ */ __name((pdf) => {
      if (!(pdf instanceof Buffer)) {
        throw new _SignPdfError.SignPdfError("PDF expected as Buffer.", _SignPdfError.SignPdfError.TYPE_INPUT);
      }
      let output = pdf;
      output = sliceLastChar(output, "\n");
      output = sliceLastChar(output, "\r");
      const lastLine = output.subarray(output.length - 6).toString();
      if (lastLine !== "\n%%EOF" && lastLine !== "\r%%EOF") {
        throw new _SignPdfError.SignPdfError("A PDF file must end with an EOF line.", _SignPdfError.SignPdfError.TYPE_PARSE);
      }
      return output;
    }, "removeTrailingNewLine");
    exports.removeTrailingNewLine = removeTrailingNewLine;
  }
});

// node_modules/@signpdf/utils/dist/Signer.js
var require_Signer = __commonJS({
  "node_modules/@signpdf/utils/dist/Signer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Signer = void 0;
    var _SignPdfError = require_SignPdfError();
    var Signer = class {
      static {
        __name(this, "Signer");
      }
      /**
       * @param {Buffer} pdfBuffer
       * @param {Date | undefined} signingTime
       * @returns {Promise<Buffer>}
       */
      async sign(pdfBuffer, signingTime = void 0) {
        throw new _SignPdfError.SignPdfError(`sign() is not implemented on ${this.constructor.name}`, _SignPdfError.SignPdfError.TYPE_INPUT);
      }
    };
    exports.Signer = Signer;
  }
});

// node_modules/@signpdf/utils/dist/PDFAbstractReference.js
var require_PDFAbstractReference = __commonJS({
  "node_modules/@signpdf/utils/dist/PDFAbstractReference.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PDFAbstractReference = void 0;
    var PDFAbstractReference = class {
      static {
        __name(this, "PDFAbstractReference");
      }
      toString() {
        throw new Error("Must be implemented by subclasses");
      }
      end() {
      }
    };
    exports.PDFAbstractReference = PDFAbstractReference;
  }
});

// node_modules/@signpdf/utils/dist/PDFObject.js
var require_PDFObject = __commonJS({
  "node_modules/@signpdf/utils/dist/PDFObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PDFObject = void 0;
    var _PDFAbstractReference = require_PDFAbstractReference();
    var pad = /* @__PURE__ */ __name((str, length) => (Array(length + 1).join("0") + str).slice(-length), "pad");
    var escapableRe = /[\n\r\t\b\f()\\]/g;
    var escapable = {
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\b": "\\b",
      "\f": "\\f",
      "\\": "\\\\",
      "(": "\\(",
      ")": "\\)"
    };
    var swapBytes = /* @__PURE__ */ __name((buff) => buff.swap16(), "swapBytes");
    var PDFObject = class _PDFObject {
      static {
        __name(this, "PDFObject");
      }
      static convert(object, encryptFn = null) {
        if (typeof object === "string") {
          return `/${object}`;
        }
        if (object instanceof String) {
          let string = object;
          let isUnicode = false;
          for (let i = 0, end = string.length; i < end; i += 1) {
            if (string.charCodeAt(i) > 127) {
              isUnicode = true;
              break;
            }
          }
          let stringBuffer;
          if (isUnicode) {
            stringBuffer = swapBytes(Buffer.from(`\uFEFF${string}`, "utf16le"));
          } else {
            stringBuffer = Buffer.from(string, "ascii");
          }
          if (encryptFn) {
            string = encryptFn(stringBuffer).toString("binary");
          } else {
            string = stringBuffer.toString("binary");
          }
          string = string.replace(escapableRe, (c) => escapable[c]);
          return `(${string})`;
        }
        if (Buffer.isBuffer(object)) {
          return `<${object.toString("hex")}>`;
        }
        if (object instanceof _PDFAbstractReference.PDFAbstractReference) {
          return object.toString();
        }
        if (object instanceof Date) {
          let string = `D:${pad(object.getUTCFullYear(), 4)}${pad(object.getUTCMonth() + 1, 2)}${pad(object.getUTCDate(), 2)}${pad(object.getUTCHours(), 2)}${pad(object.getUTCMinutes(), 2)}${pad(object.getUTCSeconds(), 2)}Z`;
          if (encryptFn) {
            string = encryptFn(Buffer.from(string, "ascii")).toString("binary");
            string = string.replace(escapableRe, (c) => escapable[c]);
          }
          return `(${string})`;
        }
        if (Array.isArray(object)) {
          const items = object.map((e) => _PDFObject.convert(e, encryptFn)).join(" ");
          return `[${items}]`;
        }
        if ({}.toString.call(object) === "[object Object]") {
          const out = ["<<"];
          let streamData;
          Object.entries(object).forEach(([key, val]) => {
            let checkedValue = "";
            if (val.toString().indexOf("<<") !== -1) {
              checkedValue = val;
            } else {
              checkedValue = _PDFObject.convert(val, encryptFn);
            }
            if (key === "stream") {
              streamData = `${key}
${val}
endstream`;
            } else {
              out.push(`/${key} ${checkedValue}`);
            }
          });
          out.push(">>");
          if (streamData) {
            out.push(streamData);
          }
          return out.join("\n");
        }
        if (typeof object === "number") {
          return _PDFObject.number(object);
        }
        return `${object}`;
      }
      static number(n) {
        if (n > -1e21 && n < 1e21) {
          return Math.round(n * 1e6) / 1e6;
        }
        throw new Error(`unsupported number: ${n}`);
      }
    };
    exports.PDFObject = PDFObject;
  }
});

// node_modules/@signpdf/utils/dist/PDFKitReferenceMock.js
var require_PDFKitReferenceMock = __commonJS({
  "node_modules/@signpdf/utils/dist/PDFKitReferenceMock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PDFKitReferenceMock = void 0;
    var _PDFAbstractReference = require_PDFAbstractReference();
    var PDFKitReferenceMock = class extends _PDFAbstractReference.PDFAbstractReference {
      static {
        __name(this, "PDFKitReferenceMock");
      }
      constructor(index, additionalData = void 0) {
        super();
        this.index = index;
        if (typeof additionalData !== "undefined") {
          Object.assign(this, additionalData);
        }
      }
      toString() {
        return `${this.index} 0 R`;
      }
    };
    exports.PDFKitReferenceMock = PDFKitReferenceMock;
  }
});

// node_modules/@signpdf/utils/dist/index.js
var require_dist = __commonJS({
  "node_modules/@signpdf/utils/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _exportNames = {
      PDFObject: true
    };
    Object.defineProperty(exports, "PDFObject", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return _PDFObject.PDFObject;
      }, "get")
    });
    var _const = require_const();
    Object.keys(_const).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _const[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _const[key];
        }, "get")
      });
    });
    var _convertBuffer = require_convertBuffer();
    Object.keys(_convertBuffer).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _convertBuffer[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _convertBuffer[key];
        }, "get")
      });
    });
    var _extractSignature = require_extractSignature();
    Object.keys(_extractSignature).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _extractSignature[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _extractSignature[key];
        }, "get")
      });
    });
    var _findByteRange = require_findByteRange();
    Object.keys(_findByteRange).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _findByteRange[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _findByteRange[key];
        }, "get")
      });
    });
    var _removeTrailingNewLine = require_removeTrailingNewLine();
    Object.keys(_removeTrailingNewLine).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _removeTrailingNewLine[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _removeTrailingNewLine[key];
        }, "get")
      });
    });
    var _SignPdfError = require_SignPdfError();
    Object.keys(_SignPdfError).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _SignPdfError[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _SignPdfError[key];
        }, "get")
      });
    });
    var _Signer = require_Signer();
    Object.keys(_Signer).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _Signer[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _Signer[key];
        }, "get")
      });
    });
    var _PDFObject = require_PDFObject();
    var _PDFAbstractReference = require_PDFAbstractReference();
    Object.keys(_PDFAbstractReference).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _PDFAbstractReference[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _PDFAbstractReference[key];
        }, "get")
      });
    });
    var _PDFKitReferenceMock = require_PDFKitReferenceMock();
    Object.keys(_PDFKitReferenceMock).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _PDFKitReferenceMock[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _PDFKitReferenceMock[key];
        }, "get")
      });
    });
  }
});

// node_modules/@signpdf/signpdf/dist/signpdf.js
var require_signpdf = __commonJS({
  "node_modules/@signpdf/signpdf/dist/signpdf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SignPdf = void 0;
    Object.defineProperty(exports, "SignPdfError", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return _utils.SignPdfError;
      }, "get")
    });
    Object.defineProperty(exports, "Signer", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return _utils.Signer;
      }, "get")
    });
    exports.default = void 0;
    var _utils = require_dist();
    var SignPdf2 = class {
      static {
        __name(this, "SignPdf");
      }
      constructor() {
        this.lastSignature = null;
      }
      /**
       * @param {Buffer | Uint8Array | string} pdfBuffer
       * @param {Signer} signer
       * @param {Date | undefined} signingTime
       * @returns {Promise<Buffer>}
       */
      async sign(pdfBuffer, signer, signingTime = void 0) {
        if (!(signer instanceof _utils.Signer)) {
          throw new _utils.SignPdfError("Signer implementation expected.", _utils.SignPdfError.TYPE_INPUT);
        }
        let pdf = (0, _utils.removeTrailingNewLine)((0, _utils.convertBuffer)(pdfBuffer, "PDF"));
        const {
          byteRangePlaceholder,
          byteRangePlaceholderPosition
        } = (0, _utils.findByteRange)(pdf);
        if (!byteRangePlaceholder) {
          throw new _utils.SignPdfError("No ByteRangeStrings found within PDF buffer.", _utils.SignPdfError.TYPE_PARSE);
        }
        const byteRangeEnd = byteRangePlaceholderPosition + byteRangePlaceholder.length;
        const contentsTagPos = pdf.indexOf("/Contents ", byteRangeEnd);
        const placeholderPos = pdf.indexOf("<", contentsTagPos);
        const placeholderEnd = pdf.indexOf(">", placeholderPos);
        const placeholderLengthWithBrackets = placeholderEnd + 1 - placeholderPos;
        const placeholderLength = placeholderLengthWithBrackets - 2;
        const byteRange = [0, 0, 0, 0];
        byteRange[1] = placeholderPos;
        byteRange[2] = byteRange[1] + placeholderLengthWithBrackets;
        byteRange[3] = pdf.length - byteRange[2];
        let actualByteRange = `/ByteRange [${byteRange.join(" ")}]`;
        actualByteRange += " ".repeat(byteRangePlaceholder.length - actualByteRange.length);
        pdf = Buffer.concat([pdf.slice(0, byteRangePlaceholderPosition), Buffer.from(actualByteRange), pdf.slice(byteRangeEnd)]);
        pdf = Buffer.concat([pdf.slice(0, byteRange[1]), pdf.slice(byteRange[2], byteRange[2] + byteRange[3])]);
        const raw = await signer.sign(pdf, signingTime);
        if (raw.length * 2 > placeholderLength) {
          throw new _utils.SignPdfError(`Signature exceeds placeholder length: ${raw.length * 2} > ${placeholderLength}`, _utils.SignPdfError.TYPE_INPUT);
        }
        let signature = Buffer.from(raw, "binary").toString("hex");
        this.lastSignature = signature;
        signature += Buffer.from(String.fromCharCode(0).repeat(placeholderLength / 2 - raw.length)).toString("hex");
        pdf = Buffer.concat([pdf.slice(0, byteRange[1]), Buffer.from(`<${signature}>`), pdf.slice(byteRange[1])]);
        return pdf;
      }
    };
    exports.SignPdf = SignPdf2;
    var _default = exports.default = new SignPdf2();
  }
});

// node_modules/@signpdf/placeholder-pdfkit010/dist/pdfkitAddPlaceholder.js
var require_pdfkitAddPlaceholder = __commonJS({
  "node_modules/@signpdf/placeholder-pdfkit010/dist/pdfkitAddPlaceholder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pdfkitAddPlaceholder = void 0;
    var _utils = require_dist();
    var pdfkitAddPlaceholder = /* @__PURE__ */ __name(({
      pdf,
      pdfBuffer,
      reason,
      contactInfo,
      name,
      location,
      signingTime = void 0,
      signatureLength = _utils.DEFAULT_SIGNATURE_LENGTH,
      byteRangePlaceholder = _utils.DEFAULT_BYTE_RANGE_PLACEHOLDER,
      subFilter = _utils.SUBFILTER_ADOBE_PKCS7_DETACHED,
      widgetRect = [0, 0, 0, 0],
      appName = void 0
    }) => {
      const signature = pdf.ref({
        Type: "Sig",
        Filter: "Adobe.PPKLite",
        SubFilter: subFilter,
        ByteRange: [0, byteRangePlaceholder, byteRangePlaceholder, byteRangePlaceholder],
        Contents: Buffer.from(String.fromCharCode(0).repeat(signatureLength)),
        Reason: new String(reason),
        // eslint-disable-line no-new-wrappers
        M: signingTime !== null && signingTime !== void 0 ? signingTime : /* @__PURE__ */ new Date(),
        ContactInfo: new String(contactInfo),
        // eslint-disable-line no-new-wrappers
        Name: new String(name),
        // eslint-disable-line no-new-wrappers
        Location: new String(location),
        // eslint-disable-line no-new-wrappers
        Prop_Build: {
          Filter: {
            Name: "Adobe.PPKLite"
          },
          ...appName ? {
            App: {
              Name: appName
            }
          } : {}
        }
      });
      const isAcroFormExists = typeof pdf._root.data.AcroForm !== "undefined";
      let fieldIds = [];
      let acroFormId;
      if (isAcroFormExists) {
        const acroFormPosition = pdfBuffer.lastIndexOf("/Type /AcroForm");
        let acroFormStart = acroFormPosition;
        const charsUntilIdEnd = 10;
        const acroFormIdEnd = acroFormPosition - charsUntilIdEnd;
        const maxAcroFormIdLength = 12;
        let index = charsUntilIdEnd + 1;
        for (index; index < charsUntilIdEnd + maxAcroFormIdLength; index += 1) {
          const acroFormIdString = pdfBuffer.slice(acroFormPosition - index, acroFormIdEnd).toString();
          if (acroFormIdString[0] === "\n") {
            break;
          }
          acroFormStart = acroFormPosition - index;
        }
        const pdfSlice = pdfBuffer.slice(acroFormStart);
        const acroForm = pdfSlice.slice(0, pdfSlice.indexOf("endobj")).toString();
        acroFormId = parseInt(pdf._root.data.AcroForm.toString());
        const acroFormFields = acroForm.slice(acroForm.indexOf("/Fields [") + 9, acroForm.indexOf("]"));
        fieldIds = acroFormFields.split(" ").filter(Boolean).filter((element, i) => i % 3 === 0).map((fieldId) => new _utils.PDFKitReferenceMock(fieldId));
      }
      const signatureName = "Signature";
      const widget = pdf.ref({
        Type: "Annot",
        Subtype: "Widget",
        FT: "Sig",
        Rect: widgetRect,
        V: signature,
        T: new String(signatureName + (fieldIds.length + 1)),
        // eslint-disable-line no-new-wrappers
        F: _utils.ANNOTATION_FLAGS.PRINT,
        P: pdf.page.dictionary
        // eslint-disable-line no-underscore-dangle
      });
      pdf.page.dictionary.data.Annots = [widget];
      let form;
      if (!isAcroFormExists) {
        form = pdf.ref({
          Type: "AcroForm",
          SigFlags: _utils.SIG_FLAGS.SIGNATURES_EXIST | _utils.SIG_FLAGS.APPEND_ONLY,
          Fields: [...fieldIds, widget]
        });
      } else {
        form = pdf.ref({
          Type: "AcroForm",
          SigFlags: _utils.SIG_FLAGS.SIGNATURES_EXIST | _utils.SIG_FLAGS.APPEND_ONLY,
          Fields: [...fieldIds, widget]
        }, acroFormId);
      }
      pdf._root.data.AcroForm = form;
      return {
        signature,
        form,
        widget
      };
    }, "pdfkitAddPlaceholder");
    exports.pdfkitAddPlaceholder = pdfkitAddPlaceholder;
  }
});

// node_modules/@signpdf/placeholder-pdfkit010/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@signpdf/placeholder-pdfkit010/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _exportNames = {
      PDFKitReferenceMock: true,
      PDFObject: true
    };
    Object.defineProperty(exports, "PDFKitReferenceMock", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return _utils.PDFKitReferenceMock;
      }, "get")
    });
    Object.defineProperty(exports, "PDFObject", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        return _utils.PDFObject;
      }, "get")
    });
    var _pdfkitAddPlaceholder = require_pdfkitAddPlaceholder();
    Object.keys(_pdfkitAddPlaceholder).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _pdfkitAddPlaceholder[key]) return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return _pdfkitAddPlaceholder[key];
        }, "get")
      });
    });
    var _utils = require_dist();
  }
});

// node_modules/@signpdf/placeholder-plain/dist/getIndexFromRef.js
var require_getIndexFromRef = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/getIndexFromRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _utils = require_dist();
    var getIndexFromRef = /* @__PURE__ */ __name((refTable, ref) => {
      let [index] = ref.split(" ");
      index = parseInt(index);
      if (!refTable.offsets.has(index)) {
        throw new _utils.SignPdfError(`Failed to locate object "${ref}".`, _utils.SignPdfError.TYPE_PARSE);
      }
      return index;
    }, "getIndexFromRef");
    var _default = exports.default = getIndexFromRef;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/xrefToRefMap.js
var require_xrefToRefMap = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/xrefToRefMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _utils = require_dist();
    var xrefToRefMap = /* @__PURE__ */ __name((xrefString) => {
      const lines = xrefString.split("\n").filter((l) => l !== "");
      let index = 0;
      let expectedLines = 0;
      const xref = /* @__PURE__ */ new Map();
      lines.forEach((line) => {
        const split = line.split(" ");
        if (split.length === 2) {
          index = parseInt(split[0]);
          expectedLines = parseInt(split[1]);
          return;
        }
        if (expectedLines <= 0) {
          throw new _utils.SignPdfError("Too many lines in xref table.", _utils.SignPdfError.TYPE_PARSE);
        }
        expectedLines -= 1;
        const [offset, , inUse] = split;
        if (inUse.trim() === "f") {
          index += 1;
          return;
        }
        if (inUse.trim() !== "n") {
          throw new _utils.SignPdfError(`Unknown in-use flag "${inUse}". Expected "n" or "f".`, _utils.SignPdfError.TYPE_PARSE);
        }
        if (!/^\d+$/.test(offset.trim())) {
          throw new _utils.SignPdfError(`Expected integer offset. Got "${offset}".`, _utils.SignPdfError.TYPE_PARSE);
        }
        const storeOffset = parseInt(offset.trim());
        xref.set(index, storeOffset);
        index += 1;
      });
      return xref;
    }, "xrefToRefMap");
    var _default = exports.default = xrefToRefMap;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/readRefTable.js
var require_readRefTable = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/readRefTable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getXref = exports.getLastTrailerPosition = exports.getFullXrefTable = exports.default = void 0;
    var _utils = require_dist();
    var _xrefToRefMap = _interopRequireDefault(require_xrefToRefMap());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var getLastTrailerPosition = /* @__PURE__ */ __name((pdf) => {
      const trailerStart = pdf.lastIndexOf(Buffer.from("trailer", "utf8"));
      const trailer = pdf.slice(trailerStart, pdf.length - 6);
      const xRefPosition = trailer.slice(trailer.lastIndexOf(Buffer.from("startxref", "utf8")) + 10).toString();
      return parseInt(xRefPosition);
    }, "getLastTrailerPosition");
    exports.getLastTrailerPosition = getLastTrailerPosition;
    var getXref = /* @__PURE__ */ __name((pdf, position) => {
      let refTable = pdf.slice(position);
      const realPosition = refTable.indexOf(Buffer.from("xref", "utf8"));
      if (realPosition === -1) {
        throw new _utils.SignPdfError(`Could not find xref anywhere at or after ${position}.`, _utils.SignPdfError.TYPE_PARSE);
      }
      if (realPosition > 0) {
        const prefix = refTable.slice(0, realPosition);
        if (prefix.toString().replace(/\s*/g, "") !== "") {
          throw new _utils.SignPdfError(`Expected xref at ${position} but found other content.`, _utils.SignPdfError.TYPE_PARSE);
        }
      }
      const nextEofPosition = refTable.indexOf(Buffer.from("%%EOF", "utf8"));
      if (nextEofPosition === -1) {
        throw new _utils.SignPdfError("Expected EOF after xref and trailer but could not find one.", _utils.SignPdfError.TYPE_PARSE);
      }
      refTable = refTable.slice(0, nextEofPosition);
      refTable = refTable.slice(realPosition + 4);
      refTable = refTable.slice(refTable.indexOf("\n") + 1);
      let size = refTable.toString().split("/Size")[1];
      if (!size) {
        throw new _utils.SignPdfError("Size not found in xref table.", _utils.SignPdfError.TYPE_PARSE);
      }
      size = /^\s*(\d+)/.exec(size);
      if (size === null) {
        throw new _utils.SignPdfError("Failed to parse size of xref table.", _utils.SignPdfError.TYPE_PARSE);
      }
      size = parseInt(size[1]);
      const [objects, infos] = refTable.toString().split("trailer");
      const isContainingPrev = infos.split("/Prev")[1] != null;
      let prev;
      if (isContainingPrev) {
        const pagesRefRegex = /Prev (\d+)/g;
        const match = pagesRefRegex.exec(infos);
        const [, prevPosition] = match;
        prev = prevPosition;
      }
      const xRefContent = (0, _xrefToRefMap.default)(objects);
      return {
        size,
        prev,
        xRefContent
      };
    }, "getXref");
    exports.getXref = getXref;
    var getFullXref = /* @__PURE__ */ __name((pdf, xRefPosition) => {
      const lastXrefTable = getXref(pdf, xRefPosition);
      if (lastXrefTable.prev === void 0) {
        return lastXrefTable.xRefContent;
      }
      const partOfXrefTable = getFullXref(pdf, lastXrefTable.prev);
      const mergedXrefTable = new Map([...partOfXrefTable, ...lastXrefTable.xRefContent]);
      return mergedXrefTable;
    }, "getFullXref");
    var getFullXrefTable = /* @__PURE__ */ __name((pdf) => {
      const lastTrailerPosition = getLastTrailerPosition(pdf);
      return getFullXref(pdf, lastTrailerPosition);
    }, "getFullXrefTable");
    exports.getFullXrefTable = getFullXrefTable;
    var readRefTable = /* @__PURE__ */ __name((pdf) => {
      const fullXrefTable = getFullXrefTable(pdf);
      const startingIndex = 0;
      const maxIndex = Math.max(...fullXrefTable.keys());
      return {
        startingIndex,
        maxIndex,
        offsets: fullXrefTable
      };
    }, "readRefTable");
    var _default = exports.default = readRefTable;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/findObject.js
var require_findObject = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/findObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _getIndexFromRef = _interopRequireDefault(require_getIndexFromRef());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var findObject = /* @__PURE__ */ __name((pdf, refTable, ref) => {
      const index = (0, _getIndexFromRef.default)(refTable, ref);
      const offset = refTable.offsets.get(index);
      let slice = pdf.slice(offset);
      slice = slice.slice(0, slice.indexOf("endobj", "utf8"));
      slice = slice.slice(slice.indexOf("<<", "utf8") + 2);
      slice = slice.slice(0, slice.lastIndexOf(">>", "utf8"));
      return slice;
    }, "findObject");
    var _default = exports.default = findObject;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/readPdf.js
var require_readPdf = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/readPdf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getValue = exports.default = void 0;
    var _readRefTable = _interopRequireDefault(require_readRefTable());
    var _findObject = _interopRequireDefault(require_findObject());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var getValue = /* @__PURE__ */ __name((trailer, key) => {
      let index = trailer.indexOf(key);
      if (index === -1) {
        return void 0;
      }
      const slice = trailer.slice(index);
      index = slice.indexOf("/", 1);
      if (index === -1) {
        index = slice.indexOf(">", 1);
      }
      return slice.slice(key.length + 1, index).toString().trim();
    }, "getValue");
    exports.getValue = getValue;
    var readPdf = /* @__PURE__ */ __name((pdfBuffer) => {
      const trailerStart = pdfBuffer.lastIndexOf("trailer");
      const trailer = pdfBuffer.slice(trailerStart, pdfBuffer.length - 6);
      let xRefPosition = trailer.slice(trailer.lastIndexOf("startxref") + 10).toString();
      xRefPosition = parseInt(xRefPosition);
      const refTable = (0, _readRefTable.default)(pdfBuffer);
      const rootRef = getValue(trailer, "/Root");
      const root = (0, _findObject.default)(pdfBuffer, refTable, rootRef).toString();
      const infoRef = getValue(trailer, "/Info");
      return {
        xref: refTable,
        rootRef,
        root,
        infoRef,
        trailerStart,
        previousXrefs: [],
        xRefPosition
      };
    }, "readPdf");
    var _default = exports.default = readPdf;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/getPagesDictionaryRef.js
var require_getPagesDictionaryRef = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/getPagesDictionaryRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getPagesDictionaryRef;
    var _utils = require_dist();
    function getPagesDictionaryRef(info) {
      const pagesRefRegex = /\/Pages\s+(\d+\s+\d+\s+R)/g;
      const match = pagesRefRegex.exec(info.root);
      if (match === null) {
        throw new _utils.SignPdfError("Failed to find the pages descriptor. This is probably a problem in node-signpdf.", _utils.SignPdfError.TYPE_PARSE);
      }
      return match[1];
    }
    __name(getPagesDictionaryRef, "getPagesDictionaryRef");
  }
});

// node_modules/@signpdf/placeholder-plain/dist/getPageRef.js
var require_getPageRef = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/getPageRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getPageRef;
    var _getPagesDictionaryRef = _interopRequireDefault(require_getPagesDictionaryRef());
    var _findObject = _interopRequireDefault(require_findObject());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    function getPageRef(pdfBuffer, info) {
      const pagesRef = (0, _getPagesDictionaryRef.default)(info);
      const pagesDictionary = (0, _findObject.default)(pdfBuffer, info.xref, pagesRef);
      const kidsPosition = pagesDictionary.indexOf("/Kids");
      const kidsStart = pagesDictionary.indexOf("[", kidsPosition) + 1;
      const kidsEnd = pagesDictionary.indexOf("]", kidsPosition);
      const pages = pagesDictionary.slice(kidsStart, kidsEnd).toString();
      const split = pages.trim().split(" ", 3);
      return `${split[0]} ${split[1]} ${split[2]}`;
    }
    __name(getPageRef, "getPageRef");
  }
});

// node_modules/@signpdf/placeholder-plain/dist/createBufferRootWithAcroform.js
var require_createBufferRootWithAcroform = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/createBufferRootWithAcroform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _getIndexFromRef = _interopRequireDefault(require_getIndexFromRef());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var createBufferRootWithAcroform = /* @__PURE__ */ __name((pdf, info, form) => {
      const rootIndex = (0, _getIndexFromRef.default)(info.xref, info.rootRef);
      return Buffer.concat([Buffer.from(`${rootIndex} 0 obj
`), Buffer.from("<<\n"), Buffer.from(`${info.root}
`), Buffer.from(`/AcroForm ${form}`), Buffer.from("\n>>\nendobj\n")]);
    }, "createBufferRootWithAcroform");
    var _default = exports.default = createBufferRootWithAcroform;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/createBufferPageWithAnnotation.js
var require_createBufferPageWithAnnotation = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/createBufferPageWithAnnotation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _findObject = _interopRequireDefault(require_findObject());
    var _getIndexFromRef = _interopRequireDefault(require_getIndexFromRef());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var createBufferPageWithAnnotation = /* @__PURE__ */ __name((pdf, info, pagesRef, widget) => {
      const pagesDictionary = (0, _findObject.default)(pdf, info.xref, pagesRef).toString();
      let annotsStart;
      let annotsEnd;
      let annots;
      annotsStart = pagesDictionary.indexOf("/Annots");
      if (annotsStart > -1) {
        annotsEnd = pagesDictionary.indexOf("]", annotsStart);
        annots = pagesDictionary.substr(annotsStart, annotsEnd + 1 - annotsStart);
        annots = annots.substr(0, annots.length - 1);
      } else {
        annotsStart = pagesDictionary.length;
        annotsEnd = pagesDictionary.length;
        annots = "/Annots [";
      }
      const pagesDictionaryIndex = (0, _getIndexFromRef.default)(info.xref, pagesRef);
      const widgetValue = widget.toString();
      annots = `${annots} ${widgetValue}]`;
      const preAnnots = pagesDictionary.substr(0, annotsStart);
      let postAnnots = "";
      if (pagesDictionary.length > annotsEnd) {
        postAnnots = pagesDictionary.substr(annotsEnd + 1);
      }
      return Buffer.concat([Buffer.from(`${pagesDictionaryIndex} 0 obj
`), Buffer.from("<<\n"), Buffer.from(`${preAnnots + annots + postAnnots}
`), Buffer.from("\n>>\nendobj\n")]);
    }, "createBufferPageWithAnnotation");
    var _default = exports.default = createBufferPageWithAnnotation;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/createBufferTrailer.js
var require_createBufferTrailer = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/createBufferTrailer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var createBufferTrailer = /* @__PURE__ */ __name((pdf, info, addedReferences) => {
      let rows = [];
      rows[0] = "0000000000 65535 f ";
      addedReferences.forEach((offset, index) => {
        const paddedOffset = `0000000000${offset}`.slice(-10);
        rows[index + 1] = `${index} 1
${paddedOffset} 00000 n `;
      });
      rows = rows.filter((row) => row !== void 0);
      return Buffer.concat([Buffer.from("xref\n"), Buffer.from(`${info.xref.startingIndex} 1
`), Buffer.from(rows.join("\n")), Buffer.from("\ntrailer\n"), Buffer.from("<<\n"), Buffer.from(`/Size ${info.xref.maxIndex + 1}
`), Buffer.from(`/Root ${info.rootRef}
`), Buffer.from(info.infoRef ? `/Info ${info.infoRef}
` : ""), Buffer.from(`/Prev ${info.xRefPosition}
`), Buffer.from(">>\n"), Buffer.from("startxref\n"), Buffer.from(`${pdf.length}
`), Buffer.from("%%EOF")]);
    }, "createBufferTrailer");
    var _default = exports.default = createBufferTrailer;
  }
});

// node_modules/@signpdf/placeholder-plain/dist/plainAddPlaceholder.js
var require_plainAddPlaceholder = __commonJS({
  "node_modules/@signpdf/placeholder-plain/dist/plainAddPlaceholder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.plainAddPlaceholder = void 0;
    var _placeholderPdfkit = require_dist2();
    var _utils = require_dist();
    var _getIndexFromRef = _interopRequireDefault(require_getIndexFromRef());
    var _readPdf = _interopRequireDefault(require_readPdf());
    var _getPageRef = _interopRequireDefault(require_getPageRef());
    var _createBufferRootWithAcroform = _interopRequireDefault(require_createBufferRootWithAcroform());
    var _createBufferPageWithAnnotation = _interopRequireDefault(require_createBufferPageWithAnnotation());
    var _createBufferTrailer = _interopRequireDefault(require_createBufferTrailer());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var getAcroFormRef = /* @__PURE__ */ __name((slice) => {
      const bufferRootWithAcroformRefRegex = /\/AcroForm\s+(\d+\s\d+\sR)/g;
      const match = bufferRootWithAcroformRefRegex.exec(slice);
      if (match != null && match[1] != null && match[1] !== "") {
        return match[1];
      }
      return void 0;
    }, "getAcroFormRef");
    var plainAddPlaceholder2 = /* @__PURE__ */ __name(({
      pdfBuffer,
      reason,
      contactInfo,
      name,
      location,
      signingTime = void 0,
      signatureLength = _utils.DEFAULT_SIGNATURE_LENGTH,
      subFilter = _utils.SUBFILTER_ADOBE_PKCS7_DETACHED,
      widgetRect = [0, 0, 0, 0],
      appName = void 0
    }) => {
      let pdf = (0, _utils.removeTrailingNewLine)(pdfBuffer);
      const info = (0, _readPdf.default)(pdf);
      const pageRef = (0, _getPageRef.default)(pdf, info);
      const pageIndex = (0, _getIndexFromRef.default)(info.xref, pageRef);
      const addedReferences = /* @__PURE__ */ new Map();
      const pdfKitMock = {
        ref: /* @__PURE__ */ __name((input, knownIndex) => {
          info.xref.maxIndex += 1;
          const index = knownIndex != null ? knownIndex : info.xref.maxIndex;
          addedReferences.set(index, pdf.length + 1);
          pdf = Buffer.concat([pdf, Buffer.from("\n"), Buffer.from(`${index} 0 obj
`), Buffer.from(_utils.PDFObject.convert(input)), Buffer.from("\nendobj\n")]);
          return new _utils.PDFKitReferenceMock(info.xref.maxIndex);
        }, "ref"),
        page: {
          dictionary: new _utils.PDFKitReferenceMock(pageIndex, {
            data: {
              Annots: []
            }
          })
        },
        _root: {
          data: {}
        }
      };
      const acroFormRef = getAcroFormRef(info.root);
      if (acroFormRef) {
        pdfKitMock._root.data.AcroForm = acroFormRef;
      }
      const {
        form,
        widget
      } = (0, _placeholderPdfkit.pdfkitAddPlaceholder)({
        pdf: pdfKitMock,
        pdfBuffer,
        reason,
        contactInfo,
        name,
        location,
        signingTime,
        signatureLength,
        subFilter,
        widgetRect,
        appName
      });
      if (!getAcroFormRef(pdf.toString())) {
        const rootIndex = (0, _getIndexFromRef.default)(info.xref, info.rootRef);
        addedReferences.set(rootIndex, pdf.length + 1);
        pdf = Buffer.concat([pdf, Buffer.from("\n"), (0, _createBufferRootWithAcroform.default)(pdf, info, form)]);
      }
      addedReferences.set(pageIndex, pdf.length + 1);
      pdf = Buffer.concat([pdf, Buffer.from("\n"), (0, _createBufferPageWithAnnotation.default)(pdf, info, pageRef, widget)]);
      pdf = Buffer.concat([pdf, Buffer.from("\n"), (0, _createBufferTrailer.default)(pdf, info, addedReferences)]);
      return pdf;
    }, "plainAddPlaceholder");
    exports.plainAddPlaceholder = plainAddPlaceholder2;
  }
});

// node_modules/node-forge/lib/forge.js
var require_forge = __commonJS({
  "node_modules/node-forge/lib/forge.js"(exports, module) {
    module.exports = {
      // default options
      options: {
        usePureJavaScript: false
      }
    };
  }
});

// node_modules/node-forge/lib/baseN.js
var require_baseN = __commonJS({
  "node_modules/node-forge/lib/baseN.js"(exports, module) {
    var api = {};
    module.exports = api;
    var _reverseAlphabets = {};
    api.encode = function(input, alphabet, maxline) {
      if (typeof alphabet !== "string") {
        throw new TypeError('"alphabet" must be a string.');
      }
      if (maxline !== void 0 && typeof maxline !== "number") {
        throw new TypeError('"maxline" must be a number.');
      }
      var output = "";
      if (!(input instanceof Uint8Array)) {
        output = _encodeWithByteBuffer(input, alphabet);
      } else {
        var i = 0;
        var base = alphabet.length;
        var first = alphabet.charAt(0);
        var digits = [0];
        for (i = 0; i < input.length; ++i) {
          for (var j = 0, carry = input[i]; j < digits.length; ++j) {
            carry += digits[j] << 8;
            digits[j] = carry % base;
            carry = carry / base | 0;
          }
          while (carry > 0) {
            digits.push(carry % base);
            carry = carry / base | 0;
          }
        }
        for (i = 0; input[i] === 0 && i < input.length - 1; ++i) {
          output += first;
        }
        for (i = digits.length - 1; i >= 0; --i) {
          output += alphabet[digits[i]];
        }
      }
      if (maxline) {
        var regex = new RegExp(".{1," + maxline + "}", "g");
        output = output.match(regex).join("\r\n");
      }
      return output;
    };
    api.decode = function(input, alphabet) {
      if (typeof input !== "string") {
        throw new TypeError('"input" must be a string.');
      }
      if (typeof alphabet !== "string") {
        throw new TypeError('"alphabet" must be a string.');
      }
      var table = _reverseAlphabets[alphabet];
      if (!table) {
        table = _reverseAlphabets[alphabet] = [];
        for (var i = 0; i < alphabet.length; ++i) {
          table[alphabet.charCodeAt(i)] = i;
        }
      }
      input = input.replace(/\s/g, "");
      var base = alphabet.length;
      var first = alphabet.charAt(0);
      var bytes = [0];
      for (var i = 0; i < input.length; i++) {
        var value = table[input.charCodeAt(i)];
        if (value === void 0) {
          return;
        }
        for (var j = 0, carry = value; j < bytes.length; ++j) {
          carry += bytes[j] * base;
          bytes[j] = carry & 255;
          carry >>= 8;
        }
        while (carry > 0) {
          bytes.push(carry & 255);
          carry >>= 8;
        }
      }
      for (var k = 0; input[k] === first && k < input.length - 1; ++k) {
        bytes.push(0);
      }
      if (typeof Buffer !== "undefined") {
        return Buffer.from(bytes.reverse());
      }
      return new Uint8Array(bytes.reverse());
    };
    function _encodeWithByteBuffer(input, alphabet) {
      var i = 0;
      var base = alphabet.length;
      var first = alphabet.charAt(0);
      var digits = [0];
      for (i = 0; i < input.length(); ++i) {
        for (var j = 0, carry = input.at(i); j < digits.length; ++j) {
          carry += digits[j] << 8;
          digits[j] = carry % base;
          carry = carry / base | 0;
        }
        while (carry > 0) {
          digits.push(carry % base);
          carry = carry / base | 0;
        }
      }
      var output = "";
      for (i = 0; input.at(i) === 0 && i < input.length() - 1; ++i) {
        output += first;
      }
      for (i = digits.length - 1; i >= 0; --i) {
        output += alphabet[digits[i]];
      }
      return output;
    }
    __name(_encodeWithByteBuffer, "_encodeWithByteBuffer");
  }
});

// node_modules/node-forge/lib/util.js
var require_util = __commonJS({
  "node_modules/node-forge/lib/util.js"(exports, module) {
    var forge = require_forge();
    var baseN = require_baseN();
    var util = module.exports = forge.util = forge.util || {};
    (function() {
      if (typeof process !== "undefined" && process.nextTick && !process.browser) {
        util.nextTick = process.nextTick;
        if (typeof setImmediate === "function") {
          util.setImmediate = setImmediate;
        } else {
          util.setImmediate = util.nextTick;
        }
        return;
      }
      if (typeof setImmediate === "function") {
        util.setImmediate = function() {
          return setImmediate.apply(void 0, arguments);
        };
        util.nextTick = function(callback) {
          return setImmediate(callback);
        };
        return;
      }
      util.setImmediate = function(callback) {
        setTimeout(callback, 0);
      };
      if (typeof window !== "undefined" && typeof window.postMessage === "function") {
        let handler2 = function(event) {
          if (event.source === window && event.data === msg) {
            event.stopPropagation();
            var copy = callbacks.slice();
            callbacks.length = 0;
            copy.forEach(function(callback) {
              callback();
            });
          }
        };
        var handler = handler2;
        __name(handler2, "handler");
        var msg = "forge.setImmediate";
        var callbacks = [];
        util.setImmediate = function(callback) {
          callbacks.push(callback);
          if (callbacks.length === 1) {
            window.postMessage(msg, "*");
          }
        };
        window.addEventListener("message", handler2, true);
      }
      if (typeof MutationObserver !== "undefined") {
        var now = Date.now();
        var attr = true;
        var div = document.createElement("div");
        var callbacks = [];
        new MutationObserver(function() {
          var copy = callbacks.slice();
          callbacks.length = 0;
          copy.forEach(function(callback) {
            callback();
          });
        }).observe(div, { attributes: true });
        var oldSetImmediate = util.setImmediate;
        util.setImmediate = function(callback) {
          if (Date.now() - now > 15) {
            now = Date.now();
            oldSetImmediate(callback);
          } else {
            callbacks.push(callback);
            if (callbacks.length === 1) {
              div.setAttribute("a", attr = !attr);
            }
          }
        };
      }
      util.nextTick = util.setImmediate;
    })();
    util.isNodejs = typeof process !== "undefined" && process.versions && process.versions.node;
    util.globalScope = (function() {
      if (util.isNodejs) {
        return global;
      }
      return typeof self === "undefined" ? window : self;
    })();
    util.isArray = Array.isArray || function(x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    };
    util.isArrayBuffer = function(x) {
      return typeof ArrayBuffer !== "undefined" && x instanceof ArrayBuffer;
    };
    util.isArrayBufferView = function(x) {
      return x && util.isArrayBuffer(x.buffer) && x.byteLength !== void 0;
    };
    function _checkBitsParam(n) {
      if (!(n === 8 || n === 16 || n === 24 || n === 32)) {
        throw new Error("Only 8, 16, 24, or 32 bits supported: " + n);
      }
    }
    __name(_checkBitsParam, "_checkBitsParam");
    util.ByteBuffer = ByteStringBuffer;
    function ByteStringBuffer(b) {
      this.data = "";
      this.read = 0;
      if (typeof b === "string") {
        this.data = b;
      } else if (util.isArrayBuffer(b) || util.isArrayBufferView(b)) {
        if (typeof Buffer !== "undefined" && b instanceof Buffer) {
          this.data = b.toString("binary");
        } else {
          var arr = new Uint8Array(b);
          try {
            this.data = String.fromCharCode.apply(null, arr);
          } catch (e) {
            for (var i = 0; i < arr.length; ++i) {
              this.putByte(arr[i]);
            }
          }
        }
      } else if (b instanceof ByteStringBuffer || typeof b === "object" && typeof b.data === "string" && typeof b.read === "number") {
        this.data = b.data;
        this.read = b.read;
      }
      this._constructedStringLength = 0;
    }
    __name(ByteStringBuffer, "ByteStringBuffer");
    util.ByteStringBuffer = ByteStringBuffer;
    var _MAX_CONSTRUCTED_STRING_LENGTH = 4096;
    util.ByteStringBuffer.prototype._optimizeConstructedString = function(x) {
      this._constructedStringLength += x;
      if (this._constructedStringLength > _MAX_CONSTRUCTED_STRING_LENGTH) {
        this.data.substr(0, 1);
        this._constructedStringLength = 0;
      }
    };
    util.ByteStringBuffer.prototype.length = function() {
      return this.data.length - this.read;
    };
    util.ByteStringBuffer.prototype.isEmpty = function() {
      return this.length() <= 0;
    };
    util.ByteStringBuffer.prototype.putByte = function(b) {
      return this.putBytes(String.fromCharCode(b));
    };
    util.ByteStringBuffer.prototype.fillWithByte = function(b, n) {
      b = String.fromCharCode(b);
      var d = this.data;
      while (n > 0) {
        if (n & 1) {
          d += b;
        }
        n >>>= 1;
        if (n > 0) {
          b += b;
        }
      }
      this.data = d;
      this._optimizeConstructedString(n);
      return this;
    };
    util.ByteStringBuffer.prototype.putBytes = function(bytes) {
      this.data += bytes;
      this._optimizeConstructedString(bytes.length);
      return this;
    };
    util.ByteStringBuffer.prototype.putString = function(str) {
      return this.putBytes(util.encodeUtf8(str));
    };
    util.ByteStringBuffer.prototype.putInt16 = function(i) {
      return this.putBytes(
        String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255)
      );
    };
    util.ByteStringBuffer.prototype.putInt24 = function(i) {
      return this.putBytes(
        String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255)
      );
    };
    util.ByteStringBuffer.prototype.putInt32 = function(i) {
      return this.putBytes(
        String.fromCharCode(i >> 24 & 255) + String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255)
      );
    };
    util.ByteStringBuffer.prototype.putInt16Le = function(i) {
      return this.putBytes(
        String.fromCharCode(i & 255) + String.fromCharCode(i >> 8 & 255)
      );
    };
    util.ByteStringBuffer.prototype.putInt24Le = function(i) {
      return this.putBytes(
        String.fromCharCode(i & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i >> 16 & 255)
      );
    };
    util.ByteStringBuffer.prototype.putInt32Le = function(i) {
      return this.putBytes(
        String.fromCharCode(i & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 24 & 255)
      );
    };
    util.ByteStringBuffer.prototype.putInt = function(i, n) {
      _checkBitsParam(n);
      var bytes = "";
      do {
        n -= 8;
        bytes += String.fromCharCode(i >> n & 255);
      } while (n > 0);
      return this.putBytes(bytes);
    };
    util.ByteStringBuffer.prototype.putSignedInt = function(i, n) {
      if (i < 0) {
        i += 2 << n - 1;
      }
      return this.putInt(i, n);
    };
    util.ByteStringBuffer.prototype.putBuffer = function(buffer) {
      return this.putBytes(buffer.getBytes());
    };
    util.ByteStringBuffer.prototype.getByte = function() {
      return this.data.charCodeAt(this.read++);
    };
    util.ByteStringBuffer.prototype.getInt16 = function() {
      var rval = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
      this.read += 2;
      return rval;
    };
    util.ByteStringBuffer.prototype.getInt24 = function() {
      var rval = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
      this.read += 3;
      return rval;
    };
    util.ByteStringBuffer.prototype.getInt32 = function() {
      var rval = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
      this.read += 4;
      return rval;
    };
    util.ByteStringBuffer.prototype.getInt16Le = function() {
      var rval = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
      this.read += 2;
      return rval;
    };
    util.ByteStringBuffer.prototype.getInt24Le = function() {
      var rval = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
      this.read += 3;
      return rval;
    };
    util.ByteStringBuffer.prototype.getInt32Le = function() {
      var rval = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
      this.read += 4;
      return rval;
    };
    util.ByteStringBuffer.prototype.getInt = function(n) {
      _checkBitsParam(n);
      var rval = 0;
      do {
        rval = (rval << 8) + this.data.charCodeAt(this.read++);
        n -= 8;
      } while (n > 0);
      return rval;
    };
    util.ByteStringBuffer.prototype.getSignedInt = function(n) {
      var x = this.getInt(n);
      var max = 2 << n - 2;
      if (x >= max) {
        x -= max << 1;
      }
      return x;
    };
    util.ByteStringBuffer.prototype.getBytes = function(count) {
      var rval;
      if (count) {
        count = Math.min(this.length(), count);
        rval = this.data.slice(this.read, this.read + count);
        this.read += count;
      } else if (count === 0) {
        rval = "";
      } else {
        rval = this.read === 0 ? this.data : this.data.slice(this.read);
        this.clear();
      }
      return rval;
    };
    util.ByteStringBuffer.prototype.bytes = function(count) {
      return typeof count === "undefined" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + count);
    };
    util.ByteStringBuffer.prototype.at = function(i) {
      return this.data.charCodeAt(this.read + i);
    };
    util.ByteStringBuffer.prototype.setAt = function(i, b) {
      this.data = this.data.substr(0, this.read + i) + String.fromCharCode(b) + this.data.substr(this.read + i + 1);
      return this;
    };
    util.ByteStringBuffer.prototype.last = function() {
      return this.data.charCodeAt(this.data.length - 1);
    };
    util.ByteStringBuffer.prototype.copy = function() {
      var c = util.createBuffer(this.data);
      c.read = this.read;
      return c;
    };
    util.ByteStringBuffer.prototype.compact = function() {
      if (this.read > 0) {
        this.data = this.data.slice(this.read);
        this.read = 0;
      }
      return this;
    };
    util.ByteStringBuffer.prototype.clear = function() {
      this.data = "";
      this.read = 0;
      return this;
    };
    util.ByteStringBuffer.prototype.truncate = function(count) {
      var len = Math.max(0, this.length() - count);
      this.data = this.data.substr(this.read, len);
      this.read = 0;
      return this;
    };
    util.ByteStringBuffer.prototype.toHex = function() {
      var rval = "";
      for (var i = this.read; i < this.data.length; ++i) {
        var b = this.data.charCodeAt(i);
        if (b < 16) {
          rval += "0";
        }
        rval += b.toString(16);
      }
      return rval;
    };
    util.ByteStringBuffer.prototype.toString = function() {
      return util.decodeUtf8(this.bytes());
    };
    function DataBuffer(b, options) {
      options = options || {};
      this.read = options.readOffset || 0;
      this.growSize = options.growSize || 1024;
      var isArrayBuffer = util.isArrayBuffer(b);
      var isArrayBufferView = util.isArrayBufferView(b);
      if (isArrayBuffer || isArrayBufferView) {
        if (isArrayBuffer) {
          this.data = new DataView(b);
        } else {
          this.data = new DataView(b.buffer, b.byteOffset, b.byteLength);
        }
        this.write = "writeOffset" in options ? options.writeOffset : this.data.byteLength;
        return;
      }
      this.data = new DataView(new ArrayBuffer(0));
      this.write = 0;
      if (b !== null && b !== void 0) {
        this.putBytes(b);
      }
      if ("writeOffset" in options) {
        this.write = options.writeOffset;
      }
    }
    __name(DataBuffer, "DataBuffer");
    util.DataBuffer = DataBuffer;
    util.DataBuffer.prototype.length = function() {
      return this.write - this.read;
    };
    util.DataBuffer.prototype.isEmpty = function() {
      return this.length() <= 0;
    };
    util.DataBuffer.prototype.accommodate = function(amount, growSize) {
      if (this.length() >= amount) {
        return this;
      }
      growSize = Math.max(growSize || this.growSize, amount);
      var src = new Uint8Array(
        this.data.buffer,
        this.data.byteOffset,
        this.data.byteLength
      );
      var dst = new Uint8Array(this.length() + growSize);
      dst.set(src);
      this.data = new DataView(dst.buffer);
      return this;
    };
    util.DataBuffer.prototype.putByte = function(b) {
      this.accommodate(1);
      this.data.setUint8(this.write++, b);
      return this;
    };
    util.DataBuffer.prototype.fillWithByte = function(b, n) {
      this.accommodate(n);
      for (var i = 0; i < n; ++i) {
        this.data.setUint8(b);
      }
      return this;
    };
    util.DataBuffer.prototype.putBytes = function(bytes, encoding) {
      if (util.isArrayBufferView(bytes)) {
        var src = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        var len = src.byteLength - src.byteOffset;
        this.accommodate(len);
        var dst = new Uint8Array(this.data.buffer, this.write);
        dst.set(src);
        this.write += len;
        return this;
      }
      if (util.isArrayBuffer(bytes)) {
        var src = new Uint8Array(bytes);
        this.accommodate(src.byteLength);
        var dst = new Uint8Array(this.data.buffer);
        dst.set(src, this.write);
        this.write += src.byteLength;
        return this;
      }
      if (bytes instanceof util.DataBuffer || typeof bytes === "object" && typeof bytes.read === "number" && typeof bytes.write === "number" && util.isArrayBufferView(bytes.data)) {
        var src = new Uint8Array(bytes.data.byteLength, bytes.read, bytes.length());
        this.accommodate(src.byteLength);
        var dst = new Uint8Array(bytes.data.byteLength, this.write);
        dst.set(src);
        this.write += src.byteLength;
        return this;
      }
      if (bytes instanceof util.ByteStringBuffer) {
        bytes = bytes.data;
        encoding = "binary";
      }
      encoding = encoding || "binary";
      if (typeof bytes === "string") {
        var view;
        if (encoding === "hex") {
          this.accommodate(Math.ceil(bytes.length / 2));
          view = new Uint8Array(this.data.buffer, this.write);
          this.write += util.binary.hex.decode(bytes, view, this.write);
          return this;
        }
        if (encoding === "base64") {
          this.accommodate(Math.ceil(bytes.length / 4) * 3);
          view = new Uint8Array(this.data.buffer, this.write);
          this.write += util.binary.base64.decode(bytes, view, this.write);
          return this;
        }
        if (encoding === "utf8") {
          bytes = util.encodeUtf8(bytes);
          encoding = "binary";
        }
        if (encoding === "binary" || encoding === "raw") {
          this.accommodate(bytes.length);
          view = new Uint8Array(this.data.buffer, this.write);
          this.write += util.binary.raw.decode(view);
          return this;
        }
        if (encoding === "utf16") {
          this.accommodate(bytes.length * 2);
          view = new Uint16Array(this.data.buffer, this.write);
          this.write += util.text.utf16.encode(view);
          return this;
        }
        throw new Error("Invalid encoding: " + encoding);
      }
      throw Error("Invalid parameter: " + bytes);
    };
    util.DataBuffer.prototype.putBuffer = function(buffer) {
      this.putBytes(buffer);
      buffer.clear();
      return this;
    };
    util.DataBuffer.prototype.putString = function(str) {
      return this.putBytes(str, "utf16");
    };
    util.DataBuffer.prototype.putInt16 = function(i) {
      this.accommodate(2);
      this.data.setInt16(this.write, i);
      this.write += 2;
      return this;
    };
    util.DataBuffer.prototype.putInt24 = function(i) {
      this.accommodate(3);
      this.data.setInt16(this.write, i >> 8 & 65535);
      this.data.setInt8(this.write, i >> 16 & 255);
      this.write += 3;
      return this;
    };
    util.DataBuffer.prototype.putInt32 = function(i) {
      this.accommodate(4);
      this.data.setInt32(this.write, i);
      this.write += 4;
      return this;
    };
    util.DataBuffer.prototype.putInt16Le = function(i) {
      this.accommodate(2);
      this.data.setInt16(this.write, i, true);
      this.write += 2;
      return this;
    };
    util.DataBuffer.prototype.putInt24Le = function(i) {
      this.accommodate(3);
      this.data.setInt8(this.write, i >> 16 & 255);
      this.data.setInt16(this.write, i >> 8 & 65535, true);
      this.write += 3;
      return this;
    };
    util.DataBuffer.prototype.putInt32Le = function(i) {
      this.accommodate(4);
      this.data.setInt32(this.write, i, true);
      this.write += 4;
      return this;
    };
    util.DataBuffer.prototype.putInt = function(i, n) {
      _checkBitsParam(n);
      this.accommodate(n / 8);
      do {
        n -= 8;
        this.data.setInt8(this.write++, i >> n & 255);
      } while (n > 0);
      return this;
    };
    util.DataBuffer.prototype.putSignedInt = function(i, n) {
      _checkBitsParam(n);
      this.accommodate(n / 8);
      if (i < 0) {
        i += 2 << n - 1;
      }
      return this.putInt(i, n);
    };
    util.DataBuffer.prototype.getByte = function() {
      return this.data.getInt8(this.read++);
    };
    util.DataBuffer.prototype.getInt16 = function() {
      var rval = this.data.getInt16(this.read);
      this.read += 2;
      return rval;
    };
    util.DataBuffer.prototype.getInt24 = function() {
      var rval = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
      this.read += 3;
      return rval;
    };
    util.DataBuffer.prototype.getInt32 = function() {
      var rval = this.data.getInt32(this.read);
      this.read += 4;
      return rval;
    };
    util.DataBuffer.prototype.getInt16Le = function() {
      var rval = this.data.getInt16(this.read, true);
      this.read += 2;
      return rval;
    };
    util.DataBuffer.prototype.getInt24Le = function() {
      var rval = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, true) << 8;
      this.read += 3;
      return rval;
    };
    util.DataBuffer.prototype.getInt32Le = function() {
      var rval = this.data.getInt32(this.read, true);
      this.read += 4;
      return rval;
    };
    util.DataBuffer.prototype.getInt = function(n) {
      _checkBitsParam(n);
      var rval = 0;
      do {
        rval = (rval << 8) + this.data.getInt8(this.read++);
        n -= 8;
      } while (n > 0);
      return rval;
    };
    util.DataBuffer.prototype.getSignedInt = function(n) {
      var x = this.getInt(n);
      var max = 2 << n - 2;
      if (x >= max) {
        x -= max << 1;
      }
      return x;
    };
    util.DataBuffer.prototype.getBytes = function(count) {
      var rval;
      if (count) {
        count = Math.min(this.length(), count);
        rval = this.data.slice(this.read, this.read + count);
        this.read += count;
      } else if (count === 0) {
        rval = "";
      } else {
        rval = this.read === 0 ? this.data : this.data.slice(this.read);
        this.clear();
      }
      return rval;
    };
    util.DataBuffer.prototype.bytes = function(count) {
      return typeof count === "undefined" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + count);
    };
    util.DataBuffer.prototype.at = function(i) {
      return this.data.getUint8(this.read + i);
    };
    util.DataBuffer.prototype.setAt = function(i, b) {
      this.data.setUint8(i, b);
      return this;
    };
    util.DataBuffer.prototype.last = function() {
      return this.data.getUint8(this.write - 1);
    };
    util.DataBuffer.prototype.copy = function() {
      return new util.DataBuffer(this);
    };
    util.DataBuffer.prototype.compact = function() {
      if (this.read > 0) {
        var src = new Uint8Array(this.data.buffer, this.read);
        var dst = new Uint8Array(src.byteLength);
        dst.set(src);
        this.data = new DataView(dst);
        this.write -= this.read;
        this.read = 0;
      }
      return this;
    };
    util.DataBuffer.prototype.clear = function() {
      this.data = new DataView(new ArrayBuffer(0));
      this.read = this.write = 0;
      return this;
    };
    util.DataBuffer.prototype.truncate = function(count) {
      this.write = Math.max(0, this.length() - count);
      this.read = Math.min(this.read, this.write);
      return this;
    };
    util.DataBuffer.prototype.toHex = function() {
      var rval = "";
      for (var i = this.read; i < this.data.byteLength; ++i) {
        var b = this.data.getUint8(i);
        if (b < 16) {
          rval += "0";
        }
        rval += b.toString(16);
      }
      return rval;
    };
    util.DataBuffer.prototype.toString = function(encoding) {
      var view = new Uint8Array(this.data, this.read, this.length());
      encoding = encoding || "utf8";
      if (encoding === "binary" || encoding === "raw") {
        return util.binary.raw.encode(view);
      }
      if (encoding === "hex") {
        return util.binary.hex.encode(view);
      }
      if (encoding === "base64") {
        return util.binary.base64.encode(view);
      }
      if (encoding === "utf8") {
        return util.text.utf8.decode(view);
      }
      if (encoding === "utf16") {
        return util.text.utf16.decode(view);
      }
      throw new Error("Invalid encoding: " + encoding);
    };
    util.createBuffer = function(input, encoding) {
      encoding = encoding || "raw";
      if (input !== void 0 && encoding === "utf8") {
        input = util.encodeUtf8(input);
      }
      return new util.ByteBuffer(input);
    };
    util.fillString = function(c, n) {
      var s = "";
      while (n > 0) {
        if (n & 1) {
          s += c;
        }
        n >>>= 1;
        if (n > 0) {
          c += c;
        }
      }
      return s;
    };
    util.xorBytes = function(s1, s2, n) {
      var s3 = "";
      var b = "";
      var t = "";
      var i = 0;
      var c = 0;
      for (; n > 0; --n, ++i) {
        b = s1.charCodeAt(i) ^ s2.charCodeAt(i);
        if (c >= 10) {
          s3 += t;
          t = "";
          c = 0;
        }
        t += String.fromCharCode(b);
        ++c;
      }
      s3 += t;
      return s3;
    };
    util.hexToBytes = function(hex) {
      var rval = "";
      var i = 0;
      if (hex.length & true) {
        i = 1;
        rval += String.fromCharCode(parseInt(hex[0], 16));
      }
      for (; i < hex.length; i += 2) {
        rval += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      return rval;
    };
    util.bytesToHex = function(bytes) {
      return util.createBuffer(bytes).toHex();
    };
    util.int32ToBytes = function(i) {
      return String.fromCharCode(i >> 24 & 255) + String.fromCharCode(i >> 16 & 255) + String.fromCharCode(i >> 8 & 255) + String.fromCharCode(i & 255);
    };
    var _base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var _base64Idx = [
      /*43 -43 = 0*/
      /*'+',  1,  2,  3,'/' */
      62,
      -1,
      -1,
      -1,
      63,
      /*'0','1','2','3','4','5','6','7','8','9' */
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      /*15, 16, 17,'=', 19, 20, 21 */
      -1,
      -1,
      -1,
      64,
      -1,
      -1,
      -1,
      /*65 - 43 = 22*/
      /*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      /*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      /*91 - 43 = 48 */
      /*48, 49, 50, 51, 52, 53 */
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      /*97 - 43 = 54*/
      /*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      /*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51
    ];
    var _base58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    util.encode64 = function(input, maxline) {
      var line = "";
      var output = "";
      var chr1, chr2, chr3;
      var i = 0;
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        line += _base64.charAt(chr1 >> 2);
        line += _base64.charAt((chr1 & 3) << 4 | chr2 >> 4);
        if (isNaN(chr2)) {
          line += "==";
        } else {
          line += _base64.charAt((chr2 & 15) << 2 | chr3 >> 6);
          line += isNaN(chr3) ? "=" : _base64.charAt(chr3 & 63);
        }
        if (maxline && line.length > maxline) {
          output += line.substr(0, maxline) + "\r\n";
          line = line.substr(maxline);
        }
      }
      output += line;
      return output;
    };
    util.decode64 = function(input) {
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      var output = "";
      var enc1, enc2, enc3, enc4;
      var i = 0;
      while (i < input.length) {
        enc1 = _base64Idx[input.charCodeAt(i++) - 43];
        enc2 = _base64Idx[input.charCodeAt(i++) - 43];
        enc3 = _base64Idx[input.charCodeAt(i++) - 43];
        enc4 = _base64Idx[input.charCodeAt(i++) - 43];
        output += String.fromCharCode(enc1 << 2 | enc2 >> 4);
        if (enc3 !== 64) {
          output += String.fromCharCode((enc2 & 15) << 4 | enc3 >> 2);
          if (enc4 !== 64) {
            output += String.fromCharCode((enc3 & 3) << 6 | enc4);
          }
        }
      }
      return output;
    };
    util.encodeUtf8 = function(str) {
      return unescape(encodeURIComponent(str));
    };
    util.decodeUtf8 = function(str) {
      return decodeURIComponent(escape(str));
    };
    util.binary = {
      raw: {},
      hex: {},
      base64: {},
      base58: {},
      baseN: {
        encode: baseN.encode,
        decode: baseN.decode
      }
    };
    util.binary.raw.encode = function(bytes) {
      return String.fromCharCode.apply(null, bytes);
    };
    util.binary.raw.decode = function(str, output, offset) {
      var out = output;
      if (!out) {
        out = new Uint8Array(str.length);
      }
      offset = offset || 0;
      var j = offset;
      for (var i = 0; i < str.length; ++i) {
        out[j++] = str.charCodeAt(i);
      }
      return output ? j - offset : out;
    };
    util.binary.hex.encode = util.bytesToHex;
    util.binary.hex.decode = function(hex, output, offset) {
      var out = output;
      if (!out) {
        out = new Uint8Array(Math.ceil(hex.length / 2));
      }
      offset = offset || 0;
      var i = 0, j = offset;
      if (hex.length & 1) {
        i = 1;
        out[j++] = parseInt(hex[0], 16);
      }
      for (; i < hex.length; i += 2) {
        out[j++] = parseInt(hex.substr(i, 2), 16);
      }
      return output ? j - offset : out;
    };
    util.binary.base64.encode = function(input, maxline) {
      var line = "";
      var output = "";
      var chr1, chr2, chr3;
      var i = 0;
      while (i < input.byteLength) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        line += _base64.charAt(chr1 >> 2);
        line += _base64.charAt((chr1 & 3) << 4 | chr2 >> 4);
        if (isNaN(chr2)) {
          line += "==";
        } else {
          line += _base64.charAt((chr2 & 15) << 2 | chr3 >> 6);
          line += isNaN(chr3) ? "=" : _base64.charAt(chr3 & 63);
        }
        if (maxline && line.length > maxline) {
          output += line.substr(0, maxline) + "\r\n";
          line = line.substr(maxline);
        }
      }
      output += line;
      return output;
    };
    util.binary.base64.decode = function(input, output, offset) {
      var out = output;
      if (!out) {
        out = new Uint8Array(Math.ceil(input.length / 4) * 3);
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      offset = offset || 0;
      var enc1, enc2, enc3, enc4;
      var i = 0, j = offset;
      while (i < input.length) {
        enc1 = _base64Idx[input.charCodeAt(i++) - 43];
        enc2 = _base64Idx[input.charCodeAt(i++) - 43];
        enc3 = _base64Idx[input.charCodeAt(i++) - 43];
        enc4 = _base64Idx[input.charCodeAt(i++) - 43];
        out[j++] = enc1 << 2 | enc2 >> 4;
        if (enc3 !== 64) {
          out[j++] = (enc2 & 15) << 4 | enc3 >> 2;
          if (enc4 !== 64) {
            out[j++] = (enc3 & 3) << 6 | enc4;
          }
        }
      }
      return output ? j - offset : out.subarray(0, j);
    };
    util.binary.base58.encode = function(input, maxline) {
      return util.binary.baseN.encode(input, _base58, maxline);
    };
    util.binary.base58.decode = function(input, maxline) {
      return util.binary.baseN.decode(input, _base58, maxline);
    };
    util.text = {
      utf8: {},
      utf16: {}
    };
    util.text.utf8.encode = function(str, output, offset) {
      str = util.encodeUtf8(str);
      var out = output;
      if (!out) {
        out = new Uint8Array(str.length);
      }
      offset = offset || 0;
      var j = offset;
      for (var i = 0; i < str.length; ++i) {
        out[j++] = str.charCodeAt(i);
      }
      return output ? j - offset : out;
    };
    util.text.utf8.decode = function(bytes) {
      return util.decodeUtf8(String.fromCharCode.apply(null, bytes));
    };
    util.text.utf16.encode = function(str, output, offset) {
      var out = output;
      if (!out) {
        out = new Uint8Array(str.length * 2);
      }
      var view = new Uint16Array(out.buffer);
      offset = offset || 0;
      var j = offset;
      var k = offset;
      for (var i = 0; i < str.length; ++i) {
        view[k++] = str.charCodeAt(i);
        j += 2;
      }
      return output ? j - offset : out;
    };
    util.text.utf16.decode = function(bytes) {
      return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
    };
    util.deflate = function(api, bytes, raw) {
      bytes = util.decode64(api.deflate(util.encode64(bytes)).rval);
      if (raw) {
        var start = 2;
        var flg = bytes.charCodeAt(1);
        if (flg & 32) {
          start = 6;
        }
        bytes = bytes.substring(start, bytes.length - 4);
      }
      return bytes;
    };
    util.inflate = function(api, bytes, raw) {
      var rval = api.inflate(util.encode64(bytes)).rval;
      return rval === null ? null : util.decode64(rval);
    };
    var _setStorageObject = /* @__PURE__ */ __name(function(api, id, obj) {
      if (!api) {
        throw new Error("WebStorage not available.");
      }
      var rval;
      if (obj === null) {
        rval = api.removeItem(id);
      } else {
        obj = util.encode64(JSON.stringify(obj));
        rval = api.setItem(id, obj);
      }
      if (typeof rval !== "undefined" && rval.rval !== true) {
        var error = new Error(rval.error.message);
        error.id = rval.error.id;
        error.name = rval.error.name;
        throw error;
      }
    }, "_setStorageObject");
    var _getStorageObject = /* @__PURE__ */ __name(function(api, id) {
      if (!api) {
        throw new Error("WebStorage not available.");
      }
      var rval = api.getItem(id);
      if (api.init) {
        if (rval.rval === null) {
          if (rval.error) {
            var error = new Error(rval.error.message);
            error.id = rval.error.id;
            error.name = rval.error.name;
            throw error;
          }
          rval = null;
        } else {
          rval = rval.rval;
        }
      }
      if (rval !== null) {
        rval = JSON.parse(util.decode64(rval));
      }
      return rval;
    }, "_getStorageObject");
    var _setItem = /* @__PURE__ */ __name(function(api, id, key, data) {
      var obj = _getStorageObject(api, id);
      if (obj === null) {
        obj = {};
      }
      obj[key] = data;
      _setStorageObject(api, id, obj);
    }, "_setItem");
    var _getItem = /* @__PURE__ */ __name(function(api, id, key) {
      var rval = _getStorageObject(api, id);
      if (rval !== null) {
        rval = key in rval ? rval[key] : null;
      }
      return rval;
    }, "_getItem");
    var _removeItem = /* @__PURE__ */ __name(function(api, id, key) {
      var obj = _getStorageObject(api, id);
      if (obj !== null && key in obj) {
        delete obj[key];
        var empty = true;
        for (var prop in obj) {
          empty = false;
          break;
        }
        if (empty) {
          obj = null;
        }
        _setStorageObject(api, id, obj);
      }
    }, "_removeItem");
    var _clearItems = /* @__PURE__ */ __name(function(api, id) {
      _setStorageObject(api, id, null);
    }, "_clearItems");
    var _callStorageFunction = /* @__PURE__ */ __name(function(func, args, location) {
      var rval = null;
      if (typeof location === "undefined") {
        location = ["web", "flash"];
      }
      var type;
      var done = false;
      var exception = null;
      for (var idx in location) {
        type = location[idx];
        try {
          if (type === "flash" || type === "both") {
            if (args[0] === null) {
              throw new Error("Flash local storage not available.");
            }
            rval = func.apply(this, args);
            done = type === "flash";
          }
          if (type === "web" || type === "both") {
            args[0] = localStorage;
            rval = func.apply(this, args);
            done = true;
          }
        } catch (ex) {
          exception = ex;
        }
        if (done) {
          break;
        }
      }
      if (!done) {
        throw exception;
      }
      return rval;
    }, "_callStorageFunction");
    util.setItem = function(api, id, key, data, location) {
      _callStorageFunction(_setItem, arguments, location);
    };
    util.getItem = function(api, id, key, location) {
      return _callStorageFunction(_getItem, arguments, location);
    };
    util.removeItem = function(api, id, key, location) {
      _callStorageFunction(_removeItem, arguments, location);
    };
    util.clearItems = function(api, id, location) {
      _callStorageFunction(_clearItems, arguments, location);
    };
    util.isEmpty = function(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return true;
    };
    util.format = function(format) {
      var re = /%./g;
      var match;
      var part;
      var argi = 0;
      var parts = [];
      var last = 0;
      while (match = re.exec(format)) {
        part = format.substring(last, re.lastIndex - 2);
        if (part.length > 0) {
          parts.push(part);
        }
        last = re.lastIndex;
        var code = match[0][1];
        switch (code) {
          case "s":
          case "o":
            if (argi < arguments.length) {
              parts.push(arguments[argi++ + 1]);
            } else {
              parts.push("<?>");
            }
            break;
          // FIXME: do proper formatting for numbers, etc
          //case 'f':
          //case 'd':
          case "%":
            parts.push("%");
            break;
          default:
            parts.push("<%" + code + "?>");
        }
      }
      parts.push(format.substring(last));
      return parts.join("");
    };
    util.formatNumber = function(number, decimals, dec_point, thousands_sep) {
      var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
      var d = dec_point === void 0 ? "," : dec_point;
      var t = thousands_sep === void 0 ? "." : thousands_sep, s = n < 0 ? "-" : "";
      var i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";
      var j = i.length > 3 ? i.length % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
    util.formatSize = function(size) {
      if (size >= 1073741824) {
        size = util.formatNumber(size / 1073741824, 2, ".", "") + " GiB";
      } else if (size >= 1048576) {
        size = util.formatNumber(size / 1048576, 2, ".", "") + " MiB";
      } else if (size >= 1024) {
        size = util.formatNumber(size / 1024, 0) + " KiB";
      } else {
        size = util.formatNumber(size, 0) + " bytes";
      }
      return size;
    };
    util.bytesFromIP = function(ip) {
      if (ip.indexOf(".") !== -1) {
        return util.bytesFromIPv4(ip);
      }
      if (ip.indexOf(":") !== -1) {
        return util.bytesFromIPv6(ip);
      }
      return null;
    };
    util.bytesFromIPv4 = function(ip) {
      ip = ip.split(".");
      if (ip.length !== 4) {
        return null;
      }
      var b = util.createBuffer();
      for (var i = 0; i < ip.length; ++i) {
        var num = parseInt(ip[i], 10);
        if (isNaN(num)) {
          return null;
        }
        b.putByte(num);
      }
      return b.getBytes();
    };
    util.bytesFromIPv6 = function(ip) {
      var blanks = 0;
      ip = ip.split(":").filter(function(e) {
        if (e.length === 0) ++blanks;
        return true;
      });
      var zeros = (8 - ip.length + blanks) * 2;
      var b = util.createBuffer();
      for (var i = 0; i < 8; ++i) {
        if (!ip[i] || ip[i].length === 0) {
          b.fillWithByte(0, zeros);
          zeros = 0;
          continue;
        }
        var bytes = util.hexToBytes(ip[i]);
        if (bytes.length < 2) {
          b.putByte(0);
        }
        b.putBytes(bytes);
      }
      return b.getBytes();
    };
    util.bytesToIP = function(bytes) {
      if (bytes.length === 4) {
        return util.bytesToIPv4(bytes);
      }
      if (bytes.length === 16) {
        return util.bytesToIPv6(bytes);
      }
      return null;
    };
    util.bytesToIPv4 = function(bytes) {
      if (bytes.length !== 4) {
        return null;
      }
      var ip = [];
      for (var i = 0; i < bytes.length; ++i) {
        ip.push(bytes.charCodeAt(i));
      }
      return ip.join(".");
    };
    util.bytesToIPv6 = function(bytes) {
      if (bytes.length !== 16) {
        return null;
      }
      var ip = [];
      var zeroGroups = [];
      var zeroMaxGroup = 0;
      for (var i = 0; i < bytes.length; i += 2) {
        var hex = util.bytesToHex(bytes[i] + bytes[i + 1]);
        while (hex[0] === "0" && hex !== "0") {
          hex = hex.substr(1);
        }
        if (hex === "0") {
          var last = zeroGroups[zeroGroups.length - 1];
          var idx = ip.length;
          if (!last || idx !== last.end + 1) {
            zeroGroups.push({ start: idx, end: idx });
          } else {
            last.end = idx;
            if (last.end - last.start > zeroGroups[zeroMaxGroup].end - zeroGroups[zeroMaxGroup].start) {
              zeroMaxGroup = zeroGroups.length - 1;
            }
          }
        }
        ip.push(hex);
      }
      if (zeroGroups.length > 0) {
        var group = zeroGroups[zeroMaxGroup];
        if (group.end - group.start > 0) {
          ip.splice(group.start, group.end - group.start + 1, "");
          if (group.start === 0) {
            ip.unshift("");
          }
          if (group.end === 7) {
            ip.push("");
          }
        }
      }
      return ip.join(":");
    };
    util.estimateCores = function(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      if ("cores" in util && !options.update) {
        return callback(null, util.cores);
      }
      if (typeof navigator !== "undefined" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) {
        util.cores = navigator.hardwareConcurrency;
        return callback(null, util.cores);
      }
      if (typeof Worker === "undefined") {
        util.cores = 1;
        return callback(null, util.cores);
      }
      if (typeof Blob === "undefined") {
        util.cores = 2;
        return callback(null, util.cores);
      }
      var blobUrl = URL.createObjectURL(new Blob([
        "(",
        function() {
          self.addEventListener("message", function(e) {
            var st = Date.now();
            var et = st + 4;
            while (Date.now() < et) ;
            self.postMessage({ st, et });
          });
        }.toString(),
        ")()"
      ], { type: "application/javascript" }));
      sample([], 5, 16);
      function sample(max, samples, numWorkers) {
        if (samples === 0) {
          var avg = Math.floor(max.reduce(function(avg2, x) {
            return avg2 + x;
          }, 0) / max.length);
          util.cores = Math.max(1, avg);
          URL.revokeObjectURL(blobUrl);
          return callback(null, util.cores);
        }
        map(numWorkers, function(err, results) {
          max.push(reduce(numWorkers, results));
          sample(max, samples - 1, numWorkers);
        });
      }
      __name(sample, "sample");
      function map(numWorkers, callback2) {
        var workers = [];
        var results = [];
        for (var i = 0; i < numWorkers; ++i) {
          var worker = new Worker(blobUrl);
          worker.addEventListener("message", function(e) {
            results.push(e.data);
            if (results.length === numWorkers) {
              for (var i2 = 0; i2 < numWorkers; ++i2) {
                workers[i2].terminate();
              }
              callback2(null, results);
            }
          });
          workers.push(worker);
        }
        for (var i = 0; i < numWorkers; ++i) {
          workers[i].postMessage(i);
        }
      }
      __name(map, "map");
      function reduce(numWorkers, results) {
        var overlaps = [];
        for (var n = 0; n < numWorkers; ++n) {
          var r1 = results[n];
          var overlap = overlaps[n] = [];
          for (var i = 0; i < numWorkers; ++i) {
            if (n === i) {
              continue;
            }
            var r2 = results[i];
            if (r1.st > r2.st && r1.st < r2.et || r2.st > r1.st && r2.st < r1.et) {
              overlap.push(i);
            }
          }
        }
        return overlaps.reduce(function(max, overlap2) {
          return Math.max(max, overlap2.length);
        }, 0);
      }
      __name(reduce, "reduce");
    };
  }
});

// node_modules/node-forge/lib/cipher.js
var require_cipher = __commonJS({
  "node_modules/node-forge/lib/cipher.js"(exports, module) {
    var forge = require_forge();
    require_util();
    module.exports = forge.cipher = forge.cipher || {};
    forge.cipher.algorithms = forge.cipher.algorithms || {};
    forge.cipher.createCipher = function(algorithm, key) {
      var api = algorithm;
      if (typeof api === "string") {
        api = forge.cipher.getAlgorithm(api);
        if (api) {
          api = api();
        }
      }
      if (!api) {
        throw new Error("Unsupported algorithm: " + algorithm);
      }
      return new forge.cipher.BlockCipher({
        algorithm: api,
        key,
        decrypt: false
      });
    };
    forge.cipher.createDecipher = function(algorithm, key) {
      var api = algorithm;
      if (typeof api === "string") {
        api = forge.cipher.getAlgorithm(api);
        if (api) {
          api = api();
        }
      }
      if (!api) {
        throw new Error("Unsupported algorithm: " + algorithm);
      }
      return new forge.cipher.BlockCipher({
        algorithm: api,
        key,
        decrypt: true
      });
    };
    forge.cipher.registerAlgorithm = function(name, algorithm) {
      name = name.toUpperCase();
      forge.cipher.algorithms[name] = algorithm;
    };
    forge.cipher.getAlgorithm = function(name) {
      name = name.toUpperCase();
      if (name in forge.cipher.algorithms) {
        return forge.cipher.algorithms[name];
      }
      return null;
    };
    var BlockCipher = forge.cipher.BlockCipher = function(options) {
      this.algorithm = options.algorithm;
      this.mode = this.algorithm.mode;
      this.blockSize = this.mode.blockSize;
      this._finish = false;
      this._input = null;
      this.output = null;
      this._op = options.decrypt ? this.mode.decrypt : this.mode.encrypt;
      this._decrypt = options.decrypt;
      this.algorithm.initialize(options);
    };
    BlockCipher.prototype.start = function(options) {
      options = options || {};
      var opts = {};
      for (var key in options) {
        opts[key] = options[key];
      }
      opts.decrypt = this._decrypt;
      this._finish = false;
      this._input = forge.util.createBuffer();
      this.output = options.output || forge.util.createBuffer();
      this.mode.start(opts);
    };
    BlockCipher.prototype.update = function(input) {
      if (input) {
        this._input.putBuffer(input);
      }
      while (!this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish) {
      }
      this._input.compact();
    };
    BlockCipher.prototype.finish = function(pad) {
      if (pad && (this.mode.name === "ECB" || this.mode.name === "CBC")) {
        this.mode.pad = function(input) {
          return pad(this.blockSize, input, false);
        };
        this.mode.unpad = function(output) {
          return pad(this.blockSize, output, true);
        };
      }
      var options = {};
      options.decrypt = this._decrypt;
      options.overflow = this._input.length() % this.blockSize;
      if (!this._decrypt && this.mode.pad) {
        if (!this.mode.pad(this._input, options)) {
          return false;
        }
      }
      this._finish = true;
      this.update();
      if (this._decrypt && this.mode.unpad) {
        if (!this.mode.unpad(this.output, options)) {
          return false;
        }
      }
      if (this.mode.afterFinish) {
        if (!this.mode.afterFinish(this.output, options)) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/node-forge/lib/cipherModes.js
var require_cipherModes = __commonJS({
  "node_modules/node-forge/lib/cipherModes.js"(exports, module) {
    var forge = require_forge();
    require_util();
    forge.cipher = forge.cipher || {};
    var modes = module.exports = forge.cipher.modes = forge.cipher.modes || {};
    modes.ecb = function(options) {
      options = options || {};
      this.name = "ECB";
      this.cipher = options.cipher;
      this.blockSize = options.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = new Array(this._ints);
      this._outBlock = new Array(this._ints);
    };
    modes.ecb.prototype.start = function(options) {
    };
    modes.ecb.prototype.encrypt = function(input, output, finish) {
      if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
        return true;
      }
      for (var i = 0; i < this._ints; ++i) {
        this._inBlock[i] = input.getInt32();
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      for (var i = 0; i < this._ints; ++i) {
        output.putInt32(this._outBlock[i]);
      }
    };
    modes.ecb.prototype.decrypt = function(input, output, finish) {
      if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
        return true;
      }
      for (var i = 0; i < this._ints; ++i) {
        this._inBlock[i] = input.getInt32();
      }
      this.cipher.decrypt(this._inBlock, this._outBlock);
      for (var i = 0; i < this._ints; ++i) {
        output.putInt32(this._outBlock[i]);
      }
    };
    modes.ecb.prototype.pad = function(input, options) {
      var padding = input.length() === this.blockSize ? this.blockSize : this.blockSize - input.length();
      input.fillWithByte(padding, padding);
      return true;
    };
    modes.ecb.prototype.unpad = function(output, options) {
      if (options.overflow > 0) {
        return false;
      }
      var len = output.length();
      var count = output.at(len - 1);
      if (count > this.blockSize << 2) {
        return false;
      }
      output.truncate(count);
      return true;
    };
    modes.cbc = function(options) {
      options = options || {};
      this.name = "CBC";
      this.cipher = options.cipher;
      this.blockSize = options.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = new Array(this._ints);
      this._outBlock = new Array(this._ints);
    };
    modes.cbc.prototype.start = function(options) {
      if (options.iv === null) {
        if (!this._prev) {
          throw new Error("Invalid IV parameter.");
        }
        this._iv = this._prev.slice(0);
      } else if (!("iv" in options)) {
        throw new Error("Invalid IV parameter.");
      } else {
        this._iv = transformIV(options.iv, this.blockSize);
        this._prev = this._iv.slice(0);
      }
    };
    modes.cbc.prototype.encrypt = function(input, output, finish) {
      if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
        return true;
      }
      for (var i = 0; i < this._ints; ++i) {
        this._inBlock[i] = this._prev[i] ^ input.getInt32();
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      for (var i = 0; i < this._ints; ++i) {
        output.putInt32(this._outBlock[i]);
      }
      this._prev = this._outBlock;
    };
    modes.cbc.prototype.decrypt = function(input, output, finish) {
      if (input.length() < this.blockSize && !(finish && input.length() > 0)) {
        return true;
      }
      for (var i = 0; i < this._ints; ++i) {
        this._inBlock[i] = input.getInt32();
      }
      this.cipher.decrypt(this._inBlock, this._outBlock);
      for (var i = 0; i < this._ints; ++i) {
        output.putInt32(this._prev[i] ^ this._outBlock[i]);
      }
      this._prev = this._inBlock.slice(0);
    };
    modes.cbc.prototype.pad = function(input, options) {
      var padding = input.length() === this.blockSize ? this.blockSize : this.blockSize - input.length();
      input.fillWithByte(padding, padding);
      return true;
    };
    modes.cbc.prototype.unpad = function(output, options) {
      if (options.overflow > 0) {
        return false;
      }
      var len = output.length();
      var count = output.at(len - 1);
      if (count > this.blockSize << 2) {
        return false;
      }
      output.truncate(count);
      return true;
    };
    modes.cfb = function(options) {
      options = options || {};
      this.name = "CFB";
      this.cipher = options.cipher;
      this.blockSize = options.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = new Array(this._ints);
      this._partialBlock = new Array(this._ints);
      this._partialOutput = forge.util.createBuffer();
      this._partialBytes = 0;
    };
    modes.cfb.prototype.start = function(options) {
      if (!("iv" in options)) {
        throw new Error("Invalid IV parameter.");
      }
      this._iv = transformIV(options.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    modes.cfb.prototype.encrypt = function(input, output, finish) {
      var inputLength = input.length();
      if (inputLength === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && inputLength >= this.blockSize) {
        for (var i = 0; i < this._ints; ++i) {
          this._inBlock[i] = input.getInt32() ^ this._outBlock[i];
          output.putInt32(this._inBlock[i]);
        }
        return;
      }
      var partialBytes = (this.blockSize - inputLength) % this.blockSize;
      if (partialBytes > 0) {
        partialBytes = this.blockSize - partialBytes;
      }
      this._partialOutput.clear();
      for (var i = 0; i < this._ints; ++i) {
        this._partialBlock[i] = input.getInt32() ^ this._outBlock[i];
        this._partialOutput.putInt32(this._partialBlock[i]);
      }
      if (partialBytes > 0) {
        input.read -= this.blockSize;
      } else {
        for (var i = 0; i < this._ints; ++i) {
          this._inBlock[i] = this._partialBlock[i];
        }
      }
      if (this._partialBytes > 0) {
        this._partialOutput.getBytes(this._partialBytes);
      }
      if (partialBytes > 0 && !finish) {
        output.putBytes(this._partialOutput.getBytes(
          partialBytes - this._partialBytes
        ));
        this._partialBytes = partialBytes;
        return true;
      }
      output.putBytes(this._partialOutput.getBytes(
        inputLength - this._partialBytes
      ));
      this._partialBytes = 0;
    };
    modes.cfb.prototype.decrypt = function(input, output, finish) {
      var inputLength = input.length();
      if (inputLength === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && inputLength >= this.blockSize) {
        for (var i = 0; i < this._ints; ++i) {
          this._inBlock[i] = input.getInt32();
          output.putInt32(this._inBlock[i] ^ this._outBlock[i]);
        }
        return;
      }
      var partialBytes = (this.blockSize - inputLength) % this.blockSize;
      if (partialBytes > 0) {
        partialBytes = this.blockSize - partialBytes;
      }
      this._partialOutput.clear();
      for (var i = 0; i < this._ints; ++i) {
        this._partialBlock[i] = input.getInt32();
        this._partialOutput.putInt32(this._partialBlock[i] ^ this._outBlock[i]);
      }
      if (partialBytes > 0) {
        input.read -= this.blockSize;
      } else {
        for (var i = 0; i < this._ints; ++i) {
          this._inBlock[i] = this._partialBlock[i];
        }
      }
      if (this._partialBytes > 0) {
        this._partialOutput.getBytes(this._partialBytes);
      }
      if (partialBytes > 0 && !finish) {
        output.putBytes(this._partialOutput.getBytes(
          partialBytes - this._partialBytes
        ));
        this._partialBytes = partialBytes;
        return true;
      }
      output.putBytes(this._partialOutput.getBytes(
        inputLength - this._partialBytes
      ));
      this._partialBytes = 0;
    };
    modes.ofb = function(options) {
      options = options || {};
      this.name = "OFB";
      this.cipher = options.cipher;
      this.blockSize = options.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = new Array(this._ints);
      this._partialOutput = forge.util.createBuffer();
      this._partialBytes = 0;
    };
    modes.ofb.prototype.start = function(options) {
      if (!("iv" in options)) {
        throw new Error("Invalid IV parameter.");
      }
      this._iv = transformIV(options.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    modes.ofb.prototype.encrypt = function(input, output, finish) {
      var inputLength = input.length();
      if (input.length() === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && inputLength >= this.blockSize) {
        for (var i = 0; i < this._ints; ++i) {
          output.putInt32(input.getInt32() ^ this._outBlock[i]);
          this._inBlock[i] = this._outBlock[i];
        }
        return;
      }
      var partialBytes = (this.blockSize - inputLength) % this.blockSize;
      if (partialBytes > 0) {
        partialBytes = this.blockSize - partialBytes;
      }
      this._partialOutput.clear();
      for (var i = 0; i < this._ints; ++i) {
        this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
      }
      if (partialBytes > 0) {
        input.read -= this.blockSize;
      } else {
        for (var i = 0; i < this._ints; ++i) {
          this._inBlock[i] = this._outBlock[i];
        }
      }
      if (this._partialBytes > 0) {
        this._partialOutput.getBytes(this._partialBytes);
      }
      if (partialBytes > 0 && !finish) {
        output.putBytes(this._partialOutput.getBytes(
          partialBytes - this._partialBytes
        ));
        this._partialBytes = partialBytes;
        return true;
      }
      output.putBytes(this._partialOutput.getBytes(
        inputLength - this._partialBytes
      ));
      this._partialBytes = 0;
    };
    modes.ofb.prototype.decrypt = modes.ofb.prototype.encrypt;
    modes.ctr = function(options) {
      options = options || {};
      this.name = "CTR";
      this.cipher = options.cipher;
      this.blockSize = options.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = null;
      this._outBlock = new Array(this._ints);
      this._partialOutput = forge.util.createBuffer();
      this._partialBytes = 0;
    };
    modes.ctr.prototype.start = function(options) {
      if (!("iv" in options)) {
        throw new Error("Invalid IV parameter.");
      }
      this._iv = transformIV(options.iv, this.blockSize);
      this._inBlock = this._iv.slice(0);
      this._partialBytes = 0;
    };
    modes.ctr.prototype.encrypt = function(input, output, finish) {
      var inputLength = input.length();
      if (inputLength === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && inputLength >= this.blockSize) {
        for (var i = 0; i < this._ints; ++i) {
          output.putInt32(input.getInt32() ^ this._outBlock[i]);
        }
      } else {
        var partialBytes = (this.blockSize - inputLength) % this.blockSize;
        if (partialBytes > 0) {
          partialBytes = this.blockSize - partialBytes;
        }
        this._partialOutput.clear();
        for (var i = 0; i < this._ints; ++i) {
          this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
        }
        if (partialBytes > 0) {
          input.read -= this.blockSize;
        }
        if (this._partialBytes > 0) {
          this._partialOutput.getBytes(this._partialBytes);
        }
        if (partialBytes > 0 && !finish) {
          output.putBytes(this._partialOutput.getBytes(
            partialBytes - this._partialBytes
          ));
          this._partialBytes = partialBytes;
          return true;
        }
        output.putBytes(this._partialOutput.getBytes(
          inputLength - this._partialBytes
        ));
        this._partialBytes = 0;
      }
      inc32(this._inBlock);
    };
    modes.ctr.prototype.decrypt = modes.ctr.prototype.encrypt;
    modes.gcm = function(options) {
      options = options || {};
      this.name = "GCM";
      this.cipher = options.cipher;
      this.blockSize = options.blockSize || 16;
      this._ints = this.blockSize / 4;
      this._inBlock = new Array(this._ints);
      this._outBlock = new Array(this._ints);
      this._partialOutput = forge.util.createBuffer();
      this._partialBytes = 0;
      this._R = 3774873600;
    };
    modes.gcm.prototype.start = function(options) {
      if (!("iv" in options)) {
        throw new Error("Invalid IV parameter.");
      }
      var iv = forge.util.createBuffer(options.iv);
      this._cipherLength = 0;
      var additionalData;
      if ("additionalData" in options) {
        additionalData = forge.util.createBuffer(options.additionalData);
      } else {
        additionalData = forge.util.createBuffer();
      }
      if ("tagLength" in options) {
        this._tagLength = options.tagLength;
      } else {
        this._tagLength = 128;
      }
      this._tag = null;
      if (options.decrypt) {
        this._tag = forge.util.createBuffer(options.tag).getBytes();
        if (this._tag.length !== this._tagLength / 8) {
          throw new Error("Authentication tag does not match tag length.");
        }
      }
      this._hashBlock = new Array(this._ints);
      this.tag = null;
      this._hashSubkey = new Array(this._ints);
      this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey);
      this.componentBits = 4;
      this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
      var ivLength = iv.length();
      if (ivLength === 12) {
        this._j0 = [iv.getInt32(), iv.getInt32(), iv.getInt32(), 1];
      } else {
        this._j0 = [0, 0, 0, 0];
        while (iv.length() > 0) {
          this._j0 = this.ghash(
            this._hashSubkey,
            this._j0,
            [iv.getInt32(), iv.getInt32(), iv.getInt32(), iv.getInt32()]
          );
        }
        this._j0 = this.ghash(
          this._hashSubkey,
          this._j0,
          [0, 0].concat(from64To32(ivLength * 8))
        );
      }
      this._inBlock = this._j0.slice(0);
      inc32(this._inBlock);
      this._partialBytes = 0;
      additionalData = forge.util.createBuffer(additionalData);
      this._aDataLength = from64To32(additionalData.length() * 8);
      var overflow = additionalData.length() % this.blockSize;
      if (overflow) {
        additionalData.fillWithByte(0, this.blockSize - overflow);
      }
      this._s = [0, 0, 0, 0];
      while (additionalData.length() > 0) {
        this._s = this.ghash(this._hashSubkey, this._s, [
          additionalData.getInt32(),
          additionalData.getInt32(),
          additionalData.getInt32(),
          additionalData.getInt32()
        ]);
      }
    };
    modes.gcm.prototype.encrypt = function(input, output, finish) {
      var inputLength = input.length();
      if (inputLength === 0) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      if (this._partialBytes === 0 && inputLength >= this.blockSize) {
        for (var i = 0; i < this._ints; ++i) {
          output.putInt32(this._outBlock[i] ^= input.getInt32());
        }
        this._cipherLength += this.blockSize;
      } else {
        var partialBytes = (this.blockSize - inputLength) % this.blockSize;
        if (partialBytes > 0) {
          partialBytes = this.blockSize - partialBytes;
        }
        this._partialOutput.clear();
        for (var i = 0; i < this._ints; ++i) {
          this._partialOutput.putInt32(input.getInt32() ^ this._outBlock[i]);
        }
        if (partialBytes <= 0 || finish) {
          if (finish) {
            var overflow = inputLength % this.blockSize;
            this._cipherLength += overflow;
            this._partialOutput.truncate(this.blockSize - overflow);
          } else {
            this._cipherLength += this.blockSize;
          }
          for (var i = 0; i < this._ints; ++i) {
            this._outBlock[i] = this._partialOutput.getInt32();
          }
          this._partialOutput.read -= this.blockSize;
        }
        if (this._partialBytes > 0) {
          this._partialOutput.getBytes(this._partialBytes);
        }
        if (partialBytes > 0 && !finish) {
          input.read -= this.blockSize;
          output.putBytes(this._partialOutput.getBytes(
            partialBytes - this._partialBytes
          ));
          this._partialBytes = partialBytes;
          return true;
        }
        output.putBytes(this._partialOutput.getBytes(
          inputLength - this._partialBytes
        ));
        this._partialBytes = 0;
      }
      this._s = this.ghash(this._hashSubkey, this._s, this._outBlock);
      inc32(this._inBlock);
    };
    modes.gcm.prototype.decrypt = function(input, output, finish) {
      var inputLength = input.length();
      if (inputLength < this.blockSize && !(finish && inputLength > 0)) {
        return true;
      }
      this.cipher.encrypt(this._inBlock, this._outBlock);
      inc32(this._inBlock);
      this._hashBlock[0] = input.getInt32();
      this._hashBlock[1] = input.getInt32();
      this._hashBlock[2] = input.getInt32();
      this._hashBlock[3] = input.getInt32();
      this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
      for (var i = 0; i < this._ints; ++i) {
        output.putInt32(this._outBlock[i] ^ this._hashBlock[i]);
      }
      if (inputLength < this.blockSize) {
        this._cipherLength += inputLength % this.blockSize;
      } else {
        this._cipherLength += this.blockSize;
      }
    };
    modes.gcm.prototype.afterFinish = function(output, options) {
      var rval = true;
      if (options.decrypt && options.overflow) {
        output.truncate(this.blockSize - options.overflow);
      }
      this.tag = forge.util.createBuffer();
      var lengths = this._aDataLength.concat(from64To32(this._cipherLength * 8));
      this._s = this.ghash(this._hashSubkey, this._s, lengths);
      var tag = [];
      this.cipher.encrypt(this._j0, tag);
      for (var i = 0; i < this._ints; ++i) {
        this.tag.putInt32(this._s[i] ^ tag[i]);
      }
      this.tag.truncate(this.tag.length() % (this._tagLength / 8));
      if (options.decrypt && this.tag.bytes() !== this._tag) {
        rval = false;
      }
      return rval;
    };
    modes.gcm.prototype.multiply = function(x, y) {
      var z_i = [0, 0, 0, 0];
      var v_i = y.slice(0);
      for (var i = 0; i < 128; ++i) {
        var x_i = x[i / 32 | 0] & 1 << 31 - i % 32;
        if (x_i) {
          z_i[0] ^= v_i[0];
          z_i[1] ^= v_i[1];
          z_i[2] ^= v_i[2];
          z_i[3] ^= v_i[3];
        }
        this.pow(v_i, v_i);
      }
      return z_i;
    };
    modes.gcm.prototype.pow = function(x, out) {
      var lsb = x[3] & 1;
      for (var i = 3; i > 0; --i) {
        out[i] = x[i] >>> 1 | (x[i - 1] & 1) << 31;
      }
      out[0] = x[0] >>> 1;
      if (lsb) {
        out[0] ^= this._R;
      }
    };
    modes.gcm.prototype.tableMultiply = function(x) {
      var z = [0, 0, 0, 0];
      for (var i = 0; i < 32; ++i) {
        var idx = i / 8 | 0;
        var x_i = x[idx] >>> (7 - i % 8) * 4 & 15;
        var ah = this._m[i][x_i];
        z[0] ^= ah[0];
        z[1] ^= ah[1];
        z[2] ^= ah[2];
        z[3] ^= ah[3];
      }
      return z;
    };
    modes.gcm.prototype.ghash = function(h, y, x) {
      y[0] ^= x[0];
      y[1] ^= x[1];
      y[2] ^= x[2];
      y[3] ^= x[3];
      return this.tableMultiply(y);
    };
    modes.gcm.prototype.generateHashTable = function(h, bits) {
      var multiplier = 8 / bits;
      var perInt = 4 * multiplier;
      var size = 16 * multiplier;
      var m = new Array(size);
      for (var i = 0; i < size; ++i) {
        var tmp = [0, 0, 0, 0];
        var idx = i / perInt | 0;
        var shft = (perInt - 1 - i % perInt) * bits;
        tmp[idx] = 1 << bits - 1 << shft;
        m[i] = this.generateSubHashTable(this.multiply(tmp, h), bits);
      }
      return m;
    };
    modes.gcm.prototype.generateSubHashTable = function(mid, bits) {
      var size = 1 << bits;
      var half = size >>> 1;
      var m = new Array(size);
      m[half] = mid.slice(0);
      var i = half >>> 1;
      while (i > 0) {
        this.pow(m[2 * i], m[i] = []);
        i >>= 1;
      }
      i = 2;
      while (i < half) {
        for (var j = 1; j < i; ++j) {
          var m_i = m[i];
          var m_j = m[j];
          m[i + j] = [
            m_i[0] ^ m_j[0],
            m_i[1] ^ m_j[1],
            m_i[2] ^ m_j[2],
            m_i[3] ^ m_j[3]
          ];
        }
        i *= 2;
      }
      m[0] = [0, 0, 0, 0];
      for (i = half + 1; i < size; ++i) {
        var c = m[i ^ half];
        m[i] = [mid[0] ^ c[0], mid[1] ^ c[1], mid[2] ^ c[2], mid[3] ^ c[3]];
      }
      return m;
    };
    function transformIV(iv, blockSize) {
      if (typeof iv === "string") {
        iv = forge.util.createBuffer(iv);
      }
      if (forge.util.isArray(iv) && iv.length > 4) {
        var tmp = iv;
        iv = forge.util.createBuffer();
        for (var i = 0; i < tmp.length; ++i) {
          iv.putByte(tmp[i]);
        }
      }
      if (iv.length() < blockSize) {
        throw new Error(
          "Invalid IV length; got " + iv.length() + " bytes and expected " + blockSize + " bytes."
        );
      }
      if (!forge.util.isArray(iv)) {
        var ints = [];
        var blocks = blockSize / 4;
        for (var i = 0; i < blocks; ++i) {
          ints.push(iv.getInt32());
        }
        iv = ints;
      }
      return iv;
    }
    __name(transformIV, "transformIV");
    function inc32(block) {
      block[block.length - 1] = block[block.length - 1] + 1 & 4294967295;
    }
    __name(inc32, "inc32");
    function from64To32(num) {
      return [num / 4294967296 | 0, num & 4294967295];
    }
    __name(from64To32, "from64To32");
  }
});

// node_modules/node-forge/lib/aes.js
var require_aes = __commonJS({
  "node_modules/node-forge/lib/aes.js"(exports, module) {
    var forge = require_forge();
    require_cipher();
    require_cipherModes();
    require_util();
    module.exports = forge.aes = forge.aes || {};
    forge.aes.startEncrypting = function(key, iv, output, mode) {
      var cipher = _createCipher({
        key,
        output,
        decrypt: false,
        mode
      });
      cipher.start(iv);
      return cipher;
    };
    forge.aes.createEncryptionCipher = function(key, mode) {
      return _createCipher({
        key,
        output: null,
        decrypt: false,
        mode
      });
    };
    forge.aes.startDecrypting = function(key, iv, output, mode) {
      var cipher = _createCipher({
        key,
        output,
        decrypt: true,
        mode
      });
      cipher.start(iv);
      return cipher;
    };
    forge.aes.createDecryptionCipher = function(key, mode) {
      return _createCipher({
        key,
        output: null,
        decrypt: true,
        mode
      });
    };
    forge.aes.Algorithm = function(name, mode) {
      if (!init) {
        initialize();
      }
      var self2 = this;
      self2.name = name;
      self2.mode = new mode({
        blockSize: 16,
        cipher: {
          encrypt: /* @__PURE__ */ __name(function(inBlock, outBlock) {
            return _updateBlock(self2._w, inBlock, outBlock, false);
          }, "encrypt"),
          decrypt: /* @__PURE__ */ __name(function(inBlock, outBlock) {
            return _updateBlock(self2._w, inBlock, outBlock, true);
          }, "decrypt")
        }
      });
      self2._init = false;
    };
    forge.aes.Algorithm.prototype.initialize = function(options) {
      if (this._init) {
        return;
      }
      var key = options.key;
      var tmp;
      if (typeof key === "string" && (key.length === 16 || key.length === 24 || key.length === 32)) {
        key = forge.util.createBuffer(key);
      } else if (forge.util.isArray(key) && (key.length === 16 || key.length === 24 || key.length === 32)) {
        tmp = key;
        key = forge.util.createBuffer();
        for (var i = 0; i < tmp.length; ++i) {
          key.putByte(tmp[i]);
        }
      }
      if (!forge.util.isArray(key)) {
        tmp = key;
        key = [];
        var len = tmp.length();
        if (len === 16 || len === 24 || len === 32) {
          len = len >>> 2;
          for (var i = 0; i < len; ++i) {
            key.push(tmp.getInt32());
          }
        }
      }
      if (!forge.util.isArray(key) || !(key.length === 4 || key.length === 6 || key.length === 8)) {
        throw new Error("Invalid key parameter.");
      }
      var mode = this.mode.name;
      var encryptOp = ["CFB", "OFB", "CTR", "GCM"].indexOf(mode) !== -1;
      this._w = _expandKey(key, options.decrypt && !encryptOp);
      this._init = true;
    };
    forge.aes._expandKey = function(key, decrypt) {
      if (!init) {
        initialize();
      }
      return _expandKey(key, decrypt);
    };
    forge.aes._updateBlock = _updateBlock;
    registerAlgorithm("AES-ECB", forge.cipher.modes.ecb);
    registerAlgorithm("AES-CBC", forge.cipher.modes.cbc);
    registerAlgorithm("AES-CFB", forge.cipher.modes.cfb);
    registerAlgorithm("AES-OFB", forge.cipher.modes.ofb);
    registerAlgorithm("AES-CTR", forge.cipher.modes.ctr);
    registerAlgorithm("AES-GCM", forge.cipher.modes.gcm);
    function registerAlgorithm(name, mode) {
      var factory = /* @__PURE__ */ __name(function() {
        return new forge.aes.Algorithm(name, mode);
      }, "factory");
      forge.cipher.registerAlgorithm(name, factory);
    }
    __name(registerAlgorithm, "registerAlgorithm");
    var init = false;
    var Nb = 4;
    var sbox;
    var isbox;
    var rcon;
    var mix;
    var imix;
    function initialize() {
      init = true;
      rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var xtime = new Array(256);
      for (var i = 0; i < 128; ++i) {
        xtime[i] = i << 1;
        xtime[i + 128] = i + 128 << 1 ^ 283;
      }
      sbox = new Array(256);
      isbox = new Array(256);
      mix = new Array(4);
      imix = new Array(4);
      for (var i = 0; i < 4; ++i) {
        mix[i] = new Array(256);
        imix[i] = new Array(256);
      }
      var e = 0, ei = 0, e2, e4, e8, sx, sx2, me, ime;
      for (var i = 0; i < 256; ++i) {
        sx = ei ^ ei << 1 ^ ei << 2 ^ ei << 3 ^ ei << 4;
        sx = sx >> 8 ^ sx & 255 ^ 99;
        sbox[e] = sx;
        isbox[sx] = e;
        sx2 = xtime[sx];
        e2 = xtime[e];
        e4 = xtime[e2];
        e8 = xtime[e4];
        me = sx2 << 24 ^ // 2
        sx << 16 ^ // 1
        sx << 8 ^ // 1
        (sx ^ sx2);
        ime = (e2 ^ e4 ^ e8) << 24 ^ // E (14)
        (e ^ e8) << 16 ^ // 9
        (e ^ e4 ^ e8) << 8 ^ // D (13)
        (e ^ e2 ^ e8);
        for (var n = 0; n < 4; ++n) {
          mix[n][e] = me;
          imix[n][sx] = ime;
          me = me << 24 | me >>> 8;
          ime = ime << 24 | ime >>> 8;
        }
        if (e === 0) {
          e = ei = 1;
        } else {
          e = e2 ^ xtime[xtime[xtime[e2 ^ e8]]];
          ei ^= xtime[xtime[ei]];
        }
      }
    }
    __name(initialize, "initialize");
    function _expandKey(key, decrypt) {
      var w = key.slice(0);
      var temp, iNk = 1;
      var Nk = w.length;
      var Nr1 = Nk + 6 + 1;
      var end = Nb * Nr1;
      for (var i = Nk; i < end; ++i) {
        temp = w[i - 1];
        if (i % Nk === 0) {
          temp = sbox[temp >>> 16 & 255] << 24 ^ sbox[temp >>> 8 & 255] << 16 ^ sbox[temp & 255] << 8 ^ sbox[temp >>> 24] ^ rcon[iNk] << 24;
          iNk++;
        } else if (Nk > 6 && i % Nk === 4) {
          temp = sbox[temp >>> 24] << 24 ^ sbox[temp >>> 16 & 255] << 16 ^ sbox[temp >>> 8 & 255] << 8 ^ sbox[temp & 255];
        }
        w[i] = w[i - Nk] ^ temp;
      }
      if (decrypt) {
        var tmp;
        var m0 = imix[0];
        var m1 = imix[1];
        var m2 = imix[2];
        var m3 = imix[3];
        var wnew = w.slice(0);
        end = w.length;
        for (var i = 0, wi = end - Nb; i < end; i += Nb, wi -= Nb) {
          if (i === 0 || i === end - Nb) {
            wnew[i] = w[wi];
            wnew[i + 1] = w[wi + 3];
            wnew[i + 2] = w[wi + 2];
            wnew[i + 3] = w[wi + 1];
          } else {
            for (var n = 0; n < Nb; ++n) {
              tmp = w[wi + n];
              wnew[i + (3 & -n)] = m0[sbox[tmp >>> 24]] ^ m1[sbox[tmp >>> 16 & 255]] ^ m2[sbox[tmp >>> 8 & 255]] ^ m3[sbox[tmp & 255]];
            }
          }
        }
        w = wnew;
      }
      return w;
    }
    __name(_expandKey, "_expandKey");
    function _updateBlock(w, input, output, decrypt) {
      var Nr = w.length / 4 - 1;
      var m0, m1, m2, m3, sub;
      if (decrypt) {
        m0 = imix[0];
        m1 = imix[1];
        m2 = imix[2];
        m3 = imix[3];
        sub = isbox;
      } else {
        m0 = mix[0];
        m1 = mix[1];
        m2 = mix[2];
        m3 = mix[3];
        sub = sbox;
      }
      var a, b, c, d, a2, b2, c2;
      a = input[0] ^ w[0];
      b = input[decrypt ? 3 : 1] ^ w[1];
      c = input[2] ^ w[2];
      d = input[decrypt ? 1 : 3] ^ w[3];
      var i = 3;
      for (var round = 1; round < Nr; ++round) {
        a2 = m0[a >>> 24] ^ m1[b >>> 16 & 255] ^ m2[c >>> 8 & 255] ^ m3[d & 255] ^ w[++i];
        b2 = m0[b >>> 24] ^ m1[c >>> 16 & 255] ^ m2[d >>> 8 & 255] ^ m3[a & 255] ^ w[++i];
        c2 = m0[c >>> 24] ^ m1[d >>> 16 & 255] ^ m2[a >>> 8 & 255] ^ m3[b & 255] ^ w[++i];
        d = m0[d >>> 24] ^ m1[a >>> 16 & 255] ^ m2[b >>> 8 & 255] ^ m3[c & 255] ^ w[++i];
        a = a2;
        b = b2;
        c = c2;
      }
      output[0] = sub[a >>> 24] << 24 ^ sub[b >>> 16 & 255] << 16 ^ sub[c >>> 8 & 255] << 8 ^ sub[d & 255] ^ w[++i];
      output[decrypt ? 3 : 1] = sub[b >>> 24] << 24 ^ sub[c >>> 16 & 255] << 16 ^ sub[d >>> 8 & 255] << 8 ^ sub[a & 255] ^ w[++i];
      output[2] = sub[c >>> 24] << 24 ^ sub[d >>> 16 & 255] << 16 ^ sub[a >>> 8 & 255] << 8 ^ sub[b & 255] ^ w[++i];
      output[decrypt ? 1 : 3] = sub[d >>> 24] << 24 ^ sub[a >>> 16 & 255] << 16 ^ sub[b >>> 8 & 255] << 8 ^ sub[c & 255] ^ w[++i];
    }
    __name(_updateBlock, "_updateBlock");
    function _createCipher(options) {
      options = options || {};
      var mode = (options.mode || "CBC").toUpperCase();
      var algorithm = "AES-" + mode;
      var cipher;
      if (options.decrypt) {
        cipher = forge.cipher.createDecipher(algorithm, options.key);
      } else {
        cipher = forge.cipher.createCipher(algorithm, options.key);
      }
      var start = cipher.start;
      cipher.start = function(iv, options2) {
        var output = null;
        if (options2 instanceof forge.util.ByteBuffer) {
          output = options2;
          options2 = {};
        }
        options2 = options2 || {};
        options2.output = output;
        options2.iv = iv;
        start.call(cipher, options2);
      };
      return cipher;
    }
    __name(_createCipher, "_createCipher");
  }
});

// node_modules/node-forge/lib/oids.js
var require_oids = __commonJS({
  "node_modules/node-forge/lib/oids.js"(exports, module) {
    var forge = require_forge();
    forge.pki = forge.pki || {};
    var oids = module.exports = forge.pki.oids = forge.oids = forge.oids || {};
    function _IN(id, name) {
      oids[id] = name;
      oids[name] = id;
    }
    __name(_IN, "_IN");
    function _I_(id, name) {
      oids[id] = name;
    }
    __name(_I_, "_I_");
    _IN("1.2.840.113549.1.1.1", "rsaEncryption");
    _IN("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
    _IN("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
    _IN("1.2.840.113549.1.1.7", "RSAES-OAEP");
    _IN("1.2.840.113549.1.1.8", "mgf1");
    _IN("1.2.840.113549.1.1.9", "pSpecified");
    _IN("1.2.840.113549.1.1.10", "RSASSA-PSS");
    _IN("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
    _IN("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
    _IN("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
    _IN("1.3.101.112", "EdDSA25519");
    _IN("1.2.840.10040.4.3", "dsa-with-sha1");
    _IN("1.3.14.3.2.7", "desCBC");
    _IN("1.3.14.3.2.26", "sha1");
    _IN("1.3.14.3.2.29", "sha1WithRSASignature");
    _IN("2.16.840.1.101.3.4.2.1", "sha256");
    _IN("2.16.840.1.101.3.4.2.2", "sha384");
    _IN("2.16.840.1.101.3.4.2.3", "sha512");
    _IN("2.16.840.1.101.3.4.2.4", "sha224");
    _IN("2.16.840.1.101.3.4.2.5", "sha512-224");
    _IN("2.16.840.1.101.3.4.2.6", "sha512-256");
    _IN("1.2.840.113549.2.2", "md2");
    _IN("1.2.840.113549.2.5", "md5");
    _IN("1.2.840.113549.1.7.1", "data");
    _IN("1.2.840.113549.1.7.2", "signedData");
    _IN("1.2.840.113549.1.7.3", "envelopedData");
    _IN("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
    _IN("1.2.840.113549.1.7.5", "digestedData");
    _IN("1.2.840.113549.1.7.6", "encryptedData");
    _IN("1.2.840.113549.1.9.1", "emailAddress");
    _IN("1.2.840.113549.1.9.2", "unstructuredName");
    _IN("1.2.840.113549.1.9.3", "contentType");
    _IN("1.2.840.113549.1.9.4", "messageDigest");
    _IN("1.2.840.113549.1.9.5", "signingTime");
    _IN("1.2.840.113549.1.9.6", "counterSignature");
    _IN("1.2.840.113549.1.9.7", "challengePassword");
    _IN("1.2.840.113549.1.9.8", "unstructuredAddress");
    _IN("1.2.840.113549.1.9.14", "extensionRequest");
    _IN("1.2.840.113549.1.9.20", "friendlyName");
    _IN("1.2.840.113549.1.9.21", "localKeyId");
    _IN("1.2.840.113549.1.9.22.1", "x509Certificate");
    _IN("1.2.840.113549.1.12.10.1.1", "keyBag");
    _IN("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
    _IN("1.2.840.113549.1.12.10.1.3", "certBag");
    _IN("1.2.840.113549.1.12.10.1.4", "crlBag");
    _IN("1.2.840.113549.1.12.10.1.5", "secretBag");
    _IN("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
    _IN("1.2.840.113549.1.5.13", "pkcs5PBES2");
    _IN("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
    _IN("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
    _IN("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
    _IN("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
    _IN("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
    _IN("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
    _IN("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
    _IN("1.2.840.113549.2.7", "hmacWithSHA1");
    _IN("1.2.840.113549.2.8", "hmacWithSHA224");
    _IN("1.2.840.113549.2.9", "hmacWithSHA256");
    _IN("1.2.840.113549.2.10", "hmacWithSHA384");
    _IN("1.2.840.113549.2.11", "hmacWithSHA512");
    _IN("1.2.840.113549.3.7", "des-EDE3-CBC");
    _IN("2.16.840.1.101.3.4.1.2", "aes128-CBC");
    _IN("2.16.840.1.101.3.4.1.22", "aes192-CBC");
    _IN("2.16.840.1.101.3.4.1.42", "aes256-CBC");
    _IN("2.5.4.3", "commonName");
    _IN("2.5.4.4", "surname");
    _IN("2.5.4.5", "serialNumber");
    _IN("2.5.4.6", "countryName");
    _IN("2.5.4.7", "localityName");
    _IN("2.5.4.8", "stateOrProvinceName");
    _IN("2.5.4.9", "streetAddress");
    _IN("2.5.4.10", "organizationName");
    _IN("2.5.4.11", "organizationalUnitName");
    _IN("2.5.4.12", "title");
    _IN("2.5.4.13", "description");
    _IN("2.5.4.15", "businessCategory");
    _IN("2.5.4.17", "postalCode");
    _IN("2.5.4.42", "givenName");
    _IN("2.5.4.65", "pseudonym");
    _IN("1.3.6.1.4.1.311.60.2.1.2", "jurisdictionOfIncorporationStateOrProvinceName");
    _IN("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
    _IN("2.16.840.1.113730.1.1", "nsCertType");
    _IN("2.16.840.1.113730.1.13", "nsComment");
    _I_("2.5.29.1", "authorityKeyIdentifier");
    _I_("2.5.29.2", "keyAttributes");
    _I_("2.5.29.3", "certificatePolicies");
    _I_("2.5.29.4", "keyUsageRestriction");
    _I_("2.5.29.5", "policyMapping");
    _I_("2.5.29.6", "subtreesConstraint");
    _I_("2.5.29.7", "subjectAltName");
    _I_("2.5.29.8", "issuerAltName");
    _I_("2.5.29.9", "subjectDirectoryAttributes");
    _I_("2.5.29.10", "basicConstraints");
    _I_("2.5.29.11", "nameConstraints");
    _I_("2.5.29.12", "policyConstraints");
    _I_("2.5.29.13", "basicConstraints");
    _IN("2.5.29.14", "subjectKeyIdentifier");
    _IN("2.5.29.15", "keyUsage");
    _I_("2.5.29.16", "privateKeyUsagePeriod");
    _IN("2.5.29.17", "subjectAltName");
    _IN("2.5.29.18", "issuerAltName");
    _IN("2.5.29.19", "basicConstraints");
    _I_("2.5.29.20", "cRLNumber");
    _I_("2.5.29.21", "cRLReason");
    _I_("2.5.29.22", "expirationDate");
    _I_("2.5.29.23", "instructionCode");
    _I_("2.5.29.24", "invalidityDate");
    _I_("2.5.29.25", "cRLDistributionPoints");
    _I_("2.5.29.26", "issuingDistributionPoint");
    _I_("2.5.29.27", "deltaCRLIndicator");
    _I_("2.5.29.28", "issuingDistributionPoint");
    _I_("2.5.29.29", "certificateIssuer");
    _I_("2.5.29.30", "nameConstraints");
    _IN("2.5.29.31", "cRLDistributionPoints");
    _IN("2.5.29.32", "certificatePolicies");
    _I_("2.5.29.33", "policyMappings");
    _I_("2.5.29.34", "policyConstraints");
    _IN("2.5.29.35", "authorityKeyIdentifier");
    _I_("2.5.29.36", "policyConstraints");
    _IN("2.5.29.37", "extKeyUsage");
    _I_("2.5.29.46", "freshestCRL");
    _I_("2.5.29.54", "inhibitAnyPolicy");
    _IN("1.3.6.1.4.1.11129.2.4.2", "timestampList");
    _IN("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
    _IN("1.3.6.1.5.5.7.3.1", "serverAuth");
    _IN("1.3.6.1.5.5.7.3.2", "clientAuth");
    _IN("1.3.6.1.5.5.7.3.3", "codeSigning");
    _IN("1.3.6.1.5.5.7.3.4", "emailProtection");
    _IN("1.3.6.1.5.5.7.3.8", "timeStamping");
  }
});

// node_modules/node-forge/lib/asn1.js
var require_asn1 = __commonJS({
  "node_modules/node-forge/lib/asn1.js"(exports, module) {
    var forge = require_forge();
    require_util();
    require_oids();
    var asn1 = module.exports = forge.asn1 = forge.asn1 || {};
    asn1.Class = {
      UNIVERSAL: 0,
      APPLICATION: 64,
      CONTEXT_SPECIFIC: 128,
      PRIVATE: 192
    };
    asn1.Type = {
      NONE: 0,
      BOOLEAN: 1,
      INTEGER: 2,
      BITSTRING: 3,
      OCTETSTRING: 4,
      NULL: 5,
      OID: 6,
      ODESC: 7,
      EXTERNAL: 8,
      REAL: 9,
      ENUMERATED: 10,
      EMBEDDED: 11,
      UTF8: 12,
      ROID: 13,
      SEQUENCE: 16,
      SET: 17,
      PRINTABLESTRING: 19,
      IA5STRING: 22,
      UTCTIME: 23,
      GENERALIZEDTIME: 24,
      BMPSTRING: 30
    };
    asn1.maxDepth = 256;
    asn1.create = function(tagClass, type, constructed, value, options) {
      if (forge.util.isArray(value)) {
        var tmp = [];
        for (var i = 0; i < value.length; ++i) {
          if (value[i] !== void 0) {
            tmp.push(value[i]);
          }
        }
        value = tmp;
      }
      var obj = {
        tagClass,
        type,
        constructed,
        composed: constructed || forge.util.isArray(value),
        value
      };
      if (options && "bitStringContents" in options) {
        obj.bitStringContents = options.bitStringContents;
        obj.original = asn1.copy(obj);
      }
      return obj;
    };
    asn1.copy = function(obj, options) {
      var copy;
      if (forge.util.isArray(obj)) {
        copy = [];
        for (var i = 0; i < obj.length; ++i) {
          copy.push(asn1.copy(obj[i], options));
        }
        return copy;
      }
      if (typeof obj === "string") {
        return obj;
      }
      copy = {
        tagClass: obj.tagClass,
        type: obj.type,
        constructed: obj.constructed,
        composed: obj.composed,
        value: asn1.copy(obj.value, options)
      };
      if (options && !options.excludeBitStringContents) {
        copy.bitStringContents = obj.bitStringContents;
      }
      return copy;
    };
    asn1.equals = function(obj1, obj2, options) {
      if (forge.util.isArray(obj1)) {
        if (!forge.util.isArray(obj2)) {
          return false;
        }
        if (obj1.length !== obj2.length) {
          return false;
        }
        for (var i = 0; i < obj1.length; ++i) {
          if (!asn1.equals(obj1[i], obj2[i])) {
            return false;
          }
        }
        return true;
      }
      if (typeof obj1 !== typeof obj2) {
        return false;
      }
      if (typeof obj1 === "string") {
        return obj1 === obj2;
      }
      var equal = obj1.tagClass === obj2.tagClass && obj1.type === obj2.type && obj1.constructed === obj2.constructed && obj1.composed === obj2.composed && asn1.equals(obj1.value, obj2.value);
      if (options && options.includeBitStringContents) {
        equal = equal && obj1.bitStringContents === obj2.bitStringContents;
      }
      return equal;
    };
    asn1.getBerValueLength = function(b) {
      var b2 = b.getByte();
      if (b2 === 128) {
        return void 0;
      }
      var length;
      var longForm = b2 & 128;
      if (!longForm) {
        length = b2;
      } else {
        length = b.getInt((b2 & 127) << 3);
      }
      return length;
    };
    function _checkBufferLength(bytes, remaining, n) {
      if (n > remaining) {
        var error = new Error("Too few bytes to parse DER.");
        error.available = bytes.length();
        error.remaining = remaining;
        error.requested = n;
        throw error;
      }
    }
    __name(_checkBufferLength, "_checkBufferLength");
    var _getValueLength = /* @__PURE__ */ __name(function(bytes, remaining) {
      var b2 = bytes.getByte();
      remaining--;
      if (b2 === 128) {
        return void 0;
      }
      var length;
      var longForm = b2 & 128;
      if (!longForm) {
        length = b2;
      } else {
        var longFormBytes = b2 & 127;
        _checkBufferLength(bytes, remaining, longFormBytes);
        length = bytes.getInt(longFormBytes << 3);
      }
      if (length < 0) {
        throw new Error("Negative length: " + length);
      }
      return length;
    }, "_getValueLength");
    asn1.fromDer = function(bytes, options) {
      if (options === void 0) {
        options = {
          strict: true,
          parseAllBytes: true,
          decodeBitStrings: true
        };
      }
      if (typeof options === "boolean") {
        options = {
          strict: options,
          parseAllBytes: true,
          decodeBitStrings: true
        };
      }
      if (!("strict" in options)) {
        options.strict = true;
      }
      if (!("parseAllBytes" in options)) {
        options.parseAllBytes = true;
      }
      if (!("decodeBitStrings" in options)) {
        options.decodeBitStrings = true;
      }
      if (!("maxDepth" in options)) {
        options.maxDepth = asn1.maxDepth;
      }
      if (typeof bytes === "string") {
        bytes = forge.util.createBuffer(bytes);
      }
      var byteCount = bytes.length();
      var value = _fromDer(bytes, bytes.length(), 0, options);
      if (options.parseAllBytes && bytes.length() !== 0) {
        var error = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
        error.byteCount = byteCount;
        error.remaining = bytes.length();
        throw error;
      }
      return value;
    };
    function _fromDer(bytes, remaining, depth, options) {
      if (depth >= options.maxDepth) {
        throw new Error("ASN.1 parsing error: Max depth exceeded.");
      }
      var start;
      _checkBufferLength(bytes, remaining, 2);
      var b1 = bytes.getByte();
      remaining--;
      var tagClass = b1 & 192;
      var type = b1 & 31;
      start = bytes.length();
      var length = _getValueLength(bytes, remaining);
      remaining -= start - bytes.length();
      if (length !== void 0 && length > remaining) {
        if (options.strict) {
          var error = new Error("Too few bytes to read ASN.1 value.");
          error.available = bytes.length();
          error.remaining = remaining;
          error.requested = length;
          throw error;
        }
        length = remaining;
      }
      var value;
      var bitStringContents;
      var constructed = (b1 & 32) === 32;
      if (constructed) {
        value = [];
        if (length === void 0) {
          for (; ; ) {
            _checkBufferLength(bytes, remaining, 2);
            if (bytes.bytes(2) === String.fromCharCode(0, 0)) {
              bytes.getBytes(2);
              remaining -= 2;
              break;
            }
            start = bytes.length();
            value.push(_fromDer(bytes, remaining, depth + 1, options));
            remaining -= start - bytes.length();
          }
        } else {
          while (length > 0) {
            start = bytes.length();
            value.push(_fromDer(bytes, length, depth + 1, options));
            remaining -= start - bytes.length();
            length -= start - bytes.length();
          }
        }
      }
      if (value === void 0 && tagClass === asn1.Class.UNIVERSAL && type === asn1.Type.BITSTRING) {
        bitStringContents = bytes.bytes(length);
      }
      if (value === void 0 && options.decodeBitStrings && tagClass === asn1.Class.UNIVERSAL && // FIXME: OCTET STRINGs not yet supported here
      // .. other parts of forge expect to decode OCTET STRINGs manually
      type === asn1.Type.BITSTRING && length > 1) {
        var savedRead = bytes.read;
        var savedRemaining = remaining;
        var unused = 0;
        if (type === asn1.Type.BITSTRING) {
          _checkBufferLength(bytes, remaining, 1);
          unused = bytes.getByte();
          remaining--;
        }
        if (unused === 0) {
          try {
            start = bytes.length();
            var subOptions = {
              // enforce strict mode to avoid parsing ASN.1 from plain data
              strict: true,
              decodeBitStrings: true
            };
            var composed = _fromDer(bytes, remaining, depth + 1, subOptions);
            var used = start - bytes.length();
            remaining -= used;
            if (type == asn1.Type.BITSTRING) {
              used++;
            }
            var tc = composed.tagClass;
            if (used === length && (tc === asn1.Class.UNIVERSAL || tc === asn1.Class.CONTEXT_SPECIFIC)) {
              value = [composed];
            }
          } catch (ex) {
          }
        }
        if (value === void 0) {
          bytes.read = savedRead;
          remaining = savedRemaining;
        }
      }
      if (value === void 0) {
        if (length === void 0) {
          if (options.strict) {
            throw new Error("Non-constructed ASN.1 object of indefinite length.");
          }
          length = remaining;
        }
        if (type === asn1.Type.BMPSTRING) {
          value = "";
          for (; length > 0; length -= 2) {
            _checkBufferLength(bytes, remaining, 2);
            value += String.fromCharCode(bytes.getInt16());
            remaining -= 2;
          }
        } else {
          value = bytes.getBytes(length);
          remaining -= length;
        }
      }
      var asn1Options = bitStringContents === void 0 ? null : {
        bitStringContents
      };
      return asn1.create(tagClass, type, constructed, value, asn1Options);
    }
    __name(_fromDer, "_fromDer");
    asn1.toDer = function(obj) {
      var bytes = forge.util.createBuffer();
      var b1 = obj.tagClass | obj.type;
      var value = forge.util.createBuffer();
      var useBitStringContents = false;
      if ("bitStringContents" in obj) {
        useBitStringContents = true;
        if (obj.original) {
          useBitStringContents = asn1.equals(obj, obj.original);
        }
      }
      if (useBitStringContents) {
        value.putBytes(obj.bitStringContents);
      } else if (obj.composed) {
        if (obj.constructed) {
          b1 |= 32;
        } else {
          value.putByte(0);
        }
        for (var i = 0; i < obj.value.length; ++i) {
          if (obj.value[i] !== void 0) {
            value.putBuffer(asn1.toDer(obj.value[i]));
          }
        }
      } else {
        if (obj.type === asn1.Type.BMPSTRING) {
          for (var i = 0; i < obj.value.length; ++i) {
            value.putInt16(obj.value.charCodeAt(i));
          }
        } else {
          if (obj.type === asn1.Type.INTEGER && obj.value.length > 1 && // leading 0x00 for positive integer
          (obj.value.charCodeAt(0) === 0 && (obj.value.charCodeAt(1) & 128) === 0 || // leading 0xFF for negative integer
          obj.value.charCodeAt(0) === 255 && (obj.value.charCodeAt(1) & 128) === 128)) {
            value.putBytes(obj.value.substr(1));
          } else {
            value.putBytes(obj.value);
          }
        }
      }
      bytes.putByte(b1);
      if (value.length() <= 127) {
        bytes.putByte(value.length() & 127);
      } else {
        var len = value.length();
        var lenBytes = "";
        do {
          lenBytes += String.fromCharCode(len & 255);
          len = len >>> 8;
        } while (len > 0);
        bytes.putByte(lenBytes.length | 128);
        for (var i = lenBytes.length - 1; i >= 0; --i) {
          bytes.putByte(lenBytes.charCodeAt(i));
        }
      }
      bytes.putBuffer(value);
      return bytes;
    };
    asn1.oidToDer = function(oid) {
      var values = oid.split(".");
      var bytes = forge.util.createBuffer();
      bytes.putByte(40 * parseInt(values[0], 10) + parseInt(values[1], 10));
      var last, valueBytes, value, b;
      for (var i = 2; i < values.length; ++i) {
        last = true;
        valueBytes = [];
        value = parseInt(values[i], 10);
        if (value > 4294967295) {
          throw new Error("OID value too large; max is 32-bits.");
        }
        do {
          b = value & 127;
          value = value >>> 7;
          if (!last) {
            b |= 128;
          }
          valueBytes.push(b);
          last = false;
        } while (value > 0);
        for (var n = valueBytes.length - 1; n >= 0; --n) {
          bytes.putByte(valueBytes[n]);
        }
      }
      return bytes;
    };
    asn1.derToOid = function(bytes) {
      var oid;
      if (typeof bytes === "string") {
        bytes = forge.util.createBuffer(bytes);
      }
      var b = bytes.getByte();
      oid = Math.floor(b / 40) + "." + b % 40;
      var value = 0;
      while (bytes.length() > 0) {
        if (value > 70368744177663) {
          throw new Error("OID value too large; max is 53-bits.");
        }
        b = bytes.getByte();
        value = value * 128;
        if (b & 128) {
          value += b & 127;
        } else {
          oid += "." + (value + b);
          value = 0;
        }
      }
      return oid;
    };
    asn1.utcTimeToDate = function(utc) {
      var date = /* @__PURE__ */ new Date();
      var year = parseInt(utc.substr(0, 2), 10);
      year = year >= 50 ? 1900 + year : 2e3 + year;
      var MM = parseInt(utc.substr(2, 2), 10) - 1;
      var DD = parseInt(utc.substr(4, 2), 10);
      var hh = parseInt(utc.substr(6, 2), 10);
      var mm = parseInt(utc.substr(8, 2), 10);
      var ss = 0;
      if (utc.length > 11) {
        var c = utc.charAt(10);
        var end = 10;
        if (c !== "+" && c !== "-") {
          ss = parseInt(utc.substr(10, 2), 10);
          end += 2;
        }
      }
      date.setUTCFullYear(year, MM, DD);
      date.setUTCHours(hh, mm, ss, 0);
      if (end) {
        c = utc.charAt(end);
        if (c === "+" || c === "-") {
          var hhoffset = parseInt(utc.substr(end + 1, 2), 10);
          var mmoffset = parseInt(utc.substr(end + 4, 2), 10);
          var offset = hhoffset * 60 + mmoffset;
          offset *= 6e4;
          if (c === "+") {
            date.setTime(+date - offset);
          } else {
            date.setTime(+date + offset);
          }
        }
      }
      return date;
    };
    asn1.generalizedTimeToDate = function(gentime) {
      var date = /* @__PURE__ */ new Date();
      var YYYY = parseInt(gentime.substr(0, 4), 10);
      var MM = parseInt(gentime.substr(4, 2), 10) - 1;
      var DD = parseInt(gentime.substr(6, 2), 10);
      var hh = parseInt(gentime.substr(8, 2), 10);
      var mm = parseInt(gentime.substr(10, 2), 10);
      var ss = parseInt(gentime.substr(12, 2), 10);
      var fff = 0;
      var offset = 0;
      var isUTC = false;
      if (gentime.charAt(gentime.length - 1) === "Z") {
        isUTC = true;
      }
      var end = gentime.length - 5, c = gentime.charAt(end);
      if (c === "+" || c === "-") {
        var hhoffset = parseInt(gentime.substr(end + 1, 2), 10);
        var mmoffset = parseInt(gentime.substr(end + 4, 2), 10);
        offset = hhoffset * 60 + mmoffset;
        offset *= 6e4;
        if (c === "+") {
          offset *= -1;
        }
        isUTC = true;
      }
      if (gentime.charAt(14) === ".") {
        fff = parseFloat(gentime.substr(14), 10) * 1e3;
      }
      if (isUTC) {
        date.setUTCFullYear(YYYY, MM, DD);
        date.setUTCHours(hh, mm, ss, fff);
        date.setTime(+date + offset);
      } else {
        date.setFullYear(YYYY, MM, DD);
        date.setHours(hh, mm, ss, fff);
      }
      return date;
    };
    asn1.dateToUtcTime = function(date) {
      if (typeof date === "string") {
        return date;
      }
      var rval = "";
      var format = [];
      format.push(("" + date.getUTCFullYear()).substr(2));
      format.push("" + (date.getUTCMonth() + 1));
      format.push("" + date.getUTCDate());
      format.push("" + date.getUTCHours());
      format.push("" + date.getUTCMinutes());
      format.push("" + date.getUTCSeconds());
      for (var i = 0; i < format.length; ++i) {
        if (format[i].length < 2) {
          rval += "0";
        }
        rval += format[i];
      }
      rval += "Z";
      return rval;
    };
    asn1.dateToGeneralizedTime = function(date) {
      if (typeof date === "string") {
        return date;
      }
      var rval = "";
      var format = [];
      format.push("" + date.getUTCFullYear());
      format.push("" + (date.getUTCMonth() + 1));
      format.push("" + date.getUTCDate());
      format.push("" + date.getUTCHours());
      format.push("" + date.getUTCMinutes());
      format.push("" + date.getUTCSeconds());
      for (var i = 0; i < format.length; ++i) {
        if (format[i].length < 2) {
          rval += "0";
        }
        rval += format[i];
      }
      rval += "Z";
      return rval;
    };
    asn1.integerToDer = function(x) {
      var rval = forge.util.createBuffer();
      if (x >= -128 && x < 128) {
        return rval.putSignedInt(x, 8);
      }
      if (x >= -32768 && x < 32768) {
        return rval.putSignedInt(x, 16);
      }
      if (x >= -8388608 && x < 8388608) {
        return rval.putSignedInt(x, 24);
      }
      if (x >= -2147483648 && x < 2147483648) {
        return rval.putSignedInt(x, 32);
      }
      var error = new Error("Integer too large; max is 32-bits.");
      error.integer = x;
      throw error;
    };
    asn1.derToInteger = function(bytes) {
      if (typeof bytes === "string") {
        bytes = forge.util.createBuffer(bytes);
      }
      var n = bytes.length() * 8;
      if (n > 32) {
        throw new Error("Integer too large; max is 32-bits.");
      }
      return bytes.getSignedInt(n);
    };
    asn1.validate = function(obj, v, capture, errors) {
      var rval = false;
      if ((obj.tagClass === v.tagClass || typeof v.tagClass === "undefined") && (obj.type === v.type || typeof v.type === "undefined")) {
        if (obj.constructed === v.constructed || typeof v.constructed === "undefined") {
          rval = true;
          if (v.value && forge.util.isArray(v.value)) {
            var j = 0;
            for (var i = 0; rval && i < v.value.length; ++i) {
              var schemaItem = v.value[i];
              rval = !!schemaItem.optional;
              var objChild = obj.value[j];
              if (!objChild) {
                if (!schemaItem.optional) {
                  rval = false;
                  if (errors) {
                    errors.push("[" + v.name + '] Missing required element. Expected tag class "' + schemaItem.tagClass + '", type "' + schemaItem.type + '"');
                  }
                }
                continue;
              }
              var schemaHasTag = typeof schemaItem.tagClass !== "undefined" && typeof schemaItem.type !== "undefined";
              if (schemaHasTag && (objChild.tagClass !== schemaItem.tagClass || objChild.type !== schemaItem.type)) {
                if (schemaItem.optional) {
                  rval = true;
                  continue;
                } else {
                  rval = false;
                  if (errors) {
                    errors.push("[" + v.name + "] Tag mismatch. Expected (" + schemaItem.tagClass + "," + schemaItem.type + "), got (" + objChild.tagClass + "," + objChild.type + ")");
                  }
                  break;
                }
              }
              var childRval = asn1.validate(objChild, schemaItem, capture, errors);
              if (childRval) {
                ++j;
                rval = true;
              } else if (schemaItem.optional) {
                rval = true;
              } else {
                rval = false;
                break;
              }
            }
          }
          if (rval && capture) {
            if (v.capture) {
              capture[v.capture] = obj.value;
            }
            if (v.captureAsn1) {
              capture[v.captureAsn1] = obj;
            }
            if (v.captureBitStringContents && "bitStringContents" in obj) {
              capture[v.captureBitStringContents] = obj.bitStringContents;
            }
            if (v.captureBitStringValue && "bitStringContents" in obj) {
              var value;
              if (obj.bitStringContents.length < 2) {
                capture[v.captureBitStringValue] = "";
              } else {
                var unused = obj.bitStringContents.charCodeAt(0);
                if (unused !== 0) {
                  throw new Error(
                    "captureBitStringValue only supported for zero unused bits"
                  );
                }
                capture[v.captureBitStringValue] = obj.bitStringContents.slice(1);
              }
            }
          }
        } else if (errors) {
          errors.push(
            "[" + v.name + '] Expected constructed "' + v.constructed + '", got "' + obj.constructed + '"'
          );
        }
      } else if (errors) {
        if (obj.tagClass !== v.tagClass) {
          errors.push(
            "[" + v.name + '] Expected tag class "' + v.tagClass + '", got "' + obj.tagClass + '"'
          );
        }
        if (obj.type !== v.type) {
          errors.push(
            "[" + v.name + '] Expected type "' + v.type + '", got "' + obj.type + '"'
          );
        }
      }
      return rval;
    };
    var _nonLatinRegex = /[^\\u0000-\\u00ff]/;
    asn1.prettyPrint = function(obj, level, indentation) {
      var rval = "";
      level = level || 0;
      indentation = indentation || 2;
      if (level > 0) {
        rval += "\n";
      }
      var indent = "";
      for (var i = 0; i < level * indentation; ++i) {
        indent += " ";
      }
      rval += indent + "Tag: ";
      switch (obj.tagClass) {
        case asn1.Class.UNIVERSAL:
          rval += "Universal:";
          break;
        case asn1.Class.APPLICATION:
          rval += "Application:";
          break;
        case asn1.Class.CONTEXT_SPECIFIC:
          rval += "Context-Specific:";
          break;
        case asn1.Class.PRIVATE:
          rval += "Private:";
          break;
      }
      if (obj.tagClass === asn1.Class.UNIVERSAL) {
        rval += obj.type;
        switch (obj.type) {
          case asn1.Type.NONE:
            rval += " (None)";
            break;
          case asn1.Type.BOOLEAN:
            rval += " (Boolean)";
            break;
          case asn1.Type.INTEGER:
            rval += " (Integer)";
            break;
          case asn1.Type.BITSTRING:
            rval += " (Bit string)";
            break;
          case asn1.Type.OCTETSTRING:
            rval += " (Octet string)";
            break;
          case asn1.Type.NULL:
            rval += " (Null)";
            break;
          case asn1.Type.OID:
            rval += " (Object Identifier)";
            break;
          case asn1.Type.ODESC:
            rval += " (Object Descriptor)";
            break;
          case asn1.Type.EXTERNAL:
            rval += " (External or Instance of)";
            break;
          case asn1.Type.REAL:
            rval += " (Real)";
            break;
          case asn1.Type.ENUMERATED:
            rval += " (Enumerated)";
            break;
          case asn1.Type.EMBEDDED:
            rval += " (Embedded PDV)";
            break;
          case asn1.Type.UTF8:
            rval += " (UTF8)";
            break;
          case asn1.Type.ROID:
            rval += " (Relative Object Identifier)";
            break;
          case asn1.Type.SEQUENCE:
            rval += " (Sequence)";
            break;
          case asn1.Type.SET:
            rval += " (Set)";
            break;
          case asn1.Type.PRINTABLESTRING:
            rval += " (Printable String)";
            break;
          case asn1.Type.IA5String:
            rval += " (IA5String (ASCII))";
            break;
          case asn1.Type.UTCTIME:
            rval += " (UTC time)";
            break;
          case asn1.Type.GENERALIZEDTIME:
            rval += " (Generalized time)";
            break;
          case asn1.Type.BMPSTRING:
            rval += " (BMP String)";
            break;
        }
      } else {
        rval += obj.type;
      }
      rval += "\n";
      rval += indent + "Constructed: " + obj.constructed + "\n";
      if (obj.composed) {
        var subvalues = 0;
        var sub = "";
        for (var i = 0; i < obj.value.length; ++i) {
          if (obj.value[i] !== void 0) {
            subvalues += 1;
            sub += asn1.prettyPrint(obj.value[i], level + 1, indentation);
            if (i + 1 < obj.value.length) {
              sub += ",";
            }
          }
        }
        rval += indent + "Sub values: " + subvalues + sub;
      } else {
        rval += indent + "Value: ";
        if (obj.type === asn1.Type.OID) {
          var oid = asn1.derToOid(obj.value);
          rval += oid;
          if (forge.pki && forge.pki.oids) {
            if (oid in forge.pki.oids) {
              rval += " (" + forge.pki.oids[oid] + ") ";
            }
          }
        }
        if (obj.type === asn1.Type.INTEGER) {
          try {
            rval += asn1.derToInteger(obj.value);
          } catch (ex) {
            rval += "0x" + forge.util.bytesToHex(obj.value);
          }
        } else if (obj.type === asn1.Type.BITSTRING) {
          if (obj.value.length > 1) {
            rval += "0x" + forge.util.bytesToHex(obj.value.slice(1));
          } else {
            rval += "(none)";
          }
          if (obj.value.length > 0) {
            var unused = obj.value.charCodeAt(0);
            if (unused == 1) {
              rval += " (1 unused bit shown)";
            } else if (unused > 1) {
              rval += " (" + unused + " unused bits shown)";
            }
          }
        } else if (obj.type === asn1.Type.OCTETSTRING) {
          if (!_nonLatinRegex.test(obj.value)) {
            rval += "(" + obj.value + ") ";
          }
          rval += "0x" + forge.util.bytesToHex(obj.value);
        } else if (obj.type === asn1.Type.UTF8) {
          try {
            rval += forge.util.decodeUtf8(obj.value);
          } catch (e) {
            if (e.message === "URI malformed") {
              rval += "0x" + forge.util.bytesToHex(obj.value) + " (malformed UTF8)";
            } else {
              throw e;
            }
          }
        } else if (obj.type === asn1.Type.PRINTABLESTRING || obj.type === asn1.Type.IA5String) {
          rval += obj.value;
        } else if (_nonLatinRegex.test(obj.value)) {
          rval += "0x" + forge.util.bytesToHex(obj.value);
        } else if (obj.value.length === 0) {
          rval += "[null]";
        } else {
          rval += obj.value;
        }
      }
      return rval;
    };
  }
});

// node_modules/node-forge/lib/md.js
var require_md = __commonJS({
  "node_modules/node-forge/lib/md.js"(exports, module) {
    var forge = require_forge();
    module.exports = forge.md = forge.md || {};
    forge.md.algorithms = forge.md.algorithms || {};
  }
});

// node_modules/node-forge/lib/hmac.js
var require_hmac = __commonJS({
  "node_modules/node-forge/lib/hmac.js"(exports, module) {
    var forge = require_forge();
    require_md();
    require_util();
    var hmac = module.exports = forge.hmac = forge.hmac || {};
    hmac.create = function() {
      var _key = null;
      var _md = null;
      var _ipadding = null;
      var _opadding = null;
      var ctx = {};
      ctx.start = function(md, key) {
        if (md !== null) {
          if (typeof md === "string") {
            md = md.toLowerCase();
            if (md in forge.md.algorithms) {
              _md = forge.md.algorithms[md].create();
            } else {
              throw new Error('Unknown hash algorithm "' + md + '"');
            }
          } else {
            _md = md;
          }
        }
        if (key === null) {
          key = _key;
        } else {
          if (typeof key === "string") {
            key = forge.util.createBuffer(key);
          } else if (forge.util.isArray(key)) {
            var tmp = key;
            key = forge.util.createBuffer();
            for (var i = 0; i < tmp.length; ++i) {
              key.putByte(tmp[i]);
            }
          }
          var keylen = key.length();
          if (keylen > _md.blockLength) {
            _md.start();
            _md.update(key.bytes());
            key = _md.digest();
          }
          _ipadding = forge.util.createBuffer();
          _opadding = forge.util.createBuffer();
          keylen = key.length();
          for (var i = 0; i < keylen; ++i) {
            var tmp = key.at(i);
            _ipadding.putByte(54 ^ tmp);
            _opadding.putByte(92 ^ tmp);
          }
          if (keylen < _md.blockLength) {
            var tmp = _md.blockLength - keylen;
            for (var i = 0; i < tmp; ++i) {
              _ipadding.putByte(54);
              _opadding.putByte(92);
            }
          }
          _key = key;
          _ipadding = _ipadding.bytes();
          _opadding = _opadding.bytes();
        }
        _md.start();
        _md.update(_ipadding);
      };
      ctx.update = function(bytes) {
        _md.update(bytes);
      };
      ctx.getMac = function() {
        var inner = _md.digest().bytes();
        _md.start();
        _md.update(_opadding);
        _md.update(inner);
        return _md.digest();
      };
      ctx.digest = ctx.getMac;
      return ctx;
    };
  }
});

// node_modules/node-forge/lib/md5.js
var require_md5 = __commonJS({
  "node_modules/node-forge/lib/md5.js"(exports, module) {
    var forge = require_forge();
    require_md();
    require_util();
    var md5 = module.exports = forge.md5 = forge.md5 || {};
    forge.md.md5 = forge.md.algorithms.md5 = md5;
    md5.create = function() {
      if (!_initialized) {
        _init();
      }
      var _state = null;
      var _input = forge.util.createBuffer();
      var _w = new Array(16);
      var md = {
        algorithm: "md5",
        blockLength: 64,
        digestLength: 16,
        // 56-bit length of message so far (does not including padding)
        messageLength: 0,
        // true message length
        fullMessageLength: null,
        // size of message length in bytes
        messageLengthSize: 8
      };
      md.start = function() {
        md.messageLength = 0;
        md.fullMessageLength = md.messageLength64 = [];
        var int32s = md.messageLengthSize / 4;
        for (var i = 0; i < int32s; ++i) {
          md.fullMessageLength.push(0);
        }
        _input = forge.util.createBuffer();
        _state = {
          h0: 1732584193,
          h1: 4023233417,
          h2: 2562383102,
          h3: 271733878
        };
        return md;
      };
      md.start();
      md.update = function(msg, encoding) {
        if (encoding === "utf8") {
          msg = forge.util.encodeUtf8(msg);
        }
        var len = msg.length;
        md.messageLength += len;
        len = [len / 4294967296 >>> 0, len >>> 0];
        for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
          md.fullMessageLength[i] += len[1];
          len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
          md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
          len[0] = len[1] / 4294967296 >>> 0;
        }
        _input.putBytes(msg);
        _update(_state, _w, _input);
        if (_input.read > 2048 || _input.length() === 0) {
          _input.compact();
        }
        return md;
      };
      md.digest = function() {
        var finalBlock = forge.util.createBuffer();
        finalBlock.putBytes(_input.bytes());
        var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
        var overflow = remaining & md.blockLength - 1;
        finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));
        var bits, carry = 0;
        for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
          bits = md.fullMessageLength[i] * 8 + carry;
          carry = bits / 4294967296 >>> 0;
          finalBlock.putInt32Le(bits >>> 0);
        }
        var s2 = {
          h0: _state.h0,
          h1: _state.h1,
          h2: _state.h2,
          h3: _state.h3
        };
        _update(s2, _w, finalBlock);
        var rval = forge.util.createBuffer();
        rval.putInt32Le(s2.h0);
        rval.putInt32Le(s2.h1);
        rval.putInt32Le(s2.h2);
        rval.putInt32Le(s2.h3);
        return rval;
      };
      return md;
    };
    var _padding = null;
    var _g = null;
    var _r = null;
    var _k = null;
    var _initialized = false;
    function _init() {
      _padding = String.fromCharCode(128);
      _padding += forge.util.fillString(String.fromCharCode(0), 64);
      _g = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        1,
        6,
        11,
        0,
        5,
        10,
        15,
        4,
        9,
        14,
        3,
        8,
        13,
        2,
        7,
        12,
        5,
        8,
        11,
        14,
        1,
        4,
        7,
        10,
        13,
        0,
        3,
        6,
        9,
        12,
        15,
        2,
        0,
        7,
        14,
        5,
        12,
        3,
        10,
        1,
        8,
        15,
        6,
        13,
        4,
        11,
        2,
        9
      ];
      _r = [
        7,
        12,
        17,
        22,
        7,
        12,
        17,
        22,
        7,
        12,
        17,
        22,
        7,
        12,
        17,
        22,
        5,
        9,
        14,
        20,
        5,
        9,
        14,
        20,
        5,
        9,
        14,
        20,
        5,
        9,
        14,
        20,
        4,
        11,
        16,
        23,
        4,
        11,
        16,
        23,
        4,
        11,
        16,
        23,
        4,
        11,
        16,
        23,
        6,
        10,
        15,
        21,
        6,
        10,
        15,
        21,
        6,
        10,
        15,
        21,
        6,
        10,
        15,
        21
      ];
      _k = new Array(64);
      for (var i = 0; i < 64; ++i) {
        _k[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
      }
      _initialized = true;
    }
    __name(_init, "_init");
    function _update(s, w, bytes) {
      var t, a, b, c, d, f, r, i;
      var len = bytes.length();
      while (len >= 64) {
        a = s.h0;
        b = s.h1;
        c = s.h2;
        d = s.h3;
        for (i = 0; i < 16; ++i) {
          w[i] = bytes.getInt32Le();
          f = d ^ b & (c ^ d);
          t = a + f + _k[i] + w[i];
          r = _r[i];
          a = d;
          d = c;
          c = b;
          b += t << r | t >>> 32 - r;
        }
        for (; i < 32; ++i) {
          f = c ^ d & (b ^ c);
          t = a + f + _k[i] + w[_g[i]];
          r = _r[i];
          a = d;
          d = c;
          c = b;
          b += t << r | t >>> 32 - r;
        }
        for (; i < 48; ++i) {
          f = b ^ c ^ d;
          t = a + f + _k[i] + w[_g[i]];
          r = _r[i];
          a = d;
          d = c;
          c = b;
          b += t << r | t >>> 32 - r;
        }
        for (; i < 64; ++i) {
          f = c ^ (b | ~d);
          t = a + f + _k[i] + w[_g[i]];
          r = _r[i];
          a = d;
          d = c;
          c = b;
          b += t << r | t >>> 32 - r;
        }
        s.h0 = s.h0 + a | 0;
        s.h1 = s.h1 + b | 0;
        s.h2 = s.h2 + c | 0;
        s.h3 = s.h3 + d | 0;
        len -= 64;
      }
    }
    __name(_update, "_update");
  }
});

// node_modules/node-forge/lib/pem.js
var require_pem = __commonJS({
  "node_modules/node-forge/lib/pem.js"(exports, module) {
    var forge = require_forge();
    require_util();
    var pem = module.exports = forge.pem = forge.pem || {};
    pem.encode = function(msg, options) {
      options = options || {};
      var rval = "-----BEGIN " + msg.type + "-----\r\n";
      var header;
      if (msg.procType) {
        header = {
          name: "Proc-Type",
          values: [String(msg.procType.version), msg.procType.type]
        };
        rval += foldHeader(header);
      }
      if (msg.contentDomain) {
        header = { name: "Content-Domain", values: [msg.contentDomain] };
        rval += foldHeader(header);
      }
      if (msg.dekInfo) {
        header = { name: "DEK-Info", values: [msg.dekInfo.algorithm] };
        if (msg.dekInfo.parameters) {
          header.values.push(msg.dekInfo.parameters);
        }
        rval += foldHeader(header);
      }
      if (msg.headers) {
        for (var i = 0; i < msg.headers.length; ++i) {
          rval += foldHeader(msg.headers[i]);
        }
      }
      if (msg.procType) {
        rval += "\r\n";
      }
      rval += forge.util.encode64(msg.body, options.maxline || 64) + "\r\n";
      rval += "-----END " + msg.type + "-----\r\n";
      return rval;
    };
    pem.decode = function(str) {
      var rval = [];
      var rMessage = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g;
      var rHeader = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/;
      var rCRLF = /\r?\n/;
      var match;
      while (true) {
        match = rMessage.exec(str);
        if (!match) {
          break;
        }
        var type = match[1];
        if (type === "NEW CERTIFICATE REQUEST") {
          type = "CERTIFICATE REQUEST";
        }
        var msg = {
          type,
          procType: null,
          contentDomain: null,
          dekInfo: null,
          headers: [],
          body: forge.util.decode64(match[3])
        };
        rval.push(msg);
        if (!match[2]) {
          continue;
        }
        var lines = match[2].split(rCRLF);
        var li = 0;
        while (match && li < lines.length) {
          var line = lines[li].replace(/\s+$/, "");
          for (var nl = li + 1; nl < lines.length; ++nl) {
            var next = lines[nl];
            if (!/\s/.test(next[0])) {
              break;
            }
            line += next;
            li = nl;
          }
          match = line.match(rHeader);
          if (match) {
            var header = { name: match[1], values: [] };
            var values = match[2].split(",");
            for (var vi = 0; vi < values.length; ++vi) {
              header.values.push(ltrim(values[vi]));
            }
            if (!msg.procType) {
              if (header.name !== "Proc-Type") {
                throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');
              } else if (header.values.length !== 2) {
                throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
              }
              msg.procType = { version: values[0], type: values[1] };
            } else if (!msg.contentDomain && header.name === "Content-Domain") {
              msg.contentDomain = values[0] || "";
            } else if (!msg.dekInfo && header.name === "DEK-Info") {
              if (header.values.length === 0) {
                throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
              }
              msg.dekInfo = { algorithm: values[0], parameters: values[1] || null };
            } else {
              msg.headers.push(header);
            }
          }
          ++li;
        }
        if (msg.procType === "ENCRYPTED" && !msg.dekInfo) {
          throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".');
        }
      }
      if (rval.length === 0) {
        throw new Error("Invalid PEM formatted message.");
      }
      return rval;
    };
    function foldHeader(header) {
      var rval = header.name + ": ";
      var values = [];
      var insertSpace = /* @__PURE__ */ __name(function(match, $1) {
        return " " + $1;
      }, "insertSpace");
      for (var i = 0; i < header.values.length; ++i) {
        values.push(header.values[i].replace(/^(\S+\r\n)/, insertSpace));
      }
      rval += values.join(",") + "\r\n";
      var length = 0;
      var candidate = -1;
      for (var i = 0; i < rval.length; ++i, ++length) {
        if (length > 65 && candidate !== -1) {
          var insert = rval[candidate];
          if (insert === ",") {
            ++candidate;
            rval = rval.substr(0, candidate) + "\r\n " + rval.substr(candidate);
          } else {
            rval = rval.substr(0, candidate) + "\r\n" + insert + rval.substr(candidate + 1);
          }
          length = i - candidate - 1;
          candidate = -1;
          ++i;
        } else if (rval[i] === " " || rval[i] === "	" || rval[i] === ",") {
          candidate = i;
        }
      }
      return rval;
    }
    __name(foldHeader, "foldHeader");
    function ltrim(str) {
      return str.replace(/^\s+/, "");
    }
    __name(ltrim, "ltrim");
  }
});

// node_modules/node-forge/lib/des.js
var require_des = __commonJS({
  "node_modules/node-forge/lib/des.js"(exports, module) {
    var forge = require_forge();
    require_cipher();
    require_cipherModes();
    require_util();
    module.exports = forge.des = forge.des || {};
    forge.des.startEncrypting = function(key, iv, output, mode) {
      var cipher = _createCipher({
        key,
        output,
        decrypt: false,
        mode: mode || (iv === null ? "ECB" : "CBC")
      });
      cipher.start(iv);
      return cipher;
    };
    forge.des.createEncryptionCipher = function(key, mode) {
      return _createCipher({
        key,
        output: null,
        decrypt: false,
        mode
      });
    };
    forge.des.startDecrypting = function(key, iv, output, mode) {
      var cipher = _createCipher({
        key,
        output,
        decrypt: true,
        mode: mode || (iv === null ? "ECB" : "CBC")
      });
      cipher.start(iv);
      return cipher;
    };
    forge.des.createDecryptionCipher = function(key, mode) {
      return _createCipher({
        key,
        output: null,
        decrypt: true,
        mode
      });
    };
    forge.des.Algorithm = function(name, mode) {
      var self2 = this;
      self2.name = name;
      self2.mode = new mode({
        blockSize: 8,
        cipher: {
          encrypt: /* @__PURE__ */ __name(function(inBlock, outBlock) {
            return _updateBlock(self2._keys, inBlock, outBlock, false);
          }, "encrypt"),
          decrypt: /* @__PURE__ */ __name(function(inBlock, outBlock) {
            return _updateBlock(self2._keys, inBlock, outBlock, true);
          }, "decrypt")
        }
      });
      self2._init = false;
    };
    forge.des.Algorithm.prototype.initialize = function(options) {
      if (this._init) {
        return;
      }
      var key = forge.util.createBuffer(options.key);
      if (this.name.indexOf("3DES") === 0) {
        if (key.length() !== 24) {
          throw new Error("Invalid Triple-DES key size: " + key.length() * 8);
        }
      }
      this._keys = _createKeys(key);
      this._init = true;
    };
    registerAlgorithm("DES-ECB", forge.cipher.modes.ecb);
    registerAlgorithm("DES-CBC", forge.cipher.modes.cbc);
    registerAlgorithm("DES-CFB", forge.cipher.modes.cfb);
    registerAlgorithm("DES-OFB", forge.cipher.modes.ofb);
    registerAlgorithm("DES-CTR", forge.cipher.modes.ctr);
    registerAlgorithm("3DES-ECB", forge.cipher.modes.ecb);
    registerAlgorithm("3DES-CBC", forge.cipher.modes.cbc);
    registerAlgorithm("3DES-CFB", forge.cipher.modes.cfb);
    registerAlgorithm("3DES-OFB", forge.cipher.modes.ofb);
    registerAlgorithm("3DES-CTR", forge.cipher.modes.ctr);
    function registerAlgorithm(name, mode) {
      var factory = /* @__PURE__ */ __name(function() {
        return new forge.des.Algorithm(name, mode);
      }, "factory");
      forge.cipher.registerAlgorithm(name, factory);
    }
    __name(registerAlgorithm, "registerAlgorithm");
    var spfunction1 = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756];
    var spfunction2 = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344];
    var spfunction3 = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584];
    var spfunction4 = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928];
    var spfunction5 = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080];
    var spfunction6 = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312];
    var spfunction7 = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154];
    var spfunction8 = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];
    function _createKeys(key) {
      var pc2bytes0 = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], pc2bytes1 = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], pc2bytes2 = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], pc2bytes3 = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], pc2bytes4 = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], pc2bytes5 = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], pc2bytes6 = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], pc2bytes7 = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], pc2bytes8 = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], pc2bytes9 = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], pc2bytes10 = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], pc2bytes11 = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], pc2bytes12 = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], pc2bytes13 = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261];
      var iterations = key.length() > 8 ? 3 : 1;
      var keys = [];
      var shifts = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];
      var n = 0, tmp;
      for (var j = 0; j < iterations; j++) {
        var left = key.getInt32();
        var right = key.getInt32();
        tmp = (left >>> 4 ^ right) & 252645135;
        right ^= tmp;
        left ^= tmp << 4;
        tmp = (right >>> -16 ^ left) & 65535;
        left ^= tmp;
        right ^= tmp << -16;
        tmp = (left >>> 2 ^ right) & 858993459;
        right ^= tmp;
        left ^= tmp << 2;
        tmp = (right >>> -16 ^ left) & 65535;
        left ^= tmp;
        right ^= tmp << -16;
        tmp = (left >>> 1 ^ right) & 1431655765;
        right ^= tmp;
        left ^= tmp << 1;
        tmp = (right >>> 8 ^ left) & 16711935;
        left ^= tmp;
        right ^= tmp << 8;
        tmp = (left >>> 1 ^ right) & 1431655765;
        right ^= tmp;
        left ^= tmp << 1;
        tmp = left << 8 | right >>> 20 & 240;
        left = right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240;
        right = tmp;
        for (var i = 0; i < shifts.length; ++i) {
          if (shifts[i]) {
            left = left << 2 | left >>> 26;
            right = right << 2 | right >>> 26;
          } else {
            left = left << 1 | left >>> 27;
            right = right << 1 | right >>> 27;
          }
          left &= -15;
          right &= -15;
          var lefttmp = pc2bytes0[left >>> 28] | pc2bytes1[left >>> 24 & 15] | pc2bytes2[left >>> 20 & 15] | pc2bytes3[left >>> 16 & 15] | pc2bytes4[left >>> 12 & 15] | pc2bytes5[left >>> 8 & 15] | pc2bytes6[left >>> 4 & 15];
          var righttmp = pc2bytes7[right >>> 28] | pc2bytes8[right >>> 24 & 15] | pc2bytes9[right >>> 20 & 15] | pc2bytes10[right >>> 16 & 15] | pc2bytes11[right >>> 12 & 15] | pc2bytes12[right >>> 8 & 15] | pc2bytes13[right >>> 4 & 15];
          tmp = (righttmp >>> 16 ^ lefttmp) & 65535;
          keys[n++] = lefttmp ^ tmp;
          keys[n++] = righttmp ^ tmp << 16;
        }
      }
      return keys;
    }
    __name(_createKeys, "_createKeys");
    function _updateBlock(keys, input, output, decrypt) {
      var iterations = keys.length === 32 ? 3 : 9;
      var looping;
      if (iterations === 3) {
        looping = decrypt ? [30, -2, -2] : [0, 32, 2];
      } else {
        looping = decrypt ? [94, 62, -2, 32, 64, 2, 30, -2, -2] : [0, 32, 2, 62, 30, -2, 64, 96, 2];
      }
      var tmp;
      var left = input[0];
      var right = input[1];
      tmp = (left >>> 4 ^ right) & 252645135;
      right ^= tmp;
      left ^= tmp << 4;
      tmp = (left >>> 16 ^ right) & 65535;
      right ^= tmp;
      left ^= tmp << 16;
      tmp = (right >>> 2 ^ left) & 858993459;
      left ^= tmp;
      right ^= tmp << 2;
      tmp = (right >>> 8 ^ left) & 16711935;
      left ^= tmp;
      right ^= tmp << 8;
      tmp = (left >>> 1 ^ right) & 1431655765;
      right ^= tmp;
      left ^= tmp << 1;
      left = left << 1 | left >>> 31;
      right = right << 1 | right >>> 31;
      for (var j = 0; j < iterations; j += 3) {
        var endloop = looping[j + 1];
        var loopinc = looping[j + 2];
        for (var i = looping[j]; i != endloop; i += loopinc) {
          var right1 = right ^ keys[i];
          var right2 = (right >>> 4 | right << 28) ^ keys[i + 1];
          tmp = left;
          left = right;
          right = tmp ^ (spfunction2[right1 >>> 24 & 63] | spfunction4[right1 >>> 16 & 63] | spfunction6[right1 >>> 8 & 63] | spfunction8[right1 & 63] | spfunction1[right2 >>> 24 & 63] | spfunction3[right2 >>> 16 & 63] | spfunction5[right2 >>> 8 & 63] | spfunction7[right2 & 63]);
        }
        tmp = left;
        left = right;
        right = tmp;
      }
      left = left >>> 1 | left << 31;
      right = right >>> 1 | right << 31;
      tmp = (left >>> 1 ^ right) & 1431655765;
      right ^= tmp;
      left ^= tmp << 1;
      tmp = (right >>> 8 ^ left) & 16711935;
      left ^= tmp;
      right ^= tmp << 8;
      tmp = (right >>> 2 ^ left) & 858993459;
      left ^= tmp;
      right ^= tmp << 2;
      tmp = (left >>> 16 ^ right) & 65535;
      right ^= tmp;
      left ^= tmp << 16;
      tmp = (left >>> 4 ^ right) & 252645135;
      right ^= tmp;
      left ^= tmp << 4;
      output[0] = left;
      output[1] = right;
    }
    __name(_updateBlock, "_updateBlock");
    function _createCipher(options) {
      options = options || {};
      var mode = (options.mode || "CBC").toUpperCase();
      var algorithm = "DES-" + mode;
      var cipher;
      if (options.decrypt) {
        cipher = forge.cipher.createDecipher(algorithm, options.key);
      } else {
        cipher = forge.cipher.createCipher(algorithm, options.key);
      }
      var start = cipher.start;
      cipher.start = function(iv, options2) {
        var output = null;
        if (options2 instanceof forge.util.ByteBuffer) {
          output = options2;
          options2 = {};
        }
        options2 = options2 || {};
        options2.output = output;
        options2.iv = iv;
        start.call(cipher, options2);
      };
      return cipher;
    }
    __name(_createCipher, "_createCipher");
  }
});

// node-built-in-modules:crypto
import libDefault from "crypto";
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    module.exports = libDefault;
  }
});

// node_modules/node-forge/lib/pbkdf2.js
var require_pbkdf2 = __commonJS({
  "node_modules/node-forge/lib/pbkdf2.js"(exports, module) {
    var forge = require_forge();
    require_hmac();
    require_md();
    require_util();
    var pkcs5 = forge.pkcs5 = forge.pkcs5 || {};
    var crypto2;
    if (forge.util.isNodejs && !forge.options.usePureJavaScript) {
      crypto2 = require_crypto();
    }
    module.exports = forge.pbkdf2 = pkcs5.pbkdf2 = function(p, s, c, dkLen, md, callback) {
      if (typeof md === "function") {
        callback = md;
        md = null;
      }
      if (forge.util.isNodejs && !forge.options.usePureJavaScript && crypto2.pbkdf2 && (md === null || typeof md !== "object") && (crypto2.pbkdf2Sync.length > 4 || (!md || md === "sha1"))) {
        if (typeof md !== "string") {
          md = "sha1";
        }
        p = Buffer.from(p, "binary");
        s = Buffer.from(s, "binary");
        if (!callback) {
          if (crypto2.pbkdf2Sync.length === 4) {
            return crypto2.pbkdf2Sync(p, s, c, dkLen).toString("binary");
          }
          return crypto2.pbkdf2Sync(p, s, c, dkLen, md).toString("binary");
        }
        if (crypto2.pbkdf2Sync.length === 4) {
          return crypto2.pbkdf2(p, s, c, dkLen, function(err2, key) {
            if (err2) {
              return callback(err2);
            }
            callback(null, key.toString("binary"));
          });
        }
        return crypto2.pbkdf2(p, s, c, dkLen, md, function(err2, key) {
          if (err2) {
            return callback(err2);
          }
          callback(null, key.toString("binary"));
        });
      }
      if (typeof md === "undefined" || md === null) {
        md = "sha1";
      }
      if (typeof md === "string") {
        if (!(md in forge.md.algorithms)) {
          throw new Error("Unknown hash algorithm: " + md);
        }
        md = forge.md[md].create();
      }
      var hLen = md.digestLength;
      if (dkLen > 4294967295 * hLen) {
        var err = new Error("Derived key is too long.");
        if (callback) {
          return callback(err);
        }
        throw err;
      }
      var len = Math.ceil(dkLen / hLen);
      var r = dkLen - (len - 1) * hLen;
      var prf = forge.hmac.create();
      prf.start(md, p);
      var dk = "";
      var xor, u_c, u_c1;
      if (!callback) {
        for (var i = 1; i <= len; ++i) {
          prf.start(null, null);
          prf.update(s);
          prf.update(forge.util.int32ToBytes(i));
          xor = u_c1 = prf.digest().getBytes();
          for (var j = 2; j <= c; ++j) {
            prf.start(null, null);
            prf.update(u_c1);
            u_c = prf.digest().getBytes();
            xor = forge.util.xorBytes(xor, u_c, hLen);
            u_c1 = u_c;
          }
          dk += i < len ? xor : xor.substr(0, r);
        }
        return dk;
      }
      var i = 1, j;
      function outer() {
        if (i > len) {
          return callback(null, dk);
        }
        prf.start(null, null);
        prf.update(s);
        prf.update(forge.util.int32ToBytes(i));
        xor = u_c1 = prf.digest().getBytes();
        j = 2;
        inner();
      }
      __name(outer, "outer");
      function inner() {
        if (j <= c) {
          prf.start(null, null);
          prf.update(u_c1);
          u_c = prf.digest().getBytes();
          xor = forge.util.xorBytes(xor, u_c, hLen);
          u_c1 = u_c;
          ++j;
          return forge.util.setImmediate(inner);
        }
        dk += i < len ? xor : xor.substr(0, r);
        ++i;
        outer();
      }
      __name(inner, "inner");
      outer();
    };
  }
});

// node_modules/node-forge/lib/sha256.js
var require_sha256 = __commonJS({
  "node_modules/node-forge/lib/sha256.js"(exports, module) {
    var forge = require_forge();
    require_md();
    require_util();
    var sha256 = module.exports = forge.sha256 = forge.sha256 || {};
    forge.md.sha256 = forge.md.algorithms.sha256 = sha256;
    sha256.create = function() {
      if (!_initialized) {
        _init();
      }
      var _state = null;
      var _input = forge.util.createBuffer();
      var _w = new Array(64);
      var md = {
        algorithm: "sha256",
        blockLength: 64,
        digestLength: 32,
        // 56-bit length of message so far (does not including padding)
        messageLength: 0,
        // true message length
        fullMessageLength: null,
        // size of message length in bytes
        messageLengthSize: 8
      };
      md.start = function() {
        md.messageLength = 0;
        md.fullMessageLength = md.messageLength64 = [];
        var int32s = md.messageLengthSize / 4;
        for (var i = 0; i < int32s; ++i) {
          md.fullMessageLength.push(0);
        }
        _input = forge.util.createBuffer();
        _state = {
          h0: 1779033703,
          h1: 3144134277,
          h2: 1013904242,
          h3: 2773480762,
          h4: 1359893119,
          h5: 2600822924,
          h6: 528734635,
          h7: 1541459225
        };
        return md;
      };
      md.start();
      md.update = function(msg, encoding) {
        if (encoding === "utf8") {
          msg = forge.util.encodeUtf8(msg);
        }
        var len = msg.length;
        md.messageLength += len;
        len = [len / 4294967296 >>> 0, len >>> 0];
        for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
          md.fullMessageLength[i] += len[1];
          len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
          md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
          len[0] = len[1] / 4294967296 >>> 0;
        }
        _input.putBytes(msg);
        _update(_state, _w, _input);
        if (_input.read > 2048 || _input.length() === 0) {
          _input.compact();
        }
        return md;
      };
      md.digest = function() {
        var finalBlock = forge.util.createBuffer();
        finalBlock.putBytes(_input.bytes());
        var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
        var overflow = remaining & md.blockLength - 1;
        finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));
        var next, carry;
        var bits = md.fullMessageLength[0] * 8;
        for (var i = 0; i < md.fullMessageLength.length - 1; ++i) {
          next = md.fullMessageLength[i + 1] * 8;
          carry = next / 4294967296 >>> 0;
          bits += carry;
          finalBlock.putInt32(bits >>> 0);
          bits = next >>> 0;
        }
        finalBlock.putInt32(bits);
        var s2 = {
          h0: _state.h0,
          h1: _state.h1,
          h2: _state.h2,
          h3: _state.h3,
          h4: _state.h4,
          h5: _state.h5,
          h6: _state.h6,
          h7: _state.h7
        };
        _update(s2, _w, finalBlock);
        var rval = forge.util.createBuffer();
        rval.putInt32(s2.h0);
        rval.putInt32(s2.h1);
        rval.putInt32(s2.h2);
        rval.putInt32(s2.h3);
        rval.putInt32(s2.h4);
        rval.putInt32(s2.h5);
        rval.putInt32(s2.h6);
        rval.putInt32(s2.h7);
        return rval;
      };
      return md;
    };
    var _padding = null;
    var _initialized = false;
    var _k = null;
    function _init() {
      _padding = String.fromCharCode(128);
      _padding += forge.util.fillString(String.fromCharCode(0), 64);
      _k = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      _initialized = true;
    }
    __name(_init, "_init");
    function _update(s, w, bytes) {
      var t1, t2, s0, s1, ch, maj, i, a, b, c, d, e, f, g, h;
      var len = bytes.length();
      while (len >= 64) {
        for (i = 0; i < 16; ++i) {
          w[i] = bytes.getInt32();
        }
        for (; i < 64; ++i) {
          t1 = w[i - 2];
          t1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          t2 = w[i - 15];
          t2 = (t2 >>> 7 | t2 << 25) ^ (t2 >>> 18 | t2 << 14) ^ t2 >>> 3;
          w[i] = t1 + w[i - 7] + t2 + w[i - 16] | 0;
        }
        a = s.h0;
        b = s.h1;
        c = s.h2;
        d = s.h3;
        e = s.h4;
        f = s.h5;
        g = s.h6;
        h = s.h7;
        for (i = 0; i < 64; ++i) {
          s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
          ch = g ^ e & (f ^ g);
          s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
          maj = a & b | c & (a ^ b);
          t1 = h + s1 + ch + _k[i] + w[i];
          t2 = s0 + maj;
          h = g;
          g = f;
          f = e;
          e = d + t1 >>> 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 >>> 0;
        }
        s.h0 = s.h0 + a | 0;
        s.h1 = s.h1 + b | 0;
        s.h2 = s.h2 + c | 0;
        s.h3 = s.h3 + d | 0;
        s.h4 = s.h4 + e | 0;
        s.h5 = s.h5 + f | 0;
        s.h6 = s.h6 + g | 0;
        s.h7 = s.h7 + h | 0;
        len -= 64;
      }
    }
    __name(_update, "_update");
  }
});

// node_modules/node-forge/lib/prng.js
var require_prng = __commonJS({
  "node_modules/node-forge/lib/prng.js"(exports, module) {
    var forge = require_forge();
    require_util();
    var _crypto = null;
    if (forge.util.isNodejs && !forge.options.usePureJavaScript && !process.versions["node-webkit"]) {
      _crypto = require_crypto();
    }
    var prng = module.exports = forge.prng = forge.prng || {};
    prng.create = function(plugin) {
      var ctx = {
        plugin,
        key: null,
        seed: null,
        time: null,
        // number of reseeds so far
        reseeds: 0,
        // amount of data generated so far
        generated: 0,
        // no initial key bytes
        keyBytes: ""
      };
      var md = plugin.md;
      var pools = new Array(32);
      for (var i = 0; i < 32; ++i) {
        pools[i] = md.create();
      }
      ctx.pools = pools;
      ctx.pool = 0;
      ctx.generate = function(count, callback) {
        if (!callback) {
          return ctx.generateSync(count);
        }
        var cipher = ctx.plugin.cipher;
        var increment = ctx.plugin.increment;
        var formatKey = ctx.plugin.formatKey;
        var formatSeed = ctx.plugin.formatSeed;
        var b = forge.util.createBuffer();
        ctx.key = null;
        generate();
        function generate(err) {
          if (err) {
            return callback(err);
          }
          if (b.length() >= count) {
            return callback(null, b.getBytes(count));
          }
          if (ctx.generated > 1048575) {
            ctx.key = null;
          }
          if (ctx.key === null) {
            return forge.util.nextTick(function() {
              _reseed(generate);
            });
          }
          var bytes = cipher(ctx.key, ctx.seed);
          ctx.generated += bytes.length;
          b.putBytes(bytes);
          ctx.key = formatKey(cipher(ctx.key, increment(ctx.seed)));
          ctx.seed = formatSeed(cipher(ctx.key, ctx.seed));
          forge.util.setImmediate(generate);
        }
        __name(generate, "generate");
      };
      ctx.generateSync = function(count) {
        var cipher = ctx.plugin.cipher;
        var increment = ctx.plugin.increment;
        var formatKey = ctx.plugin.formatKey;
        var formatSeed = ctx.plugin.formatSeed;
        ctx.key = null;
        var b = forge.util.createBuffer();
        while (b.length() < count) {
          if (ctx.generated > 1048575) {
            ctx.key = null;
          }
          if (ctx.key === null) {
            _reseedSync();
          }
          var bytes = cipher(ctx.key, ctx.seed);
          ctx.generated += bytes.length;
          b.putBytes(bytes);
          ctx.key = formatKey(cipher(ctx.key, increment(ctx.seed)));
          ctx.seed = formatSeed(cipher(ctx.key, ctx.seed));
        }
        return b.getBytes(count);
      };
      function _reseed(callback) {
        if (ctx.pools[0].messageLength >= 32) {
          _seed();
          return callback();
        }
        var needed = 32 - ctx.pools[0].messageLength << 5;
        ctx.seedFile(needed, function(err, bytes) {
          if (err) {
            return callback(err);
          }
          ctx.collect(bytes);
          _seed();
          callback();
        });
      }
      __name(_reseed, "_reseed");
      function _reseedSync() {
        if (ctx.pools[0].messageLength >= 32) {
          return _seed();
        }
        var needed = 32 - ctx.pools[0].messageLength << 5;
        ctx.collect(ctx.seedFileSync(needed));
        _seed();
      }
      __name(_reseedSync, "_reseedSync");
      function _seed() {
        ctx.reseeds = ctx.reseeds === 4294967295 ? 0 : ctx.reseeds + 1;
        var md2 = ctx.plugin.md.create();
        md2.update(ctx.keyBytes);
        var _2powK = 1;
        for (var k = 0; k < 32; ++k) {
          if (ctx.reseeds % _2powK === 0) {
            md2.update(ctx.pools[k].digest().getBytes());
            ctx.pools[k].start();
          }
          _2powK = _2powK << 1;
        }
        ctx.keyBytes = md2.digest().getBytes();
        md2.start();
        md2.update(ctx.keyBytes);
        var seedBytes = md2.digest().getBytes();
        ctx.key = ctx.plugin.formatKey(ctx.keyBytes);
        ctx.seed = ctx.plugin.formatSeed(seedBytes);
        ctx.generated = 0;
      }
      __name(_seed, "_seed");
      function defaultSeedFile(needed) {
        var getRandomValues = null;
        var globalScope = forge.util.globalScope;
        var _crypto2 = globalScope.crypto || globalScope.msCrypto;
        if (_crypto2 && _crypto2.getRandomValues) {
          getRandomValues = /* @__PURE__ */ __name(function(arr) {
            return _crypto2.getRandomValues(arr);
          }, "getRandomValues");
        }
        var b = forge.util.createBuffer();
        if (getRandomValues) {
          while (b.length() < needed) {
            var count = Math.max(1, Math.min(needed - b.length(), 65536) / 4);
            var entropy = new Uint32Array(Math.floor(count));
            try {
              getRandomValues(entropy);
              for (var i2 = 0; i2 < entropy.length; ++i2) {
                b.putInt32(entropy[i2]);
              }
            } catch (e) {
              if (!(typeof QuotaExceededError !== "undefined" && e instanceof QuotaExceededError)) {
                throw e;
              }
            }
          }
        }
        if (b.length() < needed) {
          var hi, lo, next;
          var seed = Math.floor(Math.random() * 65536);
          while (b.length() < needed) {
            lo = 16807 * (seed & 65535);
            hi = 16807 * (seed >> 16);
            lo += (hi & 32767) << 16;
            lo += hi >> 15;
            lo = (lo & 2147483647) + (lo >> 31);
            seed = lo & 4294967295;
            for (var i2 = 0; i2 < 3; ++i2) {
              next = seed >>> (i2 << 3);
              next ^= Math.floor(Math.random() * 256);
              b.putByte(next & 255);
            }
          }
        }
        return b.getBytes(needed);
      }
      __name(defaultSeedFile, "defaultSeedFile");
      if (_crypto) {
        ctx.seedFile = function(needed, callback) {
          _crypto.randomBytes(needed, function(err, bytes) {
            if (err) {
              return callback(err);
            }
            callback(null, bytes.toString());
          });
        };
        ctx.seedFileSync = function(needed) {
          return _crypto.randomBytes(needed).toString();
        };
      } else {
        ctx.seedFile = function(needed, callback) {
          try {
            callback(null, defaultSeedFile(needed));
          } catch (e) {
            callback(e);
          }
        };
        ctx.seedFileSync = defaultSeedFile;
      }
      ctx.collect = function(bytes) {
        var count = bytes.length;
        for (var i2 = 0; i2 < count; ++i2) {
          ctx.pools[ctx.pool].update(bytes.substr(i2, 1));
          ctx.pool = ctx.pool === 31 ? 0 : ctx.pool + 1;
        }
      };
      ctx.collectInt = function(i2, n) {
        var bytes = "";
        for (var x = 0; x < n; x += 8) {
          bytes += String.fromCharCode(i2 >> x & 255);
        }
        ctx.collect(bytes);
      };
      ctx.registerWorker = function(worker) {
        if (worker === self) {
          ctx.seedFile = function(needed, callback) {
            function listener2(e) {
              var data = e.data;
              if (data.forge && data.forge.prng) {
                self.removeEventListener("message", listener2);
                callback(data.forge.prng.err, data.forge.prng.bytes);
              }
            }
            __name(listener2, "listener");
            self.addEventListener("message", listener2);
            self.postMessage({ forge: { prng: { needed } } });
          };
        } else {
          var listener = /* @__PURE__ */ __name(function(e) {
            var data = e.data;
            if (data.forge && data.forge.prng) {
              ctx.seedFile(data.forge.prng.needed, function(err, bytes) {
                worker.postMessage({ forge: { prng: { err, bytes } } });
              });
            }
          }, "listener");
          worker.addEventListener("message", listener);
        }
      };
      return ctx;
    };
  }
});

// node_modules/node-forge/lib/random.js
var require_random = __commonJS({
  "node_modules/node-forge/lib/random.js"(exports, module) {
    var forge = require_forge();
    require_aes();
    require_sha256();
    require_prng();
    require_util();
    (function() {
      if (forge.random && forge.random.getBytes) {
        module.exports = forge.random;
        return;
      }
      (function(jQuery2) {
        var prng_aes = {};
        var _prng_aes_output = new Array(4);
        var _prng_aes_buffer = forge.util.createBuffer();
        prng_aes.formatKey = function(key2) {
          var tmp = forge.util.createBuffer(key2);
          key2 = new Array(4);
          key2[0] = tmp.getInt32();
          key2[1] = tmp.getInt32();
          key2[2] = tmp.getInt32();
          key2[3] = tmp.getInt32();
          return forge.aes._expandKey(key2, false);
        };
        prng_aes.formatSeed = function(seed) {
          var tmp = forge.util.createBuffer(seed);
          seed = new Array(4);
          seed[0] = tmp.getInt32();
          seed[1] = tmp.getInt32();
          seed[2] = tmp.getInt32();
          seed[3] = tmp.getInt32();
          return seed;
        };
        prng_aes.cipher = function(key2, seed) {
          forge.aes._updateBlock(key2, seed, _prng_aes_output, false);
          _prng_aes_buffer.putInt32(_prng_aes_output[0]);
          _prng_aes_buffer.putInt32(_prng_aes_output[1]);
          _prng_aes_buffer.putInt32(_prng_aes_output[2]);
          _prng_aes_buffer.putInt32(_prng_aes_output[3]);
          return _prng_aes_buffer.getBytes();
        };
        prng_aes.increment = function(seed) {
          ++seed[3];
          return seed;
        };
        prng_aes.md = forge.md.sha256;
        function spawnPrng() {
          var ctx = forge.prng.create(prng_aes);
          ctx.getBytes = function(count, callback) {
            return ctx.generate(count, callback);
          };
          ctx.getBytesSync = function(count) {
            return ctx.generate(count);
          };
          return ctx;
        }
        __name(spawnPrng, "spawnPrng");
        var _ctx = spawnPrng();
        var getRandomValues = null;
        var globalScope = forge.util.globalScope;
        var _crypto = globalScope.crypto || globalScope.msCrypto;
        if (_crypto && _crypto.getRandomValues) {
          getRandomValues = /* @__PURE__ */ __name(function(arr) {
            return _crypto.getRandomValues(arr);
          }, "getRandomValues");
        }
        if (forge.options.usePureJavaScript || !forge.util.isNodejs && !getRandomValues) {
          if (typeof window === "undefined" || window.document === void 0) {
          }
          _ctx.collectInt(+/* @__PURE__ */ new Date(), 32);
          if (typeof navigator !== "undefined") {
            var _navBytes = "";
            for (var key in navigator) {
              try {
                if (typeof navigator[key] == "string") {
                  _navBytes += navigator[key];
                }
              } catch (e) {
              }
            }
            _ctx.collect(_navBytes);
            _navBytes = null;
          }
          if (jQuery2) {
            jQuery2().mousemove(function(e) {
              _ctx.collectInt(e.clientX, 16);
              _ctx.collectInt(e.clientY, 16);
            });
            jQuery2().keypress(function(e) {
              _ctx.collectInt(e.charCode, 8);
            });
          }
        }
        if (!forge.random) {
          forge.random = _ctx;
        } else {
          for (var key in _ctx) {
            forge.random[key] = _ctx[key];
          }
        }
        forge.random.createInstance = spawnPrng;
        module.exports = forge.random;
      })(typeof jQuery !== "undefined" ? jQuery : null);
    })();
  }
});

// node_modules/node-forge/lib/rc2.js
var require_rc2 = __commonJS({
  "node_modules/node-forge/lib/rc2.js"(exports, module) {
    var forge = require_forge();
    require_util();
    var piTable = [
      217,
      120,
      249,
      196,
      25,
      221,
      181,
      237,
      40,
      233,
      253,
      121,
      74,
      160,
      216,
      157,
      198,
      126,
      55,
      131,
      43,
      118,
      83,
      142,
      98,
      76,
      100,
      136,
      68,
      139,
      251,
      162,
      23,
      154,
      89,
      245,
      135,
      179,
      79,
      19,
      97,
      69,
      109,
      141,
      9,
      129,
      125,
      50,
      189,
      143,
      64,
      235,
      134,
      183,
      123,
      11,
      240,
      149,
      33,
      34,
      92,
      107,
      78,
      130,
      84,
      214,
      101,
      147,
      206,
      96,
      178,
      28,
      115,
      86,
      192,
      20,
      167,
      140,
      241,
      220,
      18,
      117,
      202,
      31,
      59,
      190,
      228,
      209,
      66,
      61,
      212,
      48,
      163,
      60,
      182,
      38,
      111,
      191,
      14,
      218,
      70,
      105,
      7,
      87,
      39,
      242,
      29,
      155,
      188,
      148,
      67,
      3,
      248,
      17,
      199,
      246,
      144,
      239,
      62,
      231,
      6,
      195,
      213,
      47,
      200,
      102,
      30,
      215,
      8,
      232,
      234,
      222,
      128,
      82,
      238,
      247,
      132,
      170,
      114,
      172,
      53,
      77,
      106,
      42,
      150,
      26,
      210,
      113,
      90,
      21,
      73,
      116,
      75,
      159,
      208,
      94,
      4,
      24,
      164,
      236,
      194,
      224,
      65,
      110,
      15,
      81,
      203,
      204,
      36,
      145,
      175,
      80,
      161,
      244,
      112,
      57,
      153,
      124,
      58,
      133,
      35,
      184,
      180,
      122,
      252,
      2,
      54,
      91,
      37,
      85,
      151,
      49,
      45,
      93,
      250,
      152,
      227,
      138,
      146,
      174,
      5,
      223,
      41,
      16,
      103,
      108,
      186,
      201,
      211,
      0,
      230,
      207,
      225,
      158,
      168,
      44,
      99,
      22,
      1,
      63,
      88,
      226,
      137,
      169,
      13,
      56,
      52,
      27,
      171,
      51,
      255,
      176,
      187,
      72,
      12,
      95,
      185,
      177,
      205,
      46,
      197,
      243,
      219,
      71,
      229,
      165,
      156,
      119,
      10,
      166,
      32,
      104,
      254,
      127,
      193,
      173
    ];
    var s = [1, 2, 3, 5];
    var rol = /* @__PURE__ */ __name(function(word, bits) {
      return word << bits & 65535 | (word & 65535) >> 16 - bits;
    }, "rol");
    var ror = /* @__PURE__ */ __name(function(word, bits) {
      return (word & 65535) >> bits | word << 16 - bits & 65535;
    }, "ror");
    module.exports = forge.rc2 = forge.rc2 || {};
    forge.rc2.expandKey = function(key, effKeyBits) {
      if (typeof key === "string") {
        key = forge.util.createBuffer(key);
      }
      effKeyBits = effKeyBits || 128;
      var L = key;
      var T = key.length();
      var T1 = effKeyBits;
      var T8 = Math.ceil(T1 / 8);
      var TM = 255 >> (T1 & 7);
      var i;
      for (i = T; i < 128; i++) {
        L.putByte(piTable[L.at(i - 1) + L.at(i - T) & 255]);
      }
      L.setAt(128 - T8, piTable[L.at(128 - T8) & TM]);
      for (i = 127 - T8; i >= 0; i--) {
        L.setAt(i, piTable[L.at(i + 1) ^ L.at(i + T8)]);
      }
      return L;
    };
    var createCipher = /* @__PURE__ */ __name(function(key, bits, encrypt) {
      var _finish = false, _input = null, _output = null, _iv = null;
      var mixRound, mashRound;
      var i, j, K = [];
      key = forge.rc2.expandKey(key, bits);
      for (i = 0; i < 64; i++) {
        K.push(key.getInt16Le());
      }
      if (encrypt) {
        mixRound = /* @__PURE__ */ __name(function(R) {
          for (i = 0; i < 4; i++) {
            R[i] += K[j] + (R[(i + 3) % 4] & R[(i + 2) % 4]) + (~R[(i + 3) % 4] & R[(i + 1) % 4]);
            R[i] = rol(R[i], s[i]);
            j++;
          }
        }, "mixRound");
        mashRound = /* @__PURE__ */ __name(function(R) {
          for (i = 0; i < 4; i++) {
            R[i] += K[R[(i + 3) % 4] & 63];
          }
        }, "mashRound");
      } else {
        mixRound = /* @__PURE__ */ __name(function(R) {
          for (i = 3; i >= 0; i--) {
            R[i] = ror(R[i], s[i]);
            R[i] -= K[j] + (R[(i + 3) % 4] & R[(i + 2) % 4]) + (~R[(i + 3) % 4] & R[(i + 1) % 4]);
            j--;
          }
        }, "mixRound");
        mashRound = /* @__PURE__ */ __name(function(R) {
          for (i = 3; i >= 0; i--) {
            R[i] -= K[R[(i + 3) % 4] & 63];
          }
        }, "mashRound");
      }
      var runPlan = /* @__PURE__ */ __name(function(plan) {
        var R = [];
        for (i = 0; i < 4; i++) {
          var val = _input.getInt16Le();
          if (_iv !== null) {
            if (encrypt) {
              val ^= _iv.getInt16Le();
            } else {
              _iv.putInt16Le(val);
            }
          }
          R.push(val & 65535);
        }
        j = encrypt ? 0 : 63;
        for (var ptr = 0; ptr < plan.length; ptr++) {
          for (var ctr = 0; ctr < plan[ptr][0]; ctr++) {
            plan[ptr][1](R);
          }
        }
        for (i = 0; i < 4; i++) {
          if (_iv !== null) {
            if (encrypt) {
              _iv.putInt16Le(R[i]);
            } else {
              R[i] ^= _iv.getInt16Le();
            }
          }
          _output.putInt16Le(R[i]);
        }
      }, "runPlan");
      var cipher = null;
      cipher = {
        /**
         * Starts or restarts the encryption or decryption process, whichever
         * was previously configured.
         *
         * To use the cipher in CBC mode, iv may be given either as a string
         * of bytes, or as a byte buffer.  For ECB mode, give null as iv.
         *
         * @param iv the initialization vector to use, null for ECB mode.
         * @param output the output the buffer to write to, null to create one.
         */
        start: /* @__PURE__ */ __name(function(iv, output) {
          if (iv) {
            if (typeof iv === "string") {
              iv = forge.util.createBuffer(iv);
            }
          }
          _finish = false;
          _input = forge.util.createBuffer();
          _output = output || new forge.util.createBuffer();
          _iv = iv;
          cipher.output = _output;
        }, "start"),
        /**
         * Updates the next block.
         *
         * @param input the buffer to read from.
         */
        update: /* @__PURE__ */ __name(function(input) {
          if (!_finish) {
            _input.putBuffer(input);
          }
          while (_input.length() >= 8) {
            runPlan([
              [5, mixRound],
              [1, mashRound],
              [6, mixRound],
              [1, mashRound],
              [5, mixRound]
            ]);
          }
        }, "update"),
        /**
         * Finishes encrypting or decrypting.
         *
         * @param pad a padding function to use, null for PKCS#7 padding,
         *           signature(blockSize, buffer, decrypt).
         *
         * @return true if successful, false on error.
         */
        finish: /* @__PURE__ */ __name(function(pad) {
          var rval = true;
          if (encrypt) {
            if (pad) {
              rval = pad(8, _input, !encrypt);
            } else {
              var padding = _input.length() === 8 ? 8 : 8 - _input.length();
              _input.fillWithByte(padding, padding);
            }
          }
          if (rval) {
            _finish = true;
            cipher.update();
          }
          if (!encrypt) {
            rval = _input.length() === 0;
            if (rval) {
              if (pad) {
                rval = pad(8, _output, !encrypt);
              } else {
                var len = _output.length();
                var count = _output.at(len - 1);
                if (count > len) {
                  rval = false;
                } else {
                  _output.truncate(count);
                }
              }
            }
          }
          return rval;
        }, "finish")
      };
      return cipher;
    }, "createCipher");
    forge.rc2.startEncrypting = function(key, iv, output) {
      var cipher = forge.rc2.createEncryptionCipher(key, 128);
      cipher.start(iv, output);
      return cipher;
    };
    forge.rc2.createEncryptionCipher = function(key, bits) {
      return createCipher(key, bits, true);
    };
    forge.rc2.startDecrypting = function(key, iv, output) {
      var cipher = forge.rc2.createDecryptionCipher(key, 128);
      cipher.start(iv, output);
      return cipher;
    };
    forge.rc2.createDecryptionCipher = function(key, bits) {
      return createCipher(key, bits, false);
    };
  }
});

// node_modules/node-forge/lib/jsbn.js
var require_jsbn = __commonJS({
  "node_modules/node-forge/lib/jsbn.js"(exports, module) {
    var forge = require_forge();
    module.exports = forge.jsbn = forge.jsbn || {};
    var dbits;
    var canary = 244837814094590;
    var j_lm = (canary & 16777215) == 15715070;
    function BigInteger(a, b, c) {
      this.data = [];
      if (a != null)
        if ("number" == typeof a) this.fromNumber(a, b, c);
        else if (b == null && "string" != typeof a) this.fromString(a, 256);
        else this.fromString(a, b);
    }
    __name(BigInteger, "BigInteger");
    forge.jsbn.BigInteger = BigInteger;
    function nbi() {
      return new BigInteger(null);
    }
    __name(nbi, "nbi");
    function am1(i, x, w, j, c, n) {
      while (--n >= 0) {
        var v = x * this.data[i++] + w.data[j] + c;
        c = Math.floor(v / 67108864);
        w.data[j++] = v & 67108863;
      }
      return c;
    }
    __name(am1, "am1");
    function am2(i, x, w, j, c, n) {
      var xl = x & 32767, xh = x >> 15;
      while (--n >= 0) {
        var l = this.data[i] & 32767;
        var h = this.data[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 32767) << 15) + w.data[j] + (c & 1073741823);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w.data[j++] = l & 1073741823;
      }
      return c;
    }
    __name(am2, "am2");
    function am3(i, x, w, j, c, n) {
      var xl = x & 16383, xh = x >> 14;
      while (--n >= 0) {
        var l = this.data[i] & 16383;
        var h = this.data[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 16383) << 14) + w.data[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w.data[j++] = l & 268435455;
      }
      return c;
    }
    __name(am3, "am3");
    if (typeof navigator === "undefined") {
      BigInteger.prototype.am = am3;
      dbits = 28;
    } else if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
      BigInteger.prototype.am = am2;
      dbits = 30;
    } else if (j_lm && navigator.appName != "Netscape") {
      BigInteger.prototype.am = am1;
      dbits = 26;
    } else {
      BigInteger.prototype.am = am3;
      dbits = 28;
    }
    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = (1 << dbits) - 1;
    BigInteger.prototype.DV = 1 << dbits;
    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2, BI_FP);
    BigInteger.prototype.F1 = BI_FP - dbits;
    BigInteger.prototype.F2 = 2 * dbits - BI_FP;
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr;
    var vv;
    rr = "0".charCodeAt(0);
    for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    function int2char(n) {
      return BI_RM.charAt(n);
    }
    __name(int2char, "int2char");
    function intAt(s, i) {
      var c = BI_RC[s.charCodeAt(i)];
      return c == null ? -1 : c;
    }
    __name(intAt, "intAt");
    function bnpCopyTo(r) {
      for (var i = this.t - 1; i >= 0; --i) r.data[i] = this.data[i];
      r.t = this.t;
      r.s = this.s;
    }
    __name(bnpCopyTo, "bnpCopyTo");
    function bnpFromInt(x) {
      this.t = 1;
      this.s = x < 0 ? -1 : 0;
      if (x > 0) this.data[0] = x;
      else if (x < -1) this.data[0] = x + this.DV;
      else this.t = 0;
    }
    __name(bnpFromInt, "bnpFromInt");
    function nbv(i) {
      var r = nbi();
      r.fromInt(i);
      return r;
    }
    __name(nbv, "nbv");
    function bnpFromString(s, b) {
      var k;
      if (b == 16) k = 4;
      else if (b == 8) k = 3;
      else if (b == 256) k = 8;
      else if (b == 2) k = 1;
      else if (b == 32) k = 5;
      else if (b == 4) k = 2;
      else {
        this.fromRadix(s, b);
        return;
      }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while (--i >= 0) {
        var x = k == 8 ? s[i] & 255 : intAt(s, i);
        if (x < 0) {
          if (s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if (sh == 0)
          this.data[this.t++] = x;
        else if (sh + k > this.DB) {
          this.data[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
          this.data[this.t++] = x >> this.DB - sh;
        } else
          this.data[this.t - 1] |= x << sh;
        sh += k;
        if (sh >= this.DB) sh -= this.DB;
      }
      if (k == 8 && (s[0] & 128) != 0) {
        this.s = -1;
        if (sh > 0) this.data[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
      }
      this.clamp();
      if (mi) BigInteger.ZERO.subTo(this, this);
    }
    __name(bnpFromString, "bnpFromString");
    function bnpClamp() {
      var c = this.s & this.DM;
      while (this.t > 0 && this.data[this.t - 1] == c) --this.t;
    }
    __name(bnpClamp, "bnpClamp");
    function bnToString(b) {
      if (this.s < 0) return "-" + this.negate().toString(b);
      var k;
      if (b == 16) k = 4;
      else if (b == 8) k = 3;
      else if (b == 2) k = 1;
      else if (b == 32) k = 5;
      else if (b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
      var p = this.DB - i * this.DB % k;
      if (i-- > 0) {
        if (p < this.DB && (d = this.data[i] >> p) > 0) {
          m = true;
          r = int2char(d);
        }
        while (i >= 0) {
          if (p < k) {
            d = (this.data[i] & (1 << p) - 1) << k - p;
            d |= this.data[--i] >> (p += this.DB - k);
          } else {
            d = this.data[i] >> (p -= k) & km;
            if (p <= 0) {
              p += this.DB;
              --i;
            }
          }
          if (d > 0) m = true;
          if (m) r += int2char(d);
        }
      }
      return m ? r : "0";
    }
    __name(bnToString, "bnToString");
    function bnNegate() {
      var r = nbi();
      BigInteger.ZERO.subTo(this, r);
      return r;
    }
    __name(bnNegate, "bnNegate");
    function bnAbs() {
      return this.s < 0 ? this.negate() : this;
    }
    __name(bnAbs, "bnAbs");
    function bnCompareTo(a) {
      var r = this.s - a.s;
      if (r != 0) return r;
      var i = this.t;
      r = i - a.t;
      if (r != 0) return this.s < 0 ? -r : r;
      while (--i >= 0) if ((r = this.data[i] - a.data[i]) != 0) return r;
      return 0;
    }
    __name(bnCompareTo, "bnCompareTo");
    function nbits(x) {
      var r = 1, t;
      if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
      }
      if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
      }
      if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
      }
      if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
      }
      if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
      }
      return r;
    }
    __name(nbits, "nbits");
    function bnBitLength() {
      if (this.t <= 0) return 0;
      return this.DB * (this.t - 1) + nbits(this.data[this.t - 1] ^ this.s & this.DM);
    }
    __name(bnBitLength, "bnBitLength");
    function bnpDLShiftTo(n, r) {
      var i;
      for (i = this.t - 1; i >= 0; --i) r.data[i + n] = this.data[i];
      for (i = n - 1; i >= 0; --i) r.data[i] = 0;
      r.t = this.t + n;
      r.s = this.s;
    }
    __name(bnpDLShiftTo, "bnpDLShiftTo");
    function bnpDRShiftTo(n, r) {
      for (var i = n; i < this.t; ++i) r.data[i - n] = this.data[i];
      r.t = Math.max(this.t - n, 0);
      r.s = this.s;
    }
    __name(bnpDRShiftTo, "bnpDRShiftTo");
    function bnpLShiftTo(n, r) {
      var bs = n % this.DB;
      var cbs = this.DB - bs;
      var bm = (1 << cbs) - 1;
      var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
      for (i = this.t - 1; i >= 0; --i) {
        r.data[i + ds + 1] = this.data[i] >> cbs | c;
        c = (this.data[i] & bm) << bs;
      }
      for (i = ds - 1; i >= 0; --i) r.data[i] = 0;
      r.data[ds] = c;
      r.t = this.t + ds + 1;
      r.s = this.s;
      r.clamp();
    }
    __name(bnpLShiftTo, "bnpLShiftTo");
    function bnpRShiftTo(n, r) {
      r.s = this.s;
      var ds = Math.floor(n / this.DB);
      if (ds >= this.t) {
        r.t = 0;
        return;
      }
      var bs = n % this.DB;
      var cbs = this.DB - bs;
      var bm = (1 << bs) - 1;
      r.data[0] = this.data[ds] >> bs;
      for (var i = ds + 1; i < this.t; ++i) {
        r.data[i - ds - 1] |= (this.data[i] & bm) << cbs;
        r.data[i - ds] = this.data[i] >> bs;
      }
      if (bs > 0) r.data[this.t - ds - 1] |= (this.s & bm) << cbs;
      r.t = this.t - ds;
      r.clamp();
    }
    __name(bnpRShiftTo, "bnpRShiftTo");
    function bnpSubTo(a, r) {
      var i = 0, c = 0, m = Math.min(a.t, this.t);
      while (i < m) {
        c += this.data[i] - a.data[i];
        r.data[i++] = c & this.DM;
        c >>= this.DB;
      }
      if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
          c += this.data[i];
          r.data[i++] = c & this.DM;
          c >>= this.DB;
        }
        c += this.s;
      } else {
        c += this.s;
        while (i < a.t) {
          c -= a.data[i];
          r.data[i++] = c & this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = c < 0 ? -1 : 0;
      if (c < -1) r.data[i++] = this.DV + c;
      else if (c > 0) r.data[i++] = c;
      r.t = i;
      r.clamp();
    }
    __name(bnpSubTo, "bnpSubTo");
    function bnpMultiplyTo(a, r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i + y.t;
      while (--i >= 0) r.data[i] = 0;
      for (i = 0; i < y.t; ++i) r.data[i + x.t] = x.am(0, y.data[i], r, i, 0, x.t);
      r.s = 0;
      r.clamp();
      if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
    }
    __name(bnpMultiplyTo, "bnpMultiplyTo");
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2 * x.t;
      while (--i >= 0) r.data[i] = 0;
      for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x.data[i], r, 2 * i, 0, 1);
        if ((r.data[i + x.t] += x.am(i + 1, 2 * x.data[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
          r.data[i + x.t] -= x.DV;
          r.data[i + x.t + 1] = 1;
        }
      }
      if (r.t > 0) r.data[r.t - 1] += x.am(i, x.data[i], r, 2 * i, 0, 1);
      r.s = 0;
      r.clamp();
    }
    __name(bnpSquareTo, "bnpSquareTo");
    function bnpDivRemTo(m, q, r) {
      var pm = m.abs();
      if (pm.t <= 0) return;
      var pt = this.abs();
      if (pt.t < pm.t) {
        if (q != null) q.fromInt(0);
        if (r != null) this.copyTo(r);
        return;
      }
      if (r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB - nbits(pm.data[pm.t - 1]);
      if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
      } else {
        pm.copyTo(y);
        pt.copyTo(r);
      }
      var ys = y.t;
      var y0 = y.data[ys - 1];
      if (y0 == 0) return;
      var yt = y0 * (1 << this.F1) + (ys > 1 ? y.data[ys - 2] >> this.F2 : 0);
      var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
      var i = r.t, j = i - ys, t = q == null ? nbi() : q;
      y.dlShiftTo(j, t);
      if (r.compareTo(t) >= 0) {
        r.data[r.t++] = 1;
        r.subTo(t, r);
      }
      BigInteger.ONE.dlShiftTo(ys, t);
      t.subTo(y, y);
      while (y.t < ys) y.data[y.t++] = 0;
      while (--j >= 0) {
        var qd = r.data[--i] == y0 ? this.DM : Math.floor(r.data[i] * d1 + (r.data[i - 1] + e) * d2);
        if ((r.data[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
          y.dlShiftTo(j, t);
          r.subTo(t, r);
          while (r.data[i] < --qd) r.subTo(t, r);
        }
      }
      if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms) BigInteger.ZERO.subTo(q, q);
      }
      r.t = ys;
      r.clamp();
      if (nsh > 0) r.rShiftTo(nsh, r);
      if (ts < 0) BigInteger.ZERO.subTo(r, r);
    }
    __name(bnpDivRemTo, "bnpDivRemTo");
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a, null, r);
      if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
      return r;
    }
    __name(bnMod, "bnMod");
    function Classic(m) {
      this.m = m;
    }
    __name(Classic, "Classic");
    function cConvert(x) {
      if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    __name(cConvert, "cConvert");
    function cRevert(x) {
      return x;
    }
    __name(cRevert, "cRevert");
    function cReduce(x) {
      x.divRemTo(this.m, null, x);
    }
    __name(cReduce, "cReduce");
    function cMulTo(x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }
    __name(cMulTo, "cMulTo");
    function cSqrTo(x, r) {
      x.squareTo(r);
      this.reduce(r);
    }
    __name(cSqrTo, "cSqrTo");
    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;
    function bnpInvDigit() {
      if (this.t < 1) return 0;
      var x = this.data[0];
      if ((x & 1) == 0) return 0;
      var y = x & 3;
      y = y * (2 - (x & 15) * y) & 15;
      y = y * (2 - (x & 255) * y) & 255;
      y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
      y = y * (2 - x * y % this.DV) % this.DV;
      return y > 0 ? this.DV - y : -y;
    }
    __name(bnpInvDigit, "bnpInvDigit");
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp & 32767;
      this.mph = this.mp >> 15;
      this.um = (1 << m.DB - 15) - 1;
      this.mt2 = 2 * m.t;
    }
    __name(Montgomery, "Montgomery");
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t, r);
      r.divRemTo(this.m, null, r);
      if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
      return r;
    }
    __name(montConvert, "montConvert");
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }
    __name(montRevert, "montRevert");
    function montReduce(x) {
      while (x.t <= this.mt2)
        x.data[x.t++] = 0;
      for (var i = 0; i < this.m.t; ++i) {
        var j = x.data[i] & 32767;
        var u0 = j * this.mpl + ((j * this.mph + (x.data[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
        j = i + this.m.t;
        x.data[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        while (x.data[j] >= x.DV) {
          x.data[j] -= x.DV;
          x.data[++j]++;
        }
      }
      x.clamp();
      x.drShiftTo(this.m.t, x);
      if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
    }
    __name(montReduce, "montReduce");
    function montSqrTo(x, r) {
      x.squareTo(r);
      this.reduce(r);
    }
    __name(montSqrTo, "montSqrTo");
    function montMulTo(x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }
    __name(montMulTo, "montMulTo");
    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;
    function bnpIsEven() {
      return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
    }
    __name(bnpIsEven, "bnpIsEven");
    function bnpExp(e, z) {
      if (e > 4294967295 || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
      g.copyTo(r);
      while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & 1 << i) > 0) z.mulTo(r2, g, r);
        else {
          var t = r;
          r = r2;
          r2 = t;
        }
      }
      return z.revert(r);
    }
    __name(bnpExp, "bnpExp");
    function bnModPowInt(e, m) {
      var z;
      if (e < 256 || m.isEven()) z = new Classic(m);
      else z = new Montgomery(m);
      return this.exp(e, z);
    }
    __name(bnModPowInt, "bnModPowInt");
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);
    function bnClone() {
      var r = nbi();
      this.copyTo(r);
      return r;
    }
    __name(bnClone, "bnClone");
    function bnIntValue() {
      if (this.s < 0) {
        if (this.t == 1) return this.data[0] - this.DV;
        else if (this.t == 0) return -1;
      } else if (this.t == 1) return this.data[0];
      else if (this.t == 0) return 0;
      return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0];
    }
    __name(bnIntValue, "bnIntValue");
    function bnByteValue() {
      return this.t == 0 ? this.s : this.data[0] << 24 >> 24;
    }
    __name(bnByteValue, "bnByteValue");
    function bnShortValue() {
      return this.t == 0 ? this.s : this.data[0] << 16 >> 16;
    }
    __name(bnShortValue, "bnShortValue");
    function bnpChunkSize(r) {
      return Math.floor(Math.LN2 * this.DB / Math.log(r));
    }
    __name(bnpChunkSize, "bnpChunkSize");
    function bnSigNum() {
      if (this.s < 0) return -1;
      else if (this.t <= 0 || this.t == 1 && this.data[0] <= 0) return 0;
      else return 1;
    }
    __name(bnSigNum, "bnSigNum");
    function bnpToRadix(b) {
      if (b == null) b = 10;
      if (this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b, cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d, y, z);
      while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z);
      }
      return z.intValue().toString(b) + r;
    }
    __name(bnpToRadix, "bnpToRadix");
    function bnpFromRadix(s, b) {
      this.fromInt(0);
      if (b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
      for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);
        if (x < 0) {
          if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b * w + x;
        if (++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w, 0);
          j = 0;
          w = 0;
        }
      }
      if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0);
      }
      if (mi) BigInteger.ZERO.subTo(this, this);
    }
    __name(bnpFromRadix, "bnpFromRadix");
    function bnpFromNumber(a, b, c) {
      if ("number" == typeof b) {
        if (a < 2) this.fromInt(1);
        else {
          this.fromNumber(a, c);
          if (!this.testBit(a - 1))
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
          if (this.isEven()) this.dAddOffset(1, 0);
          while (!this.isProbablePrime(b)) {
            this.dAddOffset(2, 0);
            if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
          }
        }
      } else {
        var x = new Array(), t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);
        if (t > 0) x[0] &= (1 << t) - 1;
        else x[0] = 0;
        this.fromString(x, 256);
      }
    }
    __name(bnpFromNumber, "bnpFromNumber");
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB - i * this.DB % 8, d, k = 0;
      if (i-- > 0) {
        if (p < this.DB && (d = this.data[i] >> p) != (this.s & this.DM) >> p)
          r[k++] = d | this.s << this.DB - p;
        while (i >= 0) {
          if (p < 8) {
            d = (this.data[i] & (1 << p) - 1) << 8 - p;
            d |= this.data[--i] >> (p += this.DB - 8);
          } else {
            d = this.data[i] >> (p -= 8) & 255;
            if (p <= 0) {
              p += this.DB;
              --i;
            }
          }
          if ((d & 128) != 0) d |= -256;
          if (k == 0 && (this.s & 128) != (d & 128)) ++k;
          if (k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }
    __name(bnToByteArray, "bnToByteArray");
    function bnEquals(a) {
      return this.compareTo(a) == 0;
    }
    __name(bnEquals, "bnEquals");
    function bnMin(a) {
      return this.compareTo(a) < 0 ? this : a;
    }
    __name(bnMin, "bnMin");
    function bnMax(a) {
      return this.compareTo(a) > 0 ? this : a;
    }
    __name(bnMax, "bnMax");
    function bnpBitwiseTo(a, op, r) {
      var i, f, m = Math.min(a.t, this.t);
      for (i = 0; i < m; ++i) r.data[i] = op(this.data[i], a.data[i]);
      if (a.t < this.t) {
        f = a.s & this.DM;
        for (i = m; i < this.t; ++i) r.data[i] = op(this.data[i], f);
        r.t = this.t;
      } else {
        f = this.s & this.DM;
        for (i = m; i < a.t; ++i) r.data[i] = op(f, a.data[i]);
        r.t = a.t;
      }
      r.s = op(this.s, a.s);
      r.clamp();
    }
    __name(bnpBitwiseTo, "bnpBitwiseTo");
    function op_and(x, y) {
      return x & y;
    }
    __name(op_and, "op_and");
    function bnAnd(a) {
      var r = nbi();
      this.bitwiseTo(a, op_and, r);
      return r;
    }
    __name(bnAnd, "bnAnd");
    function op_or(x, y) {
      return x | y;
    }
    __name(op_or, "op_or");
    function bnOr(a) {
      var r = nbi();
      this.bitwiseTo(a, op_or, r);
      return r;
    }
    __name(bnOr, "bnOr");
    function op_xor(x, y) {
      return x ^ y;
    }
    __name(op_xor, "op_xor");
    function bnXor(a) {
      var r = nbi();
      this.bitwiseTo(a, op_xor, r);
      return r;
    }
    __name(bnXor, "bnXor");
    function op_andnot(x, y) {
      return x & ~y;
    }
    __name(op_andnot, "op_andnot");
    function bnAndNot(a) {
      var r = nbi();
      this.bitwiseTo(a, op_andnot, r);
      return r;
    }
    __name(bnAndNot, "bnAndNot");
    function bnNot() {
      var r = nbi();
      for (var i = 0; i < this.t; ++i) r.data[i] = this.DM & ~this.data[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }
    __name(bnNot, "bnNot");
    function bnShiftLeft(n) {
      var r = nbi();
      if (n < 0) this.rShiftTo(-n, r);
      else this.lShiftTo(n, r);
      return r;
    }
    __name(bnShiftLeft, "bnShiftLeft");
    function bnShiftRight(n) {
      var r = nbi();
      if (n < 0) this.lShiftTo(-n, r);
      else this.rShiftTo(n, r);
      return r;
    }
    __name(bnShiftRight, "bnShiftRight");
    function lbit(x) {
      if (x == 0) return -1;
      var r = 0;
      if ((x & 65535) == 0) {
        x >>= 16;
        r += 16;
      }
      if ((x & 255) == 0) {
        x >>= 8;
        r += 8;
      }
      if ((x & 15) == 0) {
        x >>= 4;
        r += 4;
      }
      if ((x & 3) == 0) {
        x >>= 2;
        r += 2;
      }
      if ((x & 1) == 0) ++r;
      return r;
    }
    __name(lbit, "lbit");
    function bnGetLowestSetBit() {
      for (var i = 0; i < this.t; ++i)
        if (this.data[i] != 0) return i * this.DB + lbit(this.data[i]);
      if (this.s < 0) return this.t * this.DB;
      return -1;
    }
    __name(bnGetLowestSetBit, "bnGetLowestSetBit");
    function cbit(x) {
      var r = 0;
      while (x != 0) {
        x &= x - 1;
        ++r;
      }
      return r;
    }
    __name(cbit, "cbit");
    function bnBitCount() {
      var r = 0, x = this.s & this.DM;
      for (var i = 0; i < this.t; ++i) r += cbit(this.data[i] ^ x);
      return r;
    }
    __name(bnBitCount, "bnBitCount");
    function bnTestBit(n) {
      var j = Math.floor(n / this.DB);
      if (j >= this.t) return this.s != 0;
      return (this.data[j] & 1 << n % this.DB) != 0;
    }
    __name(bnTestBit, "bnTestBit");
    function bnpChangeBit(n, op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r, op, r);
      return r;
    }
    __name(bnpChangeBit, "bnpChangeBit");
    function bnSetBit(n) {
      return this.changeBit(n, op_or);
    }
    __name(bnSetBit, "bnSetBit");
    function bnClearBit(n) {
      return this.changeBit(n, op_andnot);
    }
    __name(bnClearBit, "bnClearBit");
    function bnFlipBit(n) {
      return this.changeBit(n, op_xor);
    }
    __name(bnFlipBit, "bnFlipBit");
    function bnpAddTo(a, r) {
      var i = 0, c = 0, m = Math.min(a.t, this.t);
      while (i < m) {
        c += this.data[i] + a.data[i];
        r.data[i++] = c & this.DM;
        c >>= this.DB;
      }
      if (a.t < this.t) {
        c += a.s;
        while (i < this.t) {
          c += this.data[i];
          r.data[i++] = c & this.DM;
          c >>= this.DB;
        }
        c += this.s;
      } else {
        c += this.s;
        while (i < a.t) {
          c += a.data[i];
          r.data[i++] = c & this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = c < 0 ? -1 : 0;
      if (c > 0) r.data[i++] = c;
      else if (c < -1) r.data[i++] = this.DV + c;
      r.t = i;
      r.clamp();
    }
    __name(bnpAddTo, "bnpAddTo");
    function bnAdd(a) {
      var r = nbi();
      this.addTo(a, r);
      return r;
    }
    __name(bnAdd, "bnAdd");
    function bnSubtract(a) {
      var r = nbi();
      this.subTo(a, r);
      return r;
    }
    __name(bnSubtract, "bnSubtract");
    function bnMultiply(a) {
      var r = nbi();
      this.multiplyTo(a, r);
      return r;
    }
    __name(bnMultiply, "bnMultiply");
    function bnSquare() {
      var r = nbi();
      this.squareTo(r);
      return r;
    }
    __name(bnSquare, "bnSquare");
    function bnDivide(a) {
      var r = nbi();
      this.divRemTo(a, r, null);
      return r;
    }
    __name(bnDivide, "bnDivide");
    function bnRemainder(a) {
      var r = nbi();
      this.divRemTo(a, null, r);
      return r;
    }
    __name(bnRemainder, "bnRemainder");
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a, q, r);
      return new Array(q, r);
    }
    __name(bnDivideAndRemainder, "bnDivideAndRemainder");
    function bnpDMultiply(n) {
      this.data[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
      ++this.t;
      this.clamp();
    }
    __name(bnpDMultiply, "bnpDMultiply");
    function bnpDAddOffset(n, w) {
      if (n == 0) return;
      while (this.t <= w) this.data[this.t++] = 0;
      this.data[w] += n;
      while (this.data[w] >= this.DV) {
        this.data[w] -= this.DV;
        if (++w >= this.t) this.data[this.t++] = 0;
        ++this.data[w];
      }
    }
    __name(bnpDAddOffset, "bnpDAddOffset");
    function NullExp() {
    }
    __name(NullExp, "NullExp");
    function nNop(x) {
      return x;
    }
    __name(nNop, "nNop");
    function nMulTo(x, y, r) {
      x.multiplyTo(y, r);
    }
    __name(nMulTo, "nMulTo");
    function nSqrTo(x, r) {
      x.squareTo(r);
    }
    __name(nSqrTo, "nSqrTo");
    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;
    function bnPow(e) {
      return this.exp(e, new NullExp());
    }
    __name(bnPow, "bnPow");
    function bnpMultiplyLowerTo(a, n, r) {
      var i = Math.min(this.t + a.t, n);
      r.s = 0;
      r.t = i;
      while (i > 0) r.data[--i] = 0;
      var j;
      for (j = r.t - this.t; i < j; ++i) r.data[i + this.t] = this.am(0, a.data[i], r, i, 0, this.t);
      for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a.data[i], r, i, 0, n - i);
      r.clamp();
    }
    __name(bnpMultiplyLowerTo, "bnpMultiplyLowerTo");
    function bnpMultiplyUpperTo(a, n, r) {
      --n;
      var i = r.t = this.t + a.t - n;
      r.s = 0;
      while (--i >= 0) r.data[i] = 0;
      for (i = Math.max(n - this.t, 0); i < a.t; ++i)
        r.data[this.t + i - n] = this.am(n - i, a.data[i], r, 0, 0, this.t + i - n);
      r.clamp();
      r.drShiftTo(1, r);
    }
    __name(bnpMultiplyUpperTo, "bnpMultiplyUpperTo");
    function Barrett(m) {
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }
    __name(Barrett, "Barrett");
    function barrettConvert(x) {
      if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
      else if (x.compareTo(this.m) < 0) return x;
      else {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
    }
    __name(barrettConvert, "barrettConvert");
    function barrettRevert(x) {
      return x;
    }
    __name(barrettRevert, "barrettRevert");
    function barrettReduce(x) {
      x.drShiftTo(this.m.t - 1, this.r2);
      if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp();
      }
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
      while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
      x.subTo(this.r2, x);
      while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
    }
    __name(barrettReduce, "barrettReduce");
    function barrettSqrTo(x, r) {
      x.squareTo(r);
      this.reduce(r);
    }
    __name(barrettSqrTo, "barrettSqrTo");
    function barrettMulTo(x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }
    __name(barrettMulTo, "barrettMulTo");
    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;
    function bnModPow(e, m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if (i <= 0) return r;
      else if (i < 18) k = 1;
      else if (i < 48) k = 3;
      else if (i < 144) k = 4;
      else if (i < 768) k = 5;
      else k = 6;
      if (i < 8)
        z = new Classic(m);
      else if (m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);
      var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
      g[1] = z.convert(this);
      if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);
        while (n <= km) {
          g[n] = nbi();
          z.mulTo(g2, g[n - 2], g[n]);
          n += 2;
        }
      }
      var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e.data[j]) - 1;
      while (j >= 0) {
        if (i >= k1) w = e.data[j] >> i - k1 & km;
        else {
          w = (e.data[j] & (1 << i + 1) - 1) << k1 - i;
          if (j > 0) w |= e.data[j - 1] >> this.DB + i - k1;
        }
        n = k;
        while ((w & 1) == 0) {
          w >>= 1;
          --n;
        }
        if ((i -= n) < 0) {
          i += this.DB;
          --j;
        }
        if (is1) {
          g[w].copyTo(r);
          is1 = false;
        } else {
          while (n > 1) {
            z.sqrTo(r, r2);
            z.sqrTo(r2, r);
            n -= 2;
          }
          if (n > 0) z.sqrTo(r, r2);
          else {
            t = r;
            r = r2;
            r2 = t;
          }
          z.mulTo(r2, g[w], r);
        }
        while (j >= 0 && (e.data[j] & 1 << i) == 0) {
          z.sqrTo(r, r2);
          t = r;
          r = r2;
          r2 = t;
          if (--i < 0) {
            i = this.DB - 1;
            --j;
          }
        }
      }
      return z.revert(r);
    }
    __name(bnModPow, "bnModPow");
    function bnGCD(a) {
      var x = this.s < 0 ? this.negate() : this.clone();
      var y = a.s < 0 ? a.negate() : a.clone();
      if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
      }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if (g < 0) return x;
      if (i < g) g = i;
      if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
      }
      while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
        if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
        if (x.compareTo(y) >= 0) {
          x.subTo(y, x);
          x.rShiftTo(1, x);
        } else {
          y.subTo(x, y);
          y.rShiftTo(1, y);
        }
      }
      if (g > 0) y.lShiftTo(g, y);
      return y;
    }
    __name(bnGCD, "bnGCD");
    function bnpModInt(n) {
      if (n <= 0) return 0;
      var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
      if (this.t > 0)
        if (d == 0) r = this.data[0] % n;
        else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this.data[i]) % n;
      return r;
    }
    __name(bnpModInt, "bnpModInt");
    function bnModInverse(m) {
      if (this.signum() == 0) {
        return BigInteger.ZERO;
      }
      var ac = m.isEven();
      if (this.isEven() && ac || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while (u.signum() != 0) {
        while (u.isEven()) {
          u.rShiftTo(1, u);
          if (ac) {
            if (!a.isEven() || !b.isEven()) {
              a.addTo(this, a);
              b.subTo(m, b);
            }
            a.rShiftTo(1, a);
          } else if (!b.isEven()) b.subTo(m, b);
          b.rShiftTo(1, b);
        }
        while (v.isEven()) {
          v.rShiftTo(1, v);
          if (ac) {
            if (!c.isEven() || !d.isEven()) {
              c.addTo(this, c);
              d.subTo(m, d);
            }
            c.rShiftTo(1, c);
          } else if (!d.isEven()) d.subTo(m, d);
          d.rShiftTo(1, d);
        }
        if (u.compareTo(v) >= 0) {
          u.subTo(v, u);
          if (ac) a.subTo(c, a);
          b.subTo(d, b);
        } else {
          v.subTo(u, v);
          if (ac) c.subTo(a, c);
          d.subTo(b, d);
        }
      }
      if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if (d.compareTo(m) >= 0) return d.subtract(m);
      if (d.signum() < 0) d.addTo(m, d);
      else return d;
      if (d.signum() < 0) return d.add(m);
      else return d;
    }
    __name(bnModInverse, "bnModInverse");
    var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if (x.t == 1 && x.data[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i)
          if (x.data[0] == lowprimes[i]) return true;
        return false;
      }
      if (x.isEven()) return false;
      i = 1;
      while (i < lowprimes.length) {
        var m = lowprimes[i], j = i + 1;
        while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while (i < j) if (m % lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }
    __name(bnIsProbablePrime, "bnIsProbablePrime");
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if (k <= 0) return false;
      var r = n1.shiftRight(k);
      var prng = bnGetPrng();
      var a;
      for (var i = 0; i < t; ++i) {
        do {
          a = new BigInteger(this.bitLength(), prng);
        } while (a.compareTo(BigInteger.ONE) <= 0 || a.compareTo(n1) >= 0);
        var y = a.modPow(r, this);
        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while (j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2, this);
            if (y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if (y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }
    __name(bnpMillerRabin, "bnpMillerRabin");
    function bnGetPrng() {
      return {
        // x is an array to fill with bytes
        nextBytes: /* @__PURE__ */ __name(function(x) {
          for (var i = 0; i < x.length; ++i) {
            x[i] = Math.floor(Math.random() * 256);
          }
        }, "nextBytes")
      };
    }
    __name(bnGetPrng, "bnGetPrng");
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    BigInteger.prototype.square = bnSquare;
  }
});

// node_modules/node-forge/lib/sha1.js
var require_sha1 = __commonJS({
  "node_modules/node-forge/lib/sha1.js"(exports, module) {
    var forge = require_forge();
    require_md();
    require_util();
    var sha1 = module.exports = forge.sha1 = forge.sha1 || {};
    forge.md.sha1 = forge.md.algorithms.sha1 = sha1;
    sha1.create = function() {
      if (!_initialized) {
        _init();
      }
      var _state = null;
      var _input = forge.util.createBuffer();
      var _w = new Array(80);
      var md = {
        algorithm: "sha1",
        blockLength: 64,
        digestLength: 20,
        // 56-bit length of message so far (does not including padding)
        messageLength: 0,
        // true message length
        fullMessageLength: null,
        // size of message length in bytes
        messageLengthSize: 8
      };
      md.start = function() {
        md.messageLength = 0;
        md.fullMessageLength = md.messageLength64 = [];
        var int32s = md.messageLengthSize / 4;
        for (var i = 0; i < int32s; ++i) {
          md.fullMessageLength.push(0);
        }
        _input = forge.util.createBuffer();
        _state = {
          h0: 1732584193,
          h1: 4023233417,
          h2: 2562383102,
          h3: 271733878,
          h4: 3285377520
        };
        return md;
      };
      md.start();
      md.update = function(msg, encoding) {
        if (encoding === "utf8") {
          msg = forge.util.encodeUtf8(msg);
        }
        var len = msg.length;
        md.messageLength += len;
        len = [len / 4294967296 >>> 0, len >>> 0];
        for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
          md.fullMessageLength[i] += len[1];
          len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
          md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
          len[0] = len[1] / 4294967296 >>> 0;
        }
        _input.putBytes(msg);
        _update(_state, _w, _input);
        if (_input.read > 2048 || _input.length() === 0) {
          _input.compact();
        }
        return md;
      };
      md.digest = function() {
        var finalBlock = forge.util.createBuffer();
        finalBlock.putBytes(_input.bytes());
        var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
        var overflow = remaining & md.blockLength - 1;
        finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));
        var next, carry;
        var bits = md.fullMessageLength[0] * 8;
        for (var i = 0; i < md.fullMessageLength.length - 1; ++i) {
          next = md.fullMessageLength[i + 1] * 8;
          carry = next / 4294967296 >>> 0;
          bits += carry;
          finalBlock.putInt32(bits >>> 0);
          bits = next >>> 0;
        }
        finalBlock.putInt32(bits);
        var s2 = {
          h0: _state.h0,
          h1: _state.h1,
          h2: _state.h2,
          h3: _state.h3,
          h4: _state.h4
        };
        _update(s2, _w, finalBlock);
        var rval = forge.util.createBuffer();
        rval.putInt32(s2.h0);
        rval.putInt32(s2.h1);
        rval.putInt32(s2.h2);
        rval.putInt32(s2.h3);
        rval.putInt32(s2.h4);
        return rval;
      };
      return md;
    };
    var _padding = null;
    var _initialized = false;
    function _init() {
      _padding = String.fromCharCode(128);
      _padding += forge.util.fillString(String.fromCharCode(0), 64);
      _initialized = true;
    }
    __name(_init, "_init");
    function _update(s, w, bytes) {
      var t, a, b, c, d, e, f, i;
      var len = bytes.length();
      while (len >= 64) {
        a = s.h0;
        b = s.h1;
        c = s.h2;
        d = s.h3;
        e = s.h4;
        for (i = 0; i < 16; ++i) {
          t = bytes.getInt32();
          w[i] = t;
          f = d ^ b & (c ^ d);
          t = (a << 5 | a >>> 27) + f + e + 1518500249 + t;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) >>> 0;
          b = a;
          a = t;
        }
        for (; i < 20; ++i) {
          t = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
          t = t << 1 | t >>> 31;
          w[i] = t;
          f = d ^ b & (c ^ d);
          t = (a << 5 | a >>> 27) + f + e + 1518500249 + t;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) >>> 0;
          b = a;
          a = t;
        }
        for (; i < 32; ++i) {
          t = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
          t = t << 1 | t >>> 31;
          w[i] = t;
          f = b ^ c ^ d;
          t = (a << 5 | a >>> 27) + f + e + 1859775393 + t;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) >>> 0;
          b = a;
          a = t;
        }
        for (; i < 40; ++i) {
          t = w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32];
          t = t << 2 | t >>> 30;
          w[i] = t;
          f = b ^ c ^ d;
          t = (a << 5 | a >>> 27) + f + e + 1859775393 + t;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) >>> 0;
          b = a;
          a = t;
        }
        for (; i < 60; ++i) {
          t = w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32];
          t = t << 2 | t >>> 30;
          w[i] = t;
          f = b & c | d & (b ^ c);
          t = (a << 5 | a >>> 27) + f + e + 2400959708 + t;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) >>> 0;
          b = a;
          a = t;
        }
        for (; i < 80; ++i) {
          t = w[i - 6] ^ w[i - 16] ^ w[i - 28] ^ w[i - 32];
          t = t << 2 | t >>> 30;
          w[i] = t;
          f = b ^ c ^ d;
          t = (a << 5 | a >>> 27) + f + e + 3395469782 + t;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) >>> 0;
          b = a;
          a = t;
        }
        s.h0 = s.h0 + a | 0;
        s.h1 = s.h1 + b | 0;
        s.h2 = s.h2 + c | 0;
        s.h3 = s.h3 + d | 0;
        s.h4 = s.h4 + e | 0;
        len -= 64;
      }
    }
    __name(_update, "_update");
  }
});

// node_modules/node-forge/lib/pkcs1.js
var require_pkcs1 = __commonJS({
  "node_modules/node-forge/lib/pkcs1.js"(exports, module) {
    var forge = require_forge();
    require_util();
    require_random();
    require_sha1();
    var pkcs1 = module.exports = forge.pkcs1 = forge.pkcs1 || {};
    pkcs1.encode_rsa_oaep = function(key, message, options) {
      var label;
      var seed;
      var md;
      var mgf1Md;
      if (typeof options === "string") {
        label = options;
        seed = arguments[3] || void 0;
        md = arguments[4] || void 0;
      } else if (options) {
        label = options.label || void 0;
        seed = options.seed || void 0;
        md = options.md || void 0;
        if (options.mgf1 && options.mgf1.md) {
          mgf1Md = options.mgf1.md;
        }
      }
      if (!md) {
        md = forge.md.sha1.create();
      } else {
        md.start();
      }
      if (!mgf1Md) {
        mgf1Md = md;
      }
      var keyLength = Math.ceil(key.n.bitLength() / 8);
      var maxLength = keyLength - 2 * md.digestLength - 2;
      if (message.length > maxLength) {
        var error = new Error("RSAES-OAEP input message length is too long.");
        error.length = message.length;
        error.maxLength = maxLength;
        throw error;
      }
      if (!label) {
        label = "";
      }
      md.update(label, "raw");
      var lHash = md.digest();
      var PS = "";
      var PS_length = maxLength - message.length;
      for (var i = 0; i < PS_length; i++) {
        PS += "\0";
      }
      var DB = lHash.getBytes() + PS + "" + message;
      if (!seed) {
        seed = forge.random.getBytes(md.digestLength);
      } else if (seed.length !== md.digestLength) {
        var error = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");
        error.seedLength = seed.length;
        error.digestLength = md.digestLength;
        throw error;
      }
      var dbMask = rsa_mgf1(seed, keyLength - md.digestLength - 1, mgf1Md);
      var maskedDB = forge.util.xorBytes(DB, dbMask, DB.length);
      var seedMask = rsa_mgf1(maskedDB, md.digestLength, mgf1Md);
      var maskedSeed = forge.util.xorBytes(seed, seedMask, seed.length);
      return "\0" + maskedSeed + maskedDB;
    };
    pkcs1.decode_rsa_oaep = function(key, em, options) {
      var label;
      var md;
      var mgf1Md;
      if (typeof options === "string") {
        label = options;
        md = arguments[3] || void 0;
      } else if (options) {
        label = options.label || void 0;
        md = options.md || void 0;
        if (options.mgf1 && options.mgf1.md) {
          mgf1Md = options.mgf1.md;
        }
      }
      var keyLength = Math.ceil(key.n.bitLength() / 8);
      if (em.length !== keyLength) {
        var error = new Error("RSAES-OAEP encoded message length is invalid.");
        error.length = em.length;
        error.expectedLength = keyLength;
        throw error;
      }
      if (md === void 0) {
        md = forge.md.sha1.create();
      } else {
        md.start();
      }
      if (!mgf1Md) {
        mgf1Md = md;
      }
      if (keyLength < 2 * md.digestLength + 2) {
        throw new Error("RSAES-OAEP key is too short for the hash function.");
      }
      if (!label) {
        label = "";
      }
      md.update(label, "raw");
      var lHash = md.digest().getBytes();
      var y = em.charAt(0);
      var maskedSeed = em.substring(1, md.digestLength + 1);
      var maskedDB = em.substring(1 + md.digestLength);
      var seedMask = rsa_mgf1(maskedDB, md.digestLength, mgf1Md);
      var seed = forge.util.xorBytes(maskedSeed, seedMask, maskedSeed.length);
      var dbMask = rsa_mgf1(seed, keyLength - md.digestLength - 1, mgf1Md);
      var db = forge.util.xorBytes(maskedDB, dbMask, maskedDB.length);
      var lHashPrime = db.substring(0, md.digestLength);
      var error = y !== "\0";
      for (var i = 0; i < md.digestLength; ++i) {
        error |= lHash.charAt(i) !== lHashPrime.charAt(i);
      }
      var in_ps = 1;
      var index = md.digestLength;
      for (var j = md.digestLength; j < db.length; j++) {
        var code = db.charCodeAt(j);
        var is_0 = code & 1 ^ 1;
        var error_mask = in_ps ? 65534 : 0;
        error |= code & error_mask;
        in_ps = in_ps & is_0;
        index += in_ps;
      }
      if (error || db.charCodeAt(index) !== 1) {
        throw new Error("Invalid RSAES-OAEP padding.");
      }
      return db.substring(index + 1);
    };
    function rsa_mgf1(seed, maskLength, hash) {
      if (!hash) {
        hash = forge.md.sha1.create();
      }
      var t = "";
      var count = Math.ceil(maskLength / hash.digestLength);
      for (var i = 0; i < count; ++i) {
        var c = String.fromCharCode(
          i >> 24 & 255,
          i >> 16 & 255,
          i >> 8 & 255,
          i & 255
        );
        hash.start();
        hash.update(seed + c);
        t += hash.digest().getBytes();
      }
      return t.substring(0, maskLength);
    }
    __name(rsa_mgf1, "rsa_mgf1");
  }
});

// node_modules/node-forge/lib/prime.js
var require_prime = __commonJS({
  "node_modules/node-forge/lib/prime.js"(exports, module) {
    var forge = require_forge();
    require_util();
    require_jsbn();
    require_random();
    (function() {
      if (forge.prime) {
        module.exports = forge.prime;
        return;
      }
      var prime = module.exports = forge.prime = forge.prime || {};
      var BigInteger = forge.jsbn.BigInteger;
      var GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];
      var THIRTY = new BigInteger(null);
      THIRTY.fromInt(30);
      var op_or = /* @__PURE__ */ __name(function(x, y) {
        return x | y;
      }, "op_or");
      prime.generateProbablePrime = function(bits, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = options || {};
        var algorithm = options.algorithm || "PRIMEINC";
        if (typeof algorithm === "string") {
          algorithm = { name: algorithm };
        }
        algorithm.options = algorithm.options || {};
        var prng = options.prng || forge.random;
        var rng = {
          // x is an array to fill with bytes
          nextBytes: /* @__PURE__ */ __name(function(x) {
            var b = prng.getBytesSync(x.length);
            for (var i = 0; i < x.length; ++i) {
              x[i] = b.charCodeAt(i);
            }
          }, "nextBytes")
        };
        if (algorithm.name === "PRIMEINC") {
          return primeincFindPrime(bits, rng, algorithm.options, callback);
        }
        throw new Error("Invalid prime generation algorithm: " + algorithm.name);
      };
      function primeincFindPrime(bits, rng, options, callback) {
        if ("workers" in options) {
          return primeincFindPrimeWithWorkers(bits, rng, options, callback);
        }
        return primeincFindPrimeWithoutWorkers(bits, rng, options, callback);
      }
      __name(primeincFindPrime, "primeincFindPrime");
      function primeincFindPrimeWithoutWorkers(bits, rng, options, callback) {
        var num = generateRandom(bits, rng);
        var deltaIdx = 0;
        var mrTests = getMillerRabinTests(num.bitLength());
        if ("millerRabinTests" in options) {
          mrTests = options.millerRabinTests;
        }
        var maxBlockTime = 10;
        if ("maxBlockTime" in options) {
          maxBlockTime = options.maxBlockTime;
        }
        _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback);
      }
      __name(primeincFindPrimeWithoutWorkers, "primeincFindPrimeWithoutWorkers");
      function _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback) {
        var start = +/* @__PURE__ */ new Date();
        do {
          if (num.bitLength() > bits) {
            num = generateRandom(bits, rng);
          }
          if (num.isProbablePrime(mrTests)) {
            return callback(null, num);
          }
          num.dAddOffset(GCD_30_DELTA[deltaIdx++ % 8], 0);
        } while (maxBlockTime < 0 || +/* @__PURE__ */ new Date() - start < maxBlockTime);
        forge.util.setImmediate(function() {
          _primeinc(num, bits, rng, deltaIdx, mrTests, maxBlockTime, callback);
        });
      }
      __name(_primeinc, "_primeinc");
      function primeincFindPrimeWithWorkers(bits, rng, options, callback) {
        if (typeof Worker === "undefined") {
          return primeincFindPrimeWithoutWorkers(bits, rng, options, callback);
        }
        var num = generateRandom(bits, rng);
        var numWorkers = options.workers;
        var workLoad = options.workLoad || 100;
        var range = workLoad * 30 / 8;
        var workerScript = options.workerScript || "forge/prime.worker.js";
        if (numWorkers === -1) {
          return forge.util.estimateCores(function(err, cores) {
            if (err) {
              cores = 2;
            }
            numWorkers = cores - 1;
            generate();
          });
        }
        generate();
        function generate() {
          numWorkers = Math.max(1, numWorkers);
          var workers = [];
          for (var i = 0; i < numWorkers; ++i) {
            workers[i] = new Worker(workerScript);
          }
          var running = numWorkers;
          for (var i = 0; i < numWorkers; ++i) {
            workers[i].addEventListener("message", workerMessage);
          }
          var found = false;
          function workerMessage(e) {
            if (found) {
              return;
            }
            --running;
            var data = e.data;
            if (data.found) {
              for (var i2 = 0; i2 < workers.length; ++i2) {
                workers[i2].terminate();
              }
              found = true;
              return callback(null, new BigInteger(data.prime, 16));
            }
            if (num.bitLength() > bits) {
              num = generateRandom(bits, rng);
            }
            var hex = num.toString(16);
            e.target.postMessage({
              hex,
              workLoad
            });
            num.dAddOffset(range, 0);
          }
          __name(workerMessage, "workerMessage");
        }
        __name(generate, "generate");
      }
      __name(primeincFindPrimeWithWorkers, "primeincFindPrimeWithWorkers");
      function generateRandom(bits, rng) {
        var num = new BigInteger(bits, rng);
        var bits1 = bits - 1;
        if (!num.testBit(bits1)) {
          num.bitwiseTo(BigInteger.ONE.shiftLeft(bits1), op_or, num);
        }
        num.dAddOffset(31 - num.mod(THIRTY).byteValue(), 0);
        return num;
      }
      __name(generateRandom, "generateRandom");
      function getMillerRabinTests(bits) {
        if (bits <= 100) return 27;
        if (bits <= 150) return 18;
        if (bits <= 200) return 15;
        if (bits <= 250) return 12;
        if (bits <= 300) return 9;
        if (bits <= 350) return 8;
        if (bits <= 400) return 7;
        if (bits <= 500) return 6;
        if (bits <= 600) return 5;
        if (bits <= 800) return 4;
        if (bits <= 1250) return 3;
        return 2;
      }
      __name(getMillerRabinTests, "getMillerRabinTests");
    })();
  }
});

// node_modules/node-forge/lib/rsa.js
var require_rsa = __commonJS({
  "node_modules/node-forge/lib/rsa.js"(exports, module) {
    var forge = require_forge();
    require_asn1();
    require_jsbn();
    require_oids();
    require_pkcs1();
    require_prime();
    require_random();
    require_util();
    if (typeof BigInteger === "undefined") {
      BigInteger = forge.jsbn.BigInteger;
    }
    var BigInteger;
    var _crypto = forge.util.isNodejs ? require_crypto() : null;
    var asn1 = forge.asn1;
    var util = forge.util;
    forge.pki = forge.pki || {};
    module.exports = forge.pki.rsa = forge.rsa = forge.rsa || {};
    var pki = forge.pki;
    var GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2];
    var privateKeyValidator = {
      // PrivateKeyInfo
      name: "PrivateKeyInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        // Version (INTEGER)
        name: "PrivateKeyInfo.version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyVersion"
      }, {
        // privateKeyAlgorithm
        name: "PrivateKeyInfo.privateKeyAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "privateKeyOid"
        }]
      }, {
        // PrivateKey
        name: "PrivateKeyInfo",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "privateKey"
      }]
    };
    var rsaPrivateKeyValidator = {
      // RSAPrivateKey
      name: "RSAPrivateKey",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        // Version (INTEGER)
        name: "RSAPrivateKey.version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyVersion"
      }, {
        // modulus (n)
        name: "RSAPrivateKey.modulus",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyModulus"
      }, {
        // publicExponent (e)
        name: "RSAPrivateKey.publicExponent",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPublicExponent"
      }, {
        // privateExponent (d)
        name: "RSAPrivateKey.privateExponent",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPrivateExponent"
      }, {
        // prime1 (p)
        name: "RSAPrivateKey.prime1",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPrime1"
      }, {
        // prime2 (q)
        name: "RSAPrivateKey.prime2",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyPrime2"
      }, {
        // exponent1 (d mod (p-1))
        name: "RSAPrivateKey.exponent1",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyExponent1"
      }, {
        // exponent2 (d mod (q-1))
        name: "RSAPrivateKey.exponent2",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyExponent2"
      }, {
        // coefficient ((inverse of q) mod p)
        name: "RSAPrivateKey.coefficient",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyCoefficient"
      }]
    };
    var rsaPublicKeyValidator = {
      // RSAPublicKey
      name: "RSAPublicKey",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        // modulus (n)
        name: "RSAPublicKey.modulus",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "publicKeyModulus"
      }, {
        // publicExponent (e)
        name: "RSAPublicKey.exponent",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "publicKeyExponent"
      }]
    };
    var publicKeyValidator = forge.pki.rsa.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "subjectPublicKeyInfo",
      value: [{
        name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "publicKeyOid"
        }]
      }, {
        // subjectPublicKey
        name: "SubjectPublicKeyInfo.subjectPublicKey",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.BITSTRING,
        constructed: false,
        value: [{
          // RSAPublicKey
          name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          optional: true,
          captureAsn1: "rsaPublicKey"
        }]
      }]
    };
    var digestInfoValidator = {
      name: "DigestInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "DigestInfo.DigestAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "algorithmIdentifier"
        }, {
          // NULL parameters
          name: "DigestInfo.DigestAlgorithm.parameters",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.NULL,
          // captured only to check existence for md2 and md5
          capture: "parameters",
          optional: true,
          constructed: false
        }]
      }, {
        // digest
        name: "DigestInfo.digest",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "digest"
      }]
    };
    var emsaPkcs1v15encode = /* @__PURE__ */ __name(function(md) {
      var oid;
      if (md.algorithm in pki.oids) {
        oid = pki.oids[md.algorithm];
      } else {
        var error = new Error("Unknown message digest algorithm.");
        error.algorithm = md.algorithm;
        throw error;
      }
      var oidBytes = asn1.oidToDer(oid).getBytes();
      var digestInfo = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.SEQUENCE,
        true,
        []
      );
      var digestAlgorithm = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.SEQUENCE,
        true,
        []
      );
      digestAlgorithm.value.push(asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OID,
        false,
        oidBytes
      ));
      digestAlgorithm.value.push(asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.NULL,
        false,
        ""
      ));
      var digest = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OCTETSTRING,
        false,
        md.digest().getBytes()
      );
      digestInfo.value.push(digestAlgorithm);
      digestInfo.value.push(digest);
      return asn1.toDer(digestInfo).getBytes();
    }, "emsaPkcs1v15encode");
    var _modPow = /* @__PURE__ */ __name(function(x, key, pub) {
      if (pub) {
        return x.modPow(key.e, key.n);
      }
      if (!key.p || !key.q) {
        return x.modPow(key.d, key.n);
      }
      if (!key.dP) {
        key.dP = key.d.mod(key.p.subtract(BigInteger.ONE));
      }
      if (!key.dQ) {
        key.dQ = key.d.mod(key.q.subtract(BigInteger.ONE));
      }
      if (!key.qInv) {
        key.qInv = key.q.modInverse(key.p);
      }
      var r;
      do {
        r = new BigInteger(
          forge.util.bytesToHex(forge.random.getBytes(key.n.bitLength() / 8)),
          16
        );
      } while (r.compareTo(key.n) >= 0 || !r.gcd(key.n).equals(BigInteger.ONE));
      x = x.multiply(r.modPow(key.e, key.n)).mod(key.n);
      var xp = x.mod(key.p).modPow(key.dP, key.p);
      var xq = x.mod(key.q).modPow(key.dQ, key.q);
      while (xp.compareTo(xq) < 0) {
        xp = xp.add(key.p);
      }
      var y = xp.subtract(xq).multiply(key.qInv).mod(key.p).multiply(key.q).add(xq);
      y = y.multiply(r.modInverse(key.n)).mod(key.n);
      return y;
    }, "_modPow");
    pki.rsa.encrypt = function(m, key, bt) {
      var pub = bt;
      var eb;
      var k = Math.ceil(key.n.bitLength() / 8);
      if (bt !== false && bt !== true) {
        pub = bt === 2;
        eb = _encodePkcs1_v1_5(m, key, bt);
      } else {
        eb = forge.util.createBuffer();
        eb.putBytes(m);
      }
      var x = new BigInteger(eb.toHex(), 16);
      var y = _modPow(x, key, pub);
      var yhex = y.toString(16);
      var ed = forge.util.createBuffer();
      var zeros = k - Math.ceil(yhex.length / 2);
      while (zeros > 0) {
        ed.putByte(0);
        --zeros;
      }
      ed.putBytes(forge.util.hexToBytes(yhex));
      return ed.getBytes();
    };
    pki.rsa.decrypt = function(ed, key, pub, ml) {
      var k = Math.ceil(key.n.bitLength() / 8);
      if (ed.length !== k) {
        var error = new Error("Encrypted message length is invalid.");
        error.length = ed.length;
        error.expected = k;
        throw error;
      }
      var y = new BigInteger(forge.util.createBuffer(ed).toHex(), 16);
      if (y.compareTo(key.n) >= 0) {
        throw new Error("Encrypted message is invalid.");
      }
      var x = _modPow(y, key, pub);
      var xhex = x.toString(16);
      var eb = forge.util.createBuffer();
      var zeros = k - Math.ceil(xhex.length / 2);
      while (zeros > 0) {
        eb.putByte(0);
        --zeros;
      }
      eb.putBytes(forge.util.hexToBytes(xhex));
      if (ml !== false) {
        return _decodePkcs1_v1_5(eb.getBytes(), key, pub);
      }
      return eb.getBytes();
    };
    pki.rsa.createKeyPairGenerationState = function(bits, e, options) {
      if (typeof bits === "string") {
        bits = parseInt(bits, 10);
      }
      bits = bits || 2048;
      options = options || {};
      var prng = options.prng || forge.random;
      var rng = {
        // x is an array to fill with bytes
        nextBytes: /* @__PURE__ */ __name(function(x) {
          var b = prng.getBytesSync(x.length);
          for (var i = 0; i < x.length; ++i) {
            x[i] = b.charCodeAt(i);
          }
        }, "nextBytes")
      };
      var algorithm = options.algorithm || "PRIMEINC";
      var rval;
      if (algorithm === "PRIMEINC") {
        rval = {
          algorithm,
          state: 0,
          bits,
          rng,
          eInt: e || 65537,
          e: new BigInteger(null),
          p: null,
          q: null,
          qBits: bits >> 1,
          pBits: bits - (bits >> 1),
          pqState: 0,
          num: null,
          keys: null
        };
        rval.e.fromInt(rval.eInt);
      } else {
        throw new Error("Invalid key generation algorithm: " + algorithm);
      }
      return rval;
    };
    pki.rsa.stepKeyPairGenerationState = function(state, n) {
      if (!("algorithm" in state)) {
        state.algorithm = "PRIMEINC";
      }
      var THIRTY = new BigInteger(null);
      THIRTY.fromInt(30);
      var deltaIdx = 0;
      var op_or = /* @__PURE__ */ __name(function(x, y) {
        return x | y;
      }, "op_or");
      var t1 = +/* @__PURE__ */ new Date();
      var t2;
      var total = 0;
      while (state.keys === null && (n <= 0 || total < n)) {
        if (state.state === 0) {
          var bits = state.p === null ? state.pBits : state.qBits;
          var bits1 = bits - 1;
          if (state.pqState === 0) {
            state.num = new BigInteger(bits, state.rng);
            if (!state.num.testBit(bits1)) {
              state.num.bitwiseTo(
                BigInteger.ONE.shiftLeft(bits1),
                op_or,
                state.num
              );
            }
            state.num.dAddOffset(31 - state.num.mod(THIRTY).byteValue(), 0);
            deltaIdx = 0;
            ++state.pqState;
          } else if (state.pqState === 1) {
            if (state.num.bitLength() > bits) {
              state.pqState = 0;
            } else if (state.num.isProbablePrime(
              _getMillerRabinTests(state.num.bitLength())
            )) {
              ++state.pqState;
            } else {
              state.num.dAddOffset(GCD_30_DELTA[deltaIdx++ % 8], 0);
            }
          } else if (state.pqState === 2) {
            state.pqState = state.num.subtract(BigInteger.ONE).gcd(state.e).compareTo(BigInteger.ONE) === 0 ? 3 : 0;
          } else if (state.pqState === 3) {
            state.pqState = 0;
            if (state.p === null) {
              state.p = state.num;
            } else {
              state.q = state.num;
            }
            if (state.p !== null && state.q !== null) {
              ++state.state;
            }
            state.num = null;
          }
        } else if (state.state === 1) {
          if (state.p.compareTo(state.q) < 0) {
            state.num = state.p;
            state.p = state.q;
            state.q = state.num;
          }
          ++state.state;
        } else if (state.state === 2) {
          state.p1 = state.p.subtract(BigInteger.ONE);
          state.q1 = state.q.subtract(BigInteger.ONE);
          state.phi = state.p1.multiply(state.q1);
          ++state.state;
        } else if (state.state === 3) {
          if (state.phi.gcd(state.e).compareTo(BigInteger.ONE) === 0) {
            ++state.state;
          } else {
            state.p = null;
            state.q = null;
            state.state = 0;
          }
        } else if (state.state === 4) {
          state.n = state.p.multiply(state.q);
          if (state.n.bitLength() === state.bits) {
            ++state.state;
          } else {
            state.q = null;
            state.state = 0;
          }
        } else if (state.state === 5) {
          var d = state.e.modInverse(state.phi);
          state.keys = {
            privateKey: pki.rsa.setPrivateKey(
              state.n,
              state.e,
              d,
              state.p,
              state.q,
              d.mod(state.p1),
              d.mod(state.q1),
              state.q.modInverse(state.p)
            ),
            publicKey: pki.rsa.setPublicKey(state.n, state.e)
          };
        }
        t2 = +/* @__PURE__ */ new Date();
        total += t2 - t1;
        t1 = t2;
      }
      return state.keys !== null;
    };
    pki.rsa.generateKeyPair = function(bits, e, options, callback) {
      if (arguments.length === 1) {
        if (typeof bits === "object") {
          options = bits;
          bits = void 0;
        } else if (typeof bits === "function") {
          callback = bits;
          bits = void 0;
        }
      } else if (arguments.length === 2) {
        if (typeof bits === "number") {
          if (typeof e === "function") {
            callback = e;
            e = void 0;
          } else if (typeof e !== "number") {
            options = e;
            e = void 0;
          }
        } else {
          options = bits;
          callback = e;
          bits = void 0;
          e = void 0;
        }
      } else if (arguments.length === 3) {
        if (typeof e === "number") {
          if (typeof options === "function") {
            callback = options;
            options = void 0;
          }
        } else {
          callback = options;
          options = e;
          e = void 0;
        }
      }
      options = options || {};
      if (bits === void 0) {
        bits = options.bits || 2048;
      }
      if (e === void 0) {
        e = options.e || 65537;
      }
      if (!forge.options.usePureJavaScript && !options.prng && bits >= 256 && bits <= 16384 && (e === 65537 || e === 3)) {
        if (callback) {
          if (_detectNodeCrypto("generateKeyPair")) {
            return _crypto.generateKeyPair("rsa", {
              modulusLength: bits,
              publicExponent: e,
              publicKeyEncoding: {
                type: "spki",
                format: "pem"
              },
              privateKeyEncoding: {
                type: "pkcs8",
                format: "pem"
              }
            }, function(err, pub, priv) {
              if (err) {
                return callback(err);
              }
              callback(null, {
                privateKey: pki.privateKeyFromPem(priv),
                publicKey: pki.publicKeyFromPem(pub)
              });
            });
          }
          if (_detectSubtleCrypto("generateKey") && _detectSubtleCrypto("exportKey")) {
            return util.globalScope.crypto.subtle.generateKey({
              name: "RSASSA-PKCS1-v1_5",
              modulusLength: bits,
              publicExponent: _intToUint8Array(e),
              hash: { name: "SHA-256" }
            }, true, ["sign", "verify"]).then(function(pair) {
              return util.globalScope.crypto.subtle.exportKey(
                "pkcs8",
                pair.privateKey
              );
            }).then(void 0, function(err) {
              callback(err);
            }).then(function(pkcs8) {
              if (pkcs8) {
                var privateKey = pki.privateKeyFromAsn1(
                  asn1.fromDer(forge.util.createBuffer(pkcs8))
                );
                callback(null, {
                  privateKey,
                  publicKey: pki.setRsaPublicKey(privateKey.n, privateKey.e)
                });
              }
            });
          }
          if (_detectSubtleMsCrypto("generateKey") && _detectSubtleMsCrypto("exportKey")) {
            var genOp = util.globalScope.msCrypto.subtle.generateKey({
              name: "RSASSA-PKCS1-v1_5",
              modulusLength: bits,
              publicExponent: _intToUint8Array(e),
              hash: { name: "SHA-256" }
            }, true, ["sign", "verify"]);
            genOp.oncomplete = function(e2) {
              var pair = e2.target.result;
              var exportOp = util.globalScope.msCrypto.subtle.exportKey(
                "pkcs8",
                pair.privateKey
              );
              exportOp.oncomplete = function(e3) {
                var pkcs8 = e3.target.result;
                var privateKey = pki.privateKeyFromAsn1(
                  asn1.fromDer(forge.util.createBuffer(pkcs8))
                );
                callback(null, {
                  privateKey,
                  publicKey: pki.setRsaPublicKey(privateKey.n, privateKey.e)
                });
              };
              exportOp.onerror = function(err) {
                callback(err);
              };
            };
            genOp.onerror = function(err) {
              callback(err);
            };
            return;
          }
        } else {
          if (_detectNodeCrypto("generateKeyPairSync")) {
            var keypair = _crypto.generateKeyPairSync("rsa", {
              modulusLength: bits,
              publicExponent: e,
              publicKeyEncoding: {
                type: "spki",
                format: "pem"
              },
              privateKeyEncoding: {
                type: "pkcs8",
                format: "pem"
              }
            });
            return {
              privateKey: pki.privateKeyFromPem(keypair.privateKey),
              publicKey: pki.publicKeyFromPem(keypair.publicKey)
            };
          }
        }
      }
      var state = pki.rsa.createKeyPairGenerationState(bits, e, options);
      if (!callback) {
        pki.rsa.stepKeyPairGenerationState(state, 0);
        return state.keys;
      }
      _generateKeyPair(state, options, callback);
    };
    pki.setRsaPublicKey = pki.rsa.setPublicKey = function(n, e) {
      var key = {
        n,
        e
      };
      key.encrypt = function(data, scheme, schemeOptions) {
        if (typeof scheme === "string") {
          scheme = scheme.toUpperCase();
        } else if (scheme === void 0) {
          scheme = "RSAES-PKCS1-V1_5";
        }
        if (scheme === "RSAES-PKCS1-V1_5") {
          scheme = {
            encode: /* @__PURE__ */ __name(function(m, key2, pub) {
              return _encodePkcs1_v1_5(m, key2, 2).getBytes();
            }, "encode")
          };
        } else if (scheme === "RSA-OAEP" || scheme === "RSAES-OAEP") {
          scheme = {
            encode: /* @__PURE__ */ __name(function(m, key2) {
              return forge.pkcs1.encode_rsa_oaep(key2, m, schemeOptions);
            }, "encode")
          };
        } else if (["RAW", "NONE", "NULL", null].indexOf(scheme) !== -1) {
          scheme = { encode: /* @__PURE__ */ __name(function(e3) {
            return e3;
          }, "encode") };
        } else if (typeof scheme === "string") {
          throw new Error('Unsupported encryption scheme: "' + scheme + '".');
        }
        var e2 = scheme.encode(data, key, true);
        return pki.rsa.encrypt(e2, key, true);
      };
      key.verify = function(digest, signature, scheme, options) {
        if (typeof scheme === "string") {
          scheme = scheme.toUpperCase();
        } else if (scheme === void 0) {
          scheme = "RSASSA-PKCS1-V1_5";
        }
        if (options === void 0) {
          options = {
            _parseAllDigestBytes: true,
            _skipPaddingChecks: false
          };
        }
        if (!("_parseAllDigestBytes" in options)) {
          options._parseAllDigestBytes = true;
        }
        if (!("_skipPaddingChecks" in options)) {
          options._skipPaddingChecks = false;
        }
        if (scheme === "RSASSA-PKCS1-V1_5") {
          scheme = {
            verify: /* @__PURE__ */ __name(function(digest2, d2) {
              d2 = _decodePkcs1_v1_5(d2, key, true, void 0, options);
              var obj = asn1.fromDer(d2, {
                parseAllBytes: options._parseAllDigestBytes
              });
              var capture = {};
              var errors = [];
              if (!asn1.validate(obj, digestInfoValidator, capture, errors) || obj.value.length !== 2) {
                var error = new Error(
                  "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value."
                );
                error.errors = errors;
                throw error;
              }
              var oid = asn1.derToOid(capture.algorithmIdentifier);
              if (!(oid === forge.oids.md2 || oid === forge.oids.md5 || oid === forge.oids.sha1 || oid === forge.oids.sha224 || oid === forge.oids.sha256 || oid === forge.oids.sha384 || oid === forge.oids.sha512 || oid === forge.oids["sha512-224"] || oid === forge.oids["sha512-256"])) {
                var error = new Error(
                  "Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier."
                );
                error.oid = oid;
                throw error;
              }
              if (oid === forge.oids.md2 || oid === forge.oids.md5) {
                if (!("parameters" in capture)) {
                  throw new Error(
                    "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifier NULL parameters."
                  );
                }
              }
              return digest2 === capture.digest;
            }, "verify")
          };
        } else if (scheme === "NONE" || scheme === "NULL" || scheme === null) {
          scheme = {
            verify: /* @__PURE__ */ __name(function(digest2, d2) {
              d2 = _decodePkcs1_v1_5(d2, key, true, void 0, options);
              return digest2 === d2;
            }, "verify")
          };
        }
        var d = pki.rsa.decrypt(signature, key, true, false);
        return scheme.verify(digest, d, key.n.bitLength());
      };
      return key;
    };
    pki.setRsaPrivateKey = pki.rsa.setPrivateKey = function(n, e, d, p, q, dP, dQ, qInv) {
      var key = {
        n,
        e,
        d,
        p,
        q,
        dP,
        dQ,
        qInv
      };
      key.decrypt = function(data, scheme, schemeOptions) {
        if (typeof scheme === "string") {
          scheme = scheme.toUpperCase();
        } else if (scheme === void 0) {
          scheme = "RSAES-PKCS1-V1_5";
        }
        var d2 = pki.rsa.decrypt(data, key, false, false);
        if (scheme === "RSAES-PKCS1-V1_5") {
          scheme = { decode: _decodePkcs1_v1_5 };
        } else if (scheme === "RSA-OAEP" || scheme === "RSAES-OAEP") {
          scheme = {
            decode: /* @__PURE__ */ __name(function(d3, key2) {
              return forge.pkcs1.decode_rsa_oaep(key2, d3, schemeOptions);
            }, "decode")
          };
        } else if (["RAW", "NONE", "NULL", null].indexOf(scheme) !== -1) {
          scheme = { decode: /* @__PURE__ */ __name(function(d3) {
            return d3;
          }, "decode") };
        } else {
          throw new Error('Unsupported encryption scheme: "' + scheme + '".');
        }
        return scheme.decode(d2, key, false);
      };
      key.sign = function(md, scheme) {
        var bt = false;
        if (typeof scheme === "string") {
          scheme = scheme.toUpperCase();
        }
        if (scheme === void 0 || scheme === "RSASSA-PKCS1-V1_5") {
          scheme = { encode: emsaPkcs1v15encode };
          bt = 1;
        } else if (scheme === "NONE" || scheme === "NULL" || scheme === null) {
          scheme = { encode: /* @__PURE__ */ __name(function() {
            return md;
          }, "encode") };
          bt = 1;
        }
        var d2 = scheme.encode(md, key.n.bitLength());
        return pki.rsa.encrypt(d2, key, bt);
      };
      return key;
    };
    pki.wrapRsaPrivateKey = function(rsaKey) {
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // version (0)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          asn1.integerToDer(0).getBytes()
        ),
        // privateKeyAlgorithm
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(pki.oids.rsaEncryption).getBytes()
          ),
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
        ]),
        // PrivateKey
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OCTETSTRING,
          false,
          asn1.toDer(rsaKey).getBytes()
        )
      ]);
    };
    pki.privateKeyFromAsn1 = function(obj) {
      var capture = {};
      var errors = [];
      if (asn1.validate(obj, privateKeyValidator, capture, errors)) {
        obj = asn1.fromDer(forge.util.createBuffer(capture.privateKey));
      }
      capture = {};
      errors = [];
      if (!asn1.validate(obj, rsaPrivateKeyValidator, capture, errors)) {
        var error = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
        error.errors = errors;
        throw error;
      }
      var n, e, d, p, q, dP, dQ, qInv;
      n = forge.util.createBuffer(capture.privateKeyModulus).toHex();
      e = forge.util.createBuffer(capture.privateKeyPublicExponent).toHex();
      d = forge.util.createBuffer(capture.privateKeyPrivateExponent).toHex();
      p = forge.util.createBuffer(capture.privateKeyPrime1).toHex();
      q = forge.util.createBuffer(capture.privateKeyPrime2).toHex();
      dP = forge.util.createBuffer(capture.privateKeyExponent1).toHex();
      dQ = forge.util.createBuffer(capture.privateKeyExponent2).toHex();
      qInv = forge.util.createBuffer(capture.privateKeyCoefficient).toHex();
      return pki.setRsaPrivateKey(
        new BigInteger(n, 16),
        new BigInteger(e, 16),
        new BigInteger(d, 16),
        new BigInteger(p, 16),
        new BigInteger(q, 16),
        new BigInteger(dP, 16),
        new BigInteger(dQ, 16),
        new BigInteger(qInv, 16)
      );
    };
    pki.privateKeyToAsn1 = pki.privateKeyToRSAPrivateKey = function(key) {
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // version (0 = only 2 primes, 1 multiple primes)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          asn1.integerToDer(0).getBytes()
        ),
        // modulus (n)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.n)
        ),
        // publicExponent (e)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.e)
        ),
        // privateExponent (d)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.d)
        ),
        // privateKeyPrime1 (p)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.p)
        ),
        // privateKeyPrime2 (q)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.q)
        ),
        // privateKeyExponent1 (dP)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.dP)
        ),
        // privateKeyExponent2 (dQ)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.dQ)
        ),
        // coefficient (qInv)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.qInv)
        )
      ]);
    };
    pki.publicKeyFromAsn1 = function(obj) {
      var capture = {};
      var errors = [];
      if (asn1.validate(obj, publicKeyValidator, capture, errors)) {
        var oid = asn1.derToOid(capture.publicKeyOid);
        if (oid !== pki.oids.rsaEncryption) {
          var error = new Error("Cannot read public key. Unknown OID.");
          error.oid = oid;
          throw error;
        }
        obj = capture.rsaPublicKey;
      }
      errors = [];
      if (!asn1.validate(obj, rsaPublicKeyValidator, capture, errors)) {
        var error = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");
        error.errors = errors;
        throw error;
      }
      var n = forge.util.createBuffer(capture.publicKeyModulus).toHex();
      var e = forge.util.createBuffer(capture.publicKeyExponent).toHex();
      return pki.setRsaPublicKey(
        new BigInteger(n, 16),
        new BigInteger(e, 16)
      );
    };
    pki.publicKeyToAsn1 = pki.publicKeyToSubjectPublicKeyInfo = function(key) {
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // AlgorithmIdentifier
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(pki.oids.rsaEncryption).getBytes()
          ),
          // parameters (null)
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
        ]),
        // subjectPublicKey
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false, [
          pki.publicKeyToRSAPublicKey(key)
        ])
      ]);
    };
    pki.publicKeyToRSAPublicKey = function(key) {
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // modulus (n)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.n)
        ),
        // publicExponent (e)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          _bnToBytes(key.e)
        )
      ]);
    };
    function _encodePkcs1_v1_5(m, key, bt) {
      var eb = forge.util.createBuffer();
      var k = Math.ceil(key.n.bitLength() / 8);
      if (m.length > k - 11) {
        var error = new Error("Message is too long for PKCS#1 v1.5 padding.");
        error.length = m.length;
        error.max = k - 11;
        throw error;
      }
      eb.putByte(0);
      eb.putByte(bt);
      var padNum = k - 3 - m.length;
      var padByte;
      if (bt === 0 || bt === 1) {
        padByte = bt === 0 ? 0 : 255;
        for (var i = 0; i < padNum; ++i) {
          eb.putByte(padByte);
        }
      } else {
        while (padNum > 0) {
          var numZeros = 0;
          var padBytes = forge.random.getBytes(padNum);
          for (var i = 0; i < padNum; ++i) {
            padByte = padBytes.charCodeAt(i);
            if (padByte === 0) {
              ++numZeros;
            } else {
              eb.putByte(padByte);
            }
          }
          padNum = numZeros;
        }
      }
      eb.putByte(0);
      eb.putBytes(m);
      return eb;
    }
    __name(_encodePkcs1_v1_5, "_encodePkcs1_v1_5");
    function _decodePkcs1_v1_5(em, key, pub, ml, options) {
      var k = Math.ceil(key.n.bitLength() / 8);
      var eb = forge.util.createBuffer(em);
      var first = eb.getByte();
      var bt = eb.getByte();
      if (first !== 0 || pub && bt !== 0 && bt !== 1 || !pub && bt !== 2 || pub && bt === 0 && typeof ml === "undefined") {
        throw new Error("Encryption block is invalid.");
      }
      var padNum = 0;
      if (bt === 0) {
        padNum = k - 3 - ml;
        for (var i = 0; i < padNum; ++i) {
          if (eb.getByte() !== 0) {
            throw new Error("Encryption block is invalid.");
          }
        }
      } else if (bt === 1) {
        padNum = 0;
        while (eb.length() > 1) {
          if (eb.getByte() !== 255) {
            --eb.read;
            break;
          }
          ++padNum;
        }
        if (padNum < 8 && !(options ? options._skipPaddingChecks : false)) {
          throw new Error("Encryption block is invalid.");
        }
      } else if (bt === 2) {
        padNum = 0;
        while (eb.length() > 1) {
          if (eb.getByte() === 0) {
            --eb.read;
            break;
          }
          ++padNum;
        }
        if (padNum < 8 && !(options ? options._skipPaddingChecks : false)) {
          throw new Error("Encryption block is invalid.");
        }
      }
      var zero = eb.getByte();
      if (zero !== 0 || padNum !== k - 3 - eb.length()) {
        throw new Error("Encryption block is invalid.");
      }
      return eb.getBytes();
    }
    __name(_decodePkcs1_v1_5, "_decodePkcs1_v1_5");
    function _generateKeyPair(state, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      var opts = {
        algorithm: {
          name: options.algorithm || "PRIMEINC",
          options: {
            workers: options.workers || 2,
            workLoad: options.workLoad || 100,
            workerScript: options.workerScript
          }
        }
      };
      if ("prng" in options) {
        opts.prng = options.prng;
      }
      generate();
      function generate() {
        getPrime(state.pBits, function(err, num) {
          if (err) {
            return callback(err);
          }
          state.p = num;
          if (state.q !== null) {
            return finish(err, state.q);
          }
          getPrime(state.qBits, finish);
        });
      }
      __name(generate, "generate");
      function getPrime(bits, callback2) {
        forge.prime.generateProbablePrime(bits, opts, callback2);
      }
      __name(getPrime, "getPrime");
      function finish(err, num) {
        if (err) {
          return callback(err);
        }
        state.q = num;
        if (state.p.compareTo(state.q) < 0) {
          var tmp = state.p;
          state.p = state.q;
          state.q = tmp;
        }
        if (state.p.subtract(BigInteger.ONE).gcd(state.e).compareTo(BigInteger.ONE) !== 0) {
          state.p = null;
          generate();
          return;
        }
        if (state.q.subtract(BigInteger.ONE).gcd(state.e).compareTo(BigInteger.ONE) !== 0) {
          state.q = null;
          getPrime(state.qBits, finish);
          return;
        }
        state.p1 = state.p.subtract(BigInteger.ONE);
        state.q1 = state.q.subtract(BigInteger.ONE);
        state.phi = state.p1.multiply(state.q1);
        if (state.phi.gcd(state.e).compareTo(BigInteger.ONE) !== 0) {
          state.p = state.q = null;
          generate();
          return;
        }
        state.n = state.p.multiply(state.q);
        if (state.n.bitLength() !== state.bits) {
          state.q = null;
          getPrime(state.qBits, finish);
          return;
        }
        var d = state.e.modInverse(state.phi);
        state.keys = {
          privateKey: pki.rsa.setPrivateKey(
            state.n,
            state.e,
            d,
            state.p,
            state.q,
            d.mod(state.p1),
            d.mod(state.q1),
            state.q.modInverse(state.p)
          ),
          publicKey: pki.rsa.setPublicKey(state.n, state.e)
        };
        callback(null, state.keys);
      }
      __name(finish, "finish");
    }
    __name(_generateKeyPair, "_generateKeyPair");
    function _bnToBytes(b) {
      var hex = b.toString(16);
      if (hex[0] >= "8") {
        hex = "00" + hex;
      }
      var bytes = forge.util.hexToBytes(hex);
      if (bytes.length > 1 && // leading 0x00 for positive integer
      (bytes.charCodeAt(0) === 0 && (bytes.charCodeAt(1) & 128) === 0 || // leading 0xFF for negative integer
      bytes.charCodeAt(0) === 255 && (bytes.charCodeAt(1) & 128) === 128)) {
        return bytes.substr(1);
      }
      return bytes;
    }
    __name(_bnToBytes, "_bnToBytes");
    function _getMillerRabinTests(bits) {
      if (bits <= 100) return 27;
      if (bits <= 150) return 18;
      if (bits <= 200) return 15;
      if (bits <= 250) return 12;
      if (bits <= 300) return 9;
      if (bits <= 350) return 8;
      if (bits <= 400) return 7;
      if (bits <= 500) return 6;
      if (bits <= 600) return 5;
      if (bits <= 800) return 4;
      if (bits <= 1250) return 3;
      return 2;
    }
    __name(_getMillerRabinTests, "_getMillerRabinTests");
    function _detectNodeCrypto(fn) {
      return forge.util.isNodejs && typeof _crypto[fn] === "function";
    }
    __name(_detectNodeCrypto, "_detectNodeCrypto");
    function _detectSubtleCrypto(fn) {
      return typeof util.globalScope !== "undefined" && typeof util.globalScope.crypto === "object" && typeof util.globalScope.crypto.subtle === "object" && typeof util.globalScope.crypto.subtle[fn] === "function";
    }
    __name(_detectSubtleCrypto, "_detectSubtleCrypto");
    function _detectSubtleMsCrypto(fn) {
      return typeof util.globalScope !== "undefined" && typeof util.globalScope.msCrypto === "object" && typeof util.globalScope.msCrypto.subtle === "object" && typeof util.globalScope.msCrypto.subtle[fn] === "function";
    }
    __name(_detectSubtleMsCrypto, "_detectSubtleMsCrypto");
    function _intToUint8Array(x) {
      var bytes = forge.util.hexToBytes(x.toString(16));
      var buffer = new Uint8Array(bytes.length);
      for (var i = 0; i < bytes.length; ++i) {
        buffer[i] = bytes.charCodeAt(i);
      }
      return buffer;
    }
    __name(_intToUint8Array, "_intToUint8Array");
  }
});

// node_modules/node-forge/lib/pbe.js
var require_pbe = __commonJS({
  "node_modules/node-forge/lib/pbe.js"(exports, module) {
    var forge = require_forge();
    require_aes();
    require_asn1();
    require_des();
    require_md();
    require_oids();
    require_pbkdf2();
    require_pem();
    require_random();
    require_rc2();
    require_rsa();
    require_util();
    if (typeof BigInteger === "undefined") {
      BigInteger = forge.jsbn.BigInteger;
    }
    var BigInteger;
    var asn1 = forge.asn1;
    var pki = forge.pki = forge.pki || {};
    module.exports = pki.pbe = forge.pbe = forge.pbe || {};
    var oids = pki.oids;
    var encryptedPrivateKeyValidator = {
      name: "EncryptedPrivateKeyInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "encryptionOid"
        }, {
          name: "AlgorithmIdentifier.parameters",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "encryptionParams"
        }]
      }, {
        // encryptedData
        name: "EncryptedPrivateKeyInfo.encryptedData",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "encryptedData"
      }]
    };
    var PBES2AlgorithmsValidator = {
      name: "PBES2Algorithms",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PBES2Algorithms.keyDerivationFunc",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "PBES2Algorithms.keyDerivationFunc.oid",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "kdfOid"
        }, {
          name: "PBES2Algorithms.params",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "PBES2Algorithms.params.salt",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.OCTETSTRING,
            constructed: false,
            capture: "kdfSalt"
          }, {
            name: "PBES2Algorithms.params.iterationCount",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.INTEGER,
            constructed: false,
            capture: "kdfIterationCount"
          }, {
            name: "PBES2Algorithms.params.keyLength",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.INTEGER,
            constructed: false,
            optional: true,
            capture: "keyLength"
          }, {
            // prf
            name: "PBES2Algorithms.params.prf",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            optional: true,
            value: [{
              name: "PBES2Algorithms.params.prf.algorithm",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.OID,
              constructed: false,
              capture: "prfOid"
            }]
          }]
        }]
      }, {
        name: "PBES2Algorithms.encryptionScheme",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "PBES2Algorithms.encryptionScheme.oid",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "encOid"
        }, {
          name: "PBES2Algorithms.encryptionScheme.iv",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OCTETSTRING,
          constructed: false,
          capture: "encIv"
        }]
      }]
    };
    var pkcs12PbeParamsValidator = {
      name: "pkcs-12PbeParams",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "pkcs-12PbeParams.salt",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "salt"
      }, {
        name: "pkcs-12PbeParams.iterations",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "iterations"
      }]
    };
    pki.encryptPrivateKeyInfo = function(obj, password, options) {
      options = options || {};
      options.saltSize = options.saltSize || 8;
      options.count = options.count || 2048;
      options.algorithm = options.algorithm || "aes128";
      options.prfAlgorithm = options.prfAlgorithm || "sha1";
      var salt = forge.random.getBytesSync(options.saltSize);
      var count = options.count;
      var countBytes = asn1.integerToDer(count);
      var dkLen;
      var encryptionAlgorithm;
      var encryptedData;
      if (options.algorithm.indexOf("aes") === 0 || options.algorithm === "des") {
        var ivLen, encOid, cipherFn;
        switch (options.algorithm) {
          case "aes128":
            dkLen = 16;
            ivLen = 16;
            encOid = oids["aes128-CBC"];
            cipherFn = forge.aes.createEncryptionCipher;
            break;
          case "aes192":
            dkLen = 24;
            ivLen = 16;
            encOid = oids["aes192-CBC"];
            cipherFn = forge.aes.createEncryptionCipher;
            break;
          case "aes256":
            dkLen = 32;
            ivLen = 16;
            encOid = oids["aes256-CBC"];
            cipherFn = forge.aes.createEncryptionCipher;
            break;
          case "des":
            dkLen = 8;
            ivLen = 8;
            encOid = oids["desCBC"];
            cipherFn = forge.des.createEncryptionCipher;
            break;
          default:
            var error = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
            error.algorithm = options.algorithm;
            throw error;
        }
        var prfAlgorithm = "hmacWith" + options.prfAlgorithm.toUpperCase();
        var md = prfAlgorithmToMessageDigest(prfAlgorithm);
        var dk = forge.pkcs5.pbkdf2(password, salt, count, dkLen, md);
        var iv = forge.random.getBytesSync(ivLen);
        var cipher = cipherFn(dk);
        cipher.start(iv);
        cipher.update(asn1.toDer(obj));
        cipher.finish();
        encryptedData = cipher.output.getBytes();
        var params = createPbkdf2Params(salt, countBytes, dkLen, prfAlgorithm);
        encryptionAlgorithm = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          [
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(oids["pkcs5PBES2"]).getBytes()
            ),
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              // keyDerivationFunc
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OID,
                  false,
                  asn1.oidToDer(oids["pkcs5PBKDF2"]).getBytes()
                ),
                // PBKDF2-params
                params
              ]),
              // encryptionScheme
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OID,
                  false,
                  asn1.oidToDer(encOid).getBytes()
                ),
                // iv
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OCTETSTRING,
                  false,
                  iv
                )
              ])
            ])
          ]
        );
      } else if (options.algorithm === "3des") {
        dkLen = 24;
        var saltBytes = new forge.util.ByteBuffer(salt);
        var dk = pki.pbe.generatePkcs12Key(password, saltBytes, 1, count, dkLen);
        var iv = pki.pbe.generatePkcs12Key(password, saltBytes, 2, count, dkLen);
        var cipher = forge.des.createEncryptionCipher(dk);
        cipher.start(iv);
        cipher.update(asn1.toDer(obj));
        cipher.finish();
        encryptedData = cipher.output.getBytes();
        encryptionAlgorithm = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          [
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()
            ),
            // pkcs-12PbeParams
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              // salt
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, salt),
              // iteration count
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.INTEGER,
                false,
                countBytes.getBytes()
              )
            ])
          ]
        );
      } else {
        var error = new Error("Cannot encrypt private key. Unknown encryption algorithm.");
        error.algorithm = options.algorithm;
        throw error;
      }
      var rval = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // encryptionAlgorithm
        encryptionAlgorithm,
        // encryptedData
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OCTETSTRING,
          false,
          encryptedData
        )
      ]);
      return rval;
    };
    pki.decryptPrivateKeyInfo = function(obj, password) {
      var rval = null;
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, encryptedPrivateKeyValidator, capture, errors)) {
        var error = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
        error.errors = errors;
        throw error;
      }
      var oid = asn1.derToOid(capture.encryptionOid);
      var cipher = pki.pbe.getCipher(oid, capture.encryptionParams, password);
      var encrypted = forge.util.createBuffer(capture.encryptedData);
      cipher.update(encrypted);
      if (cipher.finish()) {
        rval = asn1.fromDer(cipher.output);
      }
      return rval;
    };
    pki.encryptedPrivateKeyToPem = function(epki, maxline) {
      var msg = {
        type: "ENCRYPTED PRIVATE KEY",
        body: asn1.toDer(epki).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
    pki.encryptedPrivateKeyFromPem = function(pem) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "ENCRYPTED PRIVATE KEY") {
        var error = new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');
        error.headerType = msg.type;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
      }
      return asn1.fromDer(msg.body);
    };
    pki.encryptRsaPrivateKey = function(rsaKey, password, options) {
      options = options || {};
      if (!options.legacy) {
        var rval = pki.wrapRsaPrivateKey(pki.privateKeyToAsn1(rsaKey));
        rval = pki.encryptPrivateKeyInfo(rval, password, options);
        return pki.encryptedPrivateKeyToPem(rval);
      }
      var algorithm;
      var iv;
      var dkLen;
      var cipherFn;
      switch (options.algorithm) {
        case "aes128":
          algorithm = "AES-128-CBC";
          dkLen = 16;
          iv = forge.random.getBytesSync(16);
          cipherFn = forge.aes.createEncryptionCipher;
          break;
        case "aes192":
          algorithm = "AES-192-CBC";
          dkLen = 24;
          iv = forge.random.getBytesSync(16);
          cipherFn = forge.aes.createEncryptionCipher;
          break;
        case "aes256":
          algorithm = "AES-256-CBC";
          dkLen = 32;
          iv = forge.random.getBytesSync(16);
          cipherFn = forge.aes.createEncryptionCipher;
          break;
        case "3des":
          algorithm = "DES-EDE3-CBC";
          dkLen = 24;
          iv = forge.random.getBytesSync(8);
          cipherFn = forge.des.createEncryptionCipher;
          break;
        case "des":
          algorithm = "DES-CBC";
          dkLen = 8;
          iv = forge.random.getBytesSync(8);
          cipherFn = forge.des.createEncryptionCipher;
          break;
        default:
          var error = new Error('Could not encrypt RSA private key; unsupported encryption algorithm "' + options.algorithm + '".');
          error.algorithm = options.algorithm;
          throw error;
      }
      var dk = forge.pbe.opensslDeriveBytes(password, iv.substr(0, 8), dkLen);
      var cipher = cipherFn(dk);
      cipher.start(iv);
      cipher.update(asn1.toDer(pki.privateKeyToAsn1(rsaKey)));
      cipher.finish();
      var msg = {
        type: "RSA PRIVATE KEY",
        procType: {
          version: "4",
          type: "ENCRYPTED"
        },
        dekInfo: {
          algorithm,
          parameters: forge.util.bytesToHex(iv).toUpperCase()
        },
        body: cipher.output.getBytes()
      };
      return forge.pem.encode(msg);
    };
    pki.decryptRsaPrivateKey = function(pem, password) {
      var rval = null;
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "ENCRYPTED PRIVATE KEY" && msg.type !== "PRIVATE KEY" && msg.type !== "RSA PRIVATE KEY") {
        var error = new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');
        error.headerType = error;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        var dkLen;
        var cipherFn;
        switch (msg.dekInfo.algorithm) {
          case "DES-CBC":
            dkLen = 8;
            cipherFn = forge.des.createDecryptionCipher;
            break;
          case "DES-EDE3-CBC":
            dkLen = 24;
            cipherFn = forge.des.createDecryptionCipher;
            break;
          case "AES-128-CBC":
            dkLen = 16;
            cipherFn = forge.aes.createDecryptionCipher;
            break;
          case "AES-192-CBC":
            dkLen = 24;
            cipherFn = forge.aes.createDecryptionCipher;
            break;
          case "AES-256-CBC":
            dkLen = 32;
            cipherFn = forge.aes.createDecryptionCipher;
            break;
          case "RC2-40-CBC":
            dkLen = 5;
            cipherFn = /* @__PURE__ */ __name(function(key) {
              return forge.rc2.createDecryptionCipher(key, 40);
            }, "cipherFn");
            break;
          case "RC2-64-CBC":
            dkLen = 8;
            cipherFn = /* @__PURE__ */ __name(function(key) {
              return forge.rc2.createDecryptionCipher(key, 64);
            }, "cipherFn");
            break;
          case "RC2-128-CBC":
            dkLen = 16;
            cipherFn = /* @__PURE__ */ __name(function(key) {
              return forge.rc2.createDecryptionCipher(key, 128);
            }, "cipherFn");
            break;
          default:
            var error = new Error('Could not decrypt private key; unsupported encryption algorithm "' + msg.dekInfo.algorithm + '".');
            error.algorithm = msg.dekInfo.algorithm;
            throw error;
        }
        var iv = forge.util.hexToBytes(msg.dekInfo.parameters);
        var dk = forge.pbe.opensslDeriveBytes(password, iv.substr(0, 8), dkLen);
        var cipher = cipherFn(dk);
        cipher.start(iv);
        cipher.update(forge.util.createBuffer(msg.body));
        if (cipher.finish()) {
          rval = cipher.output.getBytes();
        } else {
          return rval;
        }
      } else {
        rval = msg.body;
      }
      if (msg.type === "ENCRYPTED PRIVATE KEY") {
        rval = pki.decryptPrivateKeyInfo(asn1.fromDer(rval), password);
      } else {
        rval = asn1.fromDer(rval);
      }
      if (rval !== null) {
        rval = pki.privateKeyFromAsn1(rval);
      }
      return rval;
    };
    pki.pbe.generatePkcs12Key = function(password, salt, id, iter, n, md) {
      var j, l;
      if (typeof md === "undefined" || md === null) {
        if (!("sha1" in forge.md)) {
          throw new Error('"sha1" hash algorithm unavailable.');
        }
        md = forge.md.sha1.create();
      }
      var u = md.digestLength;
      var v = md.blockLength;
      var result = new forge.util.ByteBuffer();
      var passBuf = new forge.util.ByteBuffer();
      if (password !== null && password !== void 0) {
        for (l = 0; l < password.length; l++) {
          passBuf.putInt16(password.charCodeAt(l));
        }
        passBuf.putInt16(0);
      }
      var p = passBuf.length();
      var s = salt.length();
      var D = new forge.util.ByteBuffer();
      D.fillWithByte(id, v);
      var Slen = v * Math.ceil(s / v);
      var S = new forge.util.ByteBuffer();
      for (l = 0; l < Slen; l++) {
        S.putByte(salt.at(l % s));
      }
      var Plen = v * Math.ceil(p / v);
      var P = new forge.util.ByteBuffer();
      for (l = 0; l < Plen; l++) {
        P.putByte(passBuf.at(l % p));
      }
      var I = S;
      I.putBuffer(P);
      var c = Math.ceil(n / u);
      for (var i = 1; i <= c; i++) {
        var buf = new forge.util.ByteBuffer();
        buf.putBytes(D.bytes());
        buf.putBytes(I.bytes());
        for (var round = 0; round < iter; round++) {
          md.start();
          md.update(buf.getBytes());
          buf = md.digest();
        }
        var B = new forge.util.ByteBuffer();
        for (l = 0; l < v; l++) {
          B.putByte(buf.at(l % u));
        }
        var k = Math.ceil(s / v) + Math.ceil(p / v);
        var Inew = new forge.util.ByteBuffer();
        for (j = 0; j < k; j++) {
          var chunk = new forge.util.ByteBuffer(I.getBytes(v));
          var x = 511;
          for (l = B.length() - 1; l >= 0; l--) {
            x = x >> 8;
            x += B.at(l) + chunk.at(l);
            chunk.setAt(l, x & 255);
          }
          Inew.putBuffer(chunk);
        }
        I = Inew;
        result.putBuffer(buf);
      }
      result.truncate(result.length() - n);
      return result;
    };
    pki.pbe.getCipher = function(oid, params, password) {
      switch (oid) {
        case pki.oids["pkcs5PBES2"]:
          return pki.pbe.getCipherForPBES2(oid, params, password);
        case pki.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
        case pki.oids["pbewithSHAAnd40BitRC2-CBC"]:
          return pki.pbe.getCipherForPKCS12PBE(oid, params, password);
        default:
          var error = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
          error.oid = oid;
          error.supportedOids = [
            "pkcs5PBES2",
            "pbeWithSHAAnd3-KeyTripleDES-CBC",
            "pbewithSHAAnd40BitRC2-CBC"
          ];
          throw error;
      }
    };
    pki.pbe.getCipherForPBES2 = function(oid, params, password) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(params, PBES2AlgorithmsValidator, capture, errors)) {
        var error = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
        error.errors = errors;
        throw error;
      }
      oid = asn1.derToOid(capture.kdfOid);
      if (oid !== pki.oids["pkcs5PBKDF2"]) {
        var error = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");
        error.oid = oid;
        error.supportedOids = ["pkcs5PBKDF2"];
        throw error;
      }
      oid = asn1.derToOid(capture.encOid);
      if (oid !== pki.oids["aes128-CBC"] && oid !== pki.oids["aes192-CBC"] && oid !== pki.oids["aes256-CBC"] && oid !== pki.oids["des-EDE3-CBC"] && oid !== pki.oids["desCBC"]) {
        var error = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");
        error.oid = oid;
        error.supportedOids = [
          "aes128-CBC",
          "aes192-CBC",
          "aes256-CBC",
          "des-EDE3-CBC",
          "desCBC"
        ];
        throw error;
      }
      var salt = capture.kdfSalt;
      var count = forge.util.createBuffer(capture.kdfIterationCount);
      count = count.getInt(count.length() << 3);
      var dkLen;
      var cipherFn;
      switch (pki.oids[oid]) {
        case "aes128-CBC":
          dkLen = 16;
          cipherFn = forge.aes.createDecryptionCipher;
          break;
        case "aes192-CBC":
          dkLen = 24;
          cipherFn = forge.aes.createDecryptionCipher;
          break;
        case "aes256-CBC":
          dkLen = 32;
          cipherFn = forge.aes.createDecryptionCipher;
          break;
        case "des-EDE3-CBC":
          dkLen = 24;
          cipherFn = forge.des.createDecryptionCipher;
          break;
        case "desCBC":
          dkLen = 8;
          cipherFn = forge.des.createDecryptionCipher;
          break;
      }
      var md = prfOidToMessageDigest(capture.prfOid);
      var dk = forge.pkcs5.pbkdf2(password, salt, count, dkLen, md);
      var iv = capture.encIv;
      var cipher = cipherFn(dk);
      cipher.start(iv);
      return cipher;
    };
    pki.pbe.getCipherForPKCS12PBE = function(oid, params, password) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(params, pkcs12PbeParamsValidator, capture, errors)) {
        var error = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
        error.errors = errors;
        throw error;
      }
      var salt = forge.util.createBuffer(capture.salt);
      var count = forge.util.createBuffer(capture.iterations);
      count = count.getInt(count.length() << 3);
      var dkLen, dIvLen, cipherFn;
      switch (oid) {
        case pki.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
          dkLen = 24;
          dIvLen = 8;
          cipherFn = forge.des.startDecrypting;
          break;
        case pki.oids["pbewithSHAAnd40BitRC2-CBC"]:
          dkLen = 5;
          dIvLen = 8;
          cipherFn = /* @__PURE__ */ __name(function(key2, iv2) {
            var cipher = forge.rc2.createDecryptionCipher(key2, 40);
            cipher.start(iv2, null);
            return cipher;
          }, "cipherFn");
          break;
        default:
          var error = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");
          error.oid = oid;
          throw error;
      }
      var md = prfOidToMessageDigest(capture.prfOid);
      var key = pki.pbe.generatePkcs12Key(password, salt, 1, count, dkLen, md);
      md.start();
      var iv = pki.pbe.generatePkcs12Key(password, salt, 2, count, dIvLen, md);
      return cipherFn(key, iv);
    };
    pki.pbe.opensslDeriveBytes = function(password, salt, dkLen, md) {
      if (typeof md === "undefined" || md === null) {
        if (!("md5" in forge.md)) {
          throw new Error('"md5" hash algorithm unavailable.');
        }
        md = forge.md.md5.create();
      }
      if (salt === null) {
        salt = "";
      }
      var digests = [hash(md, password + salt)];
      for (var length = 16, i = 1; length < dkLen; ++i, length += 16) {
        digests.push(hash(md, digests[i - 1] + password + salt));
      }
      return digests.join("").substr(0, dkLen);
    };
    function hash(md, bytes) {
      return md.start().update(bytes).digest().getBytes();
    }
    __name(hash, "hash");
    function prfOidToMessageDigest(prfOid) {
      var prfAlgorithm;
      if (!prfOid) {
        prfAlgorithm = "hmacWithSHA1";
      } else {
        prfAlgorithm = pki.oids[asn1.derToOid(prfOid)];
        if (!prfAlgorithm) {
          var error = new Error("Unsupported PRF OID.");
          error.oid = prfOid;
          error.supported = [
            "hmacWithSHA1",
            "hmacWithSHA224",
            "hmacWithSHA256",
            "hmacWithSHA384",
            "hmacWithSHA512"
          ];
          throw error;
        }
      }
      return prfAlgorithmToMessageDigest(prfAlgorithm);
    }
    __name(prfOidToMessageDigest, "prfOidToMessageDigest");
    function prfAlgorithmToMessageDigest(prfAlgorithm) {
      var factory = forge.md;
      switch (prfAlgorithm) {
        case "hmacWithSHA224":
          factory = forge.md.sha512;
        case "hmacWithSHA1":
        case "hmacWithSHA256":
        case "hmacWithSHA384":
        case "hmacWithSHA512":
          prfAlgorithm = prfAlgorithm.substr(8).toLowerCase();
          break;
        default:
          var error = new Error("Unsupported PRF algorithm.");
          error.algorithm = prfAlgorithm;
          error.supported = [
            "hmacWithSHA1",
            "hmacWithSHA224",
            "hmacWithSHA256",
            "hmacWithSHA384",
            "hmacWithSHA512"
          ];
          throw error;
      }
      if (!factory || !(prfAlgorithm in factory)) {
        throw new Error("Unknown hash algorithm: " + prfAlgorithm);
      }
      return factory[prfAlgorithm].create();
    }
    __name(prfAlgorithmToMessageDigest, "prfAlgorithmToMessageDigest");
    function createPbkdf2Params(salt, countBytes, dkLen, prfAlgorithm) {
      var params = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // salt
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OCTETSTRING,
          false,
          salt
        ),
        // iteration count
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          countBytes.getBytes()
        )
      ]);
      if (prfAlgorithm !== "hmacWithSHA1") {
        params.value.push(
          // key length
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            forge.util.hexToBytes(dkLen.toString(16))
          ),
          // AlgorithmIdentifier
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // algorithm
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(pki.oids[prfAlgorithm]).getBytes()
            ),
            // parameters (null)
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
          ])
        );
      }
      return params;
    }
    __name(createPbkdf2Params, "createPbkdf2Params");
  }
});

// node_modules/node-forge/lib/pkcs7asn1.js
var require_pkcs7asn1 = __commonJS({
  "node_modules/node-forge/lib/pkcs7asn1.js"(exports, module) {
    var forge = require_forge();
    require_asn1();
    require_util();
    var asn1 = forge.asn1;
    var p7v = module.exports = forge.pkcs7asn1 = forge.pkcs7asn1 || {};
    forge.pkcs7 = forge.pkcs7 || {};
    forge.pkcs7.asn1 = p7v;
    var contentInfoValidator = {
      name: "ContentInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "ContentInfo.ContentType",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: "contentType"
      }, {
        name: "ContentInfo.content",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        optional: true,
        captureAsn1: "content"
      }]
    };
    p7v.contentInfoValidator = contentInfoValidator;
    var encryptedContentInfoValidator = {
      name: "EncryptedContentInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EncryptedContentInfo.contentType",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: "contentType"
      }, {
        name: "EncryptedContentInfo.contentEncryptionAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "encAlgorithm"
        }, {
          name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
          tagClass: asn1.Class.UNIVERSAL,
          captureAsn1: "encParameter"
        }]
      }, {
        name: "EncryptedContentInfo.encryptedContent",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 0,
        /* The PKCS#7 structure output by OpenSSL somewhat differs from what
         * other implementations do generate.
         *
         * OpenSSL generates a structure like this:
         * SEQUENCE {
         *    ...
         *    [0]
         *       26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
         *       C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
         *       ...
         * }
         *
         * Whereas other implementations (and this PKCS#7 module) generate:
         * SEQUENCE {
         *    ...
         *    [0] {
         *       OCTET STRING
         *          26 DA 67 D2 17 9C 45 3C B1 2A A8 59 2F 29 33 38
         *          C3 C3 DF 86 71 74 7A 19 9F 40 D0 29 BE 85 90 45
         *          ...
         *    }
         * }
         *
         * In order to support both, we just capture the context specific
         * field here.  The OCTET STRING bit is removed below.
         */
        capture: "encryptedContent",
        captureAsn1: "encryptedContentAsn1"
      }]
    };
    p7v.envelopedDataValidator = {
      name: "EnvelopedData",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EnvelopedData.Version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "version"
      }, {
        name: "EnvelopedData.RecipientInfos",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SET,
        constructed: true,
        captureAsn1: "recipientInfos"
      }].concat(encryptedContentInfoValidator)
    };
    p7v.encryptedDataValidator = {
      name: "EncryptedData",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "EncryptedData.Version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "version"
      }].concat(encryptedContentInfoValidator)
    };
    var signerValidator = {
      name: "SignerInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "SignerInfo.version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false
      }, {
        name: "SignerInfo.issuerAndSerialNumber",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "SignerInfo.issuerAndSerialNumber.issuer",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "issuer"
        }, {
          name: "SignerInfo.issuerAndSerialNumber.serialNumber",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.INTEGER,
          constructed: false,
          capture: "serial"
        }]
      }, {
        name: "SignerInfo.digestAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "SignerInfo.digestAlgorithm.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "digestAlgorithm"
        }, {
          name: "SignerInfo.digestAlgorithm.parameter",
          tagClass: asn1.Class.UNIVERSAL,
          constructed: false,
          captureAsn1: "digestParameter",
          optional: true
        }]
      }, {
        name: "SignerInfo.authenticatedAttributes",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        optional: true,
        capture: "authenticatedAttributes"
      }, {
        name: "SignerInfo.digestEncryptionAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        capture: "signatureAlgorithm"
      }, {
        name: "SignerInfo.encryptedDigest",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "signature"
      }, {
        name: "SignerInfo.unauthenticatedAttributes",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: true,
        optional: true,
        capture: "unauthenticatedAttributes"
      }]
    };
    p7v.signedDataValidator = {
      name: "SignedData",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [
        {
          name: "SignedData.Version",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.INTEGER,
          constructed: false,
          capture: "version"
        },
        {
          name: "SignedData.DigestAlgorithms",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SET,
          constructed: true,
          captureAsn1: "digestAlgorithms"
        },
        contentInfoValidator,
        {
          name: "SignedData.Certificates",
          tagClass: asn1.Class.CONTEXT_SPECIFIC,
          type: 0,
          optional: true,
          captureAsn1: "certificates"
        },
        {
          name: "SignedData.CertificateRevocationLists",
          tagClass: asn1.Class.CONTEXT_SPECIFIC,
          type: 1,
          optional: true,
          captureAsn1: "crls"
        },
        {
          name: "SignedData.SignerInfos",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SET,
          capture: "signerInfos",
          optional: true,
          value: [signerValidator]
        }
      ]
    };
    p7v.recipientInfoValidator = {
      name: "RecipientInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "RecipientInfo.version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "version"
      }, {
        name: "RecipientInfo.issuerAndSerial",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "RecipientInfo.issuerAndSerial.issuer",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "issuer"
        }, {
          name: "RecipientInfo.issuerAndSerial.serialNumber",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.INTEGER,
          constructed: false,
          capture: "serial"
        }]
      }, {
        name: "RecipientInfo.keyEncryptionAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "encAlgorithm"
        }, {
          name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
          tagClass: asn1.Class.UNIVERSAL,
          constructed: false,
          captureAsn1: "encParameter",
          optional: true
        }]
      }, {
        name: "RecipientInfo.encryptedKey",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "encKey"
      }]
    };
  }
});

// node_modules/node-forge/lib/mgf1.js
var require_mgf1 = __commonJS({
  "node_modules/node-forge/lib/mgf1.js"(exports, module) {
    var forge = require_forge();
    require_util();
    forge.mgf = forge.mgf || {};
    var mgf1 = module.exports = forge.mgf.mgf1 = forge.mgf1 = forge.mgf1 || {};
    mgf1.create = function(md) {
      var mgf = {
        /**
         * Generate mask of specified length.
         *
         * @param {String} seed The seed for mask generation.
         * @param maskLen Number of bytes to generate.
         * @return {String} The generated mask.
         */
        generate: /* @__PURE__ */ __name(function(seed, maskLen) {
          var t = new forge.util.ByteBuffer();
          var len = Math.ceil(maskLen / md.digestLength);
          for (var i = 0; i < len; i++) {
            var c = new forge.util.ByteBuffer();
            c.putInt32(i);
            md.start();
            md.update(seed + c.getBytes());
            t.putBuffer(md.digest());
          }
          t.truncate(t.length() - maskLen);
          return t.getBytes();
        }, "generate")
      };
      return mgf;
    };
  }
});

// node_modules/node-forge/lib/mgf.js
var require_mgf = __commonJS({
  "node_modules/node-forge/lib/mgf.js"(exports, module) {
    var forge = require_forge();
    require_mgf1();
    module.exports = forge.mgf = forge.mgf || {};
    forge.mgf.mgf1 = forge.mgf1;
  }
});

// node_modules/node-forge/lib/pss.js
var require_pss = __commonJS({
  "node_modules/node-forge/lib/pss.js"(exports, module) {
    var forge = require_forge();
    require_random();
    require_util();
    var pss = module.exports = forge.pss = forge.pss || {};
    pss.create = function(options) {
      if (arguments.length === 3) {
        options = {
          md: arguments[0],
          mgf: arguments[1],
          saltLength: arguments[2]
        };
      }
      var hash = options.md;
      var mgf = options.mgf;
      var hLen = hash.digestLength;
      var salt_ = options.salt || null;
      if (typeof salt_ === "string") {
        salt_ = forge.util.createBuffer(salt_);
      }
      var sLen;
      if ("saltLength" in options) {
        sLen = options.saltLength;
      } else if (salt_ !== null) {
        sLen = salt_.length();
      } else {
        throw new Error("Salt length not specified or specific salt not given.");
      }
      if (salt_ !== null && salt_.length() !== sLen) {
        throw new Error("Given salt length does not match length of given salt.");
      }
      var prng = options.prng || forge.random;
      var pssobj = {};
      pssobj.encode = function(md, modBits) {
        var i;
        var emBits = modBits - 1;
        var emLen = Math.ceil(emBits / 8);
        var mHash = md.digest().getBytes();
        if (emLen < hLen + sLen + 2) {
          throw new Error("Message is too long to encrypt.");
        }
        var salt;
        if (salt_ === null) {
          salt = prng.getBytesSync(sLen);
        } else {
          salt = salt_.bytes();
        }
        var m_ = new forge.util.ByteBuffer();
        m_.fillWithByte(0, 8);
        m_.putBytes(mHash);
        m_.putBytes(salt);
        hash.start();
        hash.update(m_.getBytes());
        var h = hash.digest().getBytes();
        var ps = new forge.util.ByteBuffer();
        ps.fillWithByte(0, emLen - sLen - hLen - 2);
        ps.putByte(1);
        ps.putBytes(salt);
        var db = ps.getBytes();
        var maskLen = emLen - hLen - 1;
        var dbMask = mgf.generate(h, maskLen);
        var maskedDB = "";
        for (i = 0; i < maskLen; i++) {
          maskedDB += String.fromCharCode(db.charCodeAt(i) ^ dbMask.charCodeAt(i));
        }
        var mask = 65280 >> 8 * emLen - emBits & 255;
        maskedDB = String.fromCharCode(maskedDB.charCodeAt(0) & ~mask) + maskedDB.substr(1);
        return maskedDB + h + String.fromCharCode(188);
      };
      pssobj.verify = function(mHash, em, modBits) {
        var i;
        var emBits = modBits - 1;
        var emLen = Math.ceil(emBits / 8);
        em = em.substr(-emLen);
        if (emLen < hLen + sLen + 2) {
          throw new Error("Inconsistent parameters to PSS signature verification.");
        }
        if (em.charCodeAt(emLen - 1) !== 188) {
          throw new Error("Encoded message does not end in 0xBC.");
        }
        var maskLen = emLen - hLen - 1;
        var maskedDB = em.substr(0, maskLen);
        var h = em.substr(maskLen, hLen);
        var mask = 65280 >> 8 * emLen - emBits & 255;
        if ((maskedDB.charCodeAt(0) & mask) !== 0) {
          throw new Error("Bits beyond keysize not zero as expected.");
        }
        var dbMask = mgf.generate(h, maskLen);
        var db = "";
        for (i = 0; i < maskLen; i++) {
          db += String.fromCharCode(maskedDB.charCodeAt(i) ^ dbMask.charCodeAt(i));
        }
        db = String.fromCharCode(db.charCodeAt(0) & ~mask) + db.substr(1);
        var checkLen = emLen - hLen - sLen - 2;
        for (i = 0; i < checkLen; i++) {
          if (db.charCodeAt(i) !== 0) {
            throw new Error("Leftmost octets not zero as expected");
          }
        }
        if (db.charCodeAt(checkLen) !== 1) {
          throw new Error("Inconsistent PSS signature, 0x01 marker not found");
        }
        var salt = db.substr(-sLen);
        var m_ = new forge.util.ByteBuffer();
        m_.fillWithByte(0, 8);
        m_.putBytes(mHash);
        m_.putBytes(salt);
        hash.start();
        hash.update(m_.getBytes());
        var h_ = hash.digest().getBytes();
        return h === h_;
      };
      return pssobj;
    };
  }
});

// node_modules/node-forge/lib/x509.js
var require_x509 = __commonJS({
  "node_modules/node-forge/lib/x509.js"(exports, module) {
    var forge = require_forge();
    require_aes();
    require_asn1();
    require_des();
    require_md();
    require_mgf();
    require_oids();
    require_pem();
    require_pss();
    require_rsa();
    require_util();
    var asn1 = forge.asn1;
    var pki = module.exports = forge.pki = forge.pki || {};
    var oids = pki.oids;
    var _shortNames = {};
    _shortNames["CN"] = oids["commonName"];
    _shortNames["commonName"] = "CN";
    _shortNames["C"] = oids["countryName"];
    _shortNames["countryName"] = "C";
    _shortNames["L"] = oids["localityName"];
    _shortNames["localityName"] = "L";
    _shortNames["ST"] = oids["stateOrProvinceName"];
    _shortNames["stateOrProvinceName"] = "ST";
    _shortNames["O"] = oids["organizationName"];
    _shortNames["organizationName"] = "O";
    _shortNames["OU"] = oids["organizationalUnitName"];
    _shortNames["organizationalUnitName"] = "OU";
    _shortNames["E"] = oids["emailAddress"];
    _shortNames["emailAddress"] = "E";
    var publicKeyValidator = forge.pki.rsa.publicKeyValidator;
    var x509CertificateValidator = {
      name: "Certificate",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "Certificate.TBSCertificate",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        captureAsn1: "tbsCertificate",
        value: [
          {
            name: "Certificate.TBSCertificate.version",
            tagClass: asn1.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: true,
            optional: true,
            value: [{
              name: "Certificate.TBSCertificate.version.integer",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.INTEGER,
              constructed: false,
              capture: "certVersion"
            }]
          },
          {
            name: "Certificate.TBSCertificate.serialNumber",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.INTEGER,
            constructed: false,
            capture: "certSerialNumber"
          },
          {
            name: "Certificate.TBSCertificate.signature",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            value: [{
              name: "Certificate.TBSCertificate.signature.algorithm",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.OID,
              constructed: false,
              capture: "certinfoSignatureOid"
            }, {
              name: "Certificate.TBSCertificate.signature.parameters",
              tagClass: asn1.Class.UNIVERSAL,
              optional: true,
              captureAsn1: "certinfoSignatureParams"
            }]
          },
          {
            name: "Certificate.TBSCertificate.issuer",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            captureAsn1: "certIssuer"
          },
          {
            name: "Certificate.TBSCertificate.validity",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            // Note: UTC and generalized times may both appear so the capture
            // names are based on their detected order, the names used below
            // are only for the common case, which validity time really means
            // "notBefore" and which means "notAfter" will be determined by order
            value: [{
              // notBefore (Time) (UTC time case)
              name: "Certificate.TBSCertificate.validity.notBefore (utc)",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.UTCTIME,
              constructed: false,
              optional: true,
              capture: "certValidity1UTCTime"
            }, {
              // notBefore (Time) (generalized time case)
              name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.GENERALIZEDTIME,
              constructed: false,
              optional: true,
              capture: "certValidity2GeneralizedTime"
            }, {
              // notAfter (Time) (only UTC time is supported)
              name: "Certificate.TBSCertificate.validity.notAfter (utc)",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.UTCTIME,
              constructed: false,
              optional: true,
              capture: "certValidity3UTCTime"
            }, {
              // notAfter (Time) (only UTC time is supported)
              name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.GENERALIZEDTIME,
              constructed: false,
              optional: true,
              capture: "certValidity4GeneralizedTime"
            }]
          },
          {
            // Name (subject) (RDNSequence)
            name: "Certificate.TBSCertificate.subject",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            captureAsn1: "certSubject"
          },
          // SubjectPublicKeyInfo
          publicKeyValidator,
          {
            // issuerUniqueID (optional)
            name: "Certificate.TBSCertificate.issuerUniqueID",
            tagClass: asn1.Class.CONTEXT_SPECIFIC,
            type: 1,
            constructed: true,
            optional: true,
            value: [{
              name: "Certificate.TBSCertificate.issuerUniqueID.id",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.BITSTRING,
              constructed: false,
              // TODO: support arbitrary bit length ids
              captureBitStringValue: "certIssuerUniqueId"
            }]
          },
          {
            // subjectUniqueID (optional)
            name: "Certificate.TBSCertificate.subjectUniqueID",
            tagClass: asn1.Class.CONTEXT_SPECIFIC,
            type: 2,
            constructed: true,
            optional: true,
            value: [{
              name: "Certificate.TBSCertificate.subjectUniqueID.id",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.BITSTRING,
              constructed: false,
              // TODO: support arbitrary bit length ids
              captureBitStringValue: "certSubjectUniqueId"
            }]
          },
          {
            // Extensions (optional)
            name: "Certificate.TBSCertificate.extensions",
            tagClass: asn1.Class.CONTEXT_SPECIFIC,
            type: 3,
            constructed: true,
            captureAsn1: "certExtensions",
            optional: true
          }
        ]
      }, {
        // AlgorithmIdentifier (signature algorithm)
        name: "Certificate.signatureAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          // algorithm
          name: "Certificate.signatureAlgorithm.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "certSignatureOid"
        }, {
          name: "Certificate.TBSCertificate.signature.parameters",
          tagClass: asn1.Class.UNIVERSAL,
          optional: true,
          captureAsn1: "certSignatureParams"
        }]
      }, {
        // SignatureValue
        name: "Certificate.signatureValue",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.BITSTRING,
        constructed: false,
        captureBitStringValue: "certSignature"
      }]
    };
    var rsassaPssParameterValidator = {
      name: "rsapss",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "rsapss.hashAlgorithm",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 0,
        constructed: true,
        value: [{
          name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Class.SEQUENCE,
          constructed: true,
          optional: true,
          value: [{
            name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.OID,
            constructed: false,
            capture: "hashOid"
            /* parameter block omitted, for SHA1 NULL anyhow. */
          }]
        }]
      }, {
        name: "rsapss.maskGenAlgorithm",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 1,
        constructed: true,
        value: [{
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Class.SEQUENCE,
          constructed: true,
          optional: true,
          value: [{
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.OID,
            constructed: false,
            capture: "maskGenOid"
          }, {
            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            value: [{
              name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.OID,
              constructed: false,
              capture: "maskGenHashOid"
              /* parameter block omitted, for SHA1 NULL anyhow. */
            }]
          }]
        }]
      }, {
        name: "rsapss.saltLength",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 2,
        optional: true,
        value: [{
          name: "rsapss.saltLength.saltLength",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Class.INTEGER,
          constructed: false,
          capture: "saltLength"
        }]
      }, {
        name: "rsapss.trailerField",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        type: 3,
        optional: true,
        value: [{
          name: "rsapss.trailer.trailer",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Class.INTEGER,
          constructed: false,
          capture: "trailer"
        }]
      }]
    };
    var certificationRequestInfoValidator = {
      name: "CertificationRequestInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "certificationRequestInfo",
      value: [
        {
          name: "CertificationRequestInfo.integer",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.INTEGER,
          constructed: false,
          capture: "certificationRequestInfoVersion"
        },
        {
          // Name (subject) (RDNSequence)
          name: "CertificationRequestInfo.subject",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          captureAsn1: "certificationRequestInfoSubject"
        },
        // SubjectPublicKeyInfo
        publicKeyValidator,
        {
          name: "CertificationRequestInfo.attributes",
          tagClass: asn1.Class.CONTEXT_SPECIFIC,
          type: 0,
          constructed: true,
          optional: true,
          capture: "certificationRequestInfoAttributes",
          value: [{
            name: "CertificationRequestInfo.attributes",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            value: [{
              name: "CertificationRequestInfo.attributes.type",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.OID,
              constructed: false
            }, {
              name: "CertificationRequestInfo.attributes.value",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.SET,
              constructed: true
            }]
          }]
        }
      ]
    };
    var certificationRequestValidator = {
      name: "CertificationRequest",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "csr",
      value: [
        certificationRequestInfoValidator,
        {
          // AlgorithmIdentifier (signature algorithm)
          name: "CertificationRequest.signatureAlgorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          value: [{
            // algorithm
            name: "CertificationRequest.signatureAlgorithm.algorithm",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.OID,
            constructed: false,
            capture: "csrSignatureOid"
          }, {
            name: "CertificationRequest.signatureAlgorithm.parameters",
            tagClass: asn1.Class.UNIVERSAL,
            optional: true,
            captureAsn1: "csrSignatureParams"
          }]
        },
        {
          // signature
          name: "CertificationRequest.signature",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.BITSTRING,
          constructed: false,
          captureBitStringValue: "csrSignature"
        }
      ]
    };
    pki.RDNAttributesAsArray = function(rdn, md) {
      var rval = [];
      var set, attr, obj;
      for (var si = 0; si < rdn.value.length; ++si) {
        set = rdn.value[si];
        for (var i = 0; i < set.value.length; ++i) {
          obj = {};
          attr = set.value[i];
          obj.type = asn1.derToOid(attr.value[0].value);
          obj.value = attr.value[1].value;
          obj.valueTagClass = attr.value[1].type;
          if (obj.type in oids) {
            obj.name = oids[obj.type];
            if (obj.name in _shortNames) {
              obj.shortName = _shortNames[obj.name];
            }
          }
          if (md) {
            md.update(obj.type);
            md.update(obj.value);
          }
          rval.push(obj);
        }
      }
      return rval;
    };
    pki.CRIAttributesAsArray = function(attributes) {
      var rval = [];
      for (var si = 0; si < attributes.length; ++si) {
        var seq = attributes[si];
        var type = asn1.derToOid(seq.value[0].value);
        var values = seq.value[1].value;
        for (var vi = 0; vi < values.length; ++vi) {
          var obj = {};
          obj.type = type;
          obj.value = values[vi].value;
          obj.valueTagClass = values[vi].type;
          if (obj.type in oids) {
            obj.name = oids[obj.type];
            if (obj.name in _shortNames) {
              obj.shortName = _shortNames[obj.name];
            }
          }
          if (obj.type === oids.extensionRequest) {
            obj.extensions = [];
            for (var ei = 0; ei < obj.value.length; ++ei) {
              obj.extensions.push(pki.certificateExtensionFromAsn1(obj.value[ei]));
            }
          }
          rval.push(obj);
        }
      }
      return rval;
    };
    function _getAttribute(obj, options) {
      if (typeof options === "string") {
        options = { shortName: options };
      }
      var rval = null;
      var attr;
      for (var i = 0; rval === null && i < obj.attributes.length; ++i) {
        attr = obj.attributes[i];
        if (options.type && options.type === attr.type) {
          rval = attr;
        } else if (options.name && options.name === attr.name) {
          rval = attr;
        } else if (options.shortName && options.shortName === attr.shortName) {
          rval = attr;
        }
      }
      return rval;
    }
    __name(_getAttribute, "_getAttribute");
    var _readSignatureParameters = /* @__PURE__ */ __name(function(oid, obj, fillDefaults) {
      var params = {};
      if (oid !== oids["RSASSA-PSS"]) {
        return params;
      }
      if (fillDefaults) {
        params = {
          hash: {
            algorithmOid: oids["sha1"]
          },
          mgf: {
            algorithmOid: oids["mgf1"],
            hash: {
              algorithmOid: oids["sha1"]
            }
          },
          saltLength: 20
        };
      }
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, rsassaPssParameterValidator, capture, errors)) {
        var error = new Error("Cannot read RSASSA-PSS parameter block.");
        error.errors = errors;
        throw error;
      }
      if (capture.hashOid !== void 0) {
        params.hash = params.hash || {};
        params.hash.algorithmOid = asn1.derToOid(capture.hashOid);
      }
      if (capture.maskGenOid !== void 0) {
        params.mgf = params.mgf || {};
        params.mgf.algorithmOid = asn1.derToOid(capture.maskGenOid);
        params.mgf.hash = params.mgf.hash || {};
        params.mgf.hash.algorithmOid = asn1.derToOid(capture.maskGenHashOid);
      }
      if (capture.saltLength !== void 0) {
        params.saltLength = capture.saltLength.charCodeAt(0);
      }
      return params;
    }, "_readSignatureParameters");
    var _createSignatureDigest = /* @__PURE__ */ __name(function(options) {
      switch (oids[options.signatureOid]) {
        case "sha1WithRSAEncryption":
        // deprecated alias
        case "sha1WithRSASignature":
          return forge.md.sha1.create();
        case "md5WithRSAEncryption":
          return forge.md.md5.create();
        case "sha256WithRSAEncryption":
          return forge.md.sha256.create();
        case "sha384WithRSAEncryption":
          return forge.md.sha384.create();
        case "sha512WithRSAEncryption":
          return forge.md.sha512.create();
        case "RSASSA-PSS":
          return forge.md.sha256.create();
        default:
          var error = new Error(
            "Could not compute " + options.type + " digest. Unknown signature OID."
          );
          error.signatureOid = options.signatureOid;
          throw error;
      }
    }, "_createSignatureDigest");
    var _verifySignature = /* @__PURE__ */ __name(function(options) {
      var cert = options.certificate;
      var scheme;
      switch (cert.signatureOid) {
        case oids.sha1WithRSAEncryption:
        // deprecated alias
        case oids.sha1WithRSASignature:
          break;
        case oids["RSASSA-PSS"]:
          var hash, mgf;
          hash = oids[cert.signatureParameters.mgf.hash.algorithmOid];
          if (hash === void 0 || forge.md[hash] === void 0) {
            var error = new Error("Unsupported MGF hash function.");
            error.oid = cert.signatureParameters.mgf.hash.algorithmOid;
            error.name = hash;
            throw error;
          }
          mgf = oids[cert.signatureParameters.mgf.algorithmOid];
          if (mgf === void 0 || forge.mgf[mgf] === void 0) {
            var error = new Error("Unsupported MGF function.");
            error.oid = cert.signatureParameters.mgf.algorithmOid;
            error.name = mgf;
            throw error;
          }
          mgf = forge.mgf[mgf].create(forge.md[hash].create());
          hash = oids[cert.signatureParameters.hash.algorithmOid];
          if (hash === void 0 || forge.md[hash] === void 0) {
            var error = new Error("Unsupported RSASSA-PSS hash function.");
            error.oid = cert.signatureParameters.hash.algorithmOid;
            error.name = hash;
            throw error;
          }
          scheme = forge.pss.create(
            forge.md[hash].create(),
            mgf,
            cert.signatureParameters.saltLength
          );
          break;
      }
      return cert.publicKey.verify(
        options.md.digest().getBytes(),
        options.signature,
        scheme
      );
    }, "_verifySignature");
    pki.certificateFromPem = function(pem, computeHash, strict) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "CERTIFICATE" && msg.type !== "X509 CERTIFICATE" && msg.type !== "TRUSTED CERTIFICATE") {
        var error = new Error(
          'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".'
        );
        error.headerType = msg.type;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error(
          "Could not convert certificate from PEM; PEM is encrypted."
        );
      }
      var obj = asn1.fromDer(msg.body, strict);
      return pki.certificateFromAsn1(obj, computeHash);
    };
    pki.certificateToPem = function(cert, maxline) {
      var msg = {
        type: "CERTIFICATE",
        body: asn1.toDer(pki.certificateToAsn1(cert)).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
    pki.publicKeyFromPem = function(pem) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "PUBLIC KEY" && msg.type !== "RSA PUBLIC KEY") {
        var error = new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
        error.headerType = msg.type;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert public key from PEM; PEM is encrypted.");
      }
      var obj = asn1.fromDer(msg.body);
      return pki.publicKeyFromAsn1(obj);
    };
    pki.publicKeyToPem = function(key, maxline) {
      var msg = {
        type: "PUBLIC KEY",
        body: asn1.toDer(pki.publicKeyToAsn1(key)).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
    pki.publicKeyToRSAPublicKeyPem = function(key, maxline) {
      var msg = {
        type: "RSA PUBLIC KEY",
        body: asn1.toDer(pki.publicKeyToRSAPublicKey(key)).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
    pki.getPublicKeyFingerprint = function(key, options) {
      options = options || {};
      var md = options.md || forge.md.sha1.create();
      var type = options.type || "RSAPublicKey";
      var bytes;
      switch (type) {
        case "RSAPublicKey":
          bytes = asn1.toDer(pki.publicKeyToRSAPublicKey(key)).getBytes();
          break;
        case "SubjectPublicKeyInfo":
          bytes = asn1.toDer(pki.publicKeyToAsn1(key)).getBytes();
          break;
        default:
          throw new Error('Unknown fingerprint type "' + options.type + '".');
      }
      md.start();
      md.update(bytes);
      var digest = md.digest();
      if (options.encoding === "hex") {
        var hex = digest.toHex();
        if (options.delimiter) {
          return hex.match(/.{2}/g).join(options.delimiter);
        }
        return hex;
      } else if (options.encoding === "binary") {
        return digest.getBytes();
      } else if (options.encoding) {
        throw new Error('Unknown encoding "' + options.encoding + '".');
      }
      return digest;
    };
    pki.certificationRequestFromPem = function(pem, computeHash, strict) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "CERTIFICATE REQUEST") {
        var error = new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
        error.headerType = msg.type;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
      }
      var obj = asn1.fromDer(msg.body, strict);
      return pki.certificationRequestFromAsn1(obj, computeHash);
    };
    pki.certificationRequestToPem = function(csr, maxline) {
      var msg = {
        type: "CERTIFICATE REQUEST",
        body: asn1.toDer(pki.certificationRequestToAsn1(csr)).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
    pki.createCertificate = function() {
      var cert = {};
      cert.version = 2;
      cert.serialNumber = "00";
      cert.signatureOid = null;
      cert.signature = null;
      cert.siginfo = {};
      cert.siginfo.algorithmOid = null;
      cert.validity = {};
      cert.validity.notBefore = /* @__PURE__ */ new Date();
      cert.validity.notAfter = /* @__PURE__ */ new Date();
      cert.issuer = {};
      cert.issuer.getField = function(sn) {
        return _getAttribute(cert.issuer, sn);
      };
      cert.issuer.addField = function(attr) {
        _fillMissingFields([attr]);
        cert.issuer.attributes.push(attr);
      };
      cert.issuer.attributes = [];
      cert.issuer.hash = null;
      cert.subject = {};
      cert.subject.getField = function(sn) {
        return _getAttribute(cert.subject, sn);
      };
      cert.subject.addField = function(attr) {
        _fillMissingFields([attr]);
        cert.subject.attributes.push(attr);
      };
      cert.subject.attributes = [];
      cert.subject.hash = null;
      cert.extensions = [];
      cert.publicKey = null;
      cert.md = null;
      cert.setSubject = function(attrs, uniqueId) {
        _fillMissingFields(attrs);
        cert.subject.attributes = attrs;
        delete cert.subject.uniqueId;
        if (uniqueId) {
          cert.subject.uniqueId = uniqueId;
        }
        cert.subject.hash = null;
      };
      cert.setIssuer = function(attrs, uniqueId) {
        _fillMissingFields(attrs);
        cert.issuer.attributes = attrs;
        delete cert.issuer.uniqueId;
        if (uniqueId) {
          cert.issuer.uniqueId = uniqueId;
        }
        cert.issuer.hash = null;
      };
      cert.setExtensions = function(exts) {
        for (var i = 0; i < exts.length; ++i) {
          _fillMissingExtensionFields(exts[i], { cert });
        }
        cert.extensions = exts;
      };
      cert.getExtension = function(options) {
        if (typeof options === "string") {
          options = { name: options };
        }
        var rval = null;
        var ext;
        for (var i = 0; rval === null && i < cert.extensions.length; ++i) {
          ext = cert.extensions[i];
          if (options.id && ext.id === options.id) {
            rval = ext;
          } else if (options.name && ext.name === options.name) {
            rval = ext;
          }
        }
        return rval;
      };
      cert.sign = function(key, md) {
        cert.md = md || forge.md.sha1.create();
        var algorithmOid = oids[cert.md.algorithm + "WithRSAEncryption"];
        if (!algorithmOid) {
          var error = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
          error.algorithm = cert.md.algorithm;
          throw error;
        }
        cert.signatureOid = cert.siginfo.algorithmOid = algorithmOid;
        cert.tbsCertificate = pki.getTBSCertificate(cert);
        var bytes = asn1.toDer(cert.tbsCertificate);
        cert.md.update(bytes.getBytes());
        cert.signature = key.sign(cert.md);
      };
      cert.verify = function(child) {
        var rval = false;
        if (!cert.issued(child)) {
          var issuer = child.issuer;
          var subject = cert.subject;
          var error = new Error(
            "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject."
          );
          error.expectedIssuer = subject.attributes;
          error.actualIssuer = issuer.attributes;
          throw error;
        }
        var md = child.md;
        if (md === null) {
          md = _createSignatureDigest({
            signatureOid: child.signatureOid,
            type: "certificate"
          });
          var tbsCertificate = child.tbsCertificate || pki.getTBSCertificate(child);
          var bytes = asn1.toDer(tbsCertificate);
          md.update(bytes.getBytes());
        }
        if (md !== null) {
          rval = _verifySignature({
            certificate: cert,
            md,
            signature: child.signature
          });
        }
        return rval;
      };
      cert.isIssuer = function(parent) {
        var rval = false;
        var i = cert.issuer;
        var s = parent.subject;
        if (i.hash && s.hash) {
          rval = i.hash === s.hash;
        } else if (i.attributes.length === s.attributes.length) {
          rval = true;
          var iattr, sattr;
          for (var n = 0; rval && n < i.attributes.length; ++n) {
            iattr = i.attributes[n];
            sattr = s.attributes[n];
            if (iattr.type !== sattr.type || iattr.value !== sattr.value) {
              rval = false;
            }
          }
        }
        return rval;
      };
      cert.issued = function(child) {
        return child.isIssuer(cert);
      };
      cert.generateSubjectKeyIdentifier = function() {
        return pki.getPublicKeyFingerprint(cert.publicKey, { type: "RSAPublicKey" });
      };
      cert.verifySubjectKeyIdentifier = function() {
        var oid = oids["subjectKeyIdentifier"];
        for (var i = 0; i < cert.extensions.length; ++i) {
          var ext = cert.extensions[i];
          if (ext.id === oid) {
            var ski = cert.generateSubjectKeyIdentifier().getBytes();
            return forge.util.hexToBytes(ext.subjectKeyIdentifier) === ski;
          }
        }
        return false;
      };
      return cert;
    };
    pki.certificateFromAsn1 = function(obj, computeHash) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, x509CertificateValidator, capture, errors)) {
        var error = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
        error.errors = errors;
        throw error;
      }
      var oid = asn1.derToOid(capture.publicKeyOid);
      if (oid !== pki.oids.rsaEncryption) {
        throw new Error("Cannot read public key. OID is not RSA.");
      }
      var cert = pki.createCertificate();
      cert.version = capture.certVersion ? capture.certVersion.charCodeAt(0) : 0;
      var serial = forge.util.createBuffer(capture.certSerialNumber);
      cert.serialNumber = serial.toHex();
      cert.signatureOid = forge.asn1.derToOid(capture.certSignatureOid);
      cert.signatureParameters = _readSignatureParameters(
        cert.signatureOid,
        capture.certSignatureParams,
        true
      );
      cert.siginfo.algorithmOid = forge.asn1.derToOid(capture.certinfoSignatureOid);
      cert.siginfo.parameters = _readSignatureParameters(
        cert.siginfo.algorithmOid,
        capture.certinfoSignatureParams,
        false
      );
      cert.signature = capture.certSignature;
      var validity = [];
      if (capture.certValidity1UTCTime !== void 0) {
        validity.push(asn1.utcTimeToDate(capture.certValidity1UTCTime));
      }
      if (capture.certValidity2GeneralizedTime !== void 0) {
        validity.push(asn1.generalizedTimeToDate(
          capture.certValidity2GeneralizedTime
        ));
      }
      if (capture.certValidity3UTCTime !== void 0) {
        validity.push(asn1.utcTimeToDate(capture.certValidity3UTCTime));
      }
      if (capture.certValidity4GeneralizedTime !== void 0) {
        validity.push(asn1.generalizedTimeToDate(
          capture.certValidity4GeneralizedTime
        ));
      }
      if (validity.length > 2) {
        throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
      }
      if (validity.length < 2) {
        throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
      }
      cert.validity.notBefore = validity[0];
      cert.validity.notAfter = validity[1];
      cert.tbsCertificate = capture.tbsCertificate;
      if (computeHash) {
        cert.md = _createSignatureDigest({
          signatureOid: cert.signatureOid,
          type: "certificate"
        });
        var bytes = asn1.toDer(cert.tbsCertificate);
        cert.md.update(bytes.getBytes());
      }
      var imd = forge.md.sha1.create();
      var ibytes = asn1.toDer(capture.certIssuer);
      imd.update(ibytes.getBytes());
      cert.issuer.getField = function(sn) {
        return _getAttribute(cert.issuer, sn);
      };
      cert.issuer.addField = function(attr) {
        _fillMissingFields([attr]);
        cert.issuer.attributes.push(attr);
      };
      cert.issuer.attributes = pki.RDNAttributesAsArray(capture.certIssuer);
      if (capture.certIssuerUniqueId) {
        cert.issuer.uniqueId = capture.certIssuerUniqueId;
      }
      cert.issuer.hash = imd.digest().toHex();
      var smd = forge.md.sha1.create();
      var sbytes = asn1.toDer(capture.certSubject);
      smd.update(sbytes.getBytes());
      cert.subject.getField = function(sn) {
        return _getAttribute(cert.subject, sn);
      };
      cert.subject.addField = function(attr) {
        _fillMissingFields([attr]);
        cert.subject.attributes.push(attr);
      };
      cert.subject.attributes = pki.RDNAttributesAsArray(capture.certSubject);
      if (capture.certSubjectUniqueId) {
        cert.subject.uniqueId = capture.certSubjectUniqueId;
      }
      cert.subject.hash = smd.digest().toHex();
      if (capture.certExtensions) {
        cert.extensions = pki.certificateExtensionsFromAsn1(capture.certExtensions);
      } else {
        cert.extensions = [];
      }
      cert.publicKey = pki.publicKeyFromAsn1(capture.subjectPublicKeyInfo);
      return cert;
    };
    pki.certificateExtensionsFromAsn1 = function(exts) {
      var rval = [];
      for (var i = 0; i < exts.value.length; ++i) {
        var extseq = exts.value[i];
        for (var ei = 0; ei < extseq.value.length; ++ei) {
          rval.push(pki.certificateExtensionFromAsn1(extseq.value[ei]));
        }
      }
      return rval;
    };
    pki.certificateExtensionFromAsn1 = function(ext) {
      var e = {};
      e.id = asn1.derToOid(ext.value[0].value);
      e.critical = false;
      if (ext.value[1].type === asn1.Type.BOOLEAN) {
        e.critical = ext.value[1].value.charCodeAt(0) !== 0;
        e.value = ext.value[2].value;
      } else {
        e.value = ext.value[1].value;
      }
      if (e.id in oids) {
        e.name = oids[e.id];
        if (e.name === "keyUsage") {
          var ev = asn1.fromDer(e.value);
          var b2 = 0;
          var b3 = 0;
          if (ev.value.length > 1) {
            b2 = ev.value.charCodeAt(1);
            b3 = ev.value.length > 2 ? ev.value.charCodeAt(2) : 0;
          }
          e.digitalSignature = (b2 & 128) === 128;
          e.nonRepudiation = (b2 & 64) === 64;
          e.keyEncipherment = (b2 & 32) === 32;
          e.dataEncipherment = (b2 & 16) === 16;
          e.keyAgreement = (b2 & 8) === 8;
          e.keyCertSign = (b2 & 4) === 4;
          e.cRLSign = (b2 & 2) === 2;
          e.encipherOnly = (b2 & 1) === 1;
          e.decipherOnly = (b3 & 128) === 128;
        } else if (e.name === "basicConstraints") {
          var ev = asn1.fromDer(e.value);
          if (ev.value.length > 0 && ev.value[0].type === asn1.Type.BOOLEAN) {
            e.cA = ev.value[0].value.charCodeAt(0) !== 0;
          } else {
            e.cA = false;
          }
          var value = null;
          if (ev.value.length > 0 && ev.value[0].type === asn1.Type.INTEGER) {
            value = ev.value[0].value;
          } else if (ev.value.length > 1) {
            value = ev.value[1].value;
          }
          if (value !== null) {
            e.pathLenConstraint = asn1.derToInteger(value);
          }
        } else if (e.name === "extKeyUsage") {
          var ev = asn1.fromDer(e.value);
          for (var vi = 0; vi < ev.value.length; ++vi) {
            var oid = asn1.derToOid(ev.value[vi].value);
            if (oid in oids) {
              e[oids[oid]] = true;
            } else {
              e[oid] = true;
            }
          }
        } else if (e.name === "nsCertType") {
          var ev = asn1.fromDer(e.value);
          var b2 = 0;
          if (ev.value.length > 1) {
            b2 = ev.value.charCodeAt(1);
          }
          e.client = (b2 & 128) === 128;
          e.server = (b2 & 64) === 64;
          e.email = (b2 & 32) === 32;
          e.objsign = (b2 & 16) === 16;
          e.reserved = (b2 & 8) === 8;
          e.sslCA = (b2 & 4) === 4;
          e.emailCA = (b2 & 2) === 2;
          e.objCA = (b2 & 1) === 1;
        } else if (e.name === "subjectAltName" || e.name === "issuerAltName") {
          e.altNames = [];
          var gn;
          var ev = asn1.fromDer(e.value);
          for (var n = 0; n < ev.value.length; ++n) {
            gn = ev.value[n];
            var altName = {
              type: gn.type,
              value: gn.value
            };
            e.altNames.push(altName);
            switch (gn.type) {
              // rfc822Name
              case 1:
              // dNSName
              case 2:
              // uniformResourceIdentifier (URI)
              case 6:
                break;
              // IPAddress
              case 7:
                altName.ip = forge.util.bytesToIP(gn.value);
                break;
              // registeredID
              case 8:
                altName.oid = asn1.derToOid(gn.value);
                break;
              default:
            }
          }
        } else if (e.name === "subjectKeyIdentifier") {
          var ev = asn1.fromDer(e.value);
          e.subjectKeyIdentifier = forge.util.bytesToHex(ev.value);
        }
      }
      return e;
    };
    pki.certificationRequestFromAsn1 = function(obj, computeHash) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, certificationRequestValidator, capture, errors)) {
        var error = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
        error.errors = errors;
        throw error;
      }
      var oid = asn1.derToOid(capture.publicKeyOid);
      if (oid !== pki.oids.rsaEncryption) {
        throw new Error("Cannot read public key. OID is not RSA.");
      }
      var csr = pki.createCertificationRequest();
      csr.version = capture.csrVersion ? capture.csrVersion.charCodeAt(0) : 0;
      csr.signatureOid = forge.asn1.derToOid(capture.csrSignatureOid);
      csr.signatureParameters = _readSignatureParameters(
        csr.signatureOid,
        capture.csrSignatureParams,
        true
      );
      csr.siginfo.algorithmOid = forge.asn1.derToOid(capture.csrSignatureOid);
      csr.siginfo.parameters = _readSignatureParameters(
        csr.siginfo.algorithmOid,
        capture.csrSignatureParams,
        false
      );
      csr.signature = capture.csrSignature;
      csr.certificationRequestInfo = capture.certificationRequestInfo;
      if (computeHash) {
        csr.md = _createSignatureDigest({
          signatureOid: csr.signatureOid,
          type: "certification request"
        });
        var bytes = asn1.toDer(csr.certificationRequestInfo);
        csr.md.update(bytes.getBytes());
      }
      var smd = forge.md.sha1.create();
      csr.subject.getField = function(sn) {
        return _getAttribute(csr.subject, sn);
      };
      csr.subject.addField = function(attr) {
        _fillMissingFields([attr]);
        csr.subject.attributes.push(attr);
      };
      csr.subject.attributes = pki.RDNAttributesAsArray(
        capture.certificationRequestInfoSubject,
        smd
      );
      csr.subject.hash = smd.digest().toHex();
      csr.publicKey = pki.publicKeyFromAsn1(capture.subjectPublicKeyInfo);
      csr.getAttribute = function(sn) {
        return _getAttribute(csr, sn);
      };
      csr.addAttribute = function(attr) {
        _fillMissingFields([attr]);
        csr.attributes.push(attr);
      };
      csr.attributes = pki.CRIAttributesAsArray(
        capture.certificationRequestInfoAttributes || []
      );
      return csr;
    };
    pki.createCertificationRequest = function() {
      var csr = {};
      csr.version = 0;
      csr.signatureOid = null;
      csr.signature = null;
      csr.siginfo = {};
      csr.siginfo.algorithmOid = null;
      csr.subject = {};
      csr.subject.getField = function(sn) {
        return _getAttribute(csr.subject, sn);
      };
      csr.subject.addField = function(attr) {
        _fillMissingFields([attr]);
        csr.subject.attributes.push(attr);
      };
      csr.subject.attributes = [];
      csr.subject.hash = null;
      csr.publicKey = null;
      csr.attributes = [];
      csr.getAttribute = function(sn) {
        return _getAttribute(csr, sn);
      };
      csr.addAttribute = function(attr) {
        _fillMissingFields([attr]);
        csr.attributes.push(attr);
      };
      csr.md = null;
      csr.setSubject = function(attrs) {
        _fillMissingFields(attrs);
        csr.subject.attributes = attrs;
        csr.subject.hash = null;
      };
      csr.setAttributes = function(attrs) {
        _fillMissingFields(attrs);
        csr.attributes = attrs;
      };
      csr.sign = function(key, md) {
        csr.md = md || forge.md.sha1.create();
        var algorithmOid = oids[csr.md.algorithm + "WithRSAEncryption"];
        if (!algorithmOid) {
          var error = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
          error.algorithm = csr.md.algorithm;
          throw error;
        }
        csr.signatureOid = csr.siginfo.algorithmOid = algorithmOid;
        csr.certificationRequestInfo = pki.getCertificationRequestInfo(csr);
        var bytes = asn1.toDer(csr.certificationRequestInfo);
        csr.md.update(bytes.getBytes());
        csr.signature = key.sign(csr.md);
      };
      csr.verify = function() {
        var rval = false;
        var md = csr.md;
        if (md === null) {
          md = _createSignatureDigest({
            signatureOid: csr.signatureOid,
            type: "certification request"
          });
          var cri = csr.certificationRequestInfo || pki.getCertificationRequestInfo(csr);
          var bytes = asn1.toDer(cri);
          md.update(bytes.getBytes());
        }
        if (md !== null) {
          rval = _verifySignature({
            certificate: csr,
            md,
            signature: csr.signature
          });
        }
        return rval;
      };
      return csr;
    };
    function _dnToAsn1(obj) {
      var rval = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.SEQUENCE,
        true,
        []
      );
      var attr, set;
      var attrs = obj.attributes;
      for (var i = 0; i < attrs.length; ++i) {
        attr = attrs[i];
        var value = attr.value;
        var valueTagClass = asn1.Type.PRINTABLESTRING;
        if ("valueTagClass" in attr) {
          valueTagClass = attr.valueTagClass;
          if (valueTagClass === asn1.Type.UTF8) {
            value = forge.util.encodeUtf8(value);
          }
        }
        set = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // AttributeType
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(attr.type).getBytes()
            ),
            // AttributeValue
            asn1.create(asn1.Class.UNIVERSAL, valueTagClass, false, value)
          ])
        ]);
        rval.value.push(set);
      }
      return rval;
    }
    __name(_dnToAsn1, "_dnToAsn1");
    function _fillMissingFields(attrs) {
      var attr;
      for (var i = 0; i < attrs.length; ++i) {
        attr = attrs[i];
        if (typeof attr.name === "undefined") {
          if (attr.type && attr.type in pki.oids) {
            attr.name = pki.oids[attr.type];
          } else if (attr.shortName && attr.shortName in _shortNames) {
            attr.name = pki.oids[_shortNames[attr.shortName]];
          }
        }
        if (typeof attr.type === "undefined") {
          if (attr.name && attr.name in pki.oids) {
            attr.type = pki.oids[attr.name];
          } else {
            var error = new Error("Attribute type not specified.");
            error.attribute = attr;
            throw error;
          }
        }
        if (typeof attr.shortName === "undefined") {
          if (attr.name && attr.name in _shortNames) {
            attr.shortName = _shortNames[attr.name];
          }
        }
        if (attr.type === oids.extensionRequest) {
          attr.valueConstructed = true;
          attr.valueTagClass = asn1.Type.SEQUENCE;
          if (!attr.value && attr.extensions) {
            attr.value = [];
            for (var ei = 0; ei < attr.extensions.length; ++ei) {
              attr.value.push(pki.certificateExtensionToAsn1(
                _fillMissingExtensionFields(attr.extensions[ei])
              ));
            }
          }
        }
        if (typeof attr.value === "undefined") {
          var error = new Error("Attribute value not specified.");
          error.attribute = attr;
          throw error;
        }
      }
    }
    __name(_fillMissingFields, "_fillMissingFields");
    function _fillMissingExtensionFields(e, options) {
      options = options || {};
      if (typeof e.name === "undefined") {
        if (e.id && e.id in pki.oids) {
          e.name = pki.oids[e.id];
        }
      }
      if (typeof e.id === "undefined") {
        if (e.name && e.name in pki.oids) {
          e.id = pki.oids[e.name];
        } else {
          var error = new Error("Extension ID not specified.");
          error.extension = e;
          throw error;
        }
      }
      if (typeof e.value !== "undefined") {
        return e;
      }
      if (e.name === "keyUsage") {
        var unused = 0;
        var b2 = 0;
        var b3 = 0;
        if (e.digitalSignature) {
          b2 |= 128;
          unused = 7;
        }
        if (e.nonRepudiation) {
          b2 |= 64;
          unused = 6;
        }
        if (e.keyEncipherment) {
          b2 |= 32;
          unused = 5;
        }
        if (e.dataEncipherment) {
          b2 |= 16;
          unused = 4;
        }
        if (e.keyAgreement) {
          b2 |= 8;
          unused = 3;
        }
        if (e.keyCertSign) {
          b2 |= 4;
          unused = 2;
        }
        if (e.cRLSign) {
          b2 |= 2;
          unused = 1;
        }
        if (e.encipherOnly) {
          b2 |= 1;
          unused = 0;
        }
        if (e.decipherOnly) {
          b3 |= 128;
          unused = 7;
        }
        var value = String.fromCharCode(unused);
        if (b3 !== 0) {
          value += String.fromCharCode(b2) + String.fromCharCode(b3);
        } else if (b2 !== 0) {
          value += String.fromCharCode(b2);
        }
        e.value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.BITSTRING,
          false,
          value
        );
      } else if (e.name === "basicConstraints") {
        e.value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          []
        );
        if (e.cA) {
          e.value.value.push(asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.BOOLEAN,
            false,
            String.fromCharCode(255)
          ));
        }
        if ("pathLenConstraint" in e) {
          e.value.value.push(asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            asn1.integerToDer(e.pathLenConstraint).getBytes()
          ));
        }
      } else if (e.name === "extKeyUsage") {
        e.value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          []
        );
        var seq = e.value.value;
        for (var key in e) {
          if (e[key] !== true) {
            continue;
          }
          if (key in oids) {
            seq.push(asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(oids[key]).getBytes()
            ));
          } else if (key.indexOf(".") !== -1) {
            seq.push(asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(key).getBytes()
            ));
          }
        }
      } else if (e.name === "nsCertType") {
        var unused = 0;
        var b2 = 0;
        if (e.client) {
          b2 |= 128;
          unused = 7;
        }
        if (e.server) {
          b2 |= 64;
          unused = 6;
        }
        if (e.email) {
          b2 |= 32;
          unused = 5;
        }
        if (e.objsign) {
          b2 |= 16;
          unused = 4;
        }
        if (e.reserved) {
          b2 |= 8;
          unused = 3;
        }
        if (e.sslCA) {
          b2 |= 4;
          unused = 2;
        }
        if (e.emailCA) {
          b2 |= 2;
          unused = 1;
        }
        if (e.objCA) {
          b2 |= 1;
          unused = 0;
        }
        var value = String.fromCharCode(unused);
        if (b2 !== 0) {
          value += String.fromCharCode(b2);
        }
        e.value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.BITSTRING,
          false,
          value
        );
      } else if (e.name === "subjectAltName" || e.name === "issuerAltName") {
        e.value = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
        var altName;
        for (var n = 0; n < e.altNames.length; ++n) {
          altName = e.altNames[n];
          var value = altName.value;
          if (altName.type === 7 && altName.ip) {
            value = forge.util.bytesFromIP(altName.ip);
            if (value === null) {
              var error = new Error(
                'Extension "ip" value is not a valid IPv4 or IPv6 address.'
              );
              error.extension = e;
              throw error;
            }
          } else if (altName.type === 8) {
            if (altName.oid) {
              value = asn1.oidToDer(asn1.oidToDer(altName.oid));
            } else {
              value = asn1.oidToDer(value);
            }
          }
          e.value.value.push(asn1.create(
            asn1.Class.CONTEXT_SPECIFIC,
            altName.type,
            false,
            value
          ));
        }
      } else if (e.name === "nsComment" && options.cert) {
        if (!/^[\x00-\x7F]*$/.test(e.comment) || e.comment.length < 1 || e.comment.length > 128) {
          throw new Error('Invalid "nsComment" content.');
        }
        e.value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.IA5STRING,
          false,
          e.comment
        );
      } else if (e.name === "subjectKeyIdentifier" && options.cert) {
        var ski = options.cert.generateSubjectKeyIdentifier();
        e.subjectKeyIdentifier = ski.toHex();
        e.value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OCTETSTRING,
          false,
          ski.getBytes()
        );
      } else if (e.name === "authorityKeyIdentifier" && options.cert) {
        e.value = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
        var seq = e.value.value;
        if (e.keyIdentifier) {
          var keyIdentifier = e.keyIdentifier === true ? options.cert.generateSubjectKeyIdentifier().getBytes() : e.keyIdentifier;
          seq.push(
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, false, keyIdentifier)
          );
        }
        if (e.authorityCertIssuer) {
          var authorityCertIssuer = [
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 4, true, [
              _dnToAsn1(e.authorityCertIssuer === true ? options.cert.issuer : e.authorityCertIssuer)
            ])
          ];
          seq.push(
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, authorityCertIssuer)
          );
        }
        if (e.serialNumber) {
          var serialNumber = forge.util.hexToBytes(e.serialNumber === true ? options.cert.serialNumber : e.serialNumber);
          seq.push(
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 2, false, serialNumber)
          );
        }
      } else if (e.name === "cRLDistributionPoints") {
        e.value = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
        var seq = e.value.value;
        var subSeq = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          []
        );
        var fullNameGeneralNames = asn1.create(
          asn1.Class.CONTEXT_SPECIFIC,
          0,
          true,
          []
        );
        var altName;
        for (var n = 0; n < e.altNames.length; ++n) {
          altName = e.altNames[n];
          var value = altName.value;
          if (altName.type === 7 && altName.ip) {
            value = forge.util.bytesFromIP(altName.ip);
            if (value === null) {
              var error = new Error(
                'Extension "ip" value is not a valid IPv4 or IPv6 address.'
              );
              error.extension = e;
              throw error;
            }
          } else if (altName.type === 8) {
            if (altName.oid) {
              value = asn1.oidToDer(asn1.oidToDer(altName.oid));
            } else {
              value = asn1.oidToDer(value);
            }
          }
          fullNameGeneralNames.value.push(asn1.create(
            asn1.Class.CONTEXT_SPECIFIC,
            altName.type,
            false,
            value
          ));
        }
        subSeq.value.push(asn1.create(
          asn1.Class.CONTEXT_SPECIFIC,
          0,
          true,
          [fullNameGeneralNames]
        ));
        seq.push(subSeq);
      }
      if (typeof e.value === "undefined") {
        var error = new Error("Extension value not specified.");
        error.extension = e;
        throw error;
      }
      return e;
    }
    __name(_fillMissingExtensionFields, "_fillMissingExtensionFields");
    function _signatureParametersToAsn1(oid, params) {
      switch (oid) {
        case oids["RSASSA-PSS"]:
          var parts = [];
          if (params.hash.algorithmOid !== void 0) {
            parts.push(asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OID,
                  false,
                  asn1.oidToDer(params.hash.algorithmOid).getBytes()
                ),
                asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
              ])
            ]));
          }
          if (params.mgf.algorithmOid !== void 0) {
            parts.push(asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, [
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OID,
                  false,
                  asn1.oidToDer(params.mgf.algorithmOid).getBytes()
                ),
                asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                  asn1.create(
                    asn1.Class.UNIVERSAL,
                    asn1.Type.OID,
                    false,
                    asn1.oidToDer(params.mgf.hash.algorithmOid).getBytes()
                  ),
                  asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
                ])
              ])
            ]));
          }
          if (params.saltLength !== void 0) {
            parts.push(asn1.create(asn1.Class.CONTEXT_SPECIFIC, 2, true, [
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.INTEGER,
                false,
                asn1.integerToDer(params.saltLength).getBytes()
              )
            ]));
          }
          return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, parts);
        default:
          return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "");
      }
    }
    __name(_signatureParametersToAsn1, "_signatureParametersToAsn1");
    function _CRIAttributesToAsn1(csr) {
      var rval = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, []);
      if (csr.attributes.length === 0) {
        return rval;
      }
      var attrs = csr.attributes;
      for (var i = 0; i < attrs.length; ++i) {
        var attr = attrs[i];
        var value = attr.value;
        var valueTagClass = asn1.Type.UTF8;
        if ("valueTagClass" in attr) {
          valueTagClass = attr.valueTagClass;
        }
        if (valueTagClass === asn1.Type.UTF8) {
          value = forge.util.encodeUtf8(value);
        }
        var valueConstructed = false;
        if ("valueConstructed" in attr) {
          valueConstructed = attr.valueConstructed;
        }
        var seq = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // AttributeType
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(attr.type).getBytes()
          ),
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
            // AttributeValue
            asn1.create(
              asn1.Class.UNIVERSAL,
              valueTagClass,
              valueConstructed,
              value
            )
          ])
        ]);
        rval.value.push(seq);
      }
      return rval;
    }
    __name(_CRIAttributesToAsn1, "_CRIAttributesToAsn1");
    var jan_1_1950 = /* @__PURE__ */ new Date("1950-01-01T00:00:00Z");
    var jan_1_2050 = /* @__PURE__ */ new Date("2050-01-01T00:00:00Z");
    function _dateToAsn1(date) {
      if (date >= jan_1_1950 && date < jan_1_2050) {
        return asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.UTCTIME,
          false,
          asn1.dateToUtcTime(date)
        );
      } else {
        return asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.GENERALIZEDTIME,
          false,
          asn1.dateToGeneralizedTime(date)
        );
      }
    }
    __name(_dateToAsn1, "_dateToAsn1");
    pki.getTBSCertificate = function(cert) {
      var notBefore = _dateToAsn1(cert.validity.notBefore);
      var notAfter = _dateToAsn1(cert.validity.notAfter);
      var tbs = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // version
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          // integer
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            asn1.integerToDer(cert.version).getBytes()
          )
        ]),
        // serialNumber
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          forge.util.hexToBytes(cert.serialNumber)
        ),
        // signature
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(cert.siginfo.algorithmOid).getBytes()
          ),
          // parameters
          _signatureParametersToAsn1(
            cert.siginfo.algorithmOid,
            cert.siginfo.parameters
          )
        ]),
        // issuer
        _dnToAsn1(cert.issuer),
        // validity
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          notBefore,
          notAfter
        ]),
        // subject
        _dnToAsn1(cert.subject),
        // SubjectPublicKeyInfo
        pki.publicKeyToAsn1(cert.publicKey)
      ]);
      if (cert.issuer.uniqueId) {
        tbs.value.push(
          asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, [
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.BITSTRING,
              false,
              // TODO: support arbitrary bit length ids
              String.fromCharCode(0) + cert.issuer.uniqueId
            )
          ])
        );
      }
      if (cert.subject.uniqueId) {
        tbs.value.push(
          asn1.create(asn1.Class.CONTEXT_SPECIFIC, 2, true, [
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.BITSTRING,
              false,
              // TODO: support arbitrary bit length ids
              String.fromCharCode(0) + cert.subject.uniqueId
            )
          ])
        );
      }
      if (cert.extensions.length > 0) {
        tbs.value.push(pki.certificateExtensionsToAsn1(cert.extensions));
      }
      return tbs;
    };
    pki.getCertificationRequestInfo = function(csr) {
      var cri = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // version
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          asn1.integerToDer(csr.version).getBytes()
        ),
        // subject
        _dnToAsn1(csr.subject),
        // SubjectPublicKeyInfo
        pki.publicKeyToAsn1(csr.publicKey),
        // attributes
        _CRIAttributesToAsn1(csr)
      ]);
      return cri;
    };
    pki.distinguishedNameToAsn1 = function(dn) {
      return _dnToAsn1(dn);
    };
    pki.certificateToAsn1 = function(cert) {
      var tbsCertificate = cert.tbsCertificate || pki.getTBSCertificate(cert);
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // TBSCertificate
        tbsCertificate,
        // AlgorithmIdentifier (signature algorithm)
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(cert.signatureOid).getBytes()
          ),
          // parameters
          _signatureParametersToAsn1(cert.signatureOid, cert.signatureParameters)
        ]),
        // SignatureValue
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.BITSTRING,
          false,
          String.fromCharCode(0) + cert.signature
        )
      ]);
    };
    pki.certificateExtensionsToAsn1 = function(exts) {
      var rval = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 3, true, []);
      var seq = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
      rval.value.push(seq);
      for (var i = 0; i < exts.length; ++i) {
        seq.value.push(pki.certificateExtensionToAsn1(exts[i]));
      }
      return rval;
    };
    pki.certificateExtensionToAsn1 = function(ext) {
      var extseq = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, []);
      extseq.value.push(asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OID,
        false,
        asn1.oidToDer(ext.id).getBytes()
      ));
      if (ext.critical) {
        extseq.value.push(asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.BOOLEAN,
          false,
          String.fromCharCode(255)
        ));
      }
      var value = ext.value;
      if (typeof ext.value !== "string") {
        value = asn1.toDer(value).getBytes();
      }
      extseq.value.push(asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OCTETSTRING,
        false,
        value
      ));
      return extseq;
    };
    pki.certificationRequestToAsn1 = function(csr) {
      var cri = csr.certificationRequestInfo || pki.getCertificationRequestInfo(csr);
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // CertificationRequestInfo
        cri,
        // AlgorithmIdentifier (signature algorithm)
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(csr.signatureOid).getBytes()
          ),
          // parameters
          _signatureParametersToAsn1(csr.signatureOid, csr.signatureParameters)
        ]),
        // signature
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.BITSTRING,
          false,
          String.fromCharCode(0) + csr.signature
        )
      ]);
    };
    pki.createCaStore = function(certs) {
      var caStore = {
        // stored certificates
        certs: {}
      };
      caStore.getIssuer = function(cert2) {
        var rval = getBySubject(cert2.issuer);
        return rval;
      };
      caStore.addCertificate = function(cert2) {
        if (typeof cert2 === "string") {
          cert2 = forge.pki.certificateFromPem(cert2);
        }
        ensureSubjectHasHash(cert2.subject);
        if (!caStore.hasCertificate(cert2)) {
          if (cert2.subject.hash in caStore.certs) {
            var tmp = caStore.certs[cert2.subject.hash];
            if (!forge.util.isArray(tmp)) {
              tmp = [tmp];
            }
            tmp.push(cert2);
            caStore.certs[cert2.subject.hash] = tmp;
          } else {
            caStore.certs[cert2.subject.hash] = cert2;
          }
        }
      };
      caStore.hasCertificate = function(cert2) {
        if (typeof cert2 === "string") {
          cert2 = forge.pki.certificateFromPem(cert2);
        }
        var match = getBySubject(cert2.subject);
        if (!match) {
          return false;
        }
        if (!forge.util.isArray(match)) {
          match = [match];
        }
        var der1 = asn1.toDer(pki.certificateToAsn1(cert2)).getBytes();
        for (var i2 = 0; i2 < match.length; ++i2) {
          var der2 = asn1.toDer(pki.certificateToAsn1(match[i2])).getBytes();
          if (der1 === der2) {
            return true;
          }
        }
        return false;
      };
      caStore.listAllCertificates = function() {
        var certList = [];
        for (var hash in caStore.certs) {
          if (caStore.certs.hasOwnProperty(hash)) {
            var value = caStore.certs[hash];
            if (!forge.util.isArray(value)) {
              certList.push(value);
            } else {
              for (var i2 = 0; i2 < value.length; ++i2) {
                certList.push(value[i2]);
              }
            }
          }
        }
        return certList;
      };
      caStore.removeCertificate = function(cert2) {
        var result;
        if (typeof cert2 === "string") {
          cert2 = forge.pki.certificateFromPem(cert2);
        }
        ensureSubjectHasHash(cert2.subject);
        if (!caStore.hasCertificate(cert2)) {
          return null;
        }
        var match = getBySubject(cert2.subject);
        if (!forge.util.isArray(match)) {
          result = caStore.certs[cert2.subject.hash];
          delete caStore.certs[cert2.subject.hash];
          return result;
        }
        var der1 = asn1.toDer(pki.certificateToAsn1(cert2)).getBytes();
        for (var i2 = 0; i2 < match.length; ++i2) {
          var der2 = asn1.toDer(pki.certificateToAsn1(match[i2])).getBytes();
          if (der1 === der2) {
            result = match[i2];
            match.splice(i2, 1);
          }
        }
        if (match.length === 0) {
          delete caStore.certs[cert2.subject.hash];
        }
        return result;
      };
      function getBySubject(subject) {
        ensureSubjectHasHash(subject);
        return caStore.certs[subject.hash] || null;
      }
      __name(getBySubject, "getBySubject");
      function ensureSubjectHasHash(subject) {
        if (!subject.hash) {
          var md = forge.md.sha1.create();
          subject.attributes = pki.RDNAttributesAsArray(_dnToAsn1(subject), md);
          subject.hash = md.digest().toHex();
        }
      }
      __name(ensureSubjectHasHash, "ensureSubjectHasHash");
      if (certs) {
        for (var i = 0; i < certs.length; ++i) {
          var cert = certs[i];
          caStore.addCertificate(cert);
        }
      }
      return caStore;
    };
    pki.certificateError = {
      bad_certificate: "forge.pki.BadCertificate",
      unsupported_certificate: "forge.pki.UnsupportedCertificate",
      certificate_revoked: "forge.pki.CertificateRevoked",
      certificate_expired: "forge.pki.CertificateExpired",
      certificate_unknown: "forge.pki.CertificateUnknown",
      unknown_ca: "forge.pki.UnknownCertificateAuthority"
    };
    pki.verifyCertificateChain = function(caStore, chain, options) {
      if (typeof options === "function") {
        options = { verify: options };
      }
      options = options || {};
      chain = chain.slice(0);
      var certs = chain.slice(0);
      var validityCheckDate = options.validityCheckDate;
      if (typeof validityCheckDate === "undefined") {
        validityCheckDate = /* @__PURE__ */ new Date();
      }
      var first = true;
      var error = null;
      var depth = 0;
      do {
        var cert = chain.shift();
        var parent = null;
        var selfSigned = false;
        if (validityCheckDate) {
          if (validityCheckDate < cert.validity.notBefore || validityCheckDate > cert.validity.notAfter) {
            error = {
              message: "Certificate is not valid yet or has expired.",
              error: pki.certificateError.certificate_expired,
              notBefore: cert.validity.notBefore,
              notAfter: cert.validity.notAfter,
              // TODO: we might want to reconsider renaming 'now' to
              // 'validityCheckDate' should this API be changed in the future.
              now: validityCheckDate
            };
          }
        }
        if (error === null) {
          parent = chain[0] || caStore.getIssuer(cert);
          if (parent === null) {
            if (cert.isIssuer(cert)) {
              selfSigned = true;
              parent = cert;
            }
          }
          if (parent) {
            var parents = parent;
            if (!forge.util.isArray(parents)) {
              parents = [parents];
            }
            var verified = false;
            while (!verified && parents.length > 0) {
              parent = parents.shift();
              try {
                verified = parent.verify(cert);
              } catch (ex) {
              }
            }
            if (!verified) {
              error = {
                message: "Certificate signature is invalid.",
                error: pki.certificateError.bad_certificate
              };
            }
          }
          if (error === null && (!parent || selfSigned) && !caStore.hasCertificate(cert)) {
            error = {
              message: "Certificate is not trusted.",
              error: pki.certificateError.unknown_ca
            };
          }
        }
        if (error === null && parent && !cert.isIssuer(parent)) {
          error = {
            message: "Certificate issuer is invalid.",
            error: pki.certificateError.bad_certificate
          };
        }
        if (error === null) {
          var se = {
            keyUsage: true,
            basicConstraints: true
          };
          for (var i = 0; error === null && i < cert.extensions.length; ++i) {
            var ext = cert.extensions[i];
            if (ext.critical && !(ext.name in se)) {
              error = {
                message: "Certificate has an unsupported critical extension.",
                error: pki.certificateError.unsupported_certificate
              };
            }
          }
        }
        if (error === null && (!first || chain.length === 0 && (!parent || selfSigned))) {
          var bcExt = cert.getExtension("basicConstraints");
          var keyUsageExt = cert.getExtension("keyUsage");
          if (keyUsageExt !== null) {
            if (!keyUsageExt.keyCertSign || bcExt === null) {
              error = {
                message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                error: pki.certificateError.bad_certificate
              };
            }
          }
          if (error === null && bcExt === null) {
            error = {
              message: "Certificate is missing basicConstraints extension and cannot be used as a CA.",
              error: pki.certificateError.bad_certificate
            };
          }
          if (error === null && bcExt !== null && !bcExt.cA) {
            error = {
              message: "Certificate basicConstraints indicates the certificate is not a CA.",
              error: pki.certificateError.bad_certificate
            };
          }
          if (error === null && keyUsageExt !== null && "pathLenConstraint" in bcExt) {
            var pathLen = depth - 1;
            if (pathLen > bcExt.pathLenConstraint) {
              error = {
                message: "Certificate basicConstraints pathLenConstraint violated.",
                error: pki.certificateError.bad_certificate
              };
            }
          }
        }
        var vfd = error === null ? true : error.error;
        var ret = options.verify ? options.verify(vfd, depth, certs) : vfd;
        if (ret === true) {
          error = null;
        } else {
          if (vfd === true) {
            error = {
              message: "The application rejected the certificate.",
              error: pki.certificateError.bad_certificate
            };
          }
          if (ret || ret === 0) {
            if (typeof ret === "object" && !forge.util.isArray(ret)) {
              if (ret.message) {
                error.message = ret.message;
              }
              if (ret.error) {
                error.error = ret.error;
              }
            } else if (typeof ret === "string") {
              error.error = ret;
            }
          }
          throw error;
        }
        first = false;
        ++depth;
      } while (chain.length > 0);
      return true;
    };
  }
});

// node_modules/node-forge/lib/pkcs12.js
var require_pkcs12 = __commonJS({
  "node_modules/node-forge/lib/pkcs12.js"(exports, module) {
    var forge = require_forge();
    require_asn1();
    require_hmac();
    require_oids();
    require_pkcs7asn1();
    require_pbe();
    require_random();
    require_rsa();
    require_sha1();
    require_util();
    require_x509();
    var asn1 = forge.asn1;
    var pki = forge.pki;
    var p12 = module.exports = forge.pkcs12 = forge.pkcs12 || {};
    var contentInfoValidator = {
      name: "ContentInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      // a ContentInfo
      constructed: true,
      value: [{
        name: "ContentInfo.contentType",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: "contentType"
      }, {
        name: "ContentInfo.content",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        constructed: true,
        captureAsn1: "content"
      }]
    };
    var pfxValidator = {
      name: "PFX",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [
        {
          name: "PFX.version",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.INTEGER,
          constructed: false,
          capture: "version"
        },
        contentInfoValidator,
        {
          name: "PFX.macData",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          optional: true,
          captureAsn1: "mac",
          value: [{
            name: "PFX.macData.mac",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            // DigestInfo
            constructed: true,
            value: [{
              name: "PFX.macData.mac.digestAlgorithm",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.SEQUENCE,
              // DigestAlgorithmIdentifier
              constructed: true,
              value: [{
                name: "PFX.macData.mac.digestAlgorithm.algorithm",
                tagClass: asn1.Class.UNIVERSAL,
                type: asn1.Type.OID,
                constructed: false,
                capture: "macAlgorithm"
              }, {
                name: "PFX.macData.mac.digestAlgorithm.parameters",
                optional: true,
                tagClass: asn1.Class.UNIVERSAL,
                captureAsn1: "macAlgorithmParameters"
              }]
            }, {
              name: "PFX.macData.mac.digest",
              tagClass: asn1.Class.UNIVERSAL,
              type: asn1.Type.OCTETSTRING,
              constructed: false,
              capture: "macDigest"
            }]
          }, {
            name: "PFX.macData.macSalt",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.OCTETSTRING,
            constructed: false,
            capture: "macSalt"
          }, {
            name: "PFX.macData.iterations",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.INTEGER,
            constructed: false,
            optional: true,
            capture: "macIterations"
          }]
        }
      ]
    };
    var safeBagValidator = {
      name: "SafeBag",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "SafeBag.bagId",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: "bagId"
      }, {
        name: "SafeBag.bagValue",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        constructed: true,
        captureAsn1: "bagValue"
      }, {
        name: "SafeBag.bagAttributes",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SET,
        constructed: true,
        optional: true,
        capture: "bagAttributes"
      }]
    };
    var attributeValidator = {
      name: "Attribute",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "Attribute.attrId",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: "oid"
      }, {
        name: "Attribute.attrValues",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SET,
        constructed: true,
        capture: "values"
      }]
    };
    var certBagValidator = {
      name: "CertBag",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "CertBag.certId",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OID,
        constructed: false,
        capture: "certId"
      }, {
        name: "CertBag.certValue",
        tagClass: asn1.Class.CONTEXT_SPECIFIC,
        constructed: true,
        /* So far we only support X.509 certificates (which are wrapped in
           an OCTET STRING, hence hard code that here). */
        value: [{
          name: "CertBag.certValue[0]",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Class.OCTETSTRING,
          constructed: false,
          capture: "cert"
        }]
      }]
    };
    function _getBagsByAttribute(safeContents, attrName, attrValue, bagType) {
      var result = [];
      for (var i = 0; i < safeContents.length; i++) {
        for (var j = 0; j < safeContents[i].safeBags.length; j++) {
          var bag = safeContents[i].safeBags[j];
          if (bagType !== void 0 && bag.type !== bagType) {
            continue;
          }
          if (attrName === null) {
            result.push(bag);
            continue;
          }
          if (bag.attributes[attrName] !== void 0 && bag.attributes[attrName].indexOf(attrValue) >= 0) {
            result.push(bag);
          }
        }
      }
      return result;
    }
    __name(_getBagsByAttribute, "_getBagsByAttribute");
    p12.pkcs12FromAsn1 = function(obj, strict, password) {
      if (typeof strict === "string") {
        password = strict;
        strict = true;
      } else if (strict === void 0) {
        strict = true;
      }
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, pfxValidator, capture, errors)) {
        var error = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");
        error.errors = error;
        throw error;
      }
      var pfx = {
        version: capture.version.charCodeAt(0),
        safeContents: [],
        /**
         * Gets bags with matching attributes.
         *
         * @param filter the attributes to filter by:
         *          [localKeyId] the localKeyId to search for.
         *          [localKeyIdHex] the localKeyId in hex to search for.
         *          [friendlyName] the friendly name to search for.
         *          [bagType] bag type to narrow each attribute search by.
         *
         * @return a map of attribute type to an array of matching bags or, if no
         *           attribute was given but a bag type, the map key will be the
         *           bag type.
         */
        getBags: /* @__PURE__ */ __name(function(filter) {
          var rval = {};
          var localKeyId;
          if ("localKeyId" in filter) {
            localKeyId = filter.localKeyId;
          } else if ("localKeyIdHex" in filter) {
            localKeyId = forge.util.hexToBytes(filter.localKeyIdHex);
          }
          if (localKeyId === void 0 && !("friendlyName" in filter) && "bagType" in filter) {
            rval[filter.bagType] = _getBagsByAttribute(
              pfx.safeContents,
              null,
              null,
              filter.bagType
            );
          }
          if (localKeyId !== void 0) {
            rval.localKeyId = _getBagsByAttribute(
              pfx.safeContents,
              "localKeyId",
              localKeyId,
              filter.bagType
            );
          }
          if ("friendlyName" in filter) {
            rval.friendlyName = _getBagsByAttribute(
              pfx.safeContents,
              "friendlyName",
              filter.friendlyName,
              filter.bagType
            );
          }
          return rval;
        }, "getBags"),
        /**
         * DEPRECATED: use getBags() instead.
         *
         * Get bags with matching friendlyName attribute.
         *
         * @param friendlyName the friendly name to search for.
         * @param [bagType] bag type to narrow search by.
         *
         * @return an array of bags with matching friendlyName attribute.
         */
        getBagsByFriendlyName: /* @__PURE__ */ __name(function(friendlyName, bagType) {
          return _getBagsByAttribute(
            pfx.safeContents,
            "friendlyName",
            friendlyName,
            bagType
          );
        }, "getBagsByFriendlyName"),
        /**
         * DEPRECATED: use getBags() instead.
         *
         * Get bags with matching localKeyId attribute.
         *
         * @param localKeyId the localKeyId to search for.
         * @param [bagType] bag type to narrow search by.
         *
         * @return an array of bags with matching localKeyId attribute.
         */
        getBagsByLocalKeyId: /* @__PURE__ */ __name(function(localKeyId, bagType) {
          return _getBagsByAttribute(
            pfx.safeContents,
            "localKeyId",
            localKeyId,
            bagType
          );
        }, "getBagsByLocalKeyId")
      };
      if (capture.version.charCodeAt(0) !== 3) {
        var error = new Error("PKCS#12 PFX of version other than 3 not supported.");
        error.version = capture.version.charCodeAt(0);
        throw error;
      }
      if (asn1.derToOid(capture.contentType) !== pki.oids.data) {
        var error = new Error("Only PKCS#12 PFX in password integrity mode supported.");
        error.oid = asn1.derToOid(capture.contentType);
        throw error;
      }
      var data = capture.content.value[0];
      if (data.tagClass !== asn1.Class.UNIVERSAL || data.type !== asn1.Type.OCTETSTRING) {
        throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
      }
      data = _decodePkcs7Data(data);
      if (capture.mac) {
        var md = null;
        var macKeyBytes = 0;
        var macAlgorithm = asn1.derToOid(capture.macAlgorithm);
        switch (macAlgorithm) {
          case pki.oids.sha1:
            md = forge.md.sha1.create();
            macKeyBytes = 20;
            break;
          case pki.oids.sha256:
            md = forge.md.sha256.create();
            macKeyBytes = 32;
            break;
          case pki.oids.sha384:
            md = forge.md.sha384.create();
            macKeyBytes = 48;
            break;
          case pki.oids.sha512:
            md = forge.md.sha512.create();
            macKeyBytes = 64;
            break;
          case pki.oids.md5:
            md = forge.md.md5.create();
            macKeyBytes = 16;
            break;
        }
        if (md === null) {
          throw new Error("PKCS#12 uses unsupported MAC algorithm: " + macAlgorithm);
        }
        var macSalt = new forge.util.ByteBuffer(capture.macSalt);
        var macIterations = "macIterations" in capture ? parseInt(forge.util.bytesToHex(capture.macIterations), 16) : 1;
        var macKey = p12.generateKey(
          password,
          macSalt,
          3,
          macIterations,
          macKeyBytes,
          md
        );
        var mac = forge.hmac.create();
        mac.start(md, macKey);
        mac.update(data.value);
        var macValue = mac.getMac();
        if (macValue.getBytes() !== capture.macDigest) {
          throw new Error("PKCS#12 MAC could not be verified. Invalid password?");
        }
      } else if (Array.isArray(obj.value) && obj.value.length > 2) {
        throw new Error("Invalid PKCS#12. macData field present but MAC was not validated.");
      }
      _decodeAuthenticatedSafe(pfx, data.value, strict, password);
      return pfx;
    };
    function _decodePkcs7Data(data) {
      if (data.composed || data.constructed) {
        var value = forge.util.createBuffer();
        for (var i = 0; i < data.value.length; ++i) {
          value.putBytes(data.value[i].value);
        }
        data.composed = data.constructed = false;
        data.value = value.getBytes();
      }
      return data;
    }
    __name(_decodePkcs7Data, "_decodePkcs7Data");
    function _decodeAuthenticatedSafe(pfx, authSafe, strict, password) {
      authSafe = asn1.fromDer(authSafe, strict);
      if (authSafe.tagClass !== asn1.Class.UNIVERSAL || authSafe.type !== asn1.Type.SEQUENCE || authSafe.constructed !== true) {
        throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
      }
      for (var i = 0; i < authSafe.value.length; i++) {
        var contentInfo = authSafe.value[i];
        var capture = {};
        var errors = [];
        if (!asn1.validate(contentInfo, contentInfoValidator, capture, errors)) {
          var error = new Error("Cannot read ContentInfo.");
          error.errors = errors;
          throw error;
        }
        var obj = {
          encrypted: false
        };
        var safeContents = null;
        var data = capture.content.value[0];
        switch (asn1.derToOid(capture.contentType)) {
          case pki.oids.data:
            if (data.tagClass !== asn1.Class.UNIVERSAL || data.type !== asn1.Type.OCTETSTRING) {
              throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
            }
            safeContents = _decodePkcs7Data(data).value;
            break;
          case pki.oids.encryptedData:
            safeContents = _decryptSafeContents(data, password);
            obj.encrypted = true;
            break;
          default:
            var error = new Error("Unsupported PKCS#12 contentType.");
            error.contentType = asn1.derToOid(capture.contentType);
            throw error;
        }
        obj.safeBags = _decodeSafeContents(safeContents, strict, password);
        pfx.safeContents.push(obj);
      }
    }
    __name(_decodeAuthenticatedSafe, "_decodeAuthenticatedSafe");
    function _decryptSafeContents(data, password) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(
        data,
        forge.pkcs7.asn1.encryptedDataValidator,
        capture,
        errors
      )) {
        var error = new Error("Cannot read EncryptedContentInfo.");
        error.errors = errors;
        throw error;
      }
      var oid = asn1.derToOid(capture.contentType);
      if (oid !== pki.oids.data) {
        var error = new Error(
          "PKCS#12 EncryptedContentInfo ContentType is not Data."
        );
        error.oid = oid;
        throw error;
      }
      oid = asn1.derToOid(capture.encAlgorithm);
      var cipher = pki.pbe.getCipher(oid, capture.encParameter, password);
      var encryptedContentAsn1 = _decodePkcs7Data(capture.encryptedContentAsn1);
      var encrypted = forge.util.createBuffer(encryptedContentAsn1.value);
      cipher.update(encrypted);
      if (!cipher.finish()) {
        throw new Error("Failed to decrypt PKCS#12 SafeContents.");
      }
      return cipher.output.getBytes();
    }
    __name(_decryptSafeContents, "_decryptSafeContents");
    function _decodeSafeContents(safeContents, strict, password) {
      if (!strict && safeContents.length === 0) {
        return [];
      }
      safeContents = asn1.fromDer(safeContents, strict);
      if (safeContents.tagClass !== asn1.Class.UNIVERSAL || safeContents.type !== asn1.Type.SEQUENCE || safeContents.constructed !== true) {
        throw new Error(
          "PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag."
        );
      }
      var res = [];
      for (var i = 0; i < safeContents.value.length; i++) {
        var safeBag = safeContents.value[i];
        var capture = {};
        var errors = [];
        if (!asn1.validate(safeBag, safeBagValidator, capture, errors)) {
          var error = new Error("Cannot read SafeBag.");
          error.errors = errors;
          throw error;
        }
        var bag = {
          type: asn1.derToOid(capture.bagId),
          attributes: _decodeBagAttributes(capture.bagAttributes)
        };
        res.push(bag);
        var validator, decoder;
        var bagAsn1 = capture.bagValue.value[0];
        switch (bag.type) {
          case pki.oids.pkcs8ShroudedKeyBag:
            bagAsn1 = pki.decryptPrivateKeyInfo(bagAsn1, password);
            if (bagAsn1 === null) {
              throw new Error(
                "Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?"
              );
            }
          /* fall through */
          case pki.oids.keyBag:
            try {
              bag.key = pki.privateKeyFromAsn1(bagAsn1);
            } catch (e) {
              bag.key = null;
              bag.asn1 = bagAsn1;
            }
            continue;
          /* Nothing more to do. */
          case pki.oids.certBag:
            validator = certBagValidator;
            decoder = /* @__PURE__ */ __name(function() {
              if (asn1.derToOid(capture.certId) !== pki.oids.x509Certificate) {
                var error2 = new Error(
                  "Unsupported certificate type, only X.509 supported."
                );
                error2.oid = asn1.derToOid(capture.certId);
                throw error2;
              }
              var certAsn1 = asn1.fromDer(capture.cert, strict);
              try {
                bag.cert = pki.certificateFromAsn1(certAsn1, true);
              } catch (e) {
                bag.cert = null;
                bag.asn1 = certAsn1;
              }
            }, "decoder");
            break;
          default:
            var error = new Error("Unsupported PKCS#12 SafeBag type.");
            error.oid = bag.type;
            throw error;
        }
        if (validator !== void 0 && !asn1.validate(bagAsn1, validator, capture, errors)) {
          var error = new Error("Cannot read PKCS#12 " + validator.name);
          error.errors = errors;
          throw error;
        }
        decoder();
      }
      return res;
    }
    __name(_decodeSafeContents, "_decodeSafeContents");
    function _decodeBagAttributes(attributes) {
      var decodedAttrs = {};
      if (attributes !== void 0) {
        for (var i = 0; i < attributes.length; ++i) {
          var capture = {};
          var errors = [];
          if (!asn1.validate(attributes[i], attributeValidator, capture, errors)) {
            var error = new Error("Cannot read PKCS#12 BagAttribute.");
            error.errors = errors;
            throw error;
          }
          var oid = asn1.derToOid(capture.oid);
          if (pki.oids[oid] === void 0) {
            continue;
          }
          decodedAttrs[pki.oids[oid]] = [];
          for (var j = 0; j < capture.values.length; ++j) {
            decodedAttrs[pki.oids[oid]].push(capture.values[j].value);
          }
        }
      }
      return decodedAttrs;
    }
    __name(_decodeBagAttributes, "_decodeBagAttributes");
    p12.toPkcs12Asn1 = function(key, cert, password, options) {
      options = options || {};
      options.saltSize = options.saltSize || 8;
      options.count = options.count || 2048;
      options.algorithm = options.algorithm || options.encAlgorithm || "aes128";
      if (!("useMac" in options)) {
        options.useMac = true;
      }
      if (!("localKeyId" in options)) {
        options.localKeyId = null;
      }
      if (!("generateLocalKeyId" in options)) {
        options.generateLocalKeyId = true;
      }
      var localKeyId = options.localKeyId;
      var bagAttrs;
      if (localKeyId !== null) {
        localKeyId = forge.util.hexToBytes(localKeyId);
      } else if (options.generateLocalKeyId) {
        if (cert) {
          var pairedCert = forge.util.isArray(cert) ? cert[0] : cert;
          if (typeof pairedCert === "string") {
            pairedCert = pki.certificateFromPem(pairedCert);
          }
          var sha1 = forge.md.sha1.create();
          sha1.update(asn1.toDer(pki.certificateToAsn1(pairedCert)).getBytes());
          localKeyId = sha1.digest().getBytes();
        } else {
          localKeyId = forge.random.getBytes(20);
        }
      }
      var attrs = [];
      if (localKeyId !== null) {
        attrs.push(
          // localKeyID
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // attrId
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(pki.oids.localKeyId).getBytes()
            ),
            // attrValues
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OCTETSTRING,
                false,
                localKeyId
              )
            ])
          ])
        );
      }
      if ("friendlyName" in options) {
        attrs.push(
          // friendlyName
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // attrId
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(pki.oids.friendlyName).getBytes()
            ),
            // attrValues
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.BMPSTRING,
                false,
                options.friendlyName
              )
            ])
          ])
        );
      }
      if (attrs.length > 0) {
        bagAttrs = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, attrs);
      }
      var contents = [];
      var chain = [];
      if (cert !== null) {
        if (forge.util.isArray(cert)) {
          chain = cert;
        } else {
          chain = [cert];
        }
      }
      var certSafeBags = [];
      for (var i = 0; i < chain.length; ++i) {
        cert = chain[i];
        if (typeof cert === "string") {
          cert = pki.certificateFromPem(cert);
        }
        var certBagAttrs = i === 0 ? bagAttrs : void 0;
        var certAsn1 = pki.certificateToAsn1(cert);
        var certSafeBag = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // bagId
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(pki.oids.certBag).getBytes()
          ),
          // bagValue
          asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
            // CertBag
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              // certId
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OID,
                false,
                asn1.oidToDer(pki.oids.x509Certificate).getBytes()
              ),
              // certValue (x509Certificate)
              asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OCTETSTRING,
                  false,
                  asn1.toDer(certAsn1).getBytes()
                )
              ])
            ])
          ]),
          // bagAttributes (OPTIONAL)
          certBagAttrs
        ]);
        certSafeBags.push(certSafeBag);
      }
      if (certSafeBags.length > 0) {
        var certSafeContents = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.SEQUENCE,
          true,
          certSafeBags
        );
        var certCI = (
          // PKCS#7 ContentInfo
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // contentType
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              // OID for the content type is 'data'
              asn1.oidToDer(pki.oids.data).getBytes()
            ),
            // content
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OCTETSTRING,
                false,
                asn1.toDer(certSafeContents).getBytes()
              )
            ])
          ])
        );
        contents.push(certCI);
      }
      var keyBag = null;
      if (key !== null) {
        var pkAsn1 = pki.wrapRsaPrivateKey(pki.privateKeyToAsn1(key));
        if (password === null) {
          keyBag = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // bagId
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(pki.oids.keyBag).getBytes()
            ),
            // bagValue
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              // PrivateKeyInfo
              pkAsn1
            ]),
            // bagAttributes (OPTIONAL)
            bagAttrs
          ]);
        } else {
          keyBag = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // bagId
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(pki.oids.pkcs8ShroudedKeyBag).getBytes()
            ),
            // bagValue
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              // EncryptedPrivateKeyInfo
              pki.encryptPrivateKeyInfo(pkAsn1, password, options)
            ]),
            // bagAttributes (OPTIONAL)
            bagAttrs
          ]);
        }
        var keySafeContents = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [keyBag]);
        var keyCI = (
          // PKCS#7 ContentInfo
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // contentType
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              // OID for the content type is 'data'
              asn1.oidToDer(pki.oids.data).getBytes()
            ),
            // content
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OCTETSTRING,
                false,
                asn1.toDer(keySafeContents).getBytes()
              )
            ])
          ])
        );
        contents.push(keyCI);
      }
      var safe = asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.SEQUENCE,
        true,
        contents
      );
      var macData;
      if (options.useMac) {
        var sha1 = forge.md.sha1.create();
        var macSalt = new forge.util.ByteBuffer(
          forge.random.getBytes(options.saltSize)
        );
        var count = options.count;
        var key = p12.generateKey(password, macSalt, 3, count, 20);
        var mac = forge.hmac.create();
        mac.start(sha1, key);
        mac.update(asn1.toDer(safe).getBytes());
        var macValue = mac.getMac();
        macData = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // mac DigestInfo
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // digestAlgorithm
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              // algorithm = SHA-1
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OID,
                false,
                asn1.oidToDer(pki.oids.sha1).getBytes()
              ),
              // parameters = Null
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
            ]),
            // digest
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OCTETSTRING,
              false,
              macValue.getBytes()
            )
          ]),
          // macSalt OCTET STRING
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OCTETSTRING,
            false,
            macSalt.getBytes()
          ),
          // iterations INTEGER (XXX: Only support count < 65536)
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            asn1.integerToDer(count).getBytes()
          )
        ]);
      }
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // version (3)
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          asn1.integerToDer(3).getBytes()
        ),
        // PKCS#7 ContentInfo
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // contentType
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            // OID for the content type is 'data'
            asn1.oidToDer(pki.oids.data).getBytes()
          ),
          // content
          asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OCTETSTRING,
              false,
              asn1.toDer(safe).getBytes()
            )
          ])
        ]),
        macData
      ]);
    };
    p12.generateKey = forge.pbe.generatePkcs12Key;
  }
});

// node_modules/node-forge/lib/pki.js
var require_pki = __commonJS({
  "node_modules/node-forge/lib/pki.js"(exports, module) {
    var forge = require_forge();
    require_asn1();
    require_oids();
    require_pbe();
    require_pem();
    require_pbkdf2();
    require_pkcs12();
    require_pss();
    require_rsa();
    require_util();
    require_x509();
    var asn1 = forge.asn1;
    var pki = module.exports = forge.pki = forge.pki || {};
    pki.pemToDer = function(pem) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert PEM to DER; PEM is encrypted.");
      }
      return forge.util.createBuffer(msg.body);
    };
    pki.privateKeyFromPem = function(pem) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "PRIVATE KEY" && msg.type !== "RSA PRIVATE KEY") {
        var error = new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
        error.headerType = msg.type;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert private key from PEM; PEM is encrypted.");
      }
      var obj = asn1.fromDer(msg.body);
      return pki.privateKeyFromAsn1(obj);
    };
    pki.privateKeyToPem = function(key, maxline) {
      var msg = {
        type: "RSA PRIVATE KEY",
        body: asn1.toDer(pki.privateKeyToAsn1(key)).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
    pki.privateKeyInfoToPem = function(pki2, maxline) {
      var msg = {
        type: "PRIVATE KEY",
        body: asn1.toDer(pki2).getBytes()
      };
      return forge.pem.encode(msg, { maxline });
    };
  }
});

// node_modules/node-forge/lib/tls.js
var require_tls = __commonJS({
  "node_modules/node-forge/lib/tls.js"(exports, module) {
    var forge = require_forge();
    require_asn1();
    require_hmac();
    require_md5();
    require_pem();
    require_pki();
    require_random();
    require_sha1();
    require_util();
    var prf_TLS1 = /* @__PURE__ */ __name(function(secret, label, seed, length) {
      var rval = forge.util.createBuffer();
      var idx = secret.length >> 1;
      var slen = idx + (secret.length & 1);
      var s1 = secret.substr(0, slen);
      var s2 = secret.substr(idx, slen);
      var ai = forge.util.createBuffer();
      var hmac = forge.hmac.create();
      seed = label + seed;
      var md5itr = Math.ceil(length / 16);
      var sha1itr = Math.ceil(length / 20);
      hmac.start("MD5", s1);
      var md5bytes = forge.util.createBuffer();
      ai.putBytes(seed);
      for (var i = 0; i < md5itr; ++i) {
        hmac.start(null, null);
        hmac.update(ai.getBytes());
        ai.putBuffer(hmac.digest());
        hmac.start(null, null);
        hmac.update(ai.bytes() + seed);
        md5bytes.putBuffer(hmac.digest());
      }
      hmac.start("SHA1", s2);
      var sha1bytes = forge.util.createBuffer();
      ai.clear();
      ai.putBytes(seed);
      for (var i = 0; i < sha1itr; ++i) {
        hmac.start(null, null);
        hmac.update(ai.getBytes());
        ai.putBuffer(hmac.digest());
        hmac.start(null, null);
        hmac.update(ai.bytes() + seed);
        sha1bytes.putBuffer(hmac.digest());
      }
      rval.putBytes(forge.util.xorBytes(
        md5bytes.getBytes(),
        sha1bytes.getBytes(),
        length
      ));
      return rval;
    }, "prf_TLS1");
    var hmac_sha1 = /* @__PURE__ */ __name(function(key2, seqNum, record) {
      var hmac = forge.hmac.create();
      hmac.start("SHA1", key2);
      var b = forge.util.createBuffer();
      b.putInt32(seqNum[0]);
      b.putInt32(seqNum[1]);
      b.putByte(record.type);
      b.putByte(record.version.major);
      b.putByte(record.version.minor);
      b.putInt16(record.length);
      b.putBytes(record.fragment.bytes());
      hmac.update(b.getBytes());
      return hmac.digest().getBytes();
    }, "hmac_sha1");
    var deflate = /* @__PURE__ */ __name(function(c, record, s) {
      var rval = false;
      try {
        var bytes = c.deflate(record.fragment.getBytes());
        record.fragment = forge.util.createBuffer(bytes);
        record.length = bytes.length;
        rval = true;
      } catch (ex) {
      }
      return rval;
    }, "deflate");
    var inflate = /* @__PURE__ */ __name(function(c, record, s) {
      var rval = false;
      try {
        var bytes = c.inflate(record.fragment.getBytes());
        record.fragment = forge.util.createBuffer(bytes);
        record.length = bytes.length;
        rval = true;
      } catch (ex) {
      }
      return rval;
    }, "inflate");
    var readVector = /* @__PURE__ */ __name(function(b, lenBytes) {
      var len = 0;
      switch (lenBytes) {
        case 1:
          len = b.getByte();
          break;
        case 2:
          len = b.getInt16();
          break;
        case 3:
          len = b.getInt24();
          break;
        case 4:
          len = b.getInt32();
          break;
      }
      return forge.util.createBuffer(b.getBytes(len));
    }, "readVector");
    var writeVector = /* @__PURE__ */ __name(function(b, lenBytes, v) {
      b.putInt(v.length(), lenBytes << 3);
      b.putBuffer(v);
    }, "writeVector");
    var tls = {};
    tls.Versions = {
      TLS_1_0: { major: 3, minor: 1 },
      TLS_1_1: { major: 3, minor: 2 },
      TLS_1_2: { major: 3, minor: 3 }
    };
    tls.SupportedVersions = [
      tls.Versions.TLS_1_1,
      tls.Versions.TLS_1_0
    ];
    tls.Version = tls.SupportedVersions[0];
    tls.MaxFragment = 16384 - 1024;
    tls.ConnectionEnd = {
      server: 0,
      client: 1
    };
    tls.PRFAlgorithm = {
      tls_prf_sha256: 0
    };
    tls.BulkCipherAlgorithm = {
      none: null,
      rc4: 0,
      des3: 1,
      aes: 2
    };
    tls.CipherType = {
      stream: 0,
      block: 1,
      aead: 2
    };
    tls.MACAlgorithm = {
      none: null,
      hmac_md5: 0,
      hmac_sha1: 1,
      hmac_sha256: 2,
      hmac_sha384: 3,
      hmac_sha512: 4
    };
    tls.CompressionMethod = {
      none: 0,
      deflate: 1
    };
    tls.ContentType = {
      change_cipher_spec: 20,
      alert: 21,
      handshake: 22,
      application_data: 23,
      heartbeat: 24
    };
    tls.HandshakeType = {
      hello_request: 0,
      client_hello: 1,
      server_hello: 2,
      certificate: 11,
      server_key_exchange: 12,
      certificate_request: 13,
      server_hello_done: 14,
      certificate_verify: 15,
      client_key_exchange: 16,
      finished: 20
    };
    tls.Alert = {};
    tls.Alert.Level = {
      warning: 1,
      fatal: 2
    };
    tls.Alert.Description = {
      close_notify: 0,
      unexpected_message: 10,
      bad_record_mac: 20,
      decryption_failed: 21,
      record_overflow: 22,
      decompression_failure: 30,
      handshake_failure: 40,
      bad_certificate: 42,
      unsupported_certificate: 43,
      certificate_revoked: 44,
      certificate_expired: 45,
      certificate_unknown: 46,
      illegal_parameter: 47,
      unknown_ca: 48,
      access_denied: 49,
      decode_error: 50,
      decrypt_error: 51,
      export_restriction: 60,
      protocol_version: 70,
      insufficient_security: 71,
      internal_error: 80,
      user_canceled: 90,
      no_renegotiation: 100
    };
    tls.HeartbeatMessageType = {
      heartbeat_request: 1,
      heartbeat_response: 2
    };
    tls.CipherSuites = {};
    tls.getCipherSuite = function(twoBytes) {
      var rval = null;
      for (var key2 in tls.CipherSuites) {
        var cs = tls.CipherSuites[key2];
        if (cs.id[0] === twoBytes.charCodeAt(0) && cs.id[1] === twoBytes.charCodeAt(1)) {
          rval = cs;
          break;
        }
      }
      return rval;
    };
    tls.handleUnexpected = function(c, record) {
      var ignore = !c.open && c.entity === tls.ConnectionEnd.client;
      if (!ignore) {
        c.error(c, {
          message: "Unexpected message. Received TLS record out of order.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.unexpected_message
          }
        });
      }
    };
    tls.handleHelloRequest = function(c, record, length) {
      if (!c.handshaking && c.handshakes > 0) {
        tls.queue(c, tls.createAlert(c, {
          level: tls.Alert.Level.warning,
          description: tls.Alert.Description.no_renegotiation
        }));
        tls.flush(c);
      }
      c.process();
    };
    tls.parseHelloMessage = function(c, record, length) {
      var msg = null;
      var client = c.entity === tls.ConnectionEnd.client;
      if (length < 38) {
        c.error(c, {
          message: client ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.illegal_parameter
          }
        });
      } else {
        var b = record.fragment;
        var remaining = b.length();
        msg = {
          version: {
            major: b.getByte(),
            minor: b.getByte()
          },
          random: forge.util.createBuffer(b.getBytes(32)),
          session_id: readVector(b, 1),
          extensions: []
        };
        if (client) {
          msg.cipher_suite = b.getBytes(2);
          msg.compression_method = b.getByte();
        } else {
          msg.cipher_suites = readVector(b, 2);
          msg.compression_methods = readVector(b, 1);
        }
        remaining = length - (remaining - b.length());
        if (remaining > 0) {
          var exts = readVector(b, 2);
          while (exts.length() > 0) {
            msg.extensions.push({
              type: [exts.getByte(), exts.getByte()],
              data: readVector(exts, 2)
            });
          }
          if (!client) {
            for (var i = 0; i < msg.extensions.length; ++i) {
              var ext = msg.extensions[i];
              if (ext.type[0] === 0 && ext.type[1] === 0) {
                var snl = readVector(ext.data, 2);
                while (snl.length() > 0) {
                  var snType = snl.getByte();
                  if (snType !== 0) {
                    break;
                  }
                  c.session.extensions.server_name.serverNameList.push(
                    readVector(snl, 2).getBytes()
                  );
                }
              }
            }
          }
        }
        if (c.session.version) {
          if (msg.version.major !== c.session.version.major || msg.version.minor !== c.session.version.minor) {
            return c.error(c, {
              message: "TLS version change is disallowed during renegotiation.",
              send: true,
              alert: {
                level: tls.Alert.Level.fatal,
                description: tls.Alert.Description.protocol_version
              }
            });
          }
        }
        if (client) {
          c.session.cipherSuite = tls.getCipherSuite(msg.cipher_suite);
        } else {
          var tmp = forge.util.createBuffer(msg.cipher_suites.bytes());
          while (tmp.length() > 0) {
            c.session.cipherSuite = tls.getCipherSuite(tmp.getBytes(2));
            if (c.session.cipherSuite !== null) {
              break;
            }
          }
        }
        if (c.session.cipherSuite === null) {
          return c.error(c, {
            message: "No cipher suites in common.",
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.handshake_failure
            },
            cipherSuite: forge.util.bytesToHex(msg.cipher_suite)
          });
        }
        if (client) {
          c.session.compressionMethod = msg.compression_method;
        } else {
          c.session.compressionMethod = tls.CompressionMethod.none;
        }
      }
      return msg;
    };
    tls.createSecurityParameters = function(c, msg) {
      var client = c.entity === tls.ConnectionEnd.client;
      var msgRandom = msg.random.bytes();
      var cRandom = client ? c.session.sp.client_random : msgRandom;
      var sRandom = client ? msgRandom : tls.createRandom().getBytes();
      c.session.sp = {
        entity: c.entity,
        prf_algorithm: tls.PRFAlgorithm.tls_prf_sha256,
        bulk_cipher_algorithm: null,
        cipher_type: null,
        enc_key_length: null,
        block_length: null,
        fixed_iv_length: null,
        record_iv_length: null,
        mac_algorithm: null,
        mac_length: null,
        mac_key_length: null,
        compression_algorithm: c.session.compressionMethod,
        pre_master_secret: null,
        master_secret: null,
        client_random: cRandom,
        server_random: sRandom
      };
    };
    tls.handleServerHello = function(c, record, length) {
      var msg = tls.parseHelloMessage(c, record, length);
      if (c.fail) {
        return;
      }
      if (msg.version.minor <= c.version.minor) {
        c.version.minor = msg.version.minor;
      } else {
        return c.error(c, {
          message: "Incompatible TLS version.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.protocol_version
          }
        });
      }
      c.session.version = c.version;
      var sessionId = msg.session_id.bytes();
      if (sessionId.length > 0 && sessionId === c.session.id) {
        c.expect = SCC;
        c.session.resuming = true;
        c.session.sp.server_random = msg.random.bytes();
      } else {
        c.expect = SCE;
        c.session.resuming = false;
        tls.createSecurityParameters(c, msg);
      }
      c.session.id = sessionId;
      c.process();
    };
    tls.handleClientHello = function(c, record, length) {
      var msg = tls.parseHelloMessage(c, record, length);
      if (c.fail) {
        return;
      }
      var sessionId = msg.session_id.bytes();
      var session = null;
      if (c.sessionCache) {
        session = c.sessionCache.getSession(sessionId);
        if (session === null) {
          sessionId = "";
        } else if (session.version.major !== msg.version.major || session.version.minor > msg.version.minor) {
          session = null;
          sessionId = "";
        }
      }
      if (sessionId.length === 0) {
        sessionId = forge.random.getBytes(32);
      }
      c.session.id = sessionId;
      c.session.clientHelloVersion = msg.version;
      c.session.sp = {};
      if (session) {
        c.version = c.session.version = session.version;
        c.session.sp = session.sp;
      } else {
        var version;
        for (var i = 1; i < tls.SupportedVersions.length; ++i) {
          version = tls.SupportedVersions[i];
          if (version.minor <= msg.version.minor) {
            break;
          }
        }
        c.version = { major: version.major, minor: version.minor };
        c.session.version = c.version;
      }
      if (session !== null) {
        c.expect = CCC;
        c.session.resuming = true;
        c.session.sp.client_random = msg.random.bytes();
      } else {
        c.expect = c.verifyClient !== false ? CCE : CKE;
        c.session.resuming = false;
        tls.createSecurityParameters(c, msg);
      }
      c.open = true;
      tls.queue(c, tls.createRecord(c, {
        type: tls.ContentType.handshake,
        data: tls.createServerHello(c)
      }));
      if (c.session.resuming) {
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.change_cipher_spec,
          data: tls.createChangeCipherSpec()
        }));
        c.state.pending = tls.createConnectionState(c);
        c.state.current.write = c.state.pending.write;
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.handshake,
          data: tls.createFinished(c)
        }));
      } else {
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.handshake,
          data: tls.createCertificate(c)
        }));
        if (!c.fail) {
          tls.queue(c, tls.createRecord(c, {
            type: tls.ContentType.handshake,
            data: tls.createServerKeyExchange(c)
          }));
          if (c.verifyClient !== false) {
            tls.queue(c, tls.createRecord(c, {
              type: tls.ContentType.handshake,
              data: tls.createCertificateRequest(c)
            }));
          }
          tls.queue(c, tls.createRecord(c, {
            type: tls.ContentType.handshake,
            data: tls.createServerHelloDone(c)
          }));
        }
      }
      tls.flush(c);
      c.process();
    };
    tls.handleCertificate = function(c, record, length) {
      if (length < 3) {
        return c.error(c, {
          message: "Invalid Certificate message. Message too short.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.illegal_parameter
          }
        });
      }
      var b = record.fragment;
      var msg = {
        certificate_list: readVector(b, 3)
      };
      var cert, asn1;
      var certs = [];
      try {
        while (msg.certificate_list.length() > 0) {
          cert = readVector(msg.certificate_list, 3);
          asn1 = forge.asn1.fromDer(cert);
          cert = forge.pki.certificateFromAsn1(asn1, true);
          certs.push(cert);
        }
      } catch (ex) {
        return c.error(c, {
          message: "Could not parse certificate list.",
          cause: ex,
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.bad_certificate
          }
        });
      }
      var client = c.entity === tls.ConnectionEnd.client;
      if ((client || c.verifyClient === true) && certs.length === 0) {
        c.error(c, {
          message: client ? "No server certificate provided." : "No client certificate provided.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.illegal_parameter
          }
        });
      } else if (certs.length === 0) {
        c.expect = client ? SKE : CKE;
      } else {
        if (client) {
          c.session.serverCertificate = certs[0];
        } else {
          c.session.clientCertificate = certs[0];
        }
        if (tls.verifyCertificateChain(c, certs)) {
          c.expect = client ? SKE : CKE;
        }
      }
      c.process();
    };
    tls.handleServerKeyExchange = function(c, record, length) {
      if (length > 0) {
        return c.error(c, {
          message: "Invalid key parameters. Only RSA is supported.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.unsupported_certificate
          }
        });
      }
      c.expect = SCR;
      c.process();
    };
    tls.handleClientKeyExchange = function(c, record, length) {
      if (length < 48) {
        return c.error(c, {
          message: "Invalid key parameters. Only RSA is supported.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.unsupported_certificate
          }
        });
      }
      var b = record.fragment;
      var msg = {
        enc_pre_master_secret: readVector(b, 2).getBytes()
      };
      var privateKey = null;
      if (c.getPrivateKey) {
        try {
          privateKey = c.getPrivateKey(c, c.session.serverCertificate);
          privateKey = forge.pki.privateKeyFromPem(privateKey);
        } catch (ex) {
          c.error(c, {
            message: "Could not get private key.",
            cause: ex,
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.internal_error
            }
          });
        }
      }
      if (privateKey === null) {
        return c.error(c, {
          message: "No private key set.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.internal_error
          }
        });
      }
      try {
        var sp = c.session.sp;
        sp.pre_master_secret = privateKey.decrypt(msg.enc_pre_master_secret);
        var version = c.session.clientHelloVersion;
        if (version.major !== sp.pre_master_secret.charCodeAt(0) || version.minor !== sp.pre_master_secret.charCodeAt(1)) {
          throw new Error("TLS version rollback attack detected.");
        }
      } catch (ex) {
        sp.pre_master_secret = forge.random.getBytes(48);
      }
      c.expect = CCC;
      if (c.session.clientCertificate !== null) {
        c.expect = CCV;
      }
      c.process();
    };
    tls.handleCertificateRequest = function(c, record, length) {
      if (length < 3) {
        return c.error(c, {
          message: "Invalid CertificateRequest. Message too short.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.illegal_parameter
          }
        });
      }
      var b = record.fragment;
      var msg = {
        certificate_types: readVector(b, 1),
        certificate_authorities: readVector(b, 2)
      };
      c.session.certificateRequest = msg;
      c.expect = SHD;
      c.process();
    };
    tls.handleCertificateVerify = function(c, record, length) {
      if (length < 2) {
        return c.error(c, {
          message: "Invalid CertificateVerify. Message too short.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.illegal_parameter
          }
        });
      }
      var b = record.fragment;
      b.read -= 4;
      var msgBytes = b.bytes();
      b.read += 4;
      var msg = {
        signature: readVector(b, 2).getBytes()
      };
      var verify = forge.util.createBuffer();
      verify.putBuffer(c.session.md5.digest());
      verify.putBuffer(c.session.sha1.digest());
      verify = verify.getBytes();
      try {
        var cert = c.session.clientCertificate;
        if (!cert.publicKey.verify(verify, msg.signature, "NONE")) {
          throw new Error("CertificateVerify signature does not match.");
        }
        c.session.md5.update(msgBytes);
        c.session.sha1.update(msgBytes);
      } catch (ex) {
        return c.error(c, {
          message: "Bad signature in CertificateVerify.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.handshake_failure
          }
        });
      }
      c.expect = CCC;
      c.process();
    };
    tls.handleServerHelloDone = function(c, record, length) {
      if (length > 0) {
        return c.error(c, {
          message: "Invalid ServerHelloDone message. Invalid length.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.record_overflow
          }
        });
      }
      if (c.serverCertificate === null) {
        var error = {
          message: "No server certificate provided. Not enough security.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.insufficient_security
          }
        };
        var depth = 0;
        var ret = c.verify(c, error.alert.description, depth, []);
        if (ret !== true) {
          if (ret || ret === 0) {
            if (typeof ret === "object" && !forge.util.isArray(ret)) {
              if (ret.message) {
                error.message = ret.message;
              }
              if (ret.alert) {
                error.alert.description = ret.alert;
              }
            } else if (typeof ret === "number") {
              error.alert.description = ret;
            }
          }
          return c.error(c, error);
        }
      }
      if (c.session.certificateRequest !== null) {
        record = tls.createRecord(c, {
          type: tls.ContentType.handshake,
          data: tls.createCertificate(c)
        });
        tls.queue(c, record);
      }
      record = tls.createRecord(c, {
        type: tls.ContentType.handshake,
        data: tls.createClientKeyExchange(c)
      });
      tls.queue(c, record);
      c.expect = SER;
      var callback = /* @__PURE__ */ __name(function(c2, signature) {
        if (c2.session.certificateRequest !== null && c2.session.clientCertificate !== null) {
          tls.queue(c2, tls.createRecord(c2, {
            type: tls.ContentType.handshake,
            data: tls.createCertificateVerify(c2, signature)
          }));
        }
        tls.queue(c2, tls.createRecord(c2, {
          type: tls.ContentType.change_cipher_spec,
          data: tls.createChangeCipherSpec()
        }));
        c2.state.pending = tls.createConnectionState(c2);
        c2.state.current.write = c2.state.pending.write;
        tls.queue(c2, tls.createRecord(c2, {
          type: tls.ContentType.handshake,
          data: tls.createFinished(c2)
        }));
        c2.expect = SCC;
        tls.flush(c2);
        c2.process();
      }, "callback");
      if (c.session.certificateRequest === null || c.session.clientCertificate === null) {
        return callback(c, null);
      }
      tls.getClientSignature(c, callback);
    };
    tls.handleChangeCipherSpec = function(c, record) {
      if (record.fragment.getByte() !== 1) {
        return c.error(c, {
          message: "Invalid ChangeCipherSpec message received.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.illegal_parameter
          }
        });
      }
      var client = c.entity === tls.ConnectionEnd.client;
      if (c.session.resuming && client || !c.session.resuming && !client) {
        c.state.pending = tls.createConnectionState(c);
      }
      c.state.current.read = c.state.pending.read;
      if (!c.session.resuming && client || c.session.resuming && !client) {
        c.state.pending = null;
      }
      c.expect = client ? SFI : CFI;
      c.process();
    };
    tls.handleFinished = function(c, record, length) {
      var b = record.fragment;
      b.read -= 4;
      var msgBytes = b.bytes();
      b.read += 4;
      var vd = record.fragment.getBytes();
      b = forge.util.createBuffer();
      b.putBuffer(c.session.md5.digest());
      b.putBuffer(c.session.sha1.digest());
      var client = c.entity === tls.ConnectionEnd.client;
      var label = client ? "server finished" : "client finished";
      var sp = c.session.sp;
      var vdl = 12;
      var prf = prf_TLS1;
      b = prf(sp.master_secret, label, b.getBytes(), vdl);
      if (b.getBytes() !== vd) {
        return c.error(c, {
          message: "Invalid verify_data in Finished message.",
          send: true,
          alert: {
            level: tls.Alert.Level.fatal,
            description: tls.Alert.Description.decrypt_error
          }
        });
      }
      c.session.md5.update(msgBytes);
      c.session.sha1.update(msgBytes);
      if (c.session.resuming && client || !c.session.resuming && !client) {
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.change_cipher_spec,
          data: tls.createChangeCipherSpec()
        }));
        c.state.current.write = c.state.pending.write;
        c.state.pending = null;
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.handshake,
          data: tls.createFinished(c)
        }));
      }
      c.expect = client ? SAD : CAD;
      c.handshaking = false;
      ++c.handshakes;
      c.peerCertificate = client ? c.session.serverCertificate : c.session.clientCertificate;
      tls.flush(c);
      c.isConnected = true;
      c.connected(c);
      c.process();
    };
    tls.handleAlert = function(c, record) {
      var b = record.fragment;
      var alert = {
        level: b.getByte(),
        description: b.getByte()
      };
      var msg;
      switch (alert.description) {
        case tls.Alert.Description.close_notify:
          msg = "Connection closed.";
          break;
        case tls.Alert.Description.unexpected_message:
          msg = "Unexpected message.";
          break;
        case tls.Alert.Description.bad_record_mac:
          msg = "Bad record MAC.";
          break;
        case tls.Alert.Description.decryption_failed:
          msg = "Decryption failed.";
          break;
        case tls.Alert.Description.record_overflow:
          msg = "Record overflow.";
          break;
        case tls.Alert.Description.decompression_failure:
          msg = "Decompression failed.";
          break;
        case tls.Alert.Description.handshake_failure:
          msg = "Handshake failure.";
          break;
        case tls.Alert.Description.bad_certificate:
          msg = "Bad certificate.";
          break;
        case tls.Alert.Description.unsupported_certificate:
          msg = "Unsupported certificate.";
          break;
        case tls.Alert.Description.certificate_revoked:
          msg = "Certificate revoked.";
          break;
        case tls.Alert.Description.certificate_expired:
          msg = "Certificate expired.";
          break;
        case tls.Alert.Description.certificate_unknown:
          msg = "Certificate unknown.";
          break;
        case tls.Alert.Description.illegal_parameter:
          msg = "Illegal parameter.";
          break;
        case tls.Alert.Description.unknown_ca:
          msg = "Unknown certificate authority.";
          break;
        case tls.Alert.Description.access_denied:
          msg = "Access denied.";
          break;
        case tls.Alert.Description.decode_error:
          msg = "Decode error.";
          break;
        case tls.Alert.Description.decrypt_error:
          msg = "Decrypt error.";
          break;
        case tls.Alert.Description.export_restriction:
          msg = "Export restriction.";
          break;
        case tls.Alert.Description.protocol_version:
          msg = "Unsupported protocol version.";
          break;
        case tls.Alert.Description.insufficient_security:
          msg = "Insufficient security.";
          break;
        case tls.Alert.Description.internal_error:
          msg = "Internal error.";
          break;
        case tls.Alert.Description.user_canceled:
          msg = "User canceled.";
          break;
        case tls.Alert.Description.no_renegotiation:
          msg = "Renegotiation not supported.";
          break;
        default:
          msg = "Unknown error.";
          break;
      }
      if (alert.description === tls.Alert.Description.close_notify) {
        return c.close();
      }
      c.error(c, {
        message: msg,
        send: false,
        // origin is the opposite end
        origin: c.entity === tls.ConnectionEnd.client ? "server" : "client",
        alert
      });
      c.process();
    };
    tls.handleHandshake = function(c, record) {
      var b = record.fragment;
      var type = b.getByte();
      var length = b.getInt24();
      if (length > b.length()) {
        c.fragmented = record;
        record.fragment = forge.util.createBuffer();
        b.read -= 4;
        return c.process();
      }
      c.fragmented = null;
      b.read -= 4;
      var bytes = b.bytes(length + 4);
      b.read += 4;
      if (type in hsTable[c.entity][c.expect]) {
        if (c.entity === tls.ConnectionEnd.server && !c.open && !c.fail) {
          c.handshaking = true;
          c.session = {
            version: null,
            extensions: {
              server_name: {
                serverNameList: []
              }
            },
            cipherSuite: null,
            compressionMethod: null,
            serverCertificate: null,
            clientCertificate: null,
            md5: forge.md.md5.create(),
            sha1: forge.md.sha1.create()
          };
        }
        if (type !== tls.HandshakeType.hello_request && type !== tls.HandshakeType.certificate_verify && type !== tls.HandshakeType.finished) {
          c.session.md5.update(bytes);
          c.session.sha1.update(bytes);
        }
        hsTable[c.entity][c.expect][type](c, record, length);
      } else {
        tls.handleUnexpected(c, record);
      }
    };
    tls.handleApplicationData = function(c, record) {
      c.data.putBuffer(record.fragment);
      c.dataReady(c);
      c.process();
    };
    tls.handleHeartbeat = function(c, record) {
      var b = record.fragment;
      var type = b.getByte();
      var length = b.getInt16();
      var payload = b.getBytes(length);
      if (type === tls.HeartbeatMessageType.heartbeat_request) {
        if (c.handshaking || length > payload.length) {
          return c.process();
        }
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.heartbeat,
          data: tls.createHeartbeat(
            tls.HeartbeatMessageType.heartbeat_response,
            payload
          )
        }));
        tls.flush(c);
      } else if (type === tls.HeartbeatMessageType.heartbeat_response) {
        if (payload !== c.expectedHeartbeatPayload) {
          return c.process();
        }
        if (c.heartbeatReceived) {
          c.heartbeatReceived(c, forge.util.createBuffer(payload));
        }
      }
      c.process();
    };
    var SHE = 0;
    var SCE = 1;
    var SKE = 2;
    var SCR = 3;
    var SHD = 4;
    var SCC = 5;
    var SFI = 6;
    var SAD = 7;
    var SER = 8;
    var CHE = 0;
    var CCE = 1;
    var CKE = 2;
    var CCV = 3;
    var CCC = 4;
    var CFI = 5;
    var CAD = 6;
    var __ = tls.handleUnexpected;
    var R0 = tls.handleChangeCipherSpec;
    var R1 = tls.handleAlert;
    var R2 = tls.handleHandshake;
    var R3 = tls.handleApplicationData;
    var R4 = tls.handleHeartbeat;
    var ctTable = [];
    ctTable[tls.ConnectionEnd.client] = [
      //      CC,AL,HS,AD,HB
      /*SHE*/
      [__, R1, R2, __, R4],
      /*SCE*/
      [__, R1, R2, __, R4],
      /*SKE*/
      [__, R1, R2, __, R4],
      /*SCR*/
      [__, R1, R2, __, R4],
      /*SHD*/
      [__, R1, R2, __, R4],
      /*SCC*/
      [R0, R1, __, __, R4],
      /*SFI*/
      [__, R1, R2, __, R4],
      /*SAD*/
      [__, R1, R2, R3, R4],
      /*SER*/
      [__, R1, R2, __, R4]
    ];
    ctTable[tls.ConnectionEnd.server] = [
      //      CC,AL,HS,AD
      /*CHE*/
      [__, R1, R2, __, R4],
      /*CCE*/
      [__, R1, R2, __, R4],
      /*CKE*/
      [__, R1, R2, __, R4],
      /*CCV*/
      [__, R1, R2, __, R4],
      /*CCC*/
      [R0, R1, __, __, R4],
      /*CFI*/
      [__, R1, R2, __, R4],
      /*CAD*/
      [__, R1, R2, R3, R4],
      /*CER*/
      [__, R1, R2, __, R4]
    ];
    var H0 = tls.handleHelloRequest;
    var H1 = tls.handleServerHello;
    var H2 = tls.handleCertificate;
    var H3 = tls.handleServerKeyExchange;
    var H4 = tls.handleCertificateRequest;
    var H5 = tls.handleServerHelloDone;
    var H6 = tls.handleFinished;
    var hsTable = [];
    hsTable[tls.ConnectionEnd.client] = [
      //      HR,01,SH,03,04,05,06,07,08,09,10,SC,SK,CR,HD,15,CK,17,18,19,FI
      /*SHE*/
      [__, __, H1, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
      /*SCE*/
      [H0, __, __, __, __, __, __, __, __, __, __, H2, H3, H4, H5, __, __, __, __, __, __],
      /*SKE*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, H3, H4, H5, __, __, __, __, __, __],
      /*SCR*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, __, H4, H5, __, __, __, __, __, __],
      /*SHD*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, H5, __, __, __, __, __, __],
      /*SCC*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
      /*SFI*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H6],
      /*SAD*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
      /*SER*/
      [H0, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __]
    ];
    var H7 = tls.handleClientHello;
    var H8 = tls.handleClientKeyExchange;
    var H9 = tls.handleCertificateVerify;
    hsTable[tls.ConnectionEnd.server] = [
      //      01,CH,02,03,04,05,06,07,08,09,10,CC,12,13,14,CV,CK,17,18,19,FI
      /*CHE*/
      [__, H7, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
      /*CCE*/
      [__, __, __, __, __, __, __, __, __, __, __, H2, __, __, __, __, __, __, __, __, __],
      /*CKE*/
      [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H8, __, __, __, __],
      /*CCV*/
      [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H9, __, __, __, __, __],
      /*CCC*/
      [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
      /*CFI*/
      [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, H6],
      /*CAD*/
      [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __],
      /*CER*/
      [__, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __, __]
    ];
    tls.generateKeys = function(c, sp) {
      var prf = prf_TLS1;
      var random = sp.client_random + sp.server_random;
      if (!c.session.resuming) {
        sp.master_secret = prf(
          sp.pre_master_secret,
          "master secret",
          random,
          48
        ).bytes();
        sp.pre_master_secret = null;
      }
      random = sp.server_random + sp.client_random;
      var length = 2 * sp.mac_key_length + 2 * sp.enc_key_length;
      var tls10 = c.version.major === tls.Versions.TLS_1_0.major && c.version.minor === tls.Versions.TLS_1_0.minor;
      if (tls10) {
        length += 2 * sp.fixed_iv_length;
      }
      var km = prf(sp.master_secret, "key expansion", random, length);
      var rval = {
        client_write_MAC_key: km.getBytes(sp.mac_key_length),
        server_write_MAC_key: km.getBytes(sp.mac_key_length),
        client_write_key: km.getBytes(sp.enc_key_length),
        server_write_key: km.getBytes(sp.enc_key_length)
      };
      if (tls10) {
        rval.client_write_IV = km.getBytes(sp.fixed_iv_length);
        rval.server_write_IV = km.getBytes(sp.fixed_iv_length);
      }
      return rval;
    };
    tls.createConnectionState = function(c) {
      var client = c.entity === tls.ConnectionEnd.client;
      var createMode = /* @__PURE__ */ __name(function() {
        var mode = {
          // two 32-bit numbers, first is most significant
          sequenceNumber: [0, 0],
          macKey: null,
          macLength: 0,
          macFunction: null,
          cipherState: null,
          cipherFunction: /* @__PURE__ */ __name(function(record) {
            return true;
          }, "cipherFunction"),
          compressionState: null,
          compressFunction: /* @__PURE__ */ __name(function(record) {
            return true;
          }, "compressFunction"),
          updateSequenceNumber: /* @__PURE__ */ __name(function() {
            if (mode.sequenceNumber[1] === 4294967295) {
              mode.sequenceNumber[1] = 0;
              ++mode.sequenceNumber[0];
            } else {
              ++mode.sequenceNumber[1];
            }
          }, "updateSequenceNumber")
        };
        return mode;
      }, "createMode");
      var state = {
        read: createMode(),
        write: createMode()
      };
      state.read.update = function(c2, record) {
        if (!state.read.cipherFunction(record, state.read)) {
          c2.error(c2, {
            message: "Could not decrypt record or bad MAC.",
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              // doesn't matter if decryption failed or MAC was
              // invalid, return the same error so as not to reveal
              // which one occurred
              description: tls.Alert.Description.bad_record_mac
            }
          });
        } else if (!state.read.compressFunction(c2, record, state.read)) {
          c2.error(c2, {
            message: "Could not decompress record.",
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.decompression_failure
            }
          });
        }
        return !c2.fail;
      };
      state.write.update = function(c2, record) {
        if (!state.write.compressFunction(c2, record, state.write)) {
          c2.error(c2, {
            message: "Could not compress record.",
            send: false,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.internal_error
            }
          });
        } else if (!state.write.cipherFunction(record, state.write)) {
          c2.error(c2, {
            message: "Could not encrypt record.",
            send: false,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.internal_error
            }
          });
        }
        return !c2.fail;
      };
      if (c.session) {
        var sp = c.session.sp;
        c.session.cipherSuite.initSecurityParameters(sp);
        sp.keys = tls.generateKeys(c, sp);
        state.read.macKey = client ? sp.keys.server_write_MAC_key : sp.keys.client_write_MAC_key;
        state.write.macKey = client ? sp.keys.client_write_MAC_key : sp.keys.server_write_MAC_key;
        c.session.cipherSuite.initConnectionState(state, c, sp);
        switch (sp.compression_algorithm) {
          case tls.CompressionMethod.none:
            break;
          case tls.CompressionMethod.deflate:
            state.read.compressFunction = inflate;
            state.write.compressFunction = deflate;
            break;
          default:
            throw new Error("Unsupported compression algorithm.");
        }
      }
      return state;
    };
    tls.createRandom = function() {
      var d = /* @__PURE__ */ new Date();
      var utc = +d + d.getTimezoneOffset() * 6e4;
      var rval = forge.util.createBuffer();
      rval.putInt32(utc);
      rval.putBytes(forge.random.getBytes(28));
      return rval;
    };
    tls.createRecord = function(c, options) {
      if (!options.data) {
        return null;
      }
      var record = {
        type: options.type,
        version: {
          major: c.version.major,
          minor: c.version.minor
        },
        length: options.data.length(),
        fragment: options.data
      };
      return record;
    };
    tls.createAlert = function(c, alert) {
      var b = forge.util.createBuffer();
      b.putByte(alert.level);
      b.putByte(alert.description);
      return tls.createRecord(c, {
        type: tls.ContentType.alert,
        data: b
      });
    };
    tls.createClientHello = function(c) {
      c.session.clientHelloVersion = {
        major: c.version.major,
        minor: c.version.minor
      };
      var cipherSuites = forge.util.createBuffer();
      for (var i = 0; i < c.cipherSuites.length; ++i) {
        var cs = c.cipherSuites[i];
        cipherSuites.putByte(cs.id[0]);
        cipherSuites.putByte(cs.id[1]);
      }
      var cSuites = cipherSuites.length();
      var compressionMethods = forge.util.createBuffer();
      compressionMethods.putByte(tls.CompressionMethod.none);
      var cMethods = compressionMethods.length();
      var extensions = forge.util.createBuffer();
      if (c.virtualHost) {
        var ext = forge.util.createBuffer();
        ext.putByte(0);
        ext.putByte(0);
        var serverName = forge.util.createBuffer();
        serverName.putByte(0);
        writeVector(serverName, 2, forge.util.createBuffer(c.virtualHost));
        var snList = forge.util.createBuffer();
        writeVector(snList, 2, serverName);
        writeVector(ext, 2, snList);
        extensions.putBuffer(ext);
      }
      var extLength = extensions.length();
      if (extLength > 0) {
        extLength += 2;
      }
      var sessionId = c.session.id;
      var length = sessionId.length + 1 + // session ID vector
      2 + // version (major + minor)
      4 + 28 + // random time and random bytes
      2 + cSuites + // cipher suites vector
      1 + cMethods + // compression methods vector
      extLength;
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.client_hello);
      rval.putInt24(length);
      rval.putByte(c.version.major);
      rval.putByte(c.version.minor);
      rval.putBytes(c.session.sp.client_random);
      writeVector(rval, 1, forge.util.createBuffer(sessionId));
      writeVector(rval, 2, cipherSuites);
      writeVector(rval, 1, compressionMethods);
      if (extLength > 0) {
        writeVector(rval, 2, extensions);
      }
      return rval;
    };
    tls.createServerHello = function(c) {
      var sessionId = c.session.id;
      var length = sessionId.length + 1 + // session ID vector
      2 + // version (major + minor)
      4 + 28 + // random time and random bytes
      2 + // chosen cipher suite
      1;
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.server_hello);
      rval.putInt24(length);
      rval.putByte(c.version.major);
      rval.putByte(c.version.minor);
      rval.putBytes(c.session.sp.server_random);
      writeVector(rval, 1, forge.util.createBuffer(sessionId));
      rval.putByte(c.session.cipherSuite.id[0]);
      rval.putByte(c.session.cipherSuite.id[1]);
      rval.putByte(c.session.compressionMethod);
      return rval;
    };
    tls.createCertificate = function(c) {
      var client = c.entity === tls.ConnectionEnd.client;
      var cert = null;
      if (c.getCertificate) {
        var hint;
        if (client) {
          hint = c.session.certificateRequest;
        } else {
          hint = c.session.extensions.server_name.serverNameList;
        }
        cert = c.getCertificate(c, hint);
      }
      var certList = forge.util.createBuffer();
      if (cert !== null) {
        try {
          if (!forge.util.isArray(cert)) {
            cert = [cert];
          }
          var asn1 = null;
          for (var i = 0; i < cert.length; ++i) {
            var msg = forge.pem.decode(cert[i])[0];
            if (msg.type !== "CERTIFICATE" && msg.type !== "X509 CERTIFICATE" && msg.type !== "TRUSTED CERTIFICATE") {
              var error = new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
              error.headerType = msg.type;
              throw error;
            }
            if (msg.procType && msg.procType.type === "ENCRYPTED") {
              throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
            }
            var der = forge.util.createBuffer(msg.body);
            if (asn1 === null) {
              asn1 = forge.asn1.fromDer(der.bytes(), false);
            }
            var certBuffer = forge.util.createBuffer();
            writeVector(certBuffer, 3, der);
            certList.putBuffer(certBuffer);
          }
          cert = forge.pki.certificateFromAsn1(asn1);
          if (client) {
            c.session.clientCertificate = cert;
          } else {
            c.session.serverCertificate = cert;
          }
        } catch (ex) {
          return c.error(c, {
            message: "Could not send certificate list.",
            cause: ex,
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.bad_certificate
            }
          });
        }
      }
      var length = 3 + certList.length();
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.certificate);
      rval.putInt24(length);
      writeVector(rval, 3, certList);
      return rval;
    };
    tls.createClientKeyExchange = function(c) {
      var b = forge.util.createBuffer();
      b.putByte(c.session.clientHelloVersion.major);
      b.putByte(c.session.clientHelloVersion.minor);
      b.putBytes(forge.random.getBytes(46));
      var sp = c.session.sp;
      sp.pre_master_secret = b.getBytes();
      var key2 = c.session.serverCertificate.publicKey;
      b = key2.encrypt(sp.pre_master_secret);
      var length = b.length + 2;
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.client_key_exchange);
      rval.putInt24(length);
      rval.putInt16(b.length);
      rval.putBytes(b);
      return rval;
    };
    tls.createServerKeyExchange = function(c) {
      var length = 0;
      var rval = forge.util.createBuffer();
      if (length > 0) {
        rval.putByte(tls.HandshakeType.server_key_exchange);
        rval.putInt24(length);
      }
      return rval;
    };
    tls.getClientSignature = function(c, callback) {
      var b = forge.util.createBuffer();
      b.putBuffer(c.session.md5.digest());
      b.putBuffer(c.session.sha1.digest());
      b = b.getBytes();
      c.getSignature = c.getSignature || function(c2, b2, callback2) {
        var privateKey = null;
        if (c2.getPrivateKey) {
          try {
            privateKey = c2.getPrivateKey(c2, c2.session.clientCertificate);
            privateKey = forge.pki.privateKeyFromPem(privateKey);
          } catch (ex) {
            c2.error(c2, {
              message: "Could not get private key.",
              cause: ex,
              send: true,
              alert: {
                level: tls.Alert.Level.fatal,
                description: tls.Alert.Description.internal_error
              }
            });
          }
        }
        if (privateKey === null) {
          c2.error(c2, {
            message: "No private key set.",
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              description: tls.Alert.Description.internal_error
            }
          });
        } else {
          b2 = privateKey.sign(b2, null);
        }
        callback2(c2, b2);
      };
      c.getSignature(c, b, callback);
    };
    tls.createCertificateVerify = function(c, signature) {
      var length = signature.length + 2;
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.certificate_verify);
      rval.putInt24(length);
      rval.putInt16(signature.length);
      rval.putBytes(signature);
      return rval;
    };
    tls.createCertificateRequest = function(c) {
      var certTypes = forge.util.createBuffer();
      certTypes.putByte(1);
      var cAs = forge.util.createBuffer();
      for (var key2 in c.caStore.certs) {
        var cert = c.caStore.certs[key2];
        var dn = forge.pki.distinguishedNameToAsn1(cert.subject);
        var byteBuffer = forge.asn1.toDer(dn);
        cAs.putInt16(byteBuffer.length());
        cAs.putBuffer(byteBuffer);
      }
      var length = 1 + certTypes.length() + 2 + cAs.length();
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.certificate_request);
      rval.putInt24(length);
      writeVector(rval, 1, certTypes);
      writeVector(rval, 2, cAs);
      return rval;
    };
    tls.createServerHelloDone = function(c) {
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.server_hello_done);
      rval.putInt24(0);
      return rval;
    };
    tls.createChangeCipherSpec = function() {
      var rval = forge.util.createBuffer();
      rval.putByte(1);
      return rval;
    };
    tls.createFinished = function(c) {
      var b = forge.util.createBuffer();
      b.putBuffer(c.session.md5.digest());
      b.putBuffer(c.session.sha1.digest());
      var client = c.entity === tls.ConnectionEnd.client;
      var sp = c.session.sp;
      var vdl = 12;
      var prf = prf_TLS1;
      var label = client ? "client finished" : "server finished";
      b = prf(sp.master_secret, label, b.getBytes(), vdl);
      var rval = forge.util.createBuffer();
      rval.putByte(tls.HandshakeType.finished);
      rval.putInt24(b.length());
      rval.putBuffer(b);
      return rval;
    };
    tls.createHeartbeat = function(type, payload, payloadLength) {
      if (typeof payloadLength === "undefined") {
        payloadLength = payload.length;
      }
      var rval = forge.util.createBuffer();
      rval.putByte(type);
      rval.putInt16(payloadLength);
      rval.putBytes(payload);
      var plaintextLength = rval.length();
      var paddingLength = Math.max(16, plaintextLength - payloadLength - 3);
      rval.putBytes(forge.random.getBytes(paddingLength));
      return rval;
    };
    tls.queue = function(c, record) {
      if (!record) {
        return;
      }
      if (record.fragment.length() === 0) {
        if (record.type === tls.ContentType.handshake || record.type === tls.ContentType.alert || record.type === tls.ContentType.change_cipher_spec) {
          return;
        }
      }
      if (record.type === tls.ContentType.handshake) {
        var bytes = record.fragment.bytes();
        c.session.md5.update(bytes);
        c.session.sha1.update(bytes);
        bytes = null;
      }
      var records;
      if (record.fragment.length() <= tls.MaxFragment) {
        records = [record];
      } else {
        records = [];
        var data = record.fragment.bytes();
        while (data.length > tls.MaxFragment) {
          records.push(tls.createRecord(c, {
            type: record.type,
            data: forge.util.createBuffer(data.slice(0, tls.MaxFragment))
          }));
          data = data.slice(tls.MaxFragment);
        }
        if (data.length > 0) {
          records.push(tls.createRecord(c, {
            type: record.type,
            data: forge.util.createBuffer(data)
          }));
        }
      }
      for (var i = 0; i < records.length && !c.fail; ++i) {
        var rec = records[i];
        var s = c.state.current.write;
        if (s.update(c, rec)) {
          c.records.push(rec);
        }
      }
    };
    tls.flush = function(c) {
      for (var i = 0; i < c.records.length; ++i) {
        var record = c.records[i];
        c.tlsData.putByte(record.type);
        c.tlsData.putByte(record.version.major);
        c.tlsData.putByte(record.version.minor);
        c.tlsData.putInt16(record.fragment.length());
        c.tlsData.putBuffer(c.records[i].fragment);
      }
      c.records = [];
      return c.tlsDataReady(c);
    };
    var _certErrorToAlertDesc = /* @__PURE__ */ __name(function(error) {
      switch (error) {
        case true:
          return true;
        case forge.pki.certificateError.bad_certificate:
          return tls.Alert.Description.bad_certificate;
        case forge.pki.certificateError.unsupported_certificate:
          return tls.Alert.Description.unsupported_certificate;
        case forge.pki.certificateError.certificate_revoked:
          return tls.Alert.Description.certificate_revoked;
        case forge.pki.certificateError.certificate_expired:
          return tls.Alert.Description.certificate_expired;
        case forge.pki.certificateError.certificate_unknown:
          return tls.Alert.Description.certificate_unknown;
        case forge.pki.certificateError.unknown_ca:
          return tls.Alert.Description.unknown_ca;
        default:
          return tls.Alert.Description.bad_certificate;
      }
    }, "_certErrorToAlertDesc");
    var _alertDescToCertError = /* @__PURE__ */ __name(function(desc) {
      switch (desc) {
        case true:
          return true;
        case tls.Alert.Description.bad_certificate:
          return forge.pki.certificateError.bad_certificate;
        case tls.Alert.Description.unsupported_certificate:
          return forge.pki.certificateError.unsupported_certificate;
        case tls.Alert.Description.certificate_revoked:
          return forge.pki.certificateError.certificate_revoked;
        case tls.Alert.Description.certificate_expired:
          return forge.pki.certificateError.certificate_expired;
        case tls.Alert.Description.certificate_unknown:
          return forge.pki.certificateError.certificate_unknown;
        case tls.Alert.Description.unknown_ca:
          return forge.pki.certificateError.unknown_ca;
        default:
          return forge.pki.certificateError.bad_certificate;
      }
    }, "_alertDescToCertError");
    tls.verifyCertificateChain = function(c, chain) {
      try {
        var options = {};
        for (var key2 in c.verifyOptions) {
          options[key2] = c.verifyOptions[key2];
        }
        options.verify = function(vfd, depth, chain2) {
          var desc = _certErrorToAlertDesc(vfd);
          var ret = c.verify(c, vfd, depth, chain2);
          if (ret !== true) {
            if (typeof ret === "object" && !forge.util.isArray(ret)) {
              var error = new Error("The application rejected the certificate.");
              error.send = true;
              error.alert = {
                level: tls.Alert.Level.fatal,
                description: tls.Alert.Description.bad_certificate
              };
              if (ret.message) {
                error.message = ret.message;
              }
              if (ret.alert) {
                error.alert.description = ret.alert;
              }
              throw error;
            }
            if (ret !== vfd) {
              ret = _alertDescToCertError(ret);
            }
          }
          return ret;
        };
        forge.pki.verifyCertificateChain(c.caStore, chain, options);
      } catch (ex) {
        var err = ex;
        if (typeof err !== "object" || forge.util.isArray(err)) {
          err = {
            send: true,
            alert: {
              level: tls.Alert.Level.fatal,
              description: _certErrorToAlertDesc(ex)
            }
          };
        }
        if (!("send" in err)) {
          err.send = true;
        }
        if (!("alert" in err)) {
          err.alert = {
            level: tls.Alert.Level.fatal,
            description: _certErrorToAlertDesc(err.error)
          };
        }
        c.error(c, err);
      }
      return !c.fail;
    };
    tls.createSessionCache = function(cache, capacity) {
      var rval = null;
      if (cache && cache.getSession && cache.setSession && cache.order) {
        rval = cache;
      } else {
        rval = {};
        rval.cache = cache || {};
        rval.capacity = Math.max(capacity || 100, 1);
        rval.order = [];
        for (var key2 in cache) {
          if (rval.order.length <= capacity) {
            rval.order.push(key2);
          } else {
            delete cache[key2];
          }
        }
        rval.getSession = function(sessionId) {
          var session = null;
          var key3 = null;
          if (sessionId) {
            key3 = forge.util.bytesToHex(sessionId);
          } else if (rval.order.length > 0) {
            key3 = rval.order[0];
          }
          if (key3 !== null && key3 in rval.cache) {
            session = rval.cache[key3];
            delete rval.cache[key3];
            for (var i in rval.order) {
              if (rval.order[i] === key3) {
                rval.order.splice(i, 1);
                break;
              }
            }
          }
          return session;
        };
        rval.setSession = function(sessionId, session) {
          if (rval.order.length === rval.capacity) {
            var key3 = rval.order.shift();
            delete rval.cache[key3];
          }
          var key3 = forge.util.bytesToHex(sessionId);
          rval.order.push(key3);
          rval.cache[key3] = session;
        };
      }
      return rval;
    };
    tls.createConnection = function(options) {
      var caStore = null;
      if (options.caStore) {
        if (forge.util.isArray(options.caStore)) {
          caStore = forge.pki.createCaStore(options.caStore);
        } else {
          caStore = options.caStore;
        }
      } else {
        caStore = forge.pki.createCaStore();
      }
      var cipherSuites = options.cipherSuites || null;
      if (cipherSuites === null) {
        cipherSuites = [];
        for (var key2 in tls.CipherSuites) {
          cipherSuites.push(tls.CipherSuites[key2]);
        }
      }
      var entity = options.server || false ? tls.ConnectionEnd.server : tls.ConnectionEnd.client;
      var sessionCache = options.sessionCache ? tls.createSessionCache(options.sessionCache) : null;
      var c = {
        version: { major: tls.Version.major, minor: tls.Version.minor },
        entity,
        sessionId: options.sessionId,
        caStore,
        sessionCache,
        cipherSuites,
        connected: options.connected,
        virtualHost: options.virtualHost || null,
        verifyClient: options.verifyClient || false,
        verify: options.verify || function(cn, vfd, dpth, cts) {
          return vfd;
        },
        verifyOptions: options.verifyOptions || {},
        getCertificate: options.getCertificate || null,
        getPrivateKey: options.getPrivateKey || null,
        getSignature: options.getSignature || null,
        input: forge.util.createBuffer(),
        tlsData: forge.util.createBuffer(),
        data: forge.util.createBuffer(),
        tlsDataReady: options.tlsDataReady,
        dataReady: options.dataReady,
        heartbeatReceived: options.heartbeatReceived,
        closed: options.closed,
        error: /* @__PURE__ */ __name(function(c2, ex) {
          ex.origin = ex.origin || (c2.entity === tls.ConnectionEnd.client ? "client" : "server");
          if (ex.send) {
            tls.queue(c2, tls.createAlert(c2, ex.alert));
            tls.flush(c2);
          }
          var fatal = ex.fatal !== false;
          if (fatal) {
            c2.fail = true;
          }
          options.error(c2, ex);
          if (fatal) {
            c2.close(false);
          }
        }, "error"),
        deflate: options.deflate || null,
        inflate: options.inflate || null
      };
      c.reset = function(clearFail) {
        c.version = { major: tls.Version.major, minor: tls.Version.minor };
        c.record = null;
        c.session = null;
        c.peerCertificate = null;
        c.state = {
          pending: null,
          current: null
        };
        c.expect = c.entity === tls.ConnectionEnd.client ? SHE : CHE;
        c.fragmented = null;
        c.records = [];
        c.open = false;
        c.handshakes = 0;
        c.handshaking = false;
        c.isConnected = false;
        c.fail = !(clearFail || typeof clearFail === "undefined");
        c.input.clear();
        c.tlsData.clear();
        c.data.clear();
        c.state.current = tls.createConnectionState(c);
      };
      c.reset();
      var _update = /* @__PURE__ */ __name(function(c2, record) {
        var aligned = record.type - tls.ContentType.change_cipher_spec;
        var handlers = ctTable[c2.entity][c2.expect];
        if (aligned in handlers) {
          handlers[aligned](c2, record);
        } else {
          tls.handleUnexpected(c2, record);
        }
      }, "_update");
      var _readRecordHeader = /* @__PURE__ */ __name(function(c2) {
        var rval = 0;
        var b = c2.input;
        var len = b.length();
        if (len < 5) {
          rval = 5 - len;
        } else {
          c2.record = {
            type: b.getByte(),
            version: {
              major: b.getByte(),
              minor: b.getByte()
            },
            length: b.getInt16(),
            fragment: forge.util.createBuffer(),
            ready: false
          };
          var compatibleVersion = c2.record.version.major === c2.version.major;
          if (compatibleVersion && c2.session && c2.session.version) {
            compatibleVersion = c2.record.version.minor === c2.version.minor;
          }
          if (!compatibleVersion) {
            c2.error(c2, {
              message: "Incompatible TLS version.",
              send: true,
              alert: {
                level: tls.Alert.Level.fatal,
                description: tls.Alert.Description.protocol_version
              }
            });
          }
        }
        return rval;
      }, "_readRecordHeader");
      var _readRecord = /* @__PURE__ */ __name(function(c2) {
        var rval = 0;
        var b = c2.input;
        var len = b.length();
        if (len < c2.record.length) {
          rval = c2.record.length - len;
        } else {
          c2.record.fragment.putBytes(b.getBytes(c2.record.length));
          b.compact();
          var s = c2.state.current.read;
          if (s.update(c2, c2.record)) {
            if (c2.fragmented !== null) {
              if (c2.fragmented.type === c2.record.type) {
                c2.fragmented.fragment.putBuffer(c2.record.fragment);
                c2.record = c2.fragmented;
              } else {
                c2.error(c2, {
                  message: "Invalid fragmented record.",
                  send: true,
                  alert: {
                    level: tls.Alert.Level.fatal,
                    description: tls.Alert.Description.unexpected_message
                  }
                });
              }
            }
            c2.record.ready = true;
          }
        }
        return rval;
      }, "_readRecord");
      c.handshake = function(sessionId) {
        if (c.entity !== tls.ConnectionEnd.client) {
          c.error(c, {
            message: "Cannot initiate handshake as a server.",
            fatal: false
          });
        } else if (c.handshaking) {
          c.error(c, {
            message: "Handshake already in progress.",
            fatal: false
          });
        } else {
          if (c.fail && !c.open && c.handshakes === 0) {
            c.fail = false;
          }
          c.handshaking = true;
          sessionId = sessionId || "";
          var session = null;
          if (sessionId.length > 0) {
            if (c.sessionCache) {
              session = c.sessionCache.getSession(sessionId);
            }
            if (session === null) {
              sessionId = "";
            }
          }
          if (sessionId.length === 0 && c.sessionCache) {
            session = c.sessionCache.getSession();
            if (session !== null) {
              sessionId = session.id;
            }
          }
          c.session = {
            id: sessionId,
            version: null,
            cipherSuite: null,
            compressionMethod: null,
            serverCertificate: null,
            certificateRequest: null,
            clientCertificate: null,
            sp: {},
            md5: forge.md.md5.create(),
            sha1: forge.md.sha1.create()
          };
          if (session) {
            c.version = session.version;
            c.session.sp = session.sp;
          }
          c.session.sp.client_random = tls.createRandom().getBytes();
          c.open = true;
          tls.queue(c, tls.createRecord(c, {
            type: tls.ContentType.handshake,
            data: tls.createClientHello(c)
          }));
          tls.flush(c);
        }
      };
      c.process = function(data) {
        var rval = 0;
        if (data) {
          c.input.putBytes(data);
        }
        if (!c.fail) {
          if (c.record !== null && c.record.ready && c.record.fragment.isEmpty()) {
            c.record = null;
          }
          if (c.record === null) {
            rval = _readRecordHeader(c);
          }
          if (!c.fail && c.record !== null && !c.record.ready) {
            rval = _readRecord(c);
          }
          if (!c.fail && c.record !== null && c.record.ready) {
            _update(c, c.record);
          }
        }
        return rval;
      };
      c.prepare = function(data) {
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.application_data,
          data: forge.util.createBuffer(data)
        }));
        return tls.flush(c);
      };
      c.prepareHeartbeatRequest = function(payload, payloadLength) {
        if (payload instanceof forge.util.ByteBuffer) {
          payload = payload.bytes();
        }
        if (typeof payloadLength === "undefined") {
          payloadLength = payload.length;
        }
        c.expectedHeartbeatPayload = payload;
        tls.queue(c, tls.createRecord(c, {
          type: tls.ContentType.heartbeat,
          data: tls.createHeartbeat(
            tls.HeartbeatMessageType.heartbeat_request,
            payload,
            payloadLength
          )
        }));
        return tls.flush(c);
      };
      c.close = function(clearFail) {
        if (!c.fail && c.sessionCache && c.session) {
          var session = {
            id: c.session.id,
            version: c.session.version,
            sp: c.session.sp
          };
          session.sp.keys = null;
          c.sessionCache.setSession(session.id, session);
        }
        if (c.open) {
          c.open = false;
          c.input.clear();
          if (c.isConnected || c.handshaking) {
            c.isConnected = c.handshaking = false;
            tls.queue(c, tls.createAlert(c, {
              level: tls.Alert.Level.warning,
              description: tls.Alert.Description.close_notify
            }));
            tls.flush(c);
          }
          c.closed(c);
        }
        c.reset(clearFail);
      };
      return c;
    };
    module.exports = forge.tls = forge.tls || {};
    for (key in tls) {
      if (typeof tls[key] !== "function") {
        forge.tls[key] = tls[key];
      }
    }
    var key;
    forge.tls.prf_tls1 = prf_TLS1;
    forge.tls.hmac_sha1 = hmac_sha1;
    forge.tls.createSessionCache = tls.createSessionCache;
    forge.tls.createConnection = tls.createConnection;
  }
});

// node_modules/node-forge/lib/aesCipherSuites.js
var require_aesCipherSuites = __commonJS({
  "node_modules/node-forge/lib/aesCipherSuites.js"(exports, module) {
    var forge = require_forge();
    require_aes();
    require_tls();
    var tls = module.exports = forge.tls;
    tls.CipherSuites["TLS_RSA_WITH_AES_128_CBC_SHA"] = {
      id: [0, 47],
      name: "TLS_RSA_WITH_AES_128_CBC_SHA",
      initSecurityParameters: /* @__PURE__ */ __name(function(sp) {
        sp.bulk_cipher_algorithm = tls.BulkCipherAlgorithm.aes;
        sp.cipher_type = tls.CipherType.block;
        sp.enc_key_length = 16;
        sp.block_length = 16;
        sp.fixed_iv_length = 16;
        sp.record_iv_length = 16;
        sp.mac_algorithm = tls.MACAlgorithm.hmac_sha1;
        sp.mac_length = 20;
        sp.mac_key_length = 20;
      }, "initSecurityParameters"),
      initConnectionState
    };
    tls.CipherSuites["TLS_RSA_WITH_AES_256_CBC_SHA"] = {
      id: [0, 53],
      name: "TLS_RSA_WITH_AES_256_CBC_SHA",
      initSecurityParameters: /* @__PURE__ */ __name(function(sp) {
        sp.bulk_cipher_algorithm = tls.BulkCipherAlgorithm.aes;
        sp.cipher_type = tls.CipherType.block;
        sp.enc_key_length = 32;
        sp.block_length = 16;
        sp.fixed_iv_length = 16;
        sp.record_iv_length = 16;
        sp.mac_algorithm = tls.MACAlgorithm.hmac_sha1;
        sp.mac_length = 20;
        sp.mac_key_length = 20;
      }, "initSecurityParameters"),
      initConnectionState
    };
    function initConnectionState(state, c, sp) {
      var client = c.entity === forge.tls.ConnectionEnd.client;
      state.read.cipherState = {
        init: false,
        cipher: forge.cipher.createDecipher("AES-CBC", client ? sp.keys.server_write_key : sp.keys.client_write_key),
        iv: client ? sp.keys.server_write_IV : sp.keys.client_write_IV
      };
      state.write.cipherState = {
        init: false,
        cipher: forge.cipher.createCipher("AES-CBC", client ? sp.keys.client_write_key : sp.keys.server_write_key),
        iv: client ? sp.keys.client_write_IV : sp.keys.server_write_IV
      };
      state.read.cipherFunction = decrypt_aes_cbc_sha1;
      state.write.cipherFunction = encrypt_aes_cbc_sha1;
      state.read.macLength = state.write.macLength = sp.mac_length;
      state.read.macFunction = state.write.macFunction = tls.hmac_sha1;
    }
    __name(initConnectionState, "initConnectionState");
    function encrypt_aes_cbc_sha1(record, s) {
      var rval = false;
      var mac = s.macFunction(s.macKey, s.sequenceNumber, record);
      record.fragment.putBytes(mac);
      s.updateSequenceNumber();
      var iv;
      if (record.version.minor === tls.Versions.TLS_1_0.minor) {
        iv = s.cipherState.init ? null : s.cipherState.iv;
      } else {
        iv = forge.random.getBytesSync(16);
      }
      s.cipherState.init = true;
      var cipher = s.cipherState.cipher;
      cipher.start({ iv });
      if (record.version.minor >= tls.Versions.TLS_1_1.minor) {
        cipher.output.putBytes(iv);
      }
      cipher.update(record.fragment);
      if (cipher.finish(encrypt_aes_cbc_sha1_padding)) {
        record.fragment = cipher.output;
        record.length = record.fragment.length();
        rval = true;
      }
      return rval;
    }
    __name(encrypt_aes_cbc_sha1, "encrypt_aes_cbc_sha1");
    function encrypt_aes_cbc_sha1_padding(blockSize, input, decrypt) {
      if (!decrypt) {
        var padding = blockSize - input.length() % blockSize;
        input.fillWithByte(padding - 1, padding);
      }
      return true;
    }
    __name(encrypt_aes_cbc_sha1_padding, "encrypt_aes_cbc_sha1_padding");
    function decrypt_aes_cbc_sha1_padding(blockSize, output, decrypt) {
      var rval = true;
      if (decrypt) {
        var len = output.length();
        var paddingLength = output.last();
        for (var i = len - 1 - paddingLength; i < len - 1; ++i) {
          rval = rval && output.at(i) == paddingLength;
        }
        if (rval) {
          output.truncate(paddingLength + 1);
        }
      }
      return rval;
    }
    __name(decrypt_aes_cbc_sha1_padding, "decrypt_aes_cbc_sha1_padding");
    function decrypt_aes_cbc_sha1(record, s) {
      var rval = false;
      var iv;
      if (record.version.minor === tls.Versions.TLS_1_0.minor) {
        iv = s.cipherState.init ? null : s.cipherState.iv;
      } else {
        iv = record.fragment.getBytes(16);
      }
      s.cipherState.init = true;
      var cipher = s.cipherState.cipher;
      cipher.start({ iv });
      cipher.update(record.fragment);
      rval = cipher.finish(decrypt_aes_cbc_sha1_padding);
      var macLen = s.macLength;
      var mac = forge.random.getBytesSync(macLen);
      var len = cipher.output.length();
      if (len >= macLen) {
        record.fragment = cipher.output.getBytes(len - macLen);
        mac = cipher.output.getBytes(macLen);
      } else {
        record.fragment = cipher.output.getBytes();
      }
      record.fragment = forge.util.createBuffer(record.fragment);
      record.length = record.fragment.length();
      var mac2 = s.macFunction(s.macKey, s.sequenceNumber, record);
      s.updateSequenceNumber();
      rval = compareMacs(s.macKey, mac, mac2) && rval;
      return rval;
    }
    __name(decrypt_aes_cbc_sha1, "decrypt_aes_cbc_sha1");
    function compareMacs(key, mac1, mac2) {
      var hmac = forge.hmac.create();
      hmac.start("SHA1", key);
      hmac.update(mac1);
      mac1 = hmac.digest().getBytes();
      hmac.start(null, null);
      hmac.update(mac2);
      mac2 = hmac.digest().getBytes();
      return mac1 === mac2;
    }
    __name(compareMacs, "compareMacs");
  }
});

// node_modules/node-forge/lib/sha512.js
var require_sha512 = __commonJS({
  "node_modules/node-forge/lib/sha512.js"(exports, module) {
    var forge = require_forge();
    require_md();
    require_util();
    var sha512 = module.exports = forge.sha512 = forge.sha512 || {};
    forge.md.sha512 = forge.md.algorithms.sha512 = sha512;
    var sha384 = forge.sha384 = forge.sha512.sha384 = forge.sha512.sha384 || {};
    sha384.create = function() {
      return sha512.create("SHA-384");
    };
    forge.md.sha384 = forge.md.algorithms.sha384 = sha384;
    forge.sha512.sha256 = forge.sha512.sha256 || {
      create: /* @__PURE__ */ __name(function() {
        return sha512.create("SHA-512/256");
      }, "create")
    };
    forge.md["sha512/256"] = forge.md.algorithms["sha512/256"] = forge.sha512.sha256;
    forge.sha512.sha224 = forge.sha512.sha224 || {
      create: /* @__PURE__ */ __name(function() {
        return sha512.create("SHA-512/224");
      }, "create")
    };
    forge.md["sha512/224"] = forge.md.algorithms["sha512/224"] = forge.sha512.sha224;
    sha512.create = function(algorithm) {
      if (!_initialized) {
        _init();
      }
      if (typeof algorithm === "undefined") {
        algorithm = "SHA-512";
      }
      if (!(algorithm in _states)) {
        throw new Error("Invalid SHA-512 algorithm: " + algorithm);
      }
      var _state = _states[algorithm];
      var _h = null;
      var _input = forge.util.createBuffer();
      var _w = new Array(80);
      for (var wi = 0; wi < 80; ++wi) {
        _w[wi] = new Array(2);
      }
      var digestLength = 64;
      switch (algorithm) {
        case "SHA-384":
          digestLength = 48;
          break;
        case "SHA-512/256":
          digestLength = 32;
          break;
        case "SHA-512/224":
          digestLength = 28;
          break;
      }
      var md = {
        // SHA-512 => sha512
        algorithm: algorithm.replace("-", "").toLowerCase(),
        blockLength: 128,
        digestLength,
        // 56-bit length of message so far (does not including padding)
        messageLength: 0,
        // true message length
        fullMessageLength: null,
        // size of message length in bytes
        messageLengthSize: 16
      };
      md.start = function() {
        md.messageLength = 0;
        md.fullMessageLength = md.messageLength128 = [];
        var int32s = md.messageLengthSize / 4;
        for (var i = 0; i < int32s; ++i) {
          md.fullMessageLength.push(0);
        }
        _input = forge.util.createBuffer();
        _h = new Array(_state.length);
        for (var i = 0; i < _state.length; ++i) {
          _h[i] = _state[i].slice(0);
        }
        return md;
      };
      md.start();
      md.update = function(msg, encoding) {
        if (encoding === "utf8") {
          msg = forge.util.encodeUtf8(msg);
        }
        var len = msg.length;
        md.messageLength += len;
        len = [len / 4294967296 >>> 0, len >>> 0];
        for (var i = md.fullMessageLength.length - 1; i >= 0; --i) {
          md.fullMessageLength[i] += len[1];
          len[1] = len[0] + (md.fullMessageLength[i] / 4294967296 >>> 0);
          md.fullMessageLength[i] = md.fullMessageLength[i] >>> 0;
          len[0] = len[1] / 4294967296 >>> 0;
        }
        _input.putBytes(msg);
        _update(_h, _w, _input);
        if (_input.read > 2048 || _input.length() === 0) {
          _input.compact();
        }
        return md;
      };
      md.digest = function() {
        var finalBlock = forge.util.createBuffer();
        finalBlock.putBytes(_input.bytes());
        var remaining = md.fullMessageLength[md.fullMessageLength.length - 1] + md.messageLengthSize;
        var overflow = remaining & md.blockLength - 1;
        finalBlock.putBytes(_padding.substr(0, md.blockLength - overflow));
        var next, carry;
        var bits = md.fullMessageLength[0] * 8;
        for (var i = 0; i < md.fullMessageLength.length - 1; ++i) {
          next = md.fullMessageLength[i + 1] * 8;
          carry = next / 4294967296 >>> 0;
          bits += carry;
          finalBlock.putInt32(bits >>> 0);
          bits = next >>> 0;
        }
        finalBlock.putInt32(bits);
        var h = new Array(_h.length);
        for (var i = 0; i < _h.length; ++i) {
          h[i] = _h[i].slice(0);
        }
        _update(h, _w, finalBlock);
        var rval = forge.util.createBuffer();
        var hlen;
        if (algorithm === "SHA-512") {
          hlen = h.length;
        } else if (algorithm === "SHA-384") {
          hlen = h.length - 2;
        } else {
          hlen = h.length - 4;
        }
        for (var i = 0; i < hlen; ++i) {
          rval.putInt32(h[i][0]);
          if (i !== hlen - 1 || algorithm !== "SHA-512/224") {
            rval.putInt32(h[i][1]);
          }
        }
        return rval;
      };
      return md;
    };
    var _padding = null;
    var _initialized = false;
    var _k = null;
    var _states = null;
    function _init() {
      _padding = String.fromCharCode(128);
      _padding += forge.util.fillString(String.fromCharCode(0), 128);
      _k = [
        [1116352408, 3609767458],
        [1899447441, 602891725],
        [3049323471, 3964484399],
        [3921009573, 2173295548],
        [961987163, 4081628472],
        [1508970993, 3053834265],
        [2453635748, 2937671579],
        [2870763221, 3664609560],
        [3624381080, 2734883394],
        [310598401, 1164996542],
        [607225278, 1323610764],
        [1426881987, 3590304994],
        [1925078388, 4068182383],
        [2162078206, 991336113],
        [2614888103, 633803317],
        [3248222580, 3479774868],
        [3835390401, 2666613458],
        [4022224774, 944711139],
        [264347078, 2341262773],
        [604807628, 2007800933],
        [770255983, 1495990901],
        [1249150122, 1856431235],
        [1555081692, 3175218132],
        [1996064986, 2198950837],
        [2554220882, 3999719339],
        [2821834349, 766784016],
        [2952996808, 2566594879],
        [3210313671, 3203337956],
        [3336571891, 1034457026],
        [3584528711, 2466948901],
        [113926993, 3758326383],
        [338241895, 168717936],
        [666307205, 1188179964],
        [773529912, 1546045734],
        [1294757372, 1522805485],
        [1396182291, 2643833823],
        [1695183700, 2343527390],
        [1986661051, 1014477480],
        [2177026350, 1206759142],
        [2456956037, 344077627],
        [2730485921, 1290863460],
        [2820302411, 3158454273],
        [3259730800, 3505952657],
        [3345764771, 106217008],
        [3516065817, 3606008344],
        [3600352804, 1432725776],
        [4094571909, 1467031594],
        [275423344, 851169720],
        [430227734, 3100823752],
        [506948616, 1363258195],
        [659060556, 3750685593],
        [883997877, 3785050280],
        [958139571, 3318307427],
        [1322822218, 3812723403],
        [1537002063, 2003034995],
        [1747873779, 3602036899],
        [1955562222, 1575990012],
        [2024104815, 1125592928],
        [2227730452, 2716904306],
        [2361852424, 442776044],
        [2428436474, 593698344],
        [2756734187, 3733110249],
        [3204031479, 2999351573],
        [3329325298, 3815920427],
        [3391569614, 3928383900],
        [3515267271, 566280711],
        [3940187606, 3454069534],
        [4118630271, 4000239992],
        [116418474, 1914138554],
        [174292421, 2731055270],
        [289380356, 3203993006],
        [460393269, 320620315],
        [685471733, 587496836],
        [852142971, 1086792851],
        [1017036298, 365543100],
        [1126000580, 2618297676],
        [1288033470, 3409855158],
        [1501505948, 4234509866],
        [1607167915, 987167468],
        [1816402316, 1246189591]
      ];
      _states = {};
      _states["SHA-512"] = [
        [1779033703, 4089235720],
        [3144134277, 2227873595],
        [1013904242, 4271175723],
        [2773480762, 1595750129],
        [1359893119, 2917565137],
        [2600822924, 725511199],
        [528734635, 4215389547],
        [1541459225, 327033209]
      ];
      _states["SHA-384"] = [
        [3418070365, 3238371032],
        [1654270250, 914150663],
        [2438529370, 812702999],
        [355462360, 4144912697],
        [1731405415, 4290775857],
        [2394180231, 1750603025],
        [3675008525, 1694076839],
        [1203062813, 3204075428]
      ];
      _states["SHA-512/256"] = [
        [573645204, 4230739756],
        [2673172387, 3360449730],
        [596883563, 1867755857],
        [2520282905, 1497426621],
        [2519219938, 2827943907],
        [3193839141, 1401305490],
        [721525244, 746961066],
        [246885852, 2177182882]
      ];
      _states["SHA-512/224"] = [
        [2352822216, 424955298],
        [1944164710, 2312950998],
        [502970286, 855612546],
        [1738396948, 1479516111],
        [258812777, 2077511080],
        [2011393907, 79989058],
        [1067287976, 1780299464],
        [286451373, 2446758561]
      ];
      _initialized = true;
    }
    __name(_init, "_init");
    function _update(s, w, bytes) {
      var t1_hi, t1_lo;
      var t2_hi, t2_lo;
      var s0_hi, s0_lo;
      var s1_hi, s1_lo;
      var ch_hi, ch_lo;
      var maj_hi, maj_lo;
      var a_hi, a_lo;
      var b_hi, b_lo;
      var c_hi, c_lo;
      var d_hi, d_lo;
      var e_hi, e_lo;
      var f_hi, f_lo;
      var g_hi, g_lo;
      var h_hi, h_lo;
      var i, hi, lo, w2, w7, w15, w16;
      var len = bytes.length();
      while (len >= 128) {
        for (i = 0; i < 16; ++i) {
          w[i][0] = bytes.getInt32() >>> 0;
          w[i][1] = bytes.getInt32() >>> 0;
        }
        for (; i < 80; ++i) {
          w2 = w[i - 2];
          hi = w2[0];
          lo = w2[1];
          t1_hi = ((hi >>> 19 | lo << 13) ^ // ROTR 19
          (lo >>> 29 | hi << 3) ^ // ROTR 61/(swap + ROTR 29)
          hi >>> 6) >>> 0;
          t1_lo = ((hi << 13 | lo >>> 19) ^ // ROTR 19
          (lo << 3 | hi >>> 29) ^ // ROTR 61/(swap + ROTR 29)
          (hi << 26 | lo >>> 6)) >>> 0;
          w15 = w[i - 15];
          hi = w15[0];
          lo = w15[1];
          t2_hi = ((hi >>> 1 | lo << 31) ^ // ROTR 1
          (hi >>> 8 | lo << 24) ^ // ROTR 8
          hi >>> 7) >>> 0;
          t2_lo = ((hi << 31 | lo >>> 1) ^ // ROTR 1
          (hi << 24 | lo >>> 8) ^ // ROTR 8
          (hi << 25 | lo >>> 7)) >>> 0;
          w7 = w[i - 7];
          w16 = w[i - 16];
          lo = t1_lo + w7[1] + t2_lo + w16[1];
          w[i][0] = t1_hi + w7[0] + t2_hi + w16[0] + (lo / 4294967296 >>> 0) >>> 0;
          w[i][1] = lo >>> 0;
        }
        a_hi = s[0][0];
        a_lo = s[0][1];
        b_hi = s[1][0];
        b_lo = s[1][1];
        c_hi = s[2][0];
        c_lo = s[2][1];
        d_hi = s[3][0];
        d_lo = s[3][1];
        e_hi = s[4][0];
        e_lo = s[4][1];
        f_hi = s[5][0];
        f_lo = s[5][1];
        g_hi = s[6][0];
        g_lo = s[6][1];
        h_hi = s[7][0];
        h_lo = s[7][1];
        for (i = 0; i < 80; ++i) {
          s1_hi = ((e_hi >>> 14 | e_lo << 18) ^ // ROTR 14
          (e_hi >>> 18 | e_lo << 14) ^ // ROTR 18
          (e_lo >>> 9 | e_hi << 23)) >>> 0;
          s1_lo = ((e_hi << 18 | e_lo >>> 14) ^ // ROTR 14
          (e_hi << 14 | e_lo >>> 18) ^ // ROTR 18
          (e_lo << 23 | e_hi >>> 9)) >>> 0;
          ch_hi = (g_hi ^ e_hi & (f_hi ^ g_hi)) >>> 0;
          ch_lo = (g_lo ^ e_lo & (f_lo ^ g_lo)) >>> 0;
          s0_hi = ((a_hi >>> 28 | a_lo << 4) ^ // ROTR 28
          (a_lo >>> 2 | a_hi << 30) ^ // ROTR 34/(swap + ROTR 2)
          (a_lo >>> 7 | a_hi << 25)) >>> 0;
          s0_lo = ((a_hi << 4 | a_lo >>> 28) ^ // ROTR 28
          (a_lo << 30 | a_hi >>> 2) ^ // ROTR 34/(swap + ROTR 2)
          (a_lo << 25 | a_hi >>> 7)) >>> 0;
          maj_hi = (a_hi & b_hi | c_hi & (a_hi ^ b_hi)) >>> 0;
          maj_lo = (a_lo & b_lo | c_lo & (a_lo ^ b_lo)) >>> 0;
          lo = h_lo + s1_lo + ch_lo + _k[i][1] + w[i][1];
          t1_hi = h_hi + s1_hi + ch_hi + _k[i][0] + w[i][0] + (lo / 4294967296 >>> 0) >>> 0;
          t1_lo = lo >>> 0;
          lo = s0_lo + maj_lo;
          t2_hi = s0_hi + maj_hi + (lo / 4294967296 >>> 0) >>> 0;
          t2_lo = lo >>> 0;
          h_hi = g_hi;
          h_lo = g_lo;
          g_hi = f_hi;
          g_lo = f_lo;
          f_hi = e_hi;
          f_lo = e_lo;
          lo = d_lo + t1_lo;
          e_hi = d_hi + t1_hi + (lo / 4294967296 >>> 0) >>> 0;
          e_lo = lo >>> 0;
          d_hi = c_hi;
          d_lo = c_lo;
          c_hi = b_hi;
          c_lo = b_lo;
          b_hi = a_hi;
          b_lo = a_lo;
          lo = t1_lo + t2_lo;
          a_hi = t1_hi + t2_hi + (lo / 4294967296 >>> 0) >>> 0;
          a_lo = lo >>> 0;
        }
        lo = s[0][1] + a_lo;
        s[0][0] = s[0][0] + a_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[0][1] = lo >>> 0;
        lo = s[1][1] + b_lo;
        s[1][0] = s[1][0] + b_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[1][1] = lo >>> 0;
        lo = s[2][1] + c_lo;
        s[2][0] = s[2][0] + c_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[2][1] = lo >>> 0;
        lo = s[3][1] + d_lo;
        s[3][0] = s[3][0] + d_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[3][1] = lo >>> 0;
        lo = s[4][1] + e_lo;
        s[4][0] = s[4][0] + e_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[4][1] = lo >>> 0;
        lo = s[5][1] + f_lo;
        s[5][0] = s[5][0] + f_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[5][1] = lo >>> 0;
        lo = s[6][1] + g_lo;
        s[6][0] = s[6][0] + g_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[6][1] = lo >>> 0;
        lo = s[7][1] + h_lo;
        s[7][0] = s[7][0] + h_hi + (lo / 4294967296 >>> 0) >>> 0;
        s[7][1] = lo >>> 0;
        len -= 128;
      }
    }
    __name(_update, "_update");
  }
});

// node_modules/node-forge/lib/asn1-validator.js
var require_asn1_validator = __commonJS({
  "node_modules/node-forge/lib/asn1-validator.js"(exports) {
    var forge = require_forge();
    require_asn1();
    var asn1 = forge.asn1;
    exports.privateKeyValidator = {
      // PrivateKeyInfo
      name: "PrivateKeyInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      value: [{
        // Version (INTEGER)
        name: "PrivateKeyInfo.version",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.INTEGER,
        constructed: false,
        capture: "privateKeyVersion"
      }, {
        // privateKeyAlgorithm
        name: "PrivateKeyInfo.privateKeyAlgorithm",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "AlgorithmIdentifier.algorithm",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.OID,
          constructed: false,
          capture: "privateKeyOid"
        }]
      }, {
        // PrivateKey
        name: "PrivateKeyInfo",
        tagClass: asn1.Class.UNIVERSAL,
        type: asn1.Type.OCTETSTRING,
        constructed: false,
        capture: "privateKey"
      }]
    };
    exports.publicKeyValidator = {
      name: "SubjectPublicKeyInfo",
      tagClass: asn1.Class.UNIVERSAL,
      type: asn1.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "subjectPublicKeyInfo",
      value: [
        {
          name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.SEQUENCE,
          constructed: true,
          value: [{
            name: "AlgorithmIdentifier.algorithm",
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.OID,
            constructed: false,
            capture: "publicKeyOid"
          }]
        },
        // capture group for ed25519PublicKey
        {
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.BITSTRING,
          constructed: false,
          composed: true,
          captureBitStringValue: "ed25519PublicKey"
        }
        // FIXME: this is capture group for rsaPublicKey, use it in this API or
        // discard?
        /* {
          // subjectPublicKey
          name: 'SubjectPublicKeyInfo.subjectPublicKey',
          tagClass: asn1.Class.UNIVERSAL,
          type: asn1.Type.BITSTRING,
          constructed: false,
          value: [{
            // RSAPublicKey
            name: 'SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey',
            tagClass: asn1.Class.UNIVERSAL,
            type: asn1.Type.SEQUENCE,
            constructed: true,
            optional: true,
            captureAsn1: 'rsaPublicKey'
          }]
        } */
      ]
    };
  }
});

// node_modules/node-forge/lib/ed25519.js
var require_ed25519 = __commonJS({
  "node_modules/node-forge/lib/ed25519.js"(exports, module) {
    var forge = require_forge();
    require_jsbn();
    require_random();
    require_sha512();
    require_util();
    var asn1Validator = require_asn1_validator();
    var publicKeyValidator = asn1Validator.publicKeyValidator;
    var privateKeyValidator = asn1Validator.privateKeyValidator;
    if (typeof BigInteger === "undefined") {
      BigInteger = forge.jsbn.BigInteger;
    }
    var BigInteger;
    var ByteBuffer = forge.util.ByteBuffer;
    var NativeBuffer = typeof Buffer === "undefined" ? Uint8Array : Buffer;
    forge.pki = forge.pki || {};
    module.exports = forge.pki.ed25519 = forge.ed25519 = forge.ed25519 || {};
    var ed25519 = forge.ed25519;
    ed25519.constants = {};
    ed25519.constants.PUBLIC_KEY_BYTE_LENGTH = 32;
    ed25519.constants.PRIVATE_KEY_BYTE_LENGTH = 64;
    ed25519.constants.SEED_BYTE_LENGTH = 32;
    ed25519.constants.SIGN_BYTE_LENGTH = 64;
    ed25519.constants.HASH_BYTE_LENGTH = 64;
    ed25519.generateKeyPair = function(options) {
      options = options || {};
      var seed = options.seed;
      if (seed === void 0) {
        seed = forge.random.getBytesSync(ed25519.constants.SEED_BYTE_LENGTH);
      } else if (typeof seed === "string") {
        if (seed.length !== ed25519.constants.SEED_BYTE_LENGTH) {
          throw new TypeError(
            '"seed" must be ' + ed25519.constants.SEED_BYTE_LENGTH + " bytes in length."
          );
        }
      } else if (!(seed instanceof Uint8Array)) {
        throw new TypeError(
          '"seed" must be a node.js Buffer, Uint8Array, or a binary string.'
        );
      }
      seed = messageToNativeBuffer({ message: seed, encoding: "binary" });
      var pk = new NativeBuffer(ed25519.constants.PUBLIC_KEY_BYTE_LENGTH);
      var sk = new NativeBuffer(ed25519.constants.PRIVATE_KEY_BYTE_LENGTH);
      for (var i = 0; i < 32; ++i) {
        sk[i] = seed[i];
      }
      crypto_sign_keypair(pk, sk);
      return { publicKey: pk, privateKey: sk };
    };
    ed25519.privateKeyFromAsn1 = function(obj) {
      var capture = {};
      var errors = [];
      var valid = forge.asn1.validate(obj, privateKeyValidator, capture, errors);
      if (!valid) {
        var error = new Error("Invalid Key.");
        error.errors = errors;
        throw error;
      }
      var oid = forge.asn1.derToOid(capture.privateKeyOid);
      var ed25519Oid = forge.oids.EdDSA25519;
      if (oid !== ed25519Oid) {
        throw new Error('Invalid OID "' + oid + '"; OID must be "' + ed25519Oid + '".');
      }
      var privateKey = capture.privateKey;
      var privateKeyBytes = messageToNativeBuffer({
        message: forge.asn1.fromDer(privateKey).value,
        encoding: "binary"
      });
      return { privateKeyBytes };
    };
    ed25519.publicKeyFromAsn1 = function(obj) {
      var capture = {};
      var errors = [];
      var valid = forge.asn1.validate(obj, publicKeyValidator, capture, errors);
      if (!valid) {
        var error = new Error("Invalid Key.");
        error.errors = errors;
        throw error;
      }
      var oid = forge.asn1.derToOid(capture.publicKeyOid);
      var ed25519Oid = forge.oids.EdDSA25519;
      if (oid !== ed25519Oid) {
        throw new Error('Invalid OID "' + oid + '"; OID must be "' + ed25519Oid + '".');
      }
      var publicKeyBytes = capture.ed25519PublicKey;
      if (publicKeyBytes.length !== ed25519.constants.PUBLIC_KEY_BYTE_LENGTH) {
        throw new Error("Key length is invalid.");
      }
      return messageToNativeBuffer({
        message: publicKeyBytes,
        encoding: "binary"
      });
    };
    ed25519.publicKeyFromPrivateKey = function(options) {
      options = options || {};
      var privateKey = messageToNativeBuffer({
        message: options.privateKey,
        encoding: "binary"
      });
      if (privateKey.length !== ed25519.constants.PRIVATE_KEY_BYTE_LENGTH) {
        throw new TypeError(
          '"options.privateKey" must have a byte length of ' + ed25519.constants.PRIVATE_KEY_BYTE_LENGTH
        );
      }
      var pk = new NativeBuffer(ed25519.constants.PUBLIC_KEY_BYTE_LENGTH);
      for (var i = 0; i < pk.length; ++i) {
        pk[i] = privateKey[32 + i];
      }
      return pk;
    };
    ed25519.sign = function(options) {
      options = options || {};
      var msg = messageToNativeBuffer(options);
      var privateKey = messageToNativeBuffer({
        message: options.privateKey,
        encoding: "binary"
      });
      if (privateKey.length === ed25519.constants.SEED_BYTE_LENGTH) {
        var keyPair = ed25519.generateKeyPair({ seed: privateKey });
        privateKey = keyPair.privateKey;
      } else if (privateKey.length !== ed25519.constants.PRIVATE_KEY_BYTE_LENGTH) {
        throw new TypeError(
          '"options.privateKey" must have a byte length of ' + ed25519.constants.SEED_BYTE_LENGTH + " or " + ed25519.constants.PRIVATE_KEY_BYTE_LENGTH
        );
      }
      var signedMsg = new NativeBuffer(
        ed25519.constants.SIGN_BYTE_LENGTH + msg.length
      );
      crypto_sign(signedMsg, msg, msg.length, privateKey);
      var sig = new NativeBuffer(ed25519.constants.SIGN_BYTE_LENGTH);
      for (var i = 0; i < sig.length; ++i) {
        sig[i] = signedMsg[i];
      }
      return sig;
    };
    ed25519.verify = function(options) {
      options = options || {};
      var msg = messageToNativeBuffer(options);
      if (options.signature === void 0) {
        throw new TypeError(
          '"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.'
        );
      }
      var sig = messageToNativeBuffer({
        message: options.signature,
        encoding: "binary"
      });
      if (sig.length !== ed25519.constants.SIGN_BYTE_LENGTH) {
        throw new TypeError(
          '"options.signature" must have a byte length of ' + ed25519.constants.SIGN_BYTE_LENGTH
        );
      }
      var publicKey = messageToNativeBuffer({
        message: options.publicKey,
        encoding: "binary"
      });
      if (publicKey.length !== ed25519.constants.PUBLIC_KEY_BYTE_LENGTH) {
        throw new TypeError(
          '"options.publicKey" must have a byte length of ' + ed25519.constants.PUBLIC_KEY_BYTE_LENGTH
        );
      }
      var sm = new NativeBuffer(ed25519.constants.SIGN_BYTE_LENGTH + msg.length);
      var m = new NativeBuffer(ed25519.constants.SIGN_BYTE_LENGTH + msg.length);
      var i;
      for (i = 0; i < ed25519.constants.SIGN_BYTE_LENGTH; ++i) {
        sm[i] = sig[i];
      }
      for (i = 0; i < msg.length; ++i) {
        sm[i + ed25519.constants.SIGN_BYTE_LENGTH] = msg[i];
      }
      return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
    };
    function messageToNativeBuffer(options) {
      var message = options.message;
      if (message instanceof Uint8Array || message instanceof NativeBuffer) {
        return message;
      }
      var encoding = options.encoding;
      if (message === void 0) {
        if (options.md) {
          message = options.md.digest().getBytes();
          encoding = "binary";
        } else {
          throw new TypeError('"options.message" or "options.md" not specified.');
        }
      }
      if (typeof message === "string" && !encoding) {
        throw new TypeError('"options.encoding" must be "binary" or "utf8".');
      }
      if (typeof message === "string") {
        if (typeof Buffer !== "undefined") {
          return Buffer.from(message, encoding);
        }
        message = new ByteBuffer(message, encoding);
      } else if (!(message instanceof ByteBuffer)) {
        throw new TypeError(
          '"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.'
        );
      }
      var buffer = new NativeBuffer(message.length());
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = message.at(i);
      }
      return buffer;
    }
    __name(messageToNativeBuffer, "messageToNativeBuffer");
    var gf0 = gf();
    var gf1 = gf([1]);
    var D = gf([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]);
    var D2 = gf([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]);
    var X = gf([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]);
    var Y = gf([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]);
    var L = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    var I = gf([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function sha512(msg, msgLen) {
      var md = forge.md.sha512.create();
      var buffer = new ByteBuffer(msg);
      md.update(buffer.getBytes(msgLen), "binary");
      var hash = md.digest().getBytes();
      if (typeof Buffer !== "undefined") {
        return Buffer.from(hash, "binary");
      }
      var out = new NativeBuffer(ed25519.constants.HASH_BYTE_LENGTH);
      for (var i = 0; i < 64; ++i) {
        out[i] = hash.charCodeAt(i);
      }
      return out;
    }
    __name(sha512, "sha512");
    function crypto_sign_keypair(pk, sk) {
      var p = [gf(), gf(), gf(), gf()];
      var i;
      var d = sha512(sk, 32);
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      scalarbase(p, d);
      pack(pk, p);
      for (i = 0; i < 32; ++i) {
        sk[i + 32] = pk[i];
      }
      return 0;
    }
    __name(crypto_sign_keypair, "crypto_sign_keypair");
    function crypto_sign(sm, m, n, sk) {
      var i, j, x = new Float64Array(64);
      var p = [gf(), gf(), gf(), gf()];
      var d = sha512(sk, 32);
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      var smlen = n + 64;
      for (i = 0; i < n; ++i) {
        sm[64 + i] = m[i];
      }
      for (i = 0; i < 32; ++i) {
        sm[32 + i] = d[32 + i];
      }
      var r = sha512(sm.subarray(32), n + 32);
      reduce(r);
      scalarbase(p, r);
      pack(sm, p);
      for (i = 32; i < 64; ++i) {
        sm[i] = sk[i];
      }
      var h = sha512(sm, n + 64);
      reduce(h);
      for (i = 32; i < 64; ++i) {
        x[i] = 0;
      }
      for (i = 0; i < 32; ++i) {
        x[i] = r[i];
      }
      for (i = 0; i < 32; ++i) {
        for (j = 0; j < 32; j++) {
          x[i + j] += h[i] * d[j];
        }
      }
      modL(sm.subarray(32), x);
      return smlen;
    }
    __name(crypto_sign, "crypto_sign");
    function crypto_sign_open(m, sm, n, pk) {
      var i, mlen;
      var t = new NativeBuffer(32);
      var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
      mlen = -1;
      if (n < 64) {
        return -1;
      }
      if (unpackneg(q, pk)) {
        return -1;
      }
      if (!_isCanonicalSignatureScalar(sm, 32)) {
        return -1;
      }
      for (i = 0; i < n; ++i) {
        m[i] = sm[i];
      }
      for (i = 0; i < 32; ++i) {
        m[i + 32] = pk[i];
      }
      var h = sha512(m, n);
      reduce(h);
      scalarmult(p, q, h);
      scalarbase(q, sm.subarray(32));
      add(p, q);
      pack(t, p);
      n -= 64;
      if (crypto_verify_32(sm, 0, t, 0)) {
        for (i = 0; i < n; ++i) {
          m[i] = 0;
        }
        return -1;
      }
      for (i = 0; i < n; ++i) {
        m[i] = sm[i + 64];
      }
      mlen = n;
      return mlen;
    }
    __name(crypto_sign_open, "crypto_sign_open");
    function _isCanonicalSignatureScalar(bytes, offset) {
      var i;
      for (i = 31; i >= 0; --i) {
        if (bytes[offset + i] < L[i]) {
          return true;
        }
        if (bytes[offset + i] > L[i]) {
          return false;
        }
      }
      return false;
    }
    __name(_isCanonicalSignatureScalar, "_isCanonicalSignatureScalar");
    function modL(r, x) {
      var carry, i, j, k;
      for (i = 63; i >= 32; --i) {
        carry = 0;
        for (j = i - 32, k = i - 12; j < k; ++j) {
          x[j] += carry - 16 * x[i] * L[j - (i - 32)];
          carry = x[j] + 128 >> 8;
          x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
      }
      carry = 0;
      for (j = 0; j < 32; ++j) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
      }
      for (j = 0; j < 32; ++j) {
        x[j] -= carry * L[j];
      }
      for (i = 0; i < 32; ++i) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
      }
    }
    __name(modL, "modL");
    function reduce(r) {
      var x = new Float64Array(64);
      for (var i = 0; i < 64; ++i) {
        x[i] = r[i];
        r[i] = 0;
      }
      modL(r, x);
    }
    __name(reduce, "reduce");
    function add(p, q) {
      var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
      Z(a, p[1], p[0]);
      Z(t, q[1], q[0]);
      M(a, a, t);
      A(b, p[0], p[1]);
      A(t, q[0], q[1]);
      M(b, b, t);
      M(c, p[3], q[3]);
      M(c, c, D2);
      M(d, p[2], q[2]);
      A(d, d, d);
      Z(e, b, a);
      Z(f, d, c);
      A(g, d, c);
      A(h, b, a);
      M(p[0], e, f);
      M(p[1], h, g);
      M(p[2], g, f);
      M(p[3], e, h);
    }
    __name(add, "add");
    function cswap(p, q, b) {
      for (var i = 0; i < 4; ++i) {
        sel25519(p[i], q[i], b);
      }
    }
    __name(cswap, "cswap");
    function pack(r, p) {
      var tx = gf(), ty = gf(), zi = gf();
      inv25519(zi, p[2]);
      M(tx, p[0], zi);
      M(ty, p[1], zi);
      pack25519(r, ty);
      r[31] ^= par25519(tx) << 7;
    }
    __name(pack, "pack");
    function pack25519(o, n) {
      var i, j, b;
      var m = gf(), t = gf();
      for (i = 0; i < 16; ++i) {
        t[i] = n[i];
      }
      car25519(t);
      car25519(t);
      car25519(t);
      for (j = 0; j < 2; ++j) {
        m[0] = t[0] - 65517;
        for (i = 1; i < 15; ++i) {
          m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
          m[i - 1] &= 65535;
        }
        m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
        b = m[15] >> 16 & 1;
        m[14] &= 65535;
        sel25519(t, m, 1 - b);
      }
      for (i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 255;
        o[2 * i + 1] = t[i] >> 8;
      }
    }
    __name(pack25519, "pack25519");
    function unpackneg(r, p) {
      var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
      set25519(r[2], gf1);
      unpack25519(r[1], p);
      S(num, r[1]);
      M(den, num, D);
      Z(num, num, r[2]);
      A(den, r[2], den);
      S(den2, den);
      S(den4, den2);
      M(den6, den4, den2);
      M(t, den6, num);
      M(t, t, den);
      pow2523(t, t);
      M(t, t, num);
      M(t, t, den);
      M(t, t, den);
      M(r[0], t, den);
      S(chk, r[0]);
      M(chk, chk, den);
      if (neq25519(chk, num)) {
        M(r[0], r[0], I);
      }
      S(chk, r[0]);
      M(chk, chk, den);
      if (neq25519(chk, num)) {
        return -1;
      }
      if (par25519(r[0]) === p[31] >> 7) {
        Z(r[0], gf0, r[0]);
      }
      M(r[3], r[0], r[1]);
      return 0;
    }
    __name(unpackneg, "unpackneg");
    function unpack25519(o, n) {
      var i;
      for (i = 0; i < 16; ++i) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
      }
      o[15] &= 32767;
    }
    __name(unpack25519, "unpack25519");
    function pow2523(o, i) {
      var c = gf();
      var a;
      for (a = 0; a < 16; ++a) {
        c[a] = i[a];
      }
      for (a = 250; a >= 0; --a) {
        S(c, c);
        if (a !== 1) {
          M(c, c, i);
        }
      }
      for (a = 0; a < 16; ++a) {
        o[a] = c[a];
      }
    }
    __name(pow2523, "pow2523");
    function neq25519(a, b) {
      var c = new NativeBuffer(32);
      var d = new NativeBuffer(32);
      pack25519(c, a);
      pack25519(d, b);
      return crypto_verify_32(c, 0, d, 0);
    }
    __name(neq25519, "neq25519");
    function crypto_verify_32(x, xi, y, yi) {
      return vn(x, xi, y, yi, 32);
    }
    __name(crypto_verify_32, "crypto_verify_32");
    function vn(x, xi, y, yi, n) {
      var i, d = 0;
      for (i = 0; i < n; ++i) {
        d |= x[xi + i] ^ y[yi + i];
      }
      return (1 & d - 1 >>> 8) - 1;
    }
    __name(vn, "vn");
    function par25519(a) {
      var d = new NativeBuffer(32);
      pack25519(d, a);
      return d[0] & 1;
    }
    __name(par25519, "par25519");
    function scalarmult(p, q, s) {
      var b, i;
      set25519(p[0], gf0);
      set25519(p[1], gf1);
      set25519(p[2], gf1);
      set25519(p[3], gf0);
      for (i = 255; i >= 0; --i) {
        b = s[i / 8 | 0] >> (i & 7) & 1;
        cswap(p, q, b);
        add(q, p);
        add(p, p);
        cswap(p, q, b);
      }
    }
    __name(scalarmult, "scalarmult");
    function scalarbase(p, s) {
      var q = [gf(), gf(), gf(), gf()];
      set25519(q[0], X);
      set25519(q[1], Y);
      set25519(q[2], gf1);
      M(q[3], X, Y);
      scalarmult(p, q, s);
    }
    __name(scalarbase, "scalarbase");
    function set25519(r, a) {
      var i;
      for (i = 0; i < 16; i++) {
        r[i] = a[i] | 0;
      }
    }
    __name(set25519, "set25519");
    function inv25519(o, i) {
      var c = gf();
      var a;
      for (a = 0; a < 16; ++a) {
        c[a] = i[a];
      }
      for (a = 253; a >= 0; --a) {
        S(c, c);
        if (a !== 2 && a !== 4) {
          M(c, c, i);
        }
      }
      for (a = 0; a < 16; ++a) {
        o[a] = c[a];
      }
    }
    __name(inv25519, "inv25519");
    function car25519(o) {
      var i, v, c = 1;
      for (i = 0; i < 16; ++i) {
        v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
      }
      o[0] += c - 1 + 37 * (c - 1);
    }
    __name(car25519, "car25519");
    function sel25519(p, q, b) {
      var t, c = ~(b - 1);
      for (var i = 0; i < 16; ++i) {
        t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
      }
    }
    __name(sel25519, "sel25519");
    function gf(init) {
      var i, r = new Float64Array(16);
      if (init) {
        for (i = 0; i < init.length; ++i) {
          r[i] = init[i];
        }
      }
      return r;
    }
    __name(gf, "gf");
    function A(o, a, b) {
      for (var i = 0; i < 16; ++i) {
        o[i] = a[i] + b[i];
      }
    }
    __name(A, "A");
    function Z(o, a, b) {
      for (var i = 0; i < 16; ++i) {
        o[i] = a[i] - b[i];
      }
    }
    __name(Z, "Z");
    function S(o, a) {
      M(o, a, a);
    }
    __name(S, "S");
    function M(o, a, b) {
      var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
      v = a[0];
      t0 += v * b0;
      t1 += v * b1;
      t2 += v * b2;
      t3 += v * b3;
      t4 += v * b4;
      t5 += v * b5;
      t6 += v * b6;
      t7 += v * b7;
      t8 += v * b8;
      t9 += v * b9;
      t10 += v * b10;
      t11 += v * b11;
      t12 += v * b12;
      t13 += v * b13;
      t14 += v * b14;
      t15 += v * b15;
      v = a[1];
      t1 += v * b0;
      t2 += v * b1;
      t3 += v * b2;
      t4 += v * b3;
      t5 += v * b4;
      t6 += v * b5;
      t7 += v * b6;
      t8 += v * b7;
      t9 += v * b8;
      t10 += v * b9;
      t11 += v * b10;
      t12 += v * b11;
      t13 += v * b12;
      t14 += v * b13;
      t15 += v * b14;
      t16 += v * b15;
      v = a[2];
      t2 += v * b0;
      t3 += v * b1;
      t4 += v * b2;
      t5 += v * b3;
      t6 += v * b4;
      t7 += v * b5;
      t8 += v * b6;
      t9 += v * b7;
      t10 += v * b8;
      t11 += v * b9;
      t12 += v * b10;
      t13 += v * b11;
      t14 += v * b12;
      t15 += v * b13;
      t16 += v * b14;
      t17 += v * b15;
      v = a[3];
      t3 += v * b0;
      t4 += v * b1;
      t5 += v * b2;
      t6 += v * b3;
      t7 += v * b4;
      t8 += v * b5;
      t9 += v * b6;
      t10 += v * b7;
      t11 += v * b8;
      t12 += v * b9;
      t13 += v * b10;
      t14 += v * b11;
      t15 += v * b12;
      t16 += v * b13;
      t17 += v * b14;
      t18 += v * b15;
      v = a[4];
      t4 += v * b0;
      t5 += v * b1;
      t6 += v * b2;
      t7 += v * b3;
      t8 += v * b4;
      t9 += v * b5;
      t10 += v * b6;
      t11 += v * b7;
      t12 += v * b8;
      t13 += v * b9;
      t14 += v * b10;
      t15 += v * b11;
      t16 += v * b12;
      t17 += v * b13;
      t18 += v * b14;
      t19 += v * b15;
      v = a[5];
      t5 += v * b0;
      t6 += v * b1;
      t7 += v * b2;
      t8 += v * b3;
      t9 += v * b4;
      t10 += v * b5;
      t11 += v * b6;
      t12 += v * b7;
      t13 += v * b8;
      t14 += v * b9;
      t15 += v * b10;
      t16 += v * b11;
      t17 += v * b12;
      t18 += v * b13;
      t19 += v * b14;
      t20 += v * b15;
      v = a[6];
      t6 += v * b0;
      t7 += v * b1;
      t8 += v * b2;
      t9 += v * b3;
      t10 += v * b4;
      t11 += v * b5;
      t12 += v * b6;
      t13 += v * b7;
      t14 += v * b8;
      t15 += v * b9;
      t16 += v * b10;
      t17 += v * b11;
      t18 += v * b12;
      t19 += v * b13;
      t20 += v * b14;
      t21 += v * b15;
      v = a[7];
      t7 += v * b0;
      t8 += v * b1;
      t9 += v * b2;
      t10 += v * b3;
      t11 += v * b4;
      t12 += v * b5;
      t13 += v * b6;
      t14 += v * b7;
      t15 += v * b8;
      t16 += v * b9;
      t17 += v * b10;
      t18 += v * b11;
      t19 += v * b12;
      t20 += v * b13;
      t21 += v * b14;
      t22 += v * b15;
      v = a[8];
      t8 += v * b0;
      t9 += v * b1;
      t10 += v * b2;
      t11 += v * b3;
      t12 += v * b4;
      t13 += v * b5;
      t14 += v * b6;
      t15 += v * b7;
      t16 += v * b8;
      t17 += v * b9;
      t18 += v * b10;
      t19 += v * b11;
      t20 += v * b12;
      t21 += v * b13;
      t22 += v * b14;
      t23 += v * b15;
      v = a[9];
      t9 += v * b0;
      t10 += v * b1;
      t11 += v * b2;
      t12 += v * b3;
      t13 += v * b4;
      t14 += v * b5;
      t15 += v * b6;
      t16 += v * b7;
      t17 += v * b8;
      t18 += v * b9;
      t19 += v * b10;
      t20 += v * b11;
      t21 += v * b12;
      t22 += v * b13;
      t23 += v * b14;
      t24 += v * b15;
      v = a[10];
      t10 += v * b0;
      t11 += v * b1;
      t12 += v * b2;
      t13 += v * b3;
      t14 += v * b4;
      t15 += v * b5;
      t16 += v * b6;
      t17 += v * b7;
      t18 += v * b8;
      t19 += v * b9;
      t20 += v * b10;
      t21 += v * b11;
      t22 += v * b12;
      t23 += v * b13;
      t24 += v * b14;
      t25 += v * b15;
      v = a[11];
      t11 += v * b0;
      t12 += v * b1;
      t13 += v * b2;
      t14 += v * b3;
      t15 += v * b4;
      t16 += v * b5;
      t17 += v * b6;
      t18 += v * b7;
      t19 += v * b8;
      t20 += v * b9;
      t21 += v * b10;
      t22 += v * b11;
      t23 += v * b12;
      t24 += v * b13;
      t25 += v * b14;
      t26 += v * b15;
      v = a[12];
      t12 += v * b0;
      t13 += v * b1;
      t14 += v * b2;
      t15 += v * b3;
      t16 += v * b4;
      t17 += v * b5;
      t18 += v * b6;
      t19 += v * b7;
      t20 += v * b8;
      t21 += v * b9;
      t22 += v * b10;
      t23 += v * b11;
      t24 += v * b12;
      t25 += v * b13;
      t26 += v * b14;
      t27 += v * b15;
      v = a[13];
      t13 += v * b0;
      t14 += v * b1;
      t15 += v * b2;
      t16 += v * b3;
      t17 += v * b4;
      t18 += v * b5;
      t19 += v * b6;
      t20 += v * b7;
      t21 += v * b8;
      t22 += v * b9;
      t23 += v * b10;
      t24 += v * b11;
      t25 += v * b12;
      t26 += v * b13;
      t27 += v * b14;
      t28 += v * b15;
      v = a[14];
      t14 += v * b0;
      t15 += v * b1;
      t16 += v * b2;
      t17 += v * b3;
      t18 += v * b4;
      t19 += v * b5;
      t20 += v * b6;
      t21 += v * b7;
      t22 += v * b8;
      t23 += v * b9;
      t24 += v * b10;
      t25 += v * b11;
      t26 += v * b12;
      t27 += v * b13;
      t28 += v * b14;
      t29 += v * b15;
      v = a[15];
      t15 += v * b0;
      t16 += v * b1;
      t17 += v * b2;
      t18 += v * b3;
      t19 += v * b4;
      t20 += v * b5;
      t21 += v * b6;
      t22 += v * b7;
      t23 += v * b8;
      t24 += v * b9;
      t25 += v * b10;
      t26 += v * b11;
      t27 += v * b12;
      t28 += v * b13;
      t29 += v * b14;
      t30 += v * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c = 1;
      v = t0 + c + 65535;
      c = Math.floor(v / 65536);
      t0 = v - c * 65536;
      v = t1 + c + 65535;
      c = Math.floor(v / 65536);
      t1 = v - c * 65536;
      v = t2 + c + 65535;
      c = Math.floor(v / 65536);
      t2 = v - c * 65536;
      v = t3 + c + 65535;
      c = Math.floor(v / 65536);
      t3 = v - c * 65536;
      v = t4 + c + 65535;
      c = Math.floor(v / 65536);
      t4 = v - c * 65536;
      v = t5 + c + 65535;
      c = Math.floor(v / 65536);
      t5 = v - c * 65536;
      v = t6 + c + 65535;
      c = Math.floor(v / 65536);
      t6 = v - c * 65536;
      v = t7 + c + 65535;
      c = Math.floor(v / 65536);
      t7 = v - c * 65536;
      v = t8 + c + 65535;
      c = Math.floor(v / 65536);
      t8 = v - c * 65536;
      v = t9 + c + 65535;
      c = Math.floor(v / 65536);
      t9 = v - c * 65536;
      v = t10 + c + 65535;
      c = Math.floor(v / 65536);
      t10 = v - c * 65536;
      v = t11 + c + 65535;
      c = Math.floor(v / 65536);
      t11 = v - c * 65536;
      v = t12 + c + 65535;
      c = Math.floor(v / 65536);
      t12 = v - c * 65536;
      v = t13 + c + 65535;
      c = Math.floor(v / 65536);
      t13 = v - c * 65536;
      v = t14 + c + 65535;
      c = Math.floor(v / 65536);
      t14 = v - c * 65536;
      v = t15 + c + 65535;
      c = Math.floor(v / 65536);
      t15 = v - c * 65536;
      t0 += c - 1 + 37 * (c - 1);
      c = 1;
      v = t0 + c + 65535;
      c = Math.floor(v / 65536);
      t0 = v - c * 65536;
      v = t1 + c + 65535;
      c = Math.floor(v / 65536);
      t1 = v - c * 65536;
      v = t2 + c + 65535;
      c = Math.floor(v / 65536);
      t2 = v - c * 65536;
      v = t3 + c + 65535;
      c = Math.floor(v / 65536);
      t3 = v - c * 65536;
      v = t4 + c + 65535;
      c = Math.floor(v / 65536);
      t4 = v - c * 65536;
      v = t5 + c + 65535;
      c = Math.floor(v / 65536);
      t5 = v - c * 65536;
      v = t6 + c + 65535;
      c = Math.floor(v / 65536);
      t6 = v - c * 65536;
      v = t7 + c + 65535;
      c = Math.floor(v / 65536);
      t7 = v - c * 65536;
      v = t8 + c + 65535;
      c = Math.floor(v / 65536);
      t8 = v - c * 65536;
      v = t9 + c + 65535;
      c = Math.floor(v / 65536);
      t9 = v - c * 65536;
      v = t10 + c + 65535;
      c = Math.floor(v / 65536);
      t10 = v - c * 65536;
      v = t11 + c + 65535;
      c = Math.floor(v / 65536);
      t11 = v - c * 65536;
      v = t12 + c + 65535;
      c = Math.floor(v / 65536);
      t12 = v - c * 65536;
      v = t13 + c + 65535;
      c = Math.floor(v / 65536);
      t13 = v - c * 65536;
      v = t14 + c + 65535;
      c = Math.floor(v / 65536);
      t14 = v - c * 65536;
      v = t15 + c + 65535;
      c = Math.floor(v / 65536);
      t15 = v - c * 65536;
      t0 += c - 1 + 37 * (c - 1);
      o[0] = t0;
      o[1] = t1;
      o[2] = t2;
      o[3] = t3;
      o[4] = t4;
      o[5] = t5;
      o[6] = t6;
      o[7] = t7;
      o[8] = t8;
      o[9] = t9;
      o[10] = t10;
      o[11] = t11;
      o[12] = t12;
      o[13] = t13;
      o[14] = t14;
      o[15] = t15;
    }
    __name(M, "M");
  }
});

// node_modules/node-forge/lib/kem.js
var require_kem = __commonJS({
  "node_modules/node-forge/lib/kem.js"(exports, module) {
    var forge = require_forge();
    require_util();
    require_random();
    require_jsbn();
    module.exports = forge.kem = forge.kem || {};
    var BigInteger = forge.jsbn.BigInteger;
    forge.kem.rsa = {};
    forge.kem.rsa.create = function(kdf, options) {
      options = options || {};
      var prng = options.prng || forge.random;
      var kem = {};
      kem.encrypt = function(publicKey, keyLength) {
        var byteLength = Math.ceil(publicKey.n.bitLength() / 8);
        var r;
        do {
          r = new BigInteger(
            forge.util.bytesToHex(prng.getBytesSync(byteLength)),
            16
          ).mod(publicKey.n);
        } while (r.compareTo(BigInteger.ONE) <= 0);
        r = forge.util.hexToBytes(r.toString(16));
        var zeros = byteLength - r.length;
        if (zeros > 0) {
          r = forge.util.fillString(String.fromCharCode(0), zeros) + r;
        }
        var encapsulation = publicKey.encrypt(r, "NONE");
        var key = kdf.generate(r, keyLength);
        return { encapsulation, key };
      };
      kem.decrypt = function(privateKey, encapsulation, keyLength) {
        var r = privateKey.decrypt(encapsulation, "NONE");
        return kdf.generate(r, keyLength);
      };
      return kem;
    };
    forge.kem.kdf1 = function(md, digestLength) {
      _createKDF(this, md, 0, digestLength || md.digestLength);
    };
    forge.kem.kdf2 = function(md, digestLength) {
      _createKDF(this, md, 1, digestLength || md.digestLength);
    };
    function _createKDF(kdf, md, counterStart, digestLength) {
      kdf.generate = function(x, length) {
        var key = new forge.util.ByteBuffer();
        var k = Math.ceil(length / digestLength) + counterStart;
        var c = new forge.util.ByteBuffer();
        for (var i = counterStart; i < k; ++i) {
          c.putInt32(i);
          md.start();
          md.update(x + c.getBytes());
          var hash = md.digest();
          key.putBytes(hash.getBytes(digestLength));
        }
        key.truncate(key.length() - length);
        return key.getBytes();
      };
    }
    __name(_createKDF, "_createKDF");
  }
});

// node_modules/node-forge/lib/log.js
var require_log = __commonJS({
  "node_modules/node-forge/lib/log.js"(exports, module) {
    var forge = require_forge();
    require_util();
    module.exports = forge.log = forge.log || {};
    forge.log.levels = [
      "none",
      "error",
      "warning",
      "info",
      "debug",
      "verbose",
      "max"
    ];
    var sLevelInfo = {};
    var sLoggers = [];
    var sConsoleLogger = null;
    forge.log.LEVEL_LOCKED = 1 << 1;
    forge.log.NO_LEVEL_CHECK = 1 << 2;
    forge.log.INTERPOLATE = 1 << 3;
    for (i = 0; i < forge.log.levels.length; ++i) {
      level = forge.log.levels[i];
      sLevelInfo[level] = {
        index: i,
        name: level.toUpperCase()
      };
    }
    var level;
    var i;
    forge.log.logMessage = function(message) {
      var messageLevelIndex = sLevelInfo[message.level].index;
      for (var i2 = 0; i2 < sLoggers.length; ++i2) {
        var logger2 = sLoggers[i2];
        if (logger2.flags & forge.log.NO_LEVEL_CHECK) {
          logger2.f(message);
        } else {
          var loggerLevelIndex = sLevelInfo[logger2.level].index;
          if (messageLevelIndex <= loggerLevelIndex) {
            logger2.f(logger2, message);
          }
        }
      }
    };
    forge.log.prepareStandard = function(message) {
      if (!("standard" in message)) {
        message.standard = sLevelInfo[message.level].name + //' ' + +message.timestamp +
        " [" + message.category + "] " + message.message;
      }
    };
    forge.log.prepareFull = function(message) {
      if (!("full" in message)) {
        var args = [message.message];
        args = args.concat([]);
        message.full = forge.util.format.apply(this, args);
      }
    };
    forge.log.prepareStandardFull = function(message) {
      if (!("standardFull" in message)) {
        forge.log.prepareStandard(message);
        message.standardFull = message.standard;
      }
    };
    if (true) {
      levels = ["error", "warning", "info", "debug", "verbose"];
      for (i = 0; i < levels.length; ++i) {
        (function(level2) {
          forge.log[level2] = function(category, message) {
            var args = Array.prototype.slice.call(arguments).slice(2);
            var msg = {
              timestamp: /* @__PURE__ */ new Date(),
              level: level2,
              category,
              message,
              "arguments": args
              /*standard*/
              /*full*/
              /*fullMessage*/
            };
            forge.log.logMessage(msg);
          };
        })(levels[i]);
      }
    }
    var levels;
    var i;
    forge.log.makeLogger = function(logFunction) {
      var logger2 = {
        flags: 0,
        f: logFunction
      };
      forge.log.setLevel(logger2, "none");
      return logger2;
    };
    forge.log.setLevel = function(logger2, level2) {
      var rval = false;
      if (logger2 && !(logger2.flags & forge.log.LEVEL_LOCKED)) {
        for (var i2 = 0; i2 < forge.log.levels.length; ++i2) {
          var aValidLevel = forge.log.levels[i2];
          if (level2 == aValidLevel) {
            logger2.level = level2;
            rval = true;
            break;
          }
        }
      }
      return rval;
    };
    forge.log.lock = function(logger2, lock2) {
      if (typeof lock2 === "undefined" || lock2) {
        logger2.flags |= forge.log.LEVEL_LOCKED;
      } else {
        logger2.flags &= ~forge.log.LEVEL_LOCKED;
      }
    };
    forge.log.addLogger = function(logger2) {
      sLoggers.push(logger2);
    };
    if (typeof console !== "undefined" && "log" in console) {
      if (console.error && console.warn && console.info && console.debug) {
        levelHandlers = {
          error: console.error,
          warning: console.warn,
          info: console.info,
          debug: console.debug,
          verbose: console.debug
        };
        f = /* @__PURE__ */ __name(function(logger2, message) {
          forge.log.prepareStandard(message);
          var handler = levelHandlers[message.level];
          var args = [message.standard];
          args = args.concat(message["arguments"].slice());
          handler.apply(console, args);
        }, "f");
        logger = forge.log.makeLogger(f);
      } else {
        f = /* @__PURE__ */ __name(function(logger2, message) {
          forge.log.prepareStandardFull(message);
          console.log(message.standardFull);
        }, "f");
        logger = forge.log.makeLogger(f);
      }
      forge.log.setLevel(logger, "debug");
      forge.log.addLogger(logger);
      sConsoleLogger = logger;
    } else {
      console = {
        log: /* @__PURE__ */ __name(function() {
        }, "log")
      };
    }
    var logger;
    var levelHandlers;
    var f;
    if (sConsoleLogger !== null && typeof window !== "undefined" && window.location) {
      query = new URL(window.location.href).searchParams;
      if (query.has("console.level")) {
        forge.log.setLevel(
          sConsoleLogger,
          query.get("console.level").slice(-1)[0]
        );
      }
      if (query.has("console.lock")) {
        lock = query.get("console.lock").slice(-1)[0];
        if (lock == "true") {
          forge.log.lock(sConsoleLogger);
        }
      }
    }
    var query;
    var lock;
    forge.log.consoleLogger = sConsoleLogger;
  }
});

// node_modules/node-forge/lib/md.all.js
var require_md_all = __commonJS({
  "node_modules/node-forge/lib/md.all.js"(exports, module) {
    module.exports = require_md();
    require_md5();
    require_sha1();
    require_sha256();
    require_sha512();
  }
});

// node_modules/node-forge/lib/pkcs7.js
var require_pkcs7 = __commonJS({
  "node_modules/node-forge/lib/pkcs7.js"(exports, module) {
    var forge = require_forge();
    require_aes();
    require_asn1();
    require_des();
    require_oids();
    require_pem();
    require_pkcs7asn1();
    require_random();
    require_util();
    require_x509();
    var asn1 = forge.asn1;
    var p7 = module.exports = forge.pkcs7 = forge.pkcs7 || {};
    p7.messageFromPem = function(pem) {
      var msg = forge.pem.decode(pem)[0];
      if (msg.type !== "PKCS7") {
        var error = new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');
        error.headerType = msg.type;
        throw error;
      }
      if (msg.procType && msg.procType.type === "ENCRYPTED") {
        throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
      }
      var obj = asn1.fromDer(msg.body);
      return p7.messageFromAsn1(obj);
    };
    p7.messageToPem = function(msg, maxline) {
      var pemObj = {
        type: "PKCS7",
        body: asn1.toDer(msg.toAsn1()).getBytes()
      };
      return forge.pem.encode(pemObj, { maxline });
    };
    p7.messageFromAsn1 = function(obj) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, p7.asn1.contentInfoValidator, capture, errors)) {
        var error = new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
        error.errors = errors;
        throw error;
      }
      var contentType = asn1.derToOid(capture.contentType);
      var msg;
      switch (contentType) {
        case forge.pki.oids.envelopedData:
          msg = p7.createEnvelopedData();
          break;
        case forge.pki.oids.encryptedData:
          msg = p7.createEncryptedData();
          break;
        case forge.pki.oids.signedData:
          msg = p7.createSignedData();
          break;
        default:
          throw new Error("Cannot read PKCS#7 message. ContentType with OID " + contentType + " is not (yet) supported.");
      }
      msg.fromAsn1(capture.content.value[0]);
      return msg;
    };
    p7.createSignedData = function() {
      var msg = null;
      msg = {
        type: forge.pki.oids.signedData,
        version: 1,
        certificates: [],
        crls: [],
        // TODO: add json-formatted signer stuff here?
        signers: [],
        // populated during sign()
        digestAlgorithmIdentifiers: [],
        contentInfo: null,
        signerInfos: [],
        fromAsn1: /* @__PURE__ */ __name(function(obj) {
          _fromAsn1(msg, obj, p7.asn1.signedDataValidator);
          msg.certificates = [];
          msg.crls = [];
          msg.digestAlgorithmIdentifiers = [];
          msg.contentInfo = null;
          msg.signerInfos = [];
          if (msg.rawCapture.certificates) {
            var certs = msg.rawCapture.certificates.value;
            for (var i = 0; i < certs.length; ++i) {
              msg.certificates.push(forge.pki.certificateFromAsn1(certs[i]));
            }
          }
        }, "fromAsn1"),
        toAsn1: /* @__PURE__ */ __name(function() {
          if (!msg.contentInfo) {
            msg.sign();
          }
          var certs = [];
          for (var i = 0; i < msg.certificates.length; ++i) {
            certs.push(forge.pki.certificateToAsn1(msg.certificates[i]));
          }
          var crls = [];
          var signedData = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              // Version
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.INTEGER,
                false,
                asn1.integerToDer(msg.version).getBytes()
              ),
              // DigestAlgorithmIdentifiers
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.SET,
                true,
                msg.digestAlgorithmIdentifiers
              ),
              // ContentInfo
              msg.contentInfo
            ])
          ]);
          if (certs.length > 0) {
            signedData.value[0].value.push(
              asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, certs)
            );
          }
          if (crls.length > 0) {
            signedData.value[0].value.push(
              asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, crls)
            );
          }
          signedData.value[0].value.push(
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.SET,
              true,
              msg.signerInfos
            )
          );
          return asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.SEQUENCE,
            true,
            [
              // ContentType
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OID,
                false,
                asn1.oidToDer(msg.type).getBytes()
              ),
              // [0] SignedData
              signedData
            ]
          );
        }, "toAsn1"),
        /**
         * Add (another) entity to list of signers.
         *
         * Note: If authenticatedAttributes are provided, then, per RFC 2315,
         * they must include at least two attributes: content type and
         * message digest. The message digest attribute value will be
         * auto-calculated during signing and will be ignored if provided.
         *
         * Here's an example of providing these two attributes:
         *
         * forge.pkcs7.createSignedData();
         * p7.addSigner({
         *   issuer: cert.issuer.attributes,
         *   serialNumber: cert.serialNumber,
         *   key: privateKey,
         *   digestAlgorithm: forge.pki.oids.sha1,
         *   authenticatedAttributes: [{
         *     type: forge.pki.oids.contentType,
         *     value: forge.pki.oids.data
         *   }, {
         *     type: forge.pki.oids.messageDigest
         *   }]
         * });
         *
         * TODO: Support [subjectKeyIdentifier] as signer's ID.
         *
         * @param signer the signer information:
         *          key the signer's private key.
         *          [certificate] a certificate containing the public key
         *            associated with the signer's private key; use this option as
         *            an alternative to specifying signer.issuer and
         *            signer.serialNumber.
         *          [issuer] the issuer attributes (eg: cert.issuer.attributes).
         *          [serialNumber] the signer's certificate's serial number in
         *           hexadecimal (eg: cert.serialNumber).
         *          [digestAlgorithm] the message digest OID, as a string, to use
         *            (eg: forge.pki.oids.sha1).
         *          [authenticatedAttributes] an optional array of attributes
         *            to also sign along with the content.
         */
        addSigner: /* @__PURE__ */ __name(function(signer) {
          var issuer = signer.issuer;
          var serialNumber = signer.serialNumber;
          if (signer.certificate) {
            var cert = signer.certificate;
            if (typeof cert === "string") {
              cert = forge.pki.certificateFromPem(cert);
            }
            issuer = cert.issuer.attributes;
            serialNumber = cert.serialNumber;
          }
          var key = signer.key;
          if (!key) {
            throw new Error(
              "Could not add PKCS#7 signer; no private key specified."
            );
          }
          if (typeof key === "string") {
            key = forge.pki.privateKeyFromPem(key);
          }
          var digestAlgorithm = signer.digestAlgorithm || forge.pki.oids.sha1;
          switch (digestAlgorithm) {
            case forge.pki.oids.sha1:
            case forge.pki.oids.sha256:
            case forge.pki.oids.sha384:
            case forge.pki.oids.sha512:
            case forge.pki.oids.md5:
              break;
            default:
              throw new Error(
                "Could not add PKCS#7 signer; unknown message digest algorithm: " + digestAlgorithm
              );
          }
          var authenticatedAttributes = signer.authenticatedAttributes || [];
          if (authenticatedAttributes.length > 0) {
            var contentType = false;
            var messageDigest = false;
            for (var i = 0; i < authenticatedAttributes.length; ++i) {
              var attr = authenticatedAttributes[i];
              if (!contentType && attr.type === forge.pki.oids.contentType) {
                contentType = true;
                if (messageDigest) {
                  break;
                }
                continue;
              }
              if (!messageDigest && attr.type === forge.pki.oids.messageDigest) {
                messageDigest = true;
                if (contentType) {
                  break;
                }
                continue;
              }
            }
            if (!contentType || !messageDigest) {
              throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.");
            }
          }
          msg.signers.push({
            key,
            version: 1,
            issuer,
            serialNumber,
            digestAlgorithm,
            signatureAlgorithm: forge.pki.oids.rsaEncryption,
            signature: null,
            authenticatedAttributes,
            unauthenticatedAttributes: []
          });
        }, "addSigner"),
        /**
         * Signs the content.
         * @param options Options to apply when signing:
         *    [detached] boolean. If signing should be done in detached mode. Defaults to false.
         */
        sign: /* @__PURE__ */ __name(function(options) {
          options = options || {};
          if (typeof msg.content !== "object" || msg.contentInfo === null) {
            msg.contentInfo = asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.SEQUENCE,
              true,
              [
                // ContentType
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.OID,
                  false,
                  asn1.oidToDer(forge.pki.oids.data).getBytes()
                )
              ]
            );
            if ("content" in msg) {
              var content;
              if (msg.content instanceof forge.util.ByteBuffer) {
                content = msg.content.bytes();
              } else if (typeof msg.content === "string") {
                content = forge.util.encodeUtf8(msg.content);
              }
              if (options.detached) {
                msg.detachedContent = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false, content);
              } else {
                msg.contentInfo.value.push(
                  // [0] EXPLICIT content
                  asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
                    asn1.create(
                      asn1.Class.UNIVERSAL,
                      asn1.Type.OCTETSTRING,
                      false,
                      content
                    )
                  ])
                );
              }
            }
          }
          if (msg.signers.length === 0) {
            return;
          }
          var mds = addDigestAlgorithmIds();
          addSignerInfos(mds);
        }, "sign"),
        verify: /* @__PURE__ */ __name(function() {
          throw new Error("PKCS#7 signature verification not yet implemented.");
        }, "verify"),
        /**
         * Add a certificate.
         *
         * @param cert the certificate to add.
         */
        addCertificate: /* @__PURE__ */ __name(function(cert) {
          if (typeof cert === "string") {
            cert = forge.pki.certificateFromPem(cert);
          }
          msg.certificates.push(cert);
        }, "addCertificate"),
        /**
         * Add a certificate revokation list.
         *
         * @param crl the certificate revokation list to add.
         */
        addCertificateRevokationList: /* @__PURE__ */ __name(function(crl) {
          throw new Error("PKCS#7 CRL support not yet implemented.");
        }, "addCertificateRevokationList")
      };
      return msg;
      function addDigestAlgorithmIds() {
        var mds = {};
        for (var i = 0; i < msg.signers.length; ++i) {
          var signer = msg.signers[i];
          var oid = signer.digestAlgorithm;
          if (!(oid in mds)) {
            mds[oid] = forge.md[forge.pki.oids[oid]].create();
          }
          if (signer.authenticatedAttributes.length === 0) {
            signer.md = mds[oid];
          } else {
            signer.md = forge.md[forge.pki.oids[oid]].create();
          }
        }
        msg.digestAlgorithmIdentifiers = [];
        for (var oid in mds) {
          msg.digestAlgorithmIdentifiers.push(
            // AlgorithmIdentifier
            asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
              // algorithm
              asn1.create(
                asn1.Class.UNIVERSAL,
                asn1.Type.OID,
                false,
                asn1.oidToDer(oid).getBytes()
              ),
              // parameters (null)
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
            ])
          );
        }
        return mds;
      }
      __name(addDigestAlgorithmIds, "addDigestAlgorithmIds");
      function addSignerInfos(mds) {
        var content;
        if (msg.detachedContent) {
          content = msg.detachedContent;
        } else {
          content = msg.contentInfo.value[1];
          content = content.value[0];
        }
        if (!content) {
          throw new Error(
            "Could not sign PKCS#7 message; there is no content to sign."
          );
        }
        var contentType = asn1.derToOid(msg.contentInfo.value[0].value);
        var bytes = asn1.toDer(content);
        bytes.getByte();
        asn1.getBerValueLength(bytes);
        bytes = bytes.getBytes();
        for (var oid in mds) {
          mds[oid].start().update(bytes);
        }
        var signingTime = /* @__PURE__ */ new Date();
        for (var i = 0; i < msg.signers.length; ++i) {
          var signer = msg.signers[i];
          if (signer.authenticatedAttributes.length === 0) {
            if (contentType !== forge.pki.oids.data) {
              throw new Error(
                "Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data."
              );
            }
          } else {
            signer.authenticatedAttributesAsn1 = asn1.create(
              asn1.Class.CONTEXT_SPECIFIC,
              0,
              true,
              []
            );
            var attrsAsn1 = asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.SET,
              true,
              []
            );
            for (var ai = 0; ai < signer.authenticatedAttributes.length; ++ai) {
              var attr = signer.authenticatedAttributes[ai];
              if (attr.type === forge.pki.oids.messageDigest) {
                attr.value = mds[signer.digestAlgorithm].digest();
              } else if (attr.type === forge.pki.oids.signingTime) {
                if (!attr.value) {
                  attr.value = signingTime;
                }
              }
              attrsAsn1.value.push(_attributeToAsn1(attr));
              signer.authenticatedAttributesAsn1.value.push(_attributeToAsn1(attr));
            }
            bytes = asn1.toDer(attrsAsn1).getBytes();
            signer.md.start().update(bytes);
          }
          signer.signature = signer.key.sign(signer.md, "RSASSA-PKCS1-V1_5");
        }
        msg.signerInfos = _signersToAsn1(msg.signers);
      }
      __name(addSignerInfos, "addSignerInfos");
    };
    p7.createEncryptedData = function() {
      var msg = null;
      msg = {
        type: forge.pki.oids.encryptedData,
        version: 0,
        encryptedContent: {
          algorithm: forge.pki.oids["aes256-CBC"]
        },
        /**
         * Reads an EncryptedData content block (in ASN.1 format)
         *
         * @param obj The ASN.1 representation of the EncryptedData content block
         */
        fromAsn1: /* @__PURE__ */ __name(function(obj) {
          _fromAsn1(msg, obj, p7.asn1.encryptedDataValidator);
        }, "fromAsn1"),
        /**
         * Decrypt encrypted content
         *
         * @param key The (symmetric) key as a byte buffer
         */
        decrypt: /* @__PURE__ */ __name(function(key) {
          if (key !== void 0) {
            msg.encryptedContent.key = key;
          }
          _decryptContent(msg);
        }, "decrypt")
      };
      return msg;
    };
    p7.createEnvelopedData = function() {
      var msg = null;
      msg = {
        type: forge.pki.oids.envelopedData,
        version: 0,
        recipients: [],
        encryptedContent: {
          algorithm: forge.pki.oids["aes256-CBC"]
        },
        /**
         * Reads an EnvelopedData content block (in ASN.1 format)
         *
         * @param obj the ASN.1 representation of the EnvelopedData content block.
         */
        fromAsn1: /* @__PURE__ */ __name(function(obj) {
          var capture = _fromAsn1(msg, obj, p7.asn1.envelopedDataValidator);
          msg.recipients = _recipientsFromAsn1(capture.recipientInfos.value);
        }, "fromAsn1"),
        toAsn1: /* @__PURE__ */ __name(function() {
          return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
            // ContentType
            asn1.create(
              asn1.Class.UNIVERSAL,
              asn1.Type.OID,
              false,
              asn1.oidToDer(msg.type).getBytes()
            ),
            // [0] EnvelopedData
            asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
              asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                // Version
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.INTEGER,
                  false,
                  asn1.integerToDer(msg.version).getBytes()
                ),
                // RecipientInfos
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.SET,
                  true,
                  _recipientsToAsn1(msg.recipients)
                ),
                // EncryptedContentInfo
                asn1.create(
                  asn1.Class.UNIVERSAL,
                  asn1.Type.SEQUENCE,
                  true,
                  _encryptedContentToAsn1(msg.encryptedContent)
                )
              ])
            ])
          ]);
        }, "toAsn1"),
        /**
         * Find recipient by X.509 certificate's issuer.
         *
         * @param cert the certificate with the issuer to look for.
         *
         * @return the recipient object.
         */
        findRecipient: /* @__PURE__ */ __name(function(cert) {
          var sAttr = cert.issuer.attributes;
          for (var i = 0; i < msg.recipients.length; ++i) {
            var r = msg.recipients[i];
            var rAttr = r.issuer;
            if (r.serialNumber !== cert.serialNumber) {
              continue;
            }
            if (rAttr.length !== sAttr.length) {
              continue;
            }
            var match = true;
            for (var j = 0; j < sAttr.length; ++j) {
              if (rAttr[j].type !== sAttr[j].type || rAttr[j].value !== sAttr[j].value) {
                match = false;
                break;
              }
            }
            if (match) {
              return r;
            }
          }
          return null;
        }, "findRecipient"),
        /**
         * Decrypt enveloped content
         *
         * @param recipient The recipient object related to the private key
         * @param privKey The (RSA) private key object
         */
        decrypt: /* @__PURE__ */ __name(function(recipient, privKey) {
          if (msg.encryptedContent.key === void 0 && recipient !== void 0 && privKey !== void 0) {
            switch (recipient.encryptedContent.algorithm) {
              case forge.pki.oids.rsaEncryption:
              case forge.pki.oids.desCBC:
                var key = privKey.decrypt(recipient.encryptedContent.content);
                msg.encryptedContent.key = forge.util.createBuffer(key);
                break;
              default:
                throw new Error("Unsupported asymmetric cipher, OID " + recipient.encryptedContent.algorithm);
            }
          }
          _decryptContent(msg);
        }, "decrypt"),
        /**
         * Add (another) entity to list of recipients.
         *
         * @param cert The certificate of the entity to add.
         */
        addRecipient: /* @__PURE__ */ __name(function(cert) {
          msg.recipients.push({
            version: 0,
            issuer: cert.issuer.attributes,
            serialNumber: cert.serialNumber,
            encryptedContent: {
              // We simply assume rsaEncryption here, since forge.pki only
              // supports RSA so far.  If the PKI module supports other
              // ciphers one day, we need to modify this one as well.
              algorithm: forge.pki.oids.rsaEncryption,
              key: cert.publicKey
            }
          });
        }, "addRecipient"),
        /**
         * Encrypt enveloped content.
         *
         * This function supports two optional arguments, cipher and key, which
         * can be used to influence symmetric encryption.  Unless cipher is
         * provided, the cipher specified in encryptedContent.algorithm is used
         * (defaults to AES-256-CBC).  If no key is provided, encryptedContent.key
         * is (re-)used.  If that one's not set, a random key will be generated
         * automatically.
         *
         * @param [key] The key to be used for symmetric encryption.
         * @param [cipher] The OID of the symmetric cipher to use.
         */
        encrypt: /* @__PURE__ */ __name(function(key, cipher) {
          if (msg.encryptedContent.content === void 0) {
            cipher = cipher || msg.encryptedContent.algorithm;
            key = key || msg.encryptedContent.key;
            var keyLen, ivLen, ciphFn;
            switch (cipher) {
              case forge.pki.oids["aes128-CBC"]:
                keyLen = 16;
                ivLen = 16;
                ciphFn = forge.aes.createEncryptionCipher;
                break;
              case forge.pki.oids["aes192-CBC"]:
                keyLen = 24;
                ivLen = 16;
                ciphFn = forge.aes.createEncryptionCipher;
                break;
              case forge.pki.oids["aes256-CBC"]:
                keyLen = 32;
                ivLen = 16;
                ciphFn = forge.aes.createEncryptionCipher;
                break;
              case forge.pki.oids["des-EDE3-CBC"]:
                keyLen = 24;
                ivLen = 8;
                ciphFn = forge.des.createEncryptionCipher;
                break;
              default:
                throw new Error("Unsupported symmetric cipher, OID " + cipher);
            }
            if (key === void 0) {
              key = forge.util.createBuffer(forge.random.getBytes(keyLen));
            } else if (key.length() != keyLen) {
              throw new Error("Symmetric key has wrong length; got " + key.length() + " bytes, expected " + keyLen + ".");
            }
            msg.encryptedContent.algorithm = cipher;
            msg.encryptedContent.key = key;
            msg.encryptedContent.parameter = forge.util.createBuffer(
              forge.random.getBytes(ivLen)
            );
            var ciph = ciphFn(key);
            ciph.start(msg.encryptedContent.parameter.copy());
            ciph.update(msg.content);
            if (!ciph.finish()) {
              throw new Error("Symmetric encryption failed.");
            }
            msg.encryptedContent.content = ciph.output;
          }
          for (var i = 0; i < msg.recipients.length; ++i) {
            var recipient = msg.recipients[i];
            if (recipient.encryptedContent.content !== void 0) {
              continue;
            }
            switch (recipient.encryptedContent.algorithm) {
              case forge.pki.oids.rsaEncryption:
                recipient.encryptedContent.content = recipient.encryptedContent.key.encrypt(
                  msg.encryptedContent.key.data
                );
                break;
              default:
                throw new Error("Unsupported asymmetric cipher, OID " + recipient.encryptedContent.algorithm);
            }
          }
        }, "encrypt")
      };
      return msg;
    };
    function _recipientFromAsn1(obj) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, p7.asn1.recipientInfoValidator, capture, errors)) {
        var error = new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
        error.errors = errors;
        throw error;
      }
      return {
        version: capture.version.charCodeAt(0),
        issuer: forge.pki.RDNAttributesAsArray(capture.issuer),
        serialNumber: forge.util.createBuffer(capture.serial).toHex(),
        encryptedContent: {
          algorithm: asn1.derToOid(capture.encAlgorithm),
          parameter: capture.encParameter ? capture.encParameter.value : void 0,
          content: capture.encKey
        }
      };
    }
    __name(_recipientFromAsn1, "_recipientFromAsn1");
    function _recipientToAsn1(obj) {
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // Version
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          asn1.integerToDer(obj.version).getBytes()
        ),
        // IssuerAndSerialNumber
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // Name
          forge.pki.distinguishedNameToAsn1({ attributes: obj.issuer }),
          // Serial
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            forge.util.hexToBytes(obj.serialNumber)
          )
        ]),
        // KeyEncryptionAlgorithmIdentifier
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // Algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(obj.encryptedContent.algorithm).getBytes()
          ),
          // Parameter, force NULL, only RSA supported for now.
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
        ]),
        // EncryptedKey
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OCTETSTRING,
          false,
          obj.encryptedContent.content
        )
      ]);
    }
    __name(_recipientToAsn1, "_recipientToAsn1");
    function _recipientsFromAsn1(infos) {
      var ret = [];
      for (var i = 0; i < infos.length; ++i) {
        ret.push(_recipientFromAsn1(infos[i]));
      }
      return ret;
    }
    __name(_recipientsFromAsn1, "_recipientsFromAsn1");
    function _recipientsToAsn1(recipients) {
      var ret = [];
      for (var i = 0; i < recipients.length; ++i) {
        ret.push(_recipientToAsn1(recipients[i]));
      }
      return ret;
    }
    __name(_recipientsToAsn1, "_recipientsToAsn1");
    function _signerToAsn1(obj) {
      var rval = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // version
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.INTEGER,
          false,
          asn1.integerToDer(obj.version).getBytes()
        ),
        // issuerAndSerialNumber
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // name
          forge.pki.distinguishedNameToAsn1({ attributes: obj.issuer }),
          // serial
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.INTEGER,
            false,
            forge.util.hexToBytes(obj.serialNumber)
          )
        ]),
        // digestAlgorithm
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(obj.digestAlgorithm).getBytes()
          ),
          // parameters (null)
          asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
        ])
      ]);
      if (obj.authenticatedAttributesAsn1) {
        rval.value.push(obj.authenticatedAttributesAsn1);
      }
      rval.value.push(asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // algorithm
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(obj.signatureAlgorithm).getBytes()
        ),
        // parameters (null)
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, false, "")
      ]));
      rval.value.push(asn1.create(
        asn1.Class.UNIVERSAL,
        asn1.Type.OCTETSTRING,
        false,
        obj.signature
      ));
      if (obj.unauthenticatedAttributes.length > 0) {
        var attrsAsn1 = asn1.create(asn1.Class.CONTEXT_SPECIFIC, 1, true, []);
        for (var i = 0; i < obj.unauthenticatedAttributes.length; ++i) {
          var attr = obj.unauthenticatedAttributes[i];
          attrsAsn1.values.push(_attributeToAsn1(attr));
        }
        rval.value.push(attrsAsn1);
      }
      return rval;
    }
    __name(_signerToAsn1, "_signerToAsn1");
    function _signersToAsn1(signers) {
      var ret = [];
      for (var i = 0; i < signers.length; ++i) {
        ret.push(_signerToAsn1(signers[i]));
      }
      return ret;
    }
    __name(_signersToAsn1, "_signersToAsn1");
    function _attributeToAsn1(attr) {
      var value;
      if (attr.type === forge.pki.oids.contentType) {
        value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(attr.value).getBytes()
        );
      } else if (attr.type === forge.pki.oids.messageDigest) {
        value = asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OCTETSTRING,
          false,
          attr.value.bytes()
        );
      } else if (attr.type === forge.pki.oids.signingTime) {
        var jan_1_1950 = /* @__PURE__ */ new Date("1950-01-01T00:00:00Z");
        var jan_1_2050 = /* @__PURE__ */ new Date("2050-01-01T00:00:00Z");
        var date = attr.value;
        if (typeof date === "string") {
          var timestamp = Date.parse(date);
          if (!isNaN(timestamp)) {
            date = new Date(timestamp);
          } else if (date.length === 13) {
            date = asn1.utcTimeToDate(date);
          } else {
            date = asn1.generalizedTimeToDate(date);
          }
        }
        if (date >= jan_1_1950 && date < jan_1_2050) {
          value = asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.UTCTIME,
            false,
            asn1.dateToUtcTime(date)
          );
        } else {
          value = asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.GENERALIZEDTIME,
            false,
            asn1.dateToGeneralizedTime(date)
          );
        }
      }
      return asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        // AttributeType
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(attr.type).getBytes()
        ),
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SET, true, [
          // AttributeValue
          value
        ])
      ]);
    }
    __name(_attributeToAsn1, "_attributeToAsn1");
    function _encryptedContentToAsn1(ec) {
      return [
        // ContentType, always Data for the moment
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(forge.pki.oids.data).getBytes()
        ),
        // ContentEncryptionAlgorithmIdentifier
        asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
          // Algorithm
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OID,
            false,
            asn1.oidToDer(ec.algorithm).getBytes()
          ),
          // Parameters (IV)
          !ec.parameter ? void 0 : asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OCTETSTRING,
            false,
            ec.parameter.getBytes()
          )
        ]),
        // [0] EncryptedContent
        asn1.create(asn1.Class.CONTEXT_SPECIFIC, 0, true, [
          asn1.create(
            asn1.Class.UNIVERSAL,
            asn1.Type.OCTETSTRING,
            false,
            ec.content.getBytes()
          )
        ])
      ];
    }
    __name(_encryptedContentToAsn1, "_encryptedContentToAsn1");
    function _fromAsn1(msg, obj, validator) {
      var capture = {};
      var errors = [];
      if (!asn1.validate(obj, validator, capture, errors)) {
        var error = new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
        error.errors = error;
        throw error;
      }
      var contentType = asn1.derToOid(capture.contentType);
      if (contentType !== forge.pki.oids.data) {
        throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
      }
      if (capture.encryptedContent) {
        var content = "";
        if (forge.util.isArray(capture.encryptedContent)) {
          for (var i = 0; i < capture.encryptedContent.length; ++i) {
            if (capture.encryptedContent[i].type !== asn1.Type.OCTETSTRING) {
              throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
            }
            content += capture.encryptedContent[i].value;
          }
        } else {
          content = capture.encryptedContent;
        }
        msg.encryptedContent = {
          algorithm: asn1.derToOid(capture.encAlgorithm),
          parameter: forge.util.createBuffer(capture.encParameter.value),
          content: forge.util.createBuffer(content)
        };
      }
      if (capture.content) {
        var content = "";
        if (forge.util.isArray(capture.content)) {
          for (var i = 0; i < capture.content.length; ++i) {
            if (capture.content[i].type !== asn1.Type.OCTETSTRING) {
              throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
            }
            content += capture.content[i].value;
          }
        } else {
          content = capture.content;
        }
        msg.content = forge.util.createBuffer(content);
      }
      msg.version = capture.version.charCodeAt(0);
      msg.rawCapture = capture;
      return capture;
    }
    __name(_fromAsn1, "_fromAsn1");
    function _decryptContent(msg) {
      if (msg.encryptedContent.key === void 0) {
        throw new Error("Symmetric key not available.");
      }
      if (msg.content === void 0) {
        var ciph;
        switch (msg.encryptedContent.algorithm) {
          case forge.pki.oids["aes128-CBC"]:
          case forge.pki.oids["aes192-CBC"]:
          case forge.pki.oids["aes256-CBC"]:
            ciph = forge.aes.createDecryptionCipher(msg.encryptedContent.key);
            break;
          case forge.pki.oids["desCBC"]:
          case forge.pki.oids["des-EDE3-CBC"]:
            ciph = forge.des.createDecryptionCipher(msg.encryptedContent.key);
            break;
          default:
            throw new Error("Unsupported symmetric cipher, OID " + msg.encryptedContent.algorithm);
        }
        ciph.start(msg.encryptedContent.parameter);
        ciph.update(msg.encryptedContent.content);
        if (!ciph.finish()) {
          throw new Error("Symmetric decryption failed.");
        }
        msg.content = ciph.output;
      }
    }
    __name(_decryptContent, "_decryptContent");
  }
});

// node_modules/node-forge/lib/ssh.js
var require_ssh = __commonJS({
  "node_modules/node-forge/lib/ssh.js"(exports, module) {
    var forge = require_forge();
    require_aes();
    require_hmac();
    require_md5();
    require_sha1();
    require_util();
    var ssh = module.exports = forge.ssh = forge.ssh || {};
    ssh.privateKeyToPutty = function(privateKey, passphrase, comment) {
      comment = comment || "";
      passphrase = passphrase || "";
      var algorithm = "ssh-rsa";
      var encryptionAlgorithm = passphrase === "" ? "none" : "aes256-cbc";
      var ppk = "PuTTY-User-Key-File-2: " + algorithm + "\r\n";
      ppk += "Encryption: " + encryptionAlgorithm + "\r\n";
      ppk += "Comment: " + comment + "\r\n";
      var pubbuffer = forge.util.createBuffer();
      _addStringToBuffer(pubbuffer, algorithm);
      _addBigIntegerToBuffer(pubbuffer, privateKey.e);
      _addBigIntegerToBuffer(pubbuffer, privateKey.n);
      var pub = forge.util.encode64(pubbuffer.bytes(), 64);
      var length = Math.floor(pub.length / 66) + 1;
      ppk += "Public-Lines: " + length + "\r\n";
      ppk += pub;
      var privbuffer = forge.util.createBuffer();
      _addBigIntegerToBuffer(privbuffer, privateKey.d);
      _addBigIntegerToBuffer(privbuffer, privateKey.p);
      _addBigIntegerToBuffer(privbuffer, privateKey.q);
      _addBigIntegerToBuffer(privbuffer, privateKey.qInv);
      var priv;
      if (!passphrase) {
        priv = forge.util.encode64(privbuffer.bytes(), 64);
      } else {
        var encLen = privbuffer.length() + 16 - 1;
        encLen -= encLen % 16;
        var padding = _sha1(privbuffer.bytes());
        padding.truncate(padding.length() - encLen + privbuffer.length());
        privbuffer.putBuffer(padding);
        var aeskey = forge.util.createBuffer();
        aeskey.putBuffer(_sha1("\0\0\0\0", passphrase));
        aeskey.putBuffer(_sha1("\0\0\0", passphrase));
        var cipher = forge.aes.createEncryptionCipher(aeskey.truncate(8), "CBC");
        cipher.start(forge.util.createBuffer().fillWithByte(0, 16));
        cipher.update(privbuffer.copy());
        cipher.finish();
        var encrypted = cipher.output;
        encrypted.truncate(16);
        priv = forge.util.encode64(encrypted.bytes(), 64);
      }
      length = Math.floor(priv.length / 66) + 1;
      ppk += "\r\nPrivate-Lines: " + length + "\r\n";
      ppk += priv;
      var mackey = _sha1("putty-private-key-file-mac-key", passphrase);
      var macbuffer = forge.util.createBuffer();
      _addStringToBuffer(macbuffer, algorithm);
      _addStringToBuffer(macbuffer, encryptionAlgorithm);
      _addStringToBuffer(macbuffer, comment);
      macbuffer.putInt32(pubbuffer.length());
      macbuffer.putBuffer(pubbuffer);
      macbuffer.putInt32(privbuffer.length());
      macbuffer.putBuffer(privbuffer);
      var hmac = forge.hmac.create();
      hmac.start("sha1", mackey);
      hmac.update(macbuffer.bytes());
      ppk += "\r\nPrivate-MAC: " + hmac.digest().toHex() + "\r\n";
      return ppk;
    };
    ssh.publicKeyToOpenSSH = function(key, comment) {
      var type = "ssh-rsa";
      comment = comment || "";
      var buffer = forge.util.createBuffer();
      _addStringToBuffer(buffer, type);
      _addBigIntegerToBuffer(buffer, key.e);
      _addBigIntegerToBuffer(buffer, key.n);
      return type + " " + forge.util.encode64(buffer.bytes()) + " " + comment;
    };
    ssh.privateKeyToOpenSSH = function(privateKey, passphrase) {
      if (!passphrase) {
        return forge.pki.privateKeyToPem(privateKey);
      }
      return forge.pki.encryptRsaPrivateKey(
        privateKey,
        passphrase,
        { legacy: true, algorithm: "aes128" }
      );
    };
    ssh.getPublicKeyFingerprint = function(key, options) {
      options = options || {};
      var md = options.md || forge.md.md5.create();
      var type = "ssh-rsa";
      var buffer = forge.util.createBuffer();
      _addStringToBuffer(buffer, type);
      _addBigIntegerToBuffer(buffer, key.e);
      _addBigIntegerToBuffer(buffer, key.n);
      md.start();
      md.update(buffer.getBytes());
      var digest = md.digest();
      if (options.encoding === "hex") {
        var hex = digest.toHex();
        if (options.delimiter) {
          return hex.match(/.{2}/g).join(options.delimiter);
        }
        return hex;
      } else if (options.encoding === "binary") {
        return digest.getBytes();
      } else if (options.encoding) {
        throw new Error('Unknown encoding "' + options.encoding + '".');
      }
      return digest;
    };
    function _addBigIntegerToBuffer(buffer, val) {
      var hexVal = val.toString(16);
      if (hexVal[0] >= "8") {
        hexVal = "00" + hexVal;
      }
      var bytes = forge.util.hexToBytes(hexVal);
      buffer.putInt32(bytes.length);
      buffer.putBytes(bytes);
    }
    __name(_addBigIntegerToBuffer, "_addBigIntegerToBuffer");
    function _addStringToBuffer(buffer, val) {
      buffer.putInt32(val.length);
      buffer.putString(val);
    }
    __name(_addStringToBuffer, "_addStringToBuffer");
    function _sha1() {
      var sha = forge.md.sha1.create();
      var num = arguments.length;
      for (var i = 0; i < num; ++i) {
        sha.update(arguments[i]);
      }
      return sha.digest();
    }
    __name(_sha1, "_sha1");
  }
});

// node_modules/node-forge/lib/index.js
var require_lib = __commonJS({
  "node_modules/node-forge/lib/index.js"(exports, module) {
    module.exports = require_forge();
    require_aes();
    require_aesCipherSuites();
    require_asn1();
    require_cipher();
    require_des();
    require_ed25519();
    require_hmac();
    require_kem();
    require_log();
    require_md_all();
    require_mgf1();
    require_pbkdf2();
    require_pem();
    require_pkcs1();
    require_pkcs12();
    require_pkcs7();
    require_pki();
    require_prime();
    require_prng();
    require_pss();
    require_random();
    require_rc2();
    require_ssh();
    require_tls();
    require_util();
  }
});

// node_modules/@signpdf/signer-p12/dist/P12Signer.js
var require_P12Signer = __commonJS({
  "node_modules/@signpdf/signer-p12/dist/P12Signer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.P12Signer = void 0;
    var _nodeForge = _interopRequireDefault(require_lib());
    var _utils = require_dist();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    __name(_interopRequireDefault, "_interopRequireDefault");
    var P12Signer2 = class extends _utils.Signer {
      static {
        __name(this, "P12Signer");
      }
      /**
       * @param {Buffer | Uint8Array | string} p12Buffer
       * @param {SignerOptions} additionalOptions
       */
      constructor(p12Buffer, additionalOptions = {}) {
        super();
        const buffer = (0, _utils.convertBuffer)(p12Buffer, "p12 certificate");
        this.options = {
          asn1StrictParsing: false,
          passphrase: "",
          ...additionalOptions
        };
        this.cert = _nodeForge.default.util.createBuffer(buffer.toString("binary"));
      }
      /**
       * @param {Buffer} pdfBuffer
       * @param {Date | undefined} signingTime
       * @returns {Promise<Buffer>}
       */
      async sign(pdfBuffer, signingTime = void 0) {
        if (!(pdfBuffer instanceof Buffer)) {
          throw new _utils.SignPdfError("PDF expected as Buffer.", _utils.SignPdfError.TYPE_INPUT);
        }
        const p12Asn1 = _nodeForge.default.asn1.fromDer(this.cert);
        const p12 = _nodeForge.default.pkcs12.pkcs12FromAsn1(p12Asn1, this.options.asn1StrictParsing, this.options.passphrase);
        const certBags = p12.getBags({
          bagType: _nodeForge.default.pki.oids.certBag
        })[_nodeForge.default.pki.oids.certBag];
        const keyBags = p12.getBags({
          bagType: _nodeForge.default.pki.oids.pkcs8ShroudedKeyBag
        })[_nodeForge.default.pki.oids.pkcs8ShroudedKeyBag];
        const privateKey = keyBags[0].key;
        const p7 = _nodeForge.default.pkcs7.createSignedData();
        p7.content = _nodeForge.default.util.createBuffer(pdfBuffer.toString("binary"));
        let certificate;
        Object.keys(certBags).forEach((i) => {
          const {
            publicKey
          } = certBags[i].cert;
          p7.addCertificate(certBags[i].cert);
          if (privateKey.n.compareTo(publicKey.n) === 0 && privateKey.e.compareTo(publicKey.e) === 0) {
            certificate = certBags[i].cert;
          }
        });
        if (typeof certificate === "undefined") {
          throw new _utils.SignPdfError("Failed to find a certificate that matches the private key.", _utils.SignPdfError.TYPE_INPUT);
        }
        p7.addSigner({
          key: privateKey,
          certificate,
          digestAlgorithm: _nodeForge.default.pki.oids.sha256,
          authenticatedAttributes: [{
            type: _nodeForge.default.pki.oids.contentType,
            value: _nodeForge.default.pki.oids.data
          }, {
            type: _nodeForge.default.pki.oids.signingTime,
            // value can also be auto-populated at signing time
            value: signingTime !== null && signingTime !== void 0 ? signingTime : /* @__PURE__ */ new Date()
          }, {
            type: _nodeForge.default.pki.oids.messageDigest
            // value will be auto-populated at signing time
          }]
        });
        p7.sign({
          detached: true
        });
        return Buffer.from(_nodeForge.default.asn1.toDer(p7.toAsn1()).getBytes(), "binary");
      }
    };
    exports.P12Signer = P12Signer2;
  }
});

// src/index.js
var signpdfPkg = __toESM(require_signpdf(), 1);
var placeholderPkg = __toESM(require_plainAddPlaceholder(), 1);
var signerP12Pkg = __toESM(require_P12Signer(), 1);
import { Buffer as Buffer2 } from "node:buffer";
var SESSION_TTL_DEFAULT_SECONDS = 21600;
var WORKER_STORAGE_ROUTE_PREFIX = "/files/";
var WORKER_STORAGE_CACHE_CONTROL = "public, max-age=31536000, immutable";
var LOCAL_ACTIONS = /* @__PURE__ */ new Set([
  "login",
  "logout",
  "me",
  "first_login_keep",
  "first_login_update_password",
  "self_update_password",
  "get_data",
  "create_record",
  "update_record",
  "delete_record",
  "get_doctor_patients",
  "get_patient_profile",
  "get_history",
  "save_history",
  "get_patient_appointments",
  "get_dashboard_stats",
  "get_agenda",
  "get_agenda_month_summary",
  "get_week_appointments",
  "get_service_config",
  "save_service_full",
  "delete_service_full",
  "add_service",
  "update_service",
  "delete_service",
  "save_diagnosis_advanced",
  "get_diagnosis_history",
  "get_diagnosis_report",
  "delete_diagnosis_asset",
  "delete_diagnosis",
  "delete_bulk_diagnosis",
  "get_patient_evolution",
  "save_patient_evolution",
  "delete_patient_evolution",
  "delete_bulk_patient_evolution",
  "get_services",
  "get_taken_slots",
  "schedule_appointment",
  "reschedule_appointment",
  "update_appt_status",
  "delete_cita",
  "delete_bulk_citas",
  "self_update_patient_profile",
  "self_update_admin_profile",
  "get_my_doctor_info",
  "set_my_vacation",
  "get_my_vacation",
  "get_my_doctor_vacation",
  "get_file_base64",
  "save_promotion",
  "get_active_promotion",
  "get_promo_list",
  "delete_promotion",
  "save_infographic_post",
  "get_infographic_posts_admin",
  "delete_infographic_post",
  "get_patient_infographics",
  "superadmin_get_data",
  "superadmin_update_doctor",
  "superadmin_create_doctor",
  "superadmin_delete_doctor",
  "superadmin_assign_patient_doctor",
  "superadmin_update_patient_password",
  "superadmin_update_patient_management",
  "superadmin_delete_patient",
  "health",
  "ping",
  "get_p12_status",
  "upload_p12",
  "delete_p12",
  "sign_existing_diagnosis_asset"
]);
var index_default = {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (request.method === "OPTIONS") {
        return buildPreflightResponse(request, env);
      }
      if (request.method === "GET") {
        return handleGet(request, env, url);
      }
      if (request.method === "POST") {
        return handlePost(request, env, url);
      }
      return jsonResponse(
        request,
        env,
        { success: false, message: "Metodo no permitido." },
        405
      );
    } catch (error) {
      return jsonResponse(
        request,
        env,
        {
          success: false,
          message: "Error inesperado en el Worker.",
          detail: toErrorMessage(error)
        },
        500
      );
    }
  }
};
async function handleGet(request, env, url) {
  const pathname = normalizePath_(url.pathname);
  if (pathname.indexOf(WORKER_STORAGE_ROUTE_PREFIX) === 0) {
    return handleGetStoredAsset_(request, env, pathname);
  }
  const action = normalizeText_(url.searchParams.get("action"));
  if (pathname === "/health" || action === "health" || action === "ping" || !pathname || pathname === "/") {
    const target = String(env.APPS_SCRIPT_API_URL || "").trim();
    return jsonResponse(request, env, {
      success: true,
      method: "GET",
      service: "VIDAFEM Cloudflare Worker API",
      backend: "worker",
      generated_at: (/* @__PURE__ */ new Date()).toISOString(),
      supabase_ready: !!String(env.SUPABASE_URL || "").trim() && !!String(env.SUPABASE_SERVICE_ROLE_KEY || "").trim(),
      r2_ready: hasWorkerStorageBinding_(env),
      proxy_ready: !!target,
      proxy_target: target ? maskUrlForHealth_(target) : ""
    });
  }
  return jsonResponse(request, env, { success: false, message: "Ruta no encontrada." }, 404);
}
__name(handleGet, "handleGet");
async function handleGetStoredAsset_(request, env, pathname) {
  const bucket = getWorkerStorageBucket_(env);
  if (!bucket) {
    return jsonResponse(request, env, { success: false, message: "Cloudflare R2 no esta configurado en el Worker." }, 500);
  }
  const objectKey = decodeStorageObjectPath_(String(pathname || "").substring(WORKER_STORAGE_ROUTE_PREFIX.length));
  if (!objectKey) {
    return jsonResponse(request, env, { success: false, message: "Archivo no encontrado." }, 404);
  }
  let object = null;
  try {
    object = await bucket.get(objectKey);
  } catch (error) {
    return jsonResponse(request, env, { success: false, message: "No se pudo leer el archivo almacenado." }, 500);
  }
  if (!object) {
    return jsonResponse(request, env, { success: false, message: "Archivo no encontrado." }, 404);
  }
  const headers = buildCorsHeaders_(request, env);
  if (typeof object.writeHttpMetadata === "function") {
    object.writeHttpMetadata(headers);
  }
  if (!headers.get("content-type")) {
    headers.set("content-type", "application/octet-stream");
  }
  if (!headers.get("cache-control")) {
    headers.set("cache-control", WORKER_STORAGE_CACHE_CONTROL);
  }
  if ((headers.get("content-type") || "").indexOf("application/pdf") === 0 && !headers.get("content-disposition")) {
    headers.set("content-disposition", "inline");
  }
  if (object.httpEtag) headers.set("etag", object.httpEtag);
  return new Response(object.body, {
    status: 200,
    headers
  });
}
__name(handleGetStoredAsset_, "handleGetStoredAsset_");
async function handlePost(request, env, url) {
  const body = await readJsonBody_(request);
  if (!body || typeof body !== "object") {
    return jsonResponse(request, env, { success: false, message: "JSON invalido." }, 400);
  }
  const action = normalizeText_(body.action).toLowerCase();
  if (!action) {
    return jsonResponse(request, env, { success: false, message: "Falta action." }, 400);
  }
  if (LOCAL_ACTIONS.has(action)) {
    const response = await handleLocalAction_(action, body, env, url);
    return jsonResponse(request, env, response.payload, response.status);
  }
  const proxied = await proxyToAppsScript_(body, env);
  return jsonResponse(request, env, proxied.payload, proxied.status);
}
__name(handlePost, "handlePost");
async function handleLocalAction_(action, body, env, url) {
  switch (action) {
    case "login":
      return handleLogin_(body, env);
    case "logout":
      return handleLogout_(body, env);
    case "me":
      return handleMe_(body, env);
    case "first_login_keep":
      return handleFirstLoginKeep_(body, env);
    case "first_login_update_password":
      return handleFirstLoginUpdatePassword_(body, env);
    case "self_update_password":
      return handleSelfUpdatePassword_(body, env);
    case "get_data":
      return handleGetData_(body, env);
    case "create_record":
      return handleCreateRecord_(body, env);
    case "update_record":
      return handleUpdateRecord_(body, env);
    case "delete_record":
      return handleDeleteRecord_(body, env);
    case "get_doctor_patients":
      return handleGetDoctorPatients_(body, env);
    case "get_patient_profile":
      return handleGetPatientProfile_(body, env);
    case "get_history":
      return handleGetHistory_(body, env);
    case "save_history":
      return handleSaveHistory_(body, env);
    case "get_patient_appointments":
      return handleGetPatientAppointments_(body, env);
    case "get_dashboard_stats":
      return handleGetDashboardStats_(body, env);
    case "get_agenda":
      return handleGetAgenda_(body, env);
    case "get_agenda_month_summary":
      return handleGetAgendaMonthSummary_(body, env);
    case "get_week_appointments":
      return handleGetWeekAppointments_(body, env);
    case "get_service_config":
      return handleGetServiceConfig_(body, env);
    case "save_service_full":
      return handleSaveServiceFull_(body, env);
    case "delete_service_full":
      return handleDeleteServiceFull_(body, env);
    case "add_service":
      return handleAddService_(body, env);
    case "update_service":
      return handleUpdateService_(body, env);
    case "delete_service":
      return handleDeleteServiceById_(body, env);
    case "save_diagnosis_advanced":
      return handleSaveDiagnosisAdvanced_(body, env, url);
    case "get_diagnosis_history":
      return handleGetDiagnosisHistory_(body, env);
    case "get_diagnosis_report":
      return handleGetDiagnosisReport_(body, env);
    case "delete_diagnosis_asset":
      return handleDeleteDiagnosisAsset_(body, env);
    case "delete_diagnosis":
      return handleDeleteDiagnosis_(body, env);
    case "delete_bulk_diagnosis":
      return handleDeleteBulkDiagnosis_(body, env);
    case "get_patient_evolution":
      return handleGetPatientEvolution_(body, env);
    case "save_patient_evolution":
      return handleSavePatientEvolution_(body, env);
    case "delete_patient_evolution":
      return handleDeletePatientEvolution_(body, env);
    case "delete_bulk_patient_evolution":
      return handleDeleteBulkPatientEvolution_(body, env);
    case "get_services":
      return handleGetServices_(body, env);
    case "get_taken_slots":
      return handleGetTakenSlots_(body, env);
    case "schedule_appointment":
      return handleScheduleAppointment_(body, env);
    case "reschedule_appointment":
      return handleRescheduleAppointment_(body, env);
    case "update_appt_status":
      return handleUpdateApptStatus_(body, env);
    case "delete_cita":
      return handleDeleteCita_(body, env);
    case "delete_bulk_citas":
      return handleDeleteBulkCitas_(body, env);
    case "self_update_patient_profile":
      return handleSelfUpdatePatientProfile_(body, env);
    case "self_update_admin_profile":
      return handleSelfUpdateAdminProfile_(body, env);
    case "get_my_doctor_info":
      return handleGetMyDoctorInfo_(body, env);
    case "set_my_vacation":
      return handleSetMyVacation_(body, env);
    case "get_my_vacation":
      return handleGetMyVacation_(body, env);
    case "get_my_doctor_vacation":
      return handleGetMyDoctorVacation_(body, env);
    case "get_file_base64":
      return handleGetFileBase64_(body, env);
    case "save_promotion":
      return handleSavePromotion_(body, env);
    case "get_active_promotion":
      return handleGetActivePromotion_(body, env);
    case "get_promo_list":
      return handleGetPromoList_(body, env);
    case "delete_promotion":
      return handleDeletePromotion_(body, env);
    case "save_infographic_post":
      return handleSaveInfographicPost_(body, env, url);
    case "get_infographic_posts_admin":
      return handleGetInfographicPostsAdmin_(body, env);
    case "delete_infographic_post":
      return handleDeleteInfographicPost_(body, env);
    case "get_patient_infographics":
      return handleGetPatientInfographics_(body, env);
    case "superadmin_get_data":
      return handleSuperadminGetData_(body, env);
    case "superadmin_update_doctor":
      return handleSuperadminUpdateDoctor_(body, env);
    case "superadmin_create_doctor":
      return handleSuperadminCreateDoctor_(body, env);
    case "superadmin_delete_doctor":
      return handleSuperadminDeleteDoctor_(body, env);
    case "superadmin_assign_patient_doctor":
      return handleSuperadminAssignPatientDoctor_(body, env);
    case "superadmin_update_patient_password":
      return handleSuperadminUpdatePatientPassword_(body, env);
    case "superadmin_update_patient_management":
      return handleSuperadminUpdatePatientManagement_(body, env);
    case "superadmin_delete_patient":
      return handleSuperadminDeletePatient_(body, env);
    case "health":
    case "ping":
      return {
        status: 200,
        payload: {
          success: true,
          backend: "worker",
          generated_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
    case "get_p12_status":
      return handleGetP12Status_(body, env);
    case "upload_p12":
      return handleUploadP12_(body, env);
    case "delete_p12":
      return handleDeleteP12_(body, env);
    case "sign_existing_diagnosis_asset":
      return handleSignExistingDiagnosisAsset_(body, env, url);
    default:
      return {
        status: 501,
        payload: { success: false, message: "Accion no implementada en el Worker." }
      };
  }
}
__name(handleLocalAction_, "handleLocalAction_");
async function handleLogin_(body, env) {
  try {
    assertSupabaseEnv_(env);
  } catch (error) {
    return errorResult_(500, toErrorMessage(error));
  }
  const username = normalizeText_(body.usuario);
  const usernameLower = normalizeLower_(username);
  const usernameDigits = normalizeDigits_(username);
  const looksNumeric = !!username && /^\d+$/.test(username);
  const canBeCedula = usernameDigits.length >= 8;
  const patientCandidate = canBeCedula ? await findPatientByCedula_(env, usernameDigits) : null;
  if (looksNumeric && patientCandidate && await verifyPassword_(body.password, patientCandidate.password)) {
    await maybeUpgradePasswordHash_(env, "paciente", patientCandidate, body.password);
    return buildLoginResult_("paciente", patientCandidate, env);
  }
  const superadmin = await findSuperadminByUser_(env, usernameLower);
  if (superadmin && await verifyPassword_(body.password, superadmin.password)) {
    await maybeUpgradePasswordHash_(env, "superadmin", superadmin, body.password);
    return buildLoginResult_("superadmin", superadmin, env);
  }
  const admin = await findAdminByUser_(env, usernameLower);
  if (admin && await verifyPassword_(body.password, admin.password)) {
    await maybeUpgradePasswordHash_(env, "admin", admin, body.password);
    return buildLoginResult_("admin", admin, env);
  }
  if (patientCandidate && await verifyPassword_(body.password, patientCandidate.password)) {
    await maybeUpgradePasswordHash_(env, "paciente", patientCandidate, body.password);
    return buildLoginResult_("paciente", patientCandidate, env);
  }
  return {
    status: 401,
    payload: { success: false, message: "Usuario o contrasena incorrectos." }
  };
}
__name(handleLogin_, "handleLogin_");
async function buildLoginResult_(role, row, env) {
  const userId = getUserIdForRole_(role, row);
  if (!userId) {
    return errorResult_(500, "No se pudo identificar al usuario autenticado.");
  }
  const session = await createSession_(env, role, userId);
  if (!session.success) {
    return errorResult_(500, session.message || "No se pudo crear la sesion.");
  }
  const payload = {
    success: true,
    role,
    data: sanitizeUserData_(row),
    session_token: session.token,
    session_expires_at: session.expires_at
  };
  if (role === "admin" || role === "paciente") {
    const mustChange = normalizeUpper_(row.first_login || "") === "SI";
    payload.must_change_password = mustChange;
    payload.first_login_role = role;
    payload.first_login_id = userId;
  }
  return { status: 200, payload };
}
__name(buildLoginResult_, "buildLoginResult_");
async function handleLogout_(body, env) {
  try {
    assertSupabaseEnv_(env);
  } catch (error) {
    return errorResult_(500, toErrorMessage(error));
  }
  const token = normalizeText_(body.session_token);
  if (!token) {
    return { status: 200, payload: { success: true, message: "Sesion cerrada." } };
  }
  const deleted = await deleteSessionByToken_(env, token);
  if (!deleted.success) {
    return errorResult_(500, deleted.message || "No se pudo cerrar la sesion.");
  }
  return { status: 200, payload: { success: true, message: "Sesion cerrada." } };
}
__name(handleLogout_, "handleLogout_");
async function handleMe_(body, env) {
  try {
    assertSupabaseEnv_(env);
  } catch (error) {
    return errorResult_(500, toErrorMessage(error));
  }
  const session = await requireValidSession_(env, body.session_token);
  if (!session.ok) {
    return { status: 401, payload: { success: false, message: "Sesion invalida o expirada." } };
  }
  const user = await loadUserByRoleAndId_(env, session.role, session.user_id);
  if (!user) {
    await deleteSessionByHash_(env, session.token_hash);
    return { status: 401, payload: { success: false, message: "Sesion invalida o expirada." } };
  }
  const payload = {
    success: true,
    role: session.role,
    data: sanitizeUserData_(user),
    session_token: normalizeText_(body.session_token),
    session_expires_at: session.expires_at
  };
  if (session.role === "admin" || session.role === "paciente") {
    payload.must_change_password = normalizeUpper_(user.first_login || "") === "SI";
    payload.first_login_role = session.role;
    payload.first_login_id = session.user_id;
  }
  await touchSession_(env, session.token_hash);
  return { status: 200, payload };
}
__name(handleMe_, "handleMe_");
async function handleFirstLoginKeep_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "paciente"] });
  if (!validation.ok) {
    return validation.result;
  }
  const update = await updateFirstLoginFlag_(env, validation.session.role, validation.session.user_id, "NO");
  if (!update.success) {
    return errorResult_(500, update.message || "No se pudo completar el primer ingreso.");
  }
  return {
    status: 200,
    payload: { success: true, message: "Primer ingreso completado." }
  };
}
__name(handleFirstLoginKeep_, "handleFirstLoginKeep_");
async function handleFirstLoginUpdatePassword_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "paciente"] });
  if (!validation.ok) {
    return validation.result;
  }
  const newPassword = normalizeText_(body.new_password);
  if (!newPassword) {
    return { status: 400, payload: { success: false, message: "Falta new_password." } };
  }
  const update = await updateUserPassword_(env, validation.session.role, validation.session.user_id, newPassword, {
    clearFirstLogin: true
  });
  if (!update.success) {
    return errorResult_(500, update.message || "No se pudo actualizar la contrasena.");
  }
  return {
    status: 200,
    payload: { success: true, message: "Contrasena actualizada correctamente." }
  };
}
__name(handleFirstLoginUpdatePassword_, "handleFirstLoginUpdatePassword_");
async function handleSelfUpdatePassword_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const newPassword = normalizeText_(body.new_password);
  if (!newPassword) {
    return { status: 400, payload: { success: false, message: "Falta new_password." } };
  }
  const update = await updateUserPassword_(env, validation.session.role, validation.session.user_id, newPassword, {
    clearFirstLogin: validation.session.role === "admin" || validation.session.role === "paciente"
  });
  if (!update.success) {
    return errorResult_(500, update.message || "No se pudo actualizar la contrasena.");
  }
  return {
    status: 200,
    payload: { success: true, message: "Contrasena actualizada." }
  };
}
__name(handleSelfUpdatePassword_, "handleSelfUpdatePassword_");
async function handleGetData_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const sheetName = normalizeLower_(body.sheet);
  if (!sheetName) {
    return { status: 400, payload: { success: false, message: "Falta sheet." } };
  }
  if (sheetName === "usuarios_superadmin" || sheetName === "usuarios_admin") {
    return { status: 403, payload: { success: false, message: "Acceso denegado" } };
  }
  if (sheetName === "pacientes") {
    if (validation.session.role === "admin" || validation.session.role === "superadmin") {
      return handleGetDoctorPatients_(body, env);
    }
    const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
    if (!patient) {
      return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
    }
    const item = Object.assign({}, patient || {});
    if (!Object.prototype.hasOwnProperty.call(item, "antecedentes")) {
      item.antecedentes = normalizeText_(item.antecedentes_medicos);
    }
    return { status: 200, payload: { success: true, data: [item] } };
  }
  if (sheetName === "diagnosticos_archivos") {
    let rows = [];
    if (validation.session.role === "superadmin") {
      const res = await supabaseRest_(env, "get", "diagnosticos_archivos", {
        select: "id_reporte,id_paciente,tipo_examen,fecha,datos_json,pdf_url,creado_por",
        orderBy: "fecha",
        ascending: false
      });
      if (!res.success) {
        return errorResult_(500, res.message || "No se pudo cargar la lista de diagnosticos.");
      }
      rows = Array.isArray(res.data) ? res.data : [];
    } else if (validation.session.role === "paciente") {
      const res = await supabaseRest_(env, "get", "diagnosticos_archivos", {
        select: "id_reporte,id_paciente,tipo_examen,fecha,datos_json,pdf_url,creado_por",
        filters: { id_paciente: eq_(validation.session.user_id) },
        orderBy: "fecha",
        ascending: false
      });
      if (!res.success) {
        return errorResult_(500, res.message || "No se pudo cargar la lista de diagnosticos.");
      }
      rows = Array.isArray(res.data) ? res.data : [];
    } else {
      const patientsRes = await supabaseRest_(env, "get", "pacientes", {
        select: "id_paciente",
        filters: { creado_por: eq_(validation.session.user_id) }
      });
      if (!patientsRes.success) {
        return errorResult_(500, patientsRes.message || "No se pudieron cargar los pacientes del medico.");
      }
      const patientIds = normalizeIdList_((Array.isArray(patientsRes.data) ? patientsRes.data : []).map(function(row) {
        return row && row.id_paciente;
      }));
      if (!patientIds.length) {
        return { status: 200, payload: { success: true, data: [] } };
      }
      const diagnosesRes = await supabaseRest_(env, "get", "diagnosticos_archivos", {
        select: "id_reporte,id_paciente,tipo_examen,fecha,datos_json,pdf_url,creado_por",
        filters: { id_paciente: inList_(patientIds) },
        orderBy: "fecha",
        ascending: false
      });
      if (!diagnosesRes.success) {
        return errorResult_(500, diagnosesRes.message || "No se pudo cargar la lista de diagnosticos.");
      }
      rows = Array.isArray(diagnosesRes.data) ? diagnosesRes.data : [];
    }
    return {
      status: 200,
      payload: {
        success: true,
        data: rows.slice().sort(compareDiagnosisDesc_)
      }
    };
  }
  return {
    status: 400,
    payload: { success: false, message: "Hoja no soportada en el Worker: " + sheetName }
  };
}
__name(handleGetData_, "handleGetData_");
async function handleCreateRecord_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const sheetName = normalizeLower_(body.sheet);
  if (sheetName !== "pacientes") {
    return {
      status: 400,
      payload: { success: false, message: "Solo la hoja pacientes esta soportada en create_record." }
    };
  }
  const input = body.data && typeof body.data === "object" ? body.data : {};
  const row = await normalizePatientWritePayloadWorker_(input);
  row.id_paciente = normalizeText_(row.id_paciente || "P-" + Date.now());
  row.fecha_registro = normalizeIsoDateValue_(row.fecha_registro || /* @__PURE__ */ new Date());
  row.first_login = normalizeUpper_(row.first_login || "SI") || "SI";
  if (validation.session.role === "admin") {
    row.creado_por = validation.session.user_id;
  } else if (!row.creado_por) {
    row.creado_por = normalizeLower_(input.creado_por);
  }
  const res = await supabaseRest_(env, "post", "pacientes", {
    prefer: "return=representation",
    body: row
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo crear el paciente.");
  }
  const created = res.data[0] || row;
  return {
    status: 200,
    payload: {
      success: true,
      message: "Paciente registrado correctamente.",
      data: Object.assign({}, created, {
        antecedentes: normalizeText_(created.antecedentes || created.antecedentes_medicos)
      })
    }
  };
}
__name(handleCreateRecord_, "handleCreateRecord_");
async function handleUpdateRecord_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const sheetName = normalizeLower_(body.sheet);
  if (sheetName !== "pacientes") {
    return {
      status: 400,
      payload: { success: false, message: "Solo la hoja pacientes esta soportada en update_record." }
    };
  }
  const targetId = normalizeText_(body.id || body.data && body.data.id_paciente);
  if (!targetId) {
    return { status: 400, payload: { success: false, message: "Falta id del registro." } };
  }
  const access = await resolveAccessiblePatientForSession_(env, validation.session, targetId);
  if (!access.ok) {
    return access.result;
  }
  const patch = await normalizePatientWritePayloadWorker_(body.data && typeof body.data === "object" ? body.data : {});
  delete patch.id_paciente;
  if (validation.session.role === "admin") {
    patch.creado_por = validation.session.user_id;
  }
  const res = await supabaseRest_(env, "patch", "pacientes", {
    filters: { id_paciente: eq_(access.patient.id_paciente) },
    prefer: "return=representation",
    body: patch
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo actualizar el paciente.");
  }
  const updated = res.data[0] || {};
  return {
    status: 200,
    payload: {
      success: true,
      message: "Datos actualizados.",
      data: Object.assign({}, updated, {
        antecedentes: normalizeText_(updated.antecedentes || updated.antecedentes_medicos)
      })
    }
  };
}
__name(handleUpdateRecord_, "handleUpdateRecord_");
async function handleDeleteRecord_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const sheetName = normalizeLower_(body.sheet);
  if (sheetName !== "pacientes") {
    return {
      status: 400,
      payload: { success: false, message: "Solo la hoja pacientes esta soportada en delete_record." }
    };
  }
  const targetId = normalizeText_(body.id || body.patient_id || body.id_paciente);
  if (!targetId) {
    return { status: 400, payload: { success: false, message: "Falta id del registro." } };
  }
  const access = await resolveAccessiblePatientForSession_(env, validation.session, targetId);
  if (!access.ok) {
    return access.result;
  }
  return deletePatientCascadeWorker_(env, access.patient.id_paciente, body);
}
__name(handleDeleteRecord_, "handleDeleteRecord_");
async function handleGetDoctorPatients_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const filters = validation.session.role === "admin" ? { creado_por: eq_(validation.session.user_id) } : null;
  const res = await supabaseRest_(env, "get", "pacientes", {
    select: "id_paciente,cedula,nombre_completo,fecha_nacimiento,telefono,correo,direccion,ocupacion,antecedentes_medicos,fecha_registro,password,creado_por,first_login",
    filters,
    orderBy: "fecha_registro",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar la lista de pacientes.");
  }
  const data = Array.isArray(res.data) ? res.data.map(function(row) {
    const item = Object.assign({}, row || {});
    if (!Object.prototype.hasOwnProperty.call(item, "antecedentes")) {
      item.antecedentes = normalizeText_(item.antecedentes_medicos);
    }
    return item;
  }) : [];
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetDoctorPatients_, "handleGetDoctorPatients_");
async function handleGetPatientProfile_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const data = Object.assign({}, sanitizeUserData_(access.patient));
  if (!Object.prototype.hasOwnProperty.call(data, "antecedentes")) {
    data.antecedentes = normalizeText_(access.patient.antecedentes || access.patient.antecedentes_medicos);
  }
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetPatientProfile_, "handleGetPatientProfile_");
async function handleGetHistory_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const res = await supabaseRest_(env, "get", "historia_clinica", {
    select: "*",
    filters: { id_paciente: eq_(access.patient.id_paciente) },
    limit: 1
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar la historia clinica.");
  }
  const data = Array.isArray(res.data) && res.data.length ? res.data[0] || {} : {};
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetHistory_, "handleGetHistory_");
async function handleSaveHistory_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const payload = buildClinicalHistoryWriteRow_(body.data || {}, access.patient.id_paciente);
  const res = await supabaseRest_(env, "post", "historia_clinica", {
    onConflict: "id_paciente",
    prefer: "resolution=merge-duplicates,return=representation",
    body: payload
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo guardar la historia clinica.");
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: "Historia clinica guardada.",
      data: Array.isArray(res.data) && res.data.length ? res.data[0] : payload
    }
  };
}
__name(handleSaveHistory_, "handleSaveHistory_");
async function handleGetPatientAppointments_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const res = await supabaseRest_(env, "get", "citas", {
    select: "id_cita,id_paciente,fecha,hora,motivo,estado,fecha_registro,nota_paciente,recomendaciones_serv,creado_por,duracion_minutos",
    filters: { id_paciente: eq_(access.patient.id_paciente) },
    orderBy: "fecha",
    ascending: true
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar el historial de citas.");
  }
  const data = (Array.isArray(res.data) ? res.data : []).map(function(row) {
    const duration = normalizeDurationMinutesWorker_(row && row.duracion_minutos);
    return {
      id_cita: normalizeText_(row && row.id_cita),
      id_paciente: normalizeText_(row && row.id_paciente),
      fecha: normalizeIsoDateValue_(row && row.fecha),
      hora: normalizeTimeText_(row && row.hora),
      motivo: normalizeText_(row && row.motivo),
      estado: normalizeUpper_(row && row.estado),
      fecha_registro: normalizeText_(row && row.fecha_registro),
      nota: normalizeText_(row && row.nota_paciente),
      nota_paciente: normalizeText_(row && row.nota_paciente),
      recomendaciones: normalizeText_(row && row.recomendaciones_serv),
      recomendaciones_serv: normalizeText_(row && row.recomendaciones_serv),
      creado_por: normalizeLower_(row && row.creado_por),
      duracion_minutos: duration
    };
  }).sort(compareAppointmentsAsc_);
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetPatientAppointments_, "handleGetPatientAppointments_");
async function handleGetDashboardStats_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const patientsRes = await supabaseRest_(env, "get", "pacientes", {
    select: "id_paciente,creado_por",
    filters: validation.session.role === "admin" ? { creado_por: eq_(validation.session.user_id) } : void 0
  });
  if (!patientsRes.success) {
    return errorResult_(500, patientsRes.message || "No se pudieron cargar los pacientes.");
  }
  const patients = Array.isArray(patientsRes.data) ? patientsRes.data : [];
  const patientIds = normalizeIdList_(patients.map(function(row) {
    return row && row.id_paciente;
  }));
  const today = normalizeIsoDateValue_(/* @__PURE__ */ new Date());
  const weekRange = getWeekDateRange_(today);
  let citasHoy = 0;
  let citasSemana = 0;
  if (patientIds.length) {
    const appointmentsRes = await supabaseRest_(env, "get", "citas", {
      select: "id_paciente,fecha",
      filters: [
        ["id_paciente", inList_(patientIds)],
        ["fecha", gte_(weekRange.start)],
        ["fecha", lte_(weekRange.end)]
      ]
    });
    if (!appointmentsRes.success) {
      return errorResult_(500, appointmentsRes.message || "No se pudieron cargar las citas.");
    }
    const appointments = Array.isArray(appointmentsRes.data) ? appointmentsRes.data : [];
    appointments.forEach(function(row) {
      const dateKey = normalizeIsoDateValue_(row && row.fecha);
      if (!dateKey) return;
      citasSemana++;
      if (dateKey === today) citasHoy++;
    });
  }
  return {
    status: 200,
    payload: {
      success: true,
      data: {
        total_pacientes: patientIds.length,
        citas_hoy: citasHoy,
        citas_semana: citasSemana
      }
    }
  };
}
__name(handleGetDashboardStats_, "handleGetDashboardStats_");
async function handleGetAgenda_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const dateString = normalizeIsoDateValue_(body.fecha);
  if (!dateString) {
    return { status: 400, payload: { success: false, message: "Falta fecha." } };
  }
  const appointmentsRes = await supabaseRest_(env, "get", "citas", {
    select: "id_cita,id_paciente,fecha,hora,motivo,estado,fecha_registro,nota_paciente,recomendaciones_serv,creado_por,duracion_minutos",
    filters: { fecha: eq_(dateString) },
    orderBy: "hora",
    ascending: true
  });
  if (!appointmentsRes.success) {
    return errorResult_(500, appointmentsRes.message || "No se pudo cargar la agenda.");
  }
  const appointments = Array.isArray(appointmentsRes.data) ? appointmentsRes.data : [];
  const patientMap = await loadPatientMapByIds_(env, collectAppointmentPatientIds_(appointments));
  const data = appointments.map(function(row) {
    const patientId = normalizeText_(row && row.id_paciente);
    const patient = patientMap[patientId] || null;
    if (validation.session.role === "admin" && normalizeLower_(patient && patient.creado_por) !== validation.session.user_id) {
      return null;
    }
    return buildAgendaAppointmentOutput_(row, patient);
  }).filter(Boolean).sort(compareAgendaAppointmentsAsc_);
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetAgenda_, "handleGetAgenda_");
async function handleGetAgendaMonthSummary_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const monthKey = normalizeMonthKey_(body.month || body.month_ref || body.fecha || /* @__PURE__ */ new Date());
  if (!monthKey) {
    return { status: 400, payload: { success: false, message: "Falta month." } };
  }
  const monthRange = getMonthDateRange_(monthKey);
  const appointmentsRes = await supabaseRest_(env, "get", "citas", {
    select: "id_paciente,fecha",
    filters: [
      ["fecha", gte_(monthRange.start)],
      ["fecha", lte_(monthRange.end)]
    ]
  });
  if (!appointmentsRes.success) {
    return errorResult_(500, appointmentsRes.message || "No se pudo cargar el calendario.");
  }
  const appointments = Array.isArray(appointmentsRes.data) ? appointmentsRes.data : [];
  const patientMap = validation.session.role === "admin" ? await loadPatientMapByIds_(env, collectAppointmentPatientIds_(appointments)) : {};
  const counts = {};
  appointments.forEach(function(row) {
    const dateKey = normalizeIsoDateValue_(row && row.fecha);
    if (!dateKey || dateKey.slice(0, 7) !== monthKey) return;
    if (validation.session.role === "admin") {
      const patient = patientMap[normalizeText_(row && row.id_paciente)] || null;
      if (normalizeLower_(patient && patient.creado_por) !== validation.session.user_id) return;
    }
    counts[dateKey] = (counts[dateKey] || 0) + 1;
  });
  return {
    status: 200,
    payload: {
      success: true,
      data: {
        month: monthKey,
        counts,
        marked_dates: Object.keys(counts).sort()
      }
    }
  };
}
__name(handleGetAgendaMonthSummary_, "handleGetAgendaMonthSummary_");
async function handleGetWeekAppointments_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const referenceDate = normalizeIsoDateValue_(body.fecha_ref || /* @__PURE__ */ new Date());
  const weekRange = getWeekDateRange_(referenceDate);
  const appointmentsRes = await supabaseRest_(env, "get", "citas", {
    select: "id_cita,id_paciente,fecha,hora,motivo,estado,fecha_registro,nota_paciente,recomendaciones_serv,creado_por,duracion_minutos",
    filters: [
      ["fecha", gte_(weekRange.start)],
      ["fecha", lte_(weekRange.end)]
    ],
    orderBy: "fecha",
    ascending: true
  });
  if (!appointmentsRes.success) {
    return errorResult_(500, appointmentsRes.message || "No se pudo cargar la semana.");
  }
  const appointments = Array.isArray(appointmentsRes.data) ? appointmentsRes.data : [];
  const patientMap = await loadPatientMapByIds_(env, collectAppointmentPatientIds_(appointments));
  const items = appointments.map(function(row) {
    const patient = patientMap[normalizeText_(row && row.id_paciente)] || null;
    if (validation.session.role === "admin" && normalizeLower_(patient && patient.creado_por) !== validation.session.user_id) {
      return null;
    }
    return buildAgendaAppointmentOutput_(row, patient);
  }).filter(Boolean).sort(compareAgendaAppointmentsAsc_);
  return {
    status: 200,
    payload: {
      success: true,
      data: {
        week_start: weekRange.start,
        week_end: weekRange.end,
        items
      }
    }
  };
}
__name(handleGetWeekAppointments_, "handleGetWeekAppointments_");
async function handleGetServiceConfig_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const servicesRes = await supabaseRest_(env, "get", "servicios", {
    select: "id,nombre_servicio,recomendaciones,titulo_reporte,scope_visibility,owner_usuario,duracion_minutos",
    orderBy: "nombre_servicio",
    ascending: true
  });
  if (!servicesRes.success) {
    return errorResult_(500, servicesRes.message || "No se pudo cargar la configuracion de servicios.");
  }
  let patientDoctorOwner = "";
  if (validation.session.role === "paciente") {
    const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
    patientDoctorOwner = normalizeLower_(patient && patient.creado_por);
  }
  const visibleServices = (Array.isArray(servicesRes.data) ? servicesRes.data : []).map(normalizeServiceOutputRow_).filter(function(service) {
    if (!service.nombre_servicio) return false;
    if (validation.session.role === "superadmin") return true;
    if (validation.session.role === "admin") {
      return service.scope_visibility === "ALL" || service.owner_usuario === validation.session.user_id;
    }
    return service.scope_visibility === "ALL" || !!patientDoctorOwner && service.owner_usuario === patientDoctorOwner;
  });
  const allowedServices = {};
  visibleServices.forEach(function(service) {
    allowedServices[service.nombre_servicio] = true;
  });
  const configRes = await supabaseRest_(env, "get", "config_campos", {
    select: "servicio,campo_nombre,campo_etiqueta,campo_tipo,opciones"
  });
  if (!configRes.success) {
    return errorResult_(500, configRes.message || "No se pudo cargar la configuracion de campos.");
  }
  return {
    status: 200,
    payload: {
      success: true,
      data: buildServiceConfigMapWorker_(Array.isArray(configRes.data) ? configRes.data : [], allowedServices)
    }
  };
}
__name(handleGetServiceConfig_, "handleGetServiceConfig_");
async function handleSaveServiceFull_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const payload = body.data && typeof body.data === "object" ? body.data : {};
  const targetName = normalizeText_(payload.nombre_servicio);
  if (!targetName) {
    return { status: 400, payload: { success: false, message: "Falta nombre del servicio" } };
  }
  const servicesRes = await supabaseRest_(env, "get", "servicios", {
    select: "id,nombre_servicio,recomendaciones,titulo_reporte,scope_visibility,owner_usuario,duracion_minutos",
    orderBy: "nombre_servicio",
    ascending: true
  });
  if (!servicesRes.success) {
    return errorResult_(500, servicesRes.message || "No se pudieron cargar los servicios.");
  }
  const allServices = Array.isArray(servicesRes.data) ? servicesRes.data : [];
  const originalName = normalizeText_(payload.originalName || targetName);
  const targetNameLower = normalizeLower_(targetName);
  const searchNameLower = normalizeLower_(originalName);
  const existing = allServices.find(function(service) {
    return normalizeLower_(service && service.nombre_servicio) === searchNameLower;
  }) || null;
  const duplicate = allServices.find(function(service) {
    if (normalizeLower_(service && service.nombre_servicio) !== targetNameLower) return false;
    if (existing && normalizeText_(service && service.id) === normalizeText_(existing.id)) return false;
    return true;
  });
  if (duplicate) {
    return { status: 400, payload: { success: false, message: "Ya existe un servicio con ese nombre." } };
  }
  const isSuper = validation.session.role === "superadmin";
  const isCreate = !existing;
  let finalScope = "ALL";
  let finalOwner = "";
  let finalDuration = 30;
  let serviceId = existing ? normalizeText_(existing.id) : "SERV-" + Date.now();
  if (existing) {
    finalScope = normalizeServiceScopeWorker_(existing.scope_visibility || "ALL");
    finalOwner = normalizeLower_(existing.owner_usuario);
    finalDuration = normalizeDurationMinutesWorker_(existing.duracion_minutos);
    if (!finalOwner && !isSuper) {
      return {
        status: 403,
        payload: { success: false, message: "Servicio sin propietario. Solicita asignacion por superadmin." }
      };
    }
    if (!finalOwner && isSuper) {
      finalOwner = normalizeLower_(payload.owner_usuario || validation.session.user_id);
    }
    if (finalOwner && !isSuper && finalOwner !== validation.session.user_id) {
      return {
        status: 403,
        payload: { success: false, message: "Solo el medico creador puede modificar este servicio." }
      };
    }
  }
  if (isCreate) {
    finalScope = normalizeServiceScopeWorker_(payload.scope_visibility || "ALL");
    finalOwner = normalizeLower_(validation.session.user_id);
    finalDuration = normalizeDurationMinutesWorker_(payload.duracion_minutos);
  } else {
    const requestedScope = normalizeServiceScopeWorker_(payload.scope_visibility);
    if (requestedScope) finalScope = requestedScope;
    if (!finalOwner) finalOwner = normalizeLower_(validation.session.user_id);
    if (Object.prototype.hasOwnProperty.call(payload, "duracion_minutos")) {
      finalDuration = normalizeDurationMinutesWorker_(payload.duracion_minutos);
    }
  }
  const row = {
    id: serviceId,
    nombre_servicio: targetName,
    recomendaciones: normalizeText_(payload.recomendaciones),
    titulo_reporte: normalizeText_(payload.titulo_reporte),
    scope_visibility: finalScope,
    owner_usuario: finalOwner,
    duracion_minutos: finalDuration
  };
  const serviceWriteRes = existing ? await supabaseRest_(env, "patch", "servicios", {
    filters: { id: eq_(serviceId) },
    prefer: "return=representation",
    body: row
  }) : await supabaseRest_(env, "post", "servicios", {
    prefer: "return=representation",
    body: row
  });
  if (!serviceWriteRes.success) {
    return errorResult_(500, serviceWriteRes.message || "No se pudo guardar el servicio.");
  }
  const cleanupNames = normalizeIdList_([
    existing && existing.nombre_servicio,
    targetName
  ]);
  for (const serviceName of cleanupNames) {
    const deleteConfigRes = await supabaseRest_(env, "delete", "config_campos", {
      filters: { servicio: eq_(serviceName) }
    });
    if (!deleteConfigRes.success) {
      return errorResult_(500, deleteConfigRes.message || "No se pudo limpiar la configuracion del servicio.");
    }
  }
  const campos = normalizeServiceFieldRowsWorker_(payload.campos, targetName);
  if (campos.length) {
    const insertFieldsRes = await supabaseRest_(env, "post", "config_campos", {
      prefer: "return=minimal",
      body: campos
    });
    if (!insertFieldsRes.success) {
      return errorResult_(500, insertFieldsRes.message || "No se pudieron guardar los campos del servicio.");
    }
  }
  const savedService = normalizeServiceOutputRow_(row);
  return {
    status: 200,
    payload: {
      success: true,
      message: "Servicio guardado y configurado correctamente.",
      data: savedService
    }
  };
}
__name(handleSaveServiceFull_, "handleSaveServiceFull_");
async function handleDeleteServiceFull_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const serviceName = normalizeText_(body.nombre);
  if (!serviceName) {
    return { status: 400, payload: { success: false, message: "Nombre de servicio invalido." } };
  }
  const service = await findServiceByNameInsensitive_(env, serviceName);
  if (!service) {
    return { status: 404, payload: { success: false, message: "Servicio no encontrado." } };
  }
  const owner = normalizeLower_(service.owner_usuario);
  const isSuper = validation.session.role === "superadmin";
  if (!owner && !isSuper) {
    return {
      status: 403,
      payload: { success: false, message: "Servicio sin propietario. Solo superadmin puede eliminarlo." }
    };
  }
  if (owner && !isSuper && owner !== validation.session.user_id) {
    return {
      status: 403,
      payload: { success: false, message: "Solo el medico creador puede eliminar este servicio." }
    };
  }
  const deleteConfigRes = await supabaseRest_(env, "delete", "config_campos", {
    filters: { servicio: eq_(normalizeText_(service.nombre_servicio)) }
  });
  if (!deleteConfigRes.success) {
    return errorResult_(500, deleteConfigRes.message || "No se pudo eliminar la configuracion del servicio.");
  }
  const deleteServiceRes = await supabaseRest_(env, "delete", "servicios", {
    filters: { id: eq_(normalizeText_(service.id)) }
  });
  if (!deleteServiceRes.success) {
    return errorResult_(500, deleteServiceRes.message || "No se pudo eliminar el servicio.");
  }
  return {
    status: 200,
    payload: { success: true, message: "Servicio eliminado completamente." }
  };
}
__name(handleDeleteServiceFull_, "handleDeleteServiceFull_");
async function handleAddService_(body, env) {
  const data = body.data && typeof body.data === "object" ? body.data : {};
  return handleSaveServiceFull_(Object.assign({}, body, {
    data: {
      originalName: "",
      nombre_servicio: data.nombre,
      recomendaciones: data.recomendaciones || "",
      titulo_reporte: "",
      duracion_minutos: 30,
      campos: [],
      scope_visibility: "ALL"
    }
  }), env);
}
__name(handleAddService_, "handleAddService_");
async function handleUpdateService_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const data = body.data && typeof body.data === "object" ? body.data : {};
  const serviceId = normalizeText_(data.id);
  if (!serviceId) {
    return { status: 400, payload: { success: false, message: "Servicio no encontrado." } };
  }
  const existing = await findSingleByField_(env, "servicios", "id", serviceId);
  if (!existing) {
    return { status: 404, payload: { success: false, message: "Servicio no encontrado." } };
  }
  return handleSaveServiceFull_(Object.assign({}, body, {
    requester: body.requester || validation.session.user_id,
    session_token: body.session_token,
    data: {
      originalName: existing.nombre_servicio,
      nombre_servicio: normalizeText_(data.nombre || existing.nombre_servicio),
      recomendaciones: normalizeText_(data.recomendaciones || existing.recomendaciones),
      titulo_reporte: normalizeText_(existing.titulo_reporte),
      duracion_minutos: normalizeDurationMinutesWorker_(existing.duracion_minutos),
      scope_visibility: normalizeServiceScopeWorker_(existing.scope_visibility),
      campos: await loadServiceConfigRowsForService_(env, normalizeText_(existing.nombre_servicio))
    }
  }), env);
}
__name(handleUpdateService_, "handleUpdateService_");
async function handleDeleteServiceById_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const serviceId = normalizeText_(body.id);
  if (!serviceId) {
    return { status: 400, payload: { success: false, message: "Servicio no encontrado." } };
  }
  const service = await findSingleByField_(env, "servicios", "id", serviceId);
  if (!service) {
    return { status: 404, payload: { success: false, message: "Servicio no encontrado." } };
  }
  return handleDeleteServiceFull_(Object.assign({}, body, {
    nombre: normalizeText_(service.nombre_servicio),
    requester: body.requester || validation.session.user_id,
    session_token: body.session_token
  }), env);
}
__name(handleDeleteServiceById_, "handleDeleteServiceById_");
async function handleSaveDiagnosisAdvanced_(body, env, url) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const data = body.data && typeof body.data === "object" ? body.data : {};
  const reportId = normalizeText_(data.id_reporte);
  let existing = null;
  let patientId = normalizeText_(data.id_paciente);
  if (reportId) {
    existing = await findSingleByField_(env, "diagnosticos_archivos", "id_reporte", reportId);
    if (!existing) {
      return { status: 404, payload: { success: false, message: "Reporte no encontrado." } };
    }
    patientId = normalizeText_(existing.id_paciente) || patientId;
  }
  if (!patientId) {
    return { status: 400, payload: { success: false, message: "Falta id_paciente." } };
  }
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, patientId);
  if (!patientAccess.ok) {
    return patientAccess.result;
  }
  const existingPayload = parseStoredDiagnosisJson_(existing && existing.datos_json);
  const normalizedData = normalizeDiagnosisSavePayloadForMode_(data, existingPayload);
  const idReporte = reportId || "REP-" + Date.now();
  const requestedReportDate = normalizeIsoDateValue_(
    data.fecha_reporte || data.fecha || normalizedData.fecha_reporte || normalizedData.fecha || existingPayload.fecha_reporte || existing && existing.fecha
  );
  const hasCustomReportDate = !!requestedReportDate;
  const savedAt = hasCustomReportDate ? requestedReportDate + "T12:00:00.000Z" : normalizeIsoDateTimeValue_(existing && existing.fecha || (/* @__PURE__ */ new Date()).toISOString());
  const signaturePassword = normalizeText_(data.firma_electronica_password);
  const doctorUser = normalizeLower_(patientAccess.patient.creado_por || validation.session.user_id);
  const prepared = await prepareDiagnosisPersistenceWorker_(env, normalizedData, {
    patientId: patientAccess.patient.id_paciente,
    reportId: idReporte,
    requestUrl: url,
    firmaPassword: signaturePassword,
    doctorId: doctorUser
  });
  if (!prepared.success) {
    return errorResult_(prepared.status || 500, prepared.message || "No se pudo preparar el diagnostico.");
  }
  const preparedData = prepared.data || normalizedData;
  if (prepared.recipePdfUrl) {
    preparedData.pdf_receta_link = normalizeText_(prepared.recipePdfUrl);
  }
  if (prepared.certificatePdfUrl) {
    preparedData.pdf_certificado_link = normalizeText_(prepared.certificatePdfUrl);
  }
  const storedPayload = buildDiagnosisStoragePayload_(preparedData, {
    id_reporte: idReporte,
    id_paciente: patientAccess.patient.id_paciente,
    nombre_paciente: normalizeText_(preparedData.nombre_paciente || patientAccess.patient.nombre_completo),
    doctor_usuario: doctorUser,
    oldPayload: existingPayload
  });
  if (hasCustomReportDate) {
    storedPayload.fecha_reporte = requestedReportDate;
  } else if (normalizeIsoDateValue_(existingPayload.fecha_reporte)) {
    storedPayload.fecha_reporte = normalizeIsoDateValue_(existingPayload.fecha_reporte);
  }
  if (Object.prototype.hasOwnProperty.call(preparedData, "imagenes")) {
    storedPayload.imagenes = normalizeDiagnosisImagesForStorage_(preparedData.imagenes);
  }
  if (Object.prototype.hasOwnProperty.call(preparedData, "pdf_externos")) {
    storedPayload.pdf_externos = normalizeDiagnosisExternalPdfsForStorage_(preparedData.pdf_externos);
    storedPayload.pdf_externo_link = storedPayload.pdf_externos.length ? normalizeText_(storedPayload.pdf_externos[0].url) : "";
  }
  if (prepared.recipePdfUrl) {
    storedPayload.pdf_receta_link = normalizeText_(prepared.recipePdfUrl);
  } else if (normalizeText_(existingPayload.pdf_receta_link)) {
    storedPayload.pdf_receta_link = normalizeText_(existingPayload.pdf_receta_link);
  }
  if (prepared.certificatePdfUrl) {
    storedPayload.pdf_certificado_link = normalizeText_(prepared.certificatePdfUrl);
  } else if (normalizeText_(existingPayload.pdf_certificado_link)) {
    storedPayload.pdf_certificado_link = normalizeText_(existingPayload.pdf_certificado_link);
  }
  const rowPdfUrl = normalizeText_(
    prepared.reportPdfUrl || prepared.certificatePdfUrl || existing && existing.pdf_url || ""
  );
  const row = {
    id_reporte: idReporte,
    id_paciente: patientAccess.patient.id_paciente,
    tipo_examen: normalizeText_(storedPayload.tipo_examen || preparedData.tipo_examen),
    fecha: savedAt,
    datos_json: JSON.stringify(storedPayload),
    pdf_url: rowPdfUrl,
    creado_por: normalizeLower_(existing && existing.creado_por || validation.session.user_id || doctorUser || "doctor")
  };
  const res = await supabaseRest_(env, "post", "diagnosticos_archivos", {
    onConflict: "id_reporte",
    prefer: "resolution=merge-duplicates,return=representation",
    body: row
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo guardar el diagnostico.");
  }
  const oldUrls = existing ? collectDiagnosisAssetUrlsFromReportWorker_(existing) : [];
  const newUrls = collectDiagnosisAssetUrlsWorker_(rowPdfUrl, storedPayload);
  const staleUrls = oldUrls.filter(function(currentUrl) {
    return newUrls.indexOf(currentUrl) === -1;
  });
  const cleanupResult = await deleteWorkerManagedAssetUrls_(env, staleUrls);
  const cleanupWarning = cleanupResult.success ? "" : cleanupResult.warning;
  let finalWarning = cleanupWarning;
  if (prepared.signatureWarnings) {
    finalWarning = finalWarning ? finalWarning + " | " + prepared.signatureWarnings : prepared.signatureWarnings;
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: "Guardado exitoso",
      id_reporte: idReporte,
      pdf_url: rowPdfUrl,
      pdf_receta_url: normalizeText_(storedPayload.pdf_receta_link),
      pdf_certificado_url: normalizeText_(storedPayload.pdf_certificado_link),
      pdf_externo_url: normalizeText_(storedPayload.pdf_externo_link),
      pdf_externos: Array.isArray(storedPayload.pdf_externos) ? storedPayload.pdf_externos : [],
      storage_info: {
        backend: hasWorkerStorageBinding_(env) ? "r2" : "none",
        report_key: normalizeText_(prepared.reportPdfKey),
        recipe_key: normalizeText_(prepared.recipePdfKey),
        certificate_key: normalizeText_(prepared.certificatePdfKey)
      },
      warning: finalWarning
    }
  };
}
__name(handleSaveDiagnosisAdvanced_, "handleSaveDiagnosisAdvanced_");
async function handleGetDiagnosisHistory_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const res = await supabaseRest_(env, "get", "diagnosticos_archivos", {
    select: "id_reporte,id_paciente,tipo_examen,fecha,datos_json,pdf_url,creado_por",
    filters: { id_paciente: eq_(access.patient.id_paciente) },
    orderBy: "fecha",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar el historial diagnostico.");
  }
  const data = Array.isArray(res.data) ? res.data.slice().sort(compareDiagnosisDesc_).map(normalizeDiagnosisReportResponseRow_) : [];
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetDiagnosisHistory_, "handleGetDiagnosisHistory_");
async function handleGetDiagnosisReport_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const reportId = normalizeText_(body.id_reporte || body.report_id);
  if (!reportId) {
    return { status: 400, payload: { success: false, message: "Falta id_reporte." } };
  }
  const report = await findSingleByField_(env, "diagnosticos_archivos", "id_reporte", reportId);
  if (!report) {
    return { status: 404, payload: { success: false, message: "Reporte no encontrado." } };
  }
  const access = await resolveAccessiblePatientForSession_(env, validation.session, report.id_paciente);
  if (!access.ok) {
    return access.result;
  }
  return {
    status: 200,
    payload: {
      success: true,
      data: [normalizeDiagnosisReportResponseRow_(report)]
    }
  };
}
__name(handleGetDiagnosisReport_, "handleGetDiagnosisReport_");
function normalizeDiagnosisReportResponseRow_(row) {
  const src = row && typeof row === "object" ? row : {};
  const payload = parseStoredDiagnosisJson_(src.datos_json);
  const externalItems = getDiagnosisExternalPdfItemsForWorker_(payload);
  const externalUrl = externalItems.length ? normalizeText_(externalItems[0] && externalItems[0].url) : normalizeText_(payload.pdf_externo_link);
  const reportDate = normalizeIsoDateValue_(payload.fecha_reporte) || normalizeIsoDateValue_(src.fecha);
  const rowPdfUrl = normalizeText_(src.pdf_url);
  const reportType = normalizeUpper_(payload.tipo_examen || src.tipo_examen);
  const certificateUrl = normalizeText_(payload.pdf_certificado_link) || (reportType === "CERTIFICADO MEDICO" || reportType === "CERTIFICADOMEDICO" ? rowPdfUrl : "");
  return Object.assign({}, src, {
    id_reporte: normalizeText_(src.id_reporte),
    id_paciente: normalizeText_(src.id_paciente),
    tipo_examen: normalizeText_(payload.tipo_examen || src.tipo_examen),
    fecha: normalizeText_(src.fecha),
    fecha_reporte: reportDate,
    datos_json: payload,
    pdf_url: rowPdfUrl,
    pdf_receta_url: normalizeText_(payload.pdf_receta_link),
    pdf_receta_link: normalizeText_(payload.pdf_receta_link),
    pdfRecetaUrl: normalizeText_(payload.pdf_receta_link),
    pdf_certificado_url: certificateUrl,
    pdf_certificado_link: certificateUrl,
    pdfCertificadoUrl: certificateUrl,
    pdf_externo_url: externalUrl,
    pdf_externo_link: externalUrl,
    pdfExternoUrl: externalUrl,
    pdf_externos: externalItems,
    fechaReporte: reportDate,
    creado_por: normalizeLower_(src.creado_por)
  });
}
__name(normalizeDiagnosisReportResponseRow_, "normalizeDiagnosisReportResponseRow_");
async function handleDeleteDiagnosisAsset_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const reportId = normalizeText_(body.id_reporte || body.report_id);
  const assetType = normalizeLower_(body.asset_type || body.asset || body.asset_kind);
  const allowed = {
    report_pdf: true,
    recipe_pdf: true,
    certificate_pdf: true,
    external_pdf: true
  };
  if (!reportId) {
    return { status: 400, payload: { success: false, message: "Falta id_reporte." } };
  }
  if (!allowed[assetType]) {
    return { status: 400, payload: { success: false, message: "Tipo de documento no valido." } };
  }
  const report = await findSingleByField_(env, "diagnosticos_archivos", "id_reporte", reportId);
  if (!report) {
    return { status: 404, payload: { success: false, message: "Reporte no encontrado." } };
  }
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, report.id_paciente);
  if (!patientAccess.ok) {
    return patientAccess.result;
  }
  const payload = parseStoredDiagnosisJson_(report.datos_json);
  let updatedPdfUrl = normalizeText_(report.pdf_url || report.pdf_link);
  let requiresProxy = false;
  let localErrorMessage = "";
  let removedAssetUrl = "";
  if (assetType === "report_pdf") {
    if (!updatedPdfUrl) {
      localErrorMessage = "Ese documento ya no existe o no fue generado.";
    } else {
      removedAssetUrl = updatedPdfUrl;
      requiresProxy = isDriveManagedUrlWorker_(updatedPdfUrl);
      updatedPdfUrl = "";
    }
  } else if (assetType === "recipe_pdf") {
    const recipeUrl = normalizeText_(payload.pdf_receta_link);
    if (!recipeUrl) {
      localErrorMessage = "Ese documento ya no existe o no fue generado.";
    } else {
      removedAssetUrl = recipeUrl;
      requiresProxy = isDriveManagedUrlWorker_(recipeUrl);
      delete payload.pdf_receta_link;
    }
  } else if (assetType === "certificate_pdf") {
    const certUrl = normalizeText_(payload.pdf_certificado_link);
    if (!certUrl) {
      localErrorMessage = "Ese documento ya no existe o no fue generado.";
    } else {
      removedAssetUrl = certUrl;
      requiresProxy = isDriveManagedUrlWorker_(certUrl);
      delete payload.pdf_certificado_link;
    }
  } else if (assetType === "external_pdf") {
    const assetId = normalizeText_(body.asset_id || body.id_asset || body.file_id || body.url);
    let externalItems = getDiagnosisExternalPdfItemsForWorker_(payload);
    if (!externalItems.length) {
      localErrorMessage = "Ese documento ya no existe o no fue generado.";
    } else {
      let targetIndex = 0;
      if (assetId) {
        targetIndex = externalItems.findIndex(function(item) {
          const current = item || {};
          return normalizeText_(current.id) === assetId || normalizeText_(current.file_id || current.fileId) === assetId || normalizeText_(current.url) === assetId;
        });
        if (targetIndex === -1) {
          localErrorMessage = "Ese documento ya no existe o no fue generado.";
        }
      }
      if (!localErrorMessage) {
        const removed = externalItems.splice(targetIndex, 1)[0] || {};
        if (!normalizeText_(removed.url)) {
          localErrorMessage = "Ese documento ya no existe o no fue generado.";
        } else {
          removedAssetUrl = normalizeText_(removed.url);
          requiresProxy = diagnosisExternalItemNeedsAppsScriptCleanup_(removed);
          payload.pdf_externos = externalItems;
          if (externalItems.length) {
            payload.pdf_externo_link = normalizeText_(externalItems[0].url);
          } else {
            delete payload.pdf_externo_link;
          }
        }
      }
    }
  }
  if (localErrorMessage) {
    return { status: 400, payload: { success: false, message: localErrorMessage } };
  }
  const updateRes = await supabaseRest_(env, "patch", "diagnosticos_archivos", {
    filters: { id_reporte: eq_(reportId) },
    prefer: "return=minimal",
    body: {
      datos_json: JSON.stringify(payload),
      pdf_url: updatedPdfUrl
    }
  });
  if (!updateRes.success) {
    return errorResult_(500, updateRes.message || "No se pudo actualizar el diagnostico.");
  }
  const warnings = [];
  if (requiresProxy) {
    warnings.push("El archivo heredado de Drive ya no se mostrara en el sistema, pero no se pudo eliminar fisicamente fuera de Supabase.");
  } else if (isWorkerManagedUrlWorker_(removedAssetUrl)) {
    const cleanupRes = await deleteWorkerManagedAssetByUrl_(env, removedAssetUrl);
    if (!cleanupRes.success && !cleanupRes.skipped) {
      warnings.push("El documento fue desvinculado del diagnostico, pero no se pudo borrar fisicamente de Cloudflare R2.");
    }
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: warnings.length ? "Documento eliminado con advertencia." : "Documento eliminado correctamente.",
      warning: warnings.join(" | "),
      remaining_docs: buildDiagnosisRemainingDocsWorker_(updatedPdfUrl, payload)
    }
  };
}
__name(handleDeleteDiagnosisAsset_, "handleDeleteDiagnosisAsset_");
async function handleDeleteDiagnosis_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const reportId = normalizeText_(body.id_reporte || body.report_id);
  if (!reportId) {
    return { status: 400, payload: { success: false, message: "Falta id_reporte." } };
  }
  const report = await findSingleByField_(env, "diagnosticos_archivos", "id_reporte", reportId);
  if (!report) {
    return { status: 404, payload: { success: false, message: "Reporte no encontrado." } };
  }
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, report.id_paciente);
  if (!patientAccess.ok) {
    return patientAccess.result;
  }
  const legacyWarning = diagnosisRecordRequiresAppsScriptCleanup_(report) ? "El diagnostico referenciaba archivos heredados de Drive. El registro se elimino de Supabase, pero esos archivos externos no se borraron fisicamente." : "";
  const storedUrls = collectDiagnosisAssetUrlsFromReportWorker_(report);
  const deleteRes = await supabaseRest_(env, "delete", "diagnosticos_archivos", {
    filters: { id_reporte: eq_(reportId) }
  });
  if (!deleteRes.success) {
    return errorResult_(500, deleteRes.message || "No se pudo eliminar el diagnostico.");
  }
  const storageCleanup = await deleteWorkerManagedAssetUrls_(env, storedUrls);
  const warnings = [];
  if (legacyWarning) warnings.push(legacyWarning);
  if (!storageCleanup.success) warnings.push(storageCleanup.warning || "No se pudieron borrar algunos archivos de Cloudflare R2.");
  return {
    status: 200,
    payload: {
      success: true,
      message: warnings.length ? "Diagnostico eliminado con advertencia." : "Diagnostico eliminado correctamente.",
      warning: warnings.join(" | ")
    }
  };
}
__name(handleDeleteDiagnosis_, "handleDeleteDiagnosis_");
async function handleDeleteBulkDiagnosis_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const ids = normalizeIdList_(body.ids);
  if (!ids.length) {
    return {
      status: 400,
      payload: { success: false, deleted_count: 0, failed_ids: [], message: "No se recibieron diagnosticos para eliminar." }
    };
  }
  const lookupRes = await supabaseRest_(env, "get", "diagnosticos_archivos", {
    select: "id_reporte,id_paciente,datos_json,pdf_url",
    filters: [
      ["id_paciente", eq_(access.patient.id_paciente)],
      ["id_reporte", inList_(ids)]
    ]
  });
  if (!lookupRes.success) {
    return errorResult_(500, lookupRes.message || "No se pudieron validar los diagnosticos a eliminar.");
  }
  const matches = Array.isArray(lookupRes.data) ? lookupRes.data : [];
  if (!matches.length) {
    return {
      status: 404,
      payload: {
        success: false,
        deleted_count: 0,
        failed_ids: ids,
        message: "No se encontraron diagnosticos para eliminar."
      }
    };
  }
  const matchedIds = matches.map(function(row) {
    return normalizeText_(row && row.id_reporte);
  }).filter(Boolean);
  if (matchedIds.length !== ids.length) {
    return {
      status: 400,
      payload: {
        success: false,
        deleted_count: 0,
        failed_ids: ids.filter(function(id) {
          return matchedIds.indexOf(id) === -1;
        }),
        message: "Uno o mas diagnosticos no pertenecen a este paciente."
      }
    };
  }
  const hasLegacyDriveAssets = matches.some(diagnosisRecordRequiresAppsScriptCleanup_);
  const storedUrls = [];
  for (let i = 0; i < matches.length; i++) {
    const urls = collectDiagnosisAssetUrlsFromReportWorker_(matches[i]);
    for (let j = 0; j < urls.length; j++) storedUrls.push(urls[j]);
  }
  const deleteRes = await supabaseRest_(env, "delete", "diagnosticos_archivos", {
    filters: [
      ["id_paciente", eq_(access.patient.id_paciente)],
      ["id_reporte", inList_(matchedIds)]
    ]
  });
  if (!deleteRes.success) {
    return errorResult_(500, deleteRes.message || "No se pudieron eliminar los diagnosticos seleccionados.");
  }
  const storageCleanup = await deleteWorkerManagedAssetUrls_(env, storedUrls);
  const warnings = [];
  if (hasLegacyDriveAssets) {
    warnings.push("Uno o mas diagnosticos referenciaban archivos heredados de Drive. Los registros se eliminaron de Supabase, pero esos archivos externos no se borraron fisicamente.");
  }
  if (!storageCleanup.success) {
    warnings.push(storageCleanup.warning || "No se pudieron borrar algunos archivos de Cloudflare R2.");
  }
  return {
    status: 200,
    payload: {
      success: true,
      deleted_count: matchedIds.length,
      failed_ids: [],
      warning: warnings.join(" | "),
      message: matchedIds.length === 1 ? warnings.length ? "Se elimino 1 diagnostico con advertencia." : "Se elimino 1 diagnostico." : warnings.length ? "Se eliminaron " + matchedIds.length + " diagnostico(s) con advertencia." : "Se eliminaron " + matchedIds.length + " diagnostico(s)."
    }
  };
}
__name(handleDeleteBulkDiagnosis_, "handleDeleteBulkDiagnosis_");
async function handleGetPatientEvolution_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const res = await supabaseRest_(env, "get", "evolucion_paciente", {
    select: "id_evolucion,id_paciente,fecha_consulta,motivo_consulta,evolucion,diagnostico,tratamiento,sugerencias,creado_por,fecha_actualizacion",
    filters: { id_paciente: eq_(access.patient.id_paciente) },
    orderBy: "fecha_consulta",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar la evolucion del paciente.");
  }
  const data = Array.isArray(res.data) ? res.data.slice().sort(compareEvolutionDesc_) : [];
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetPatientEvolution_, "handleGetPatientEvolution_");
async function handleSavePatientEvolution_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const data = body.data && typeof body.data === "object" ? body.data : {};
  let targetPatientId = normalizeText_(data.id_paciente);
  const targetId = normalizeText_(data.id_evolucion);
  let existing = null;
  if (targetId) {
    existing = await findSingleByField_(env, "evolucion_paciente", "id_evolucion", targetId);
    if (!existing) {
      return { status: 404, payload: { success: false, message: "La evolucion que intentas editar no existe." } };
    }
    targetPatientId = normalizeText_(existing.id_paciente) || targetPatientId;
  }
  if (!targetPatientId) {
    return { status: 400, payload: { success: false, message: "Falta id_paciente." } };
  }
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, targetPatientId);
  if (!patientAccess.ok) {
    return patientAccess.result;
  }
  const row = buildPatientEvolutionWriteRow_(data, {
    id_evolucion: targetId || "EVOL-" + Date.now(),
    id_paciente: patientAccess.patient.id_paciente,
    creado_por: normalizeLower_(existing && existing.creado_por || validation.session.user_id),
    fecha_actualizacion: (/* @__PURE__ */ new Date()).toISOString()
  });
  const res = await supabaseRest_(env, "post", "evolucion_paciente", {
    onConflict: "id_evolucion",
    prefer: "resolution=merge-duplicates,return=representation",
    body: row
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo guardar la evolucion.");
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: "Evolucion guardada correctamente.",
      data: Array.isArray(res.data) && res.data.length ? res.data[0] : row
    }
  };
}
__name(handleSavePatientEvolution_, "handleSavePatientEvolution_");
async function handleDeletePatientEvolution_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const idEvolution = normalizeText_(body.id_evolucion || body.evolution_id);
  if (!idEvolution) {
    return { status: 400, payload: { success: false, message: "Falta id_evolucion." } };
  }
  const evolution = await findSingleByField_(env, "evolucion_paciente", "id_evolucion", idEvolution);
  if (!evolution) {
    return { status: 404, payload: { success: false, message: "Evolucion no encontrada." } };
  }
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, evolution.id_paciente);
  if (!patientAccess.ok) {
    return patientAccess.result;
  }
  const res = await supabaseRest_(env, "delete", "evolucion_paciente", {
    filters: { id_evolucion: eq_(idEvolution) }
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo eliminar la evolucion.");
  }
  return { status: 200, payload: { success: true, message: "Evolucion eliminada correctamente." } };
}
__name(handleDeletePatientEvolution_, "handleDeletePatientEvolution_");
async function handleDeleteBulkPatientEvolution_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const ids = normalizeIdList_(body.ids);
  if (!ids.length) {
    return {
      status: 400,
      payload: { success: false, deleted_count: 0, missing_ids: [], message: "No se recibieron evoluciones para eliminar." }
    };
  }
  const lookupRes = await supabaseRest_(env, "get", "evolucion_paciente", {
    select: "id_evolucion,id_paciente",
    filters: [
      ["id_paciente", eq_(access.patient.id_paciente)],
      ["id_evolucion", inList_(ids)]
    ]
  });
  if (!lookupRes.success) {
    return errorResult_(500, lookupRes.message || "No se pudieron validar las evoluciones a eliminar.");
  }
  const matches = Array.isArray(lookupRes.data) ? lookupRes.data : [];
  if (!matches.length) {
    return {
      status: 404,
      payload: {
        success: false,
        deleted_count: 0,
        missing_ids: ids,
        message: "No se encontraron evoluciones para eliminar."
      }
    };
  }
  const matchedIds = matches.map(function(row) {
    return normalizeText_(row && row.id_evolucion);
  }).filter(Boolean);
  if (matchedIds.length !== ids.length) {
    return {
      status: 400,
      payload: {
        success: false,
        deleted_count: 0,
        missing_ids: ids.filter(function(id) {
          return matchedIds.indexOf(id) === -1;
        }),
        message: "Una o mas evoluciones no pertenecen a este paciente."
      }
    };
  }
  const deleteRes = await supabaseRest_(env, "delete", "evolucion_paciente", {
    filters: [
      ["id_paciente", eq_(access.patient.id_paciente)],
      ["id_evolucion", inList_(matchedIds)]
    ]
  });
  if (!deleteRes.success) {
    return errorResult_(500, deleteRes.message || "No se pudieron eliminar las evoluciones seleccionadas.");
  }
  return {
    status: 200,
    payload: {
      success: true,
      deleted_count: matchedIds.length,
      missing_ids: [],
      message: matchedIds.length === 1 ? "Se elimino 1 evolucion." : "Se eliminaron " + matchedIds.length + " evolucion(es)."
    }
  };
}
__name(handleDeleteBulkPatientEvolution_, "handleDeleteBulkPatientEvolution_");
async function handleGetServices_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const servicesRes = await supabaseRest_(env, "get", "servicios", {
    select: "id,nombre_servicio,recomendaciones,titulo_reporte,scope_visibility,owner_usuario,duracion_minutos",
    orderBy: "nombre_servicio",
    ascending: true
  });
  if (!servicesRes.success) {
    return errorResult_(500, servicesRes.message || "No se pudieron cargar los servicios.");
  }
  let patientDoctorOwner = "";
  if (validation.session.role === "paciente") {
    const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
    patientDoctorOwner = normalizeLower_(patient && patient.creado_por);
  }
  const data = (Array.isArray(servicesRes.data) ? servicesRes.data : []).map(normalizeServiceOutputRow_).filter(function(service) {
    if (!service.nombre_servicio) return false;
    if (validation.session.role === "superadmin") return true;
    if (validation.session.role === "admin") {
      return service.scope_visibility === "ALL" || service.owner_usuario === validation.session.user_id;
    }
    return service.scope_visibility === "ALL" || !!patientDoctorOwner && service.owner_usuario === patientDoctorOwner;
  });
  return { status: 200, payload: { success: true, data } };
}
__name(handleGetServices_, "handleGetServices_");
async function handleGetTakenSlots_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const dateString = normalizeIsoDateValue_(body.fecha);
  if (!dateString) {
    return { status: 400, payload: { success: false, message: "Falta fecha." } };
  }
  const mode = normalizeLower_(body.mode);
  const excludeId = normalizeText_(body.exclude_cita_id || body.appointment_id);
  const appointmentsRes = await supabaseRest_(env, "get", "citas", {
    select: "id_cita,fecha,hora,motivo,duracion_minutos",
    filters: { fecha: eq_(dateString) }
  });
  if (!appointmentsRes.success) {
    return errorResult_(500, appointmentsRes.message || "No se pudo consultar la disponibilidad.");
  }
  const appointments = Array.isArray(appointmentsRes.data) ? appointmentsRes.data : [];
  let requestedDuration = parseAllowedDurationMinutesWorker_(body.duration_minutes);
  if (!requestedDuration && excludeId) {
    const currentAppointment = appointments.find(function(item) {
      return normalizeText_(item && item.id_cita) === excludeId;
    });
    requestedDuration = await resolveAppointmentDurationMinutesWorker_(env, currentAppointment || {});
  }
  requestedDuration = normalizeDurationMinutesWorker_(requestedDuration);
  const occupied = await getOccupiedSlotsForDateWorker_(env, appointments, { excludeId });
  if (mode === "available") {
    return {
      status: 200,
      payload: { success: true, data: getAvailableStartSlotsForDateWorker_(occupied, requestedDuration) }
    };
  }
  return { status: 200, payload: { success: true, data: occupied.slice() } };
}
__name(handleGetTakenSlots_, "handleGetTakenSlots_");
async function handleScheduleAppointment_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const data = body.data && typeof body.data === "object" ? body.data : {};
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, data.id_paciente);
  if (!patientAccess.ok) {
    return patientAccess.result;
  }
  const fecha = normalizeIsoDateValue_(data.fecha);
  const hora = normalizeTimeText_(data.hora);
  const motivo = normalizeText_(data.motivo);
  if (!fecha || !hora || !motivo) {
    return { status: 400, payload: { success: false, message: "Completa fecha, hora y motivo." } };
  }
  if (validation.session.role === "paciente") {
    const vacationRecord = await findDoctorVacationRecord_(env, patientAccess.patient.creado_por);
    const vacationState = buildVacationResponse_(patientAccess.patient.creado_por, vacationRecord);
    if (vacationState && vacationState.active) {
      return {
        status: 400,
        payload: {
          success: false,
          message: vacationState.block_message || "Tu medico se encuentra de vacaciones y no acepta citas por el momento."
        }
      };
    }
  }
  const durationMinutes = await resolveRequestedAppointmentDurationWorker_(env, data);
  const isAvailable = await isAppointmentRangeAvailableWorker_(env, fecha, hora, durationMinutes, {});
  if (!isAvailable) {
    return {
      status: 409,
      payload: {
        success: false,
        message: "Ese horario ya no esta disponible para la duracion del servicio seleccionado."
      }
    };
  }
  const doctor = await loadUserByRoleAndId_(env, "admin", patientAccess.patient.creado_por);
  const createdBy = normalizeText_(data.creado_por || (validation.session.role === "paciente" ? "PACIENTE_WEB" : "DOCTOR")) || "DOCTOR";
  const record = {
    id_cita: "C-" + Date.now(),
    id_paciente: normalizeText_(patientAccess.patient.id_paciente),
    fecha,
    hora,
    motivo,
    estado: "PENDIENTE",
    fecha_registro: (/* @__PURE__ */ new Date()).toISOString(),
    nota_paciente: normalizeText_(data.nota || data.nota_paciente),
    recomendaciones_serv: normalizeText_(data.recomendaciones || data.recomendaciones_serv),
    creado_por: createdBy,
    duracion_minutos: durationMinutes
  };
  const insertRes = await supabaseRest_(env, "post", "citas", {
    prefer: "return=representation",
    body: record
  });
  if (!insertRes.success) {
    return errorResult_(500, insertRes.message || "No se pudo guardar la cita.");
  }
  const notifyRes = await sendAppointmentNotificationsByBridge_(env, {
    event: "schedule",
    id_cita: record.id_cita,
    id_paciente: record.id_paciente,
    creado_por: createdBy,
    fecha,
    hora,
    motivo,
    recomendaciones: normalizeText_(record.recomendaciones_serv),
    patient_email: normalizeLower_(patientAccess.patient.correo),
    patient_nombre: normalizeText_(patientAccess.patient.nombre_completo),
    patient_telefono: normalizeText_(patientAccess.patient.telefono),
    doctor_email: normalizeLower_(doctor && (doctor.correo_notificaciones || doctor.correo)),
    doctor_nombre: normalizeText_(doctor && (doctor.nombre_doctor || doctor.nombre || patientAccess.patient.creado_por)),
    doctor_telefono: normalizeText_(doctor && doctor.telefono)
  });
  const notifyWarning = !notifyRes.success ? notifyRes.message || "La cita se guardo, pero no se pudo enviar el correo de notificacion." : "";
  const responseMessage = notifyWarning ? "Cita procesada correctamente. Advertencia: " + notifyWarning : "Cita procesada correctamente.";
  return {
    status: 200,
    payload: {
      success: true,
      message: responseMessage,
      id_cita: record.id_cita,
      telefono: normalizeText_(patientAccess.patient.telefono),
      nombre: normalizeText_(patientAccess.patient.nombre_completo),
      doctor_phone: normalizeText_(doctor && doctor.telefono),
      duracion_minutos: durationMinutes,
      warning: notifyWarning
    }
  };
}
__name(handleScheduleAppointment_, "handleScheduleAppointment_");
async function handleRescheduleAppointment_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const data = body.data && typeof body.data === "object" ? body.data : {};
  const appointmentId = normalizeText_(data.id_cita);
  const nuevaFecha = normalizeIsoDateValue_(data.nueva_fecha);
  const nuevaHora = normalizeTimeText_(data.nueva_hora);
  if (!appointmentId || !nuevaFecha || !nuevaHora) {
    return { status: 400, payload: { success: false, message: "Completa id_cita, nueva_fecha y nueva_hora." } };
  }
  const access = await resolveAccessibleAppointmentForSession_(env, validation.session, appointmentId);
  if (!access.ok) {
    return access.result;
  }
  if (validation.session.role === "paciente") {
    const vacationRecord = await findDoctorVacationRecord_(env, access.patient.creado_por);
    const vacationState = buildVacationResponse_(access.patient.creado_por, vacationRecord);
    if (vacationState && vacationState.active) {
      return {
        status: 400,
        payload: {
          success: false,
          message: vacationState.block_message || "Tu medico se encuentra de vacaciones y no acepta citas por el momento."
        }
      };
    }
  }
  const durationMinutes = await resolveAppointmentDurationMinutesWorker_(env, access.appointment || {});
  const isAvailable = await isAppointmentRangeAvailableWorker_(env, nuevaFecha, nuevaHora, durationMinutes, {
    excludeId: appointmentId
  });
  if (!isAvailable) {
    return {
      status: 409,
      payload: {
        success: false,
        message: "Ese horario ya no esta disponible para la duracion de esta cita."
      }
    };
  }
  const patchRes = await supabaseRest_(env, "patch", "citas", {
    filters: { id_cita: eq_(appointmentId) },
    prefer: "return=representation",
    body: {
      fecha: nuevaFecha,
      hora: nuevaHora,
      estado: "REAGENDADO"
    }
  });
  if (!patchRes.success) {
    return errorResult_(500, patchRes.message || "No se pudo reagendar la cita.");
  }
  const doctor = await loadUserByRoleAndId_(env, "admin", access.patient.creado_por);
  const notifyRes = await sendAppointmentNotificationsByBridge_(env, {
    event: "reschedule",
    id_cita: appointmentId,
    id_paciente: normalizeText_(access.patient.id_paciente),
    fecha: nuevaFecha,
    hora: nuevaHora,
    motivo: normalizeText_(access.appointment && access.appointment.motivo) || "REAGENDADO",
    patient_email: normalizeLower_(access.patient.correo),
    patient_nombre: normalizeText_(access.patient.nombre_completo),
    patient_telefono: normalizeText_(access.patient.telefono),
    doctor_email: normalizeLower_(doctor && (doctor.correo_notificaciones || doctor.correo)),
    doctor_nombre: normalizeText_(doctor && (doctor.nombre_doctor || doctor.nombre || access.patient.creado_por)),
    doctor_telefono: normalizeText_(doctor && doctor.telefono)
  });
  const notifyWarning = !notifyRes.success ? notifyRes.message || "La cita se reagendo, pero no se pudo enviar el correo de notificacion." : "";
  const responseMessage = notifyWarning ? "Cita reagendada correctamente. Advertencia: " + notifyWarning : "Cita reagendada correctamente.";
  return {
    status: 200,
    payload: {
      success: true,
      message: responseMessage,
      doctor_phone: normalizeText_(doctor && doctor.telefono),
      warning: notifyWarning
    }
  };
}
__name(handleRescheduleAppointment_, "handleRescheduleAppointment_");
async function handleUpdateApptStatus_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const appointmentId = normalizeText_(body.id_cita || body.appointment_id);
  if (!appointmentId) {
    return { status: 400, payload: { success: false, message: "Falta id_cita." } };
  }
  const nextStatus = normalizeAppointmentStatus_(body.estado);
  if (!nextStatus) {
    return { status: 400, payload: { success: false, message: "Estado de cita invalido." } };
  }
  const access = await resolveAccessibleAppointmentForSession_(env, validation.session, appointmentId);
  if (!access.ok) {
    return access.result;
  }
  const patchRes = await supabaseRest_(env, "patch", "citas", {
    filters: { id_cita: eq_(appointmentId) },
    prefer: "return=representation",
    body: { estado: nextStatus }
  });
  if (!patchRes.success) {
    return errorResult_(500, patchRes.message || "No se pudo actualizar el estado de la cita.");
  }
  return { status: 200, payload: { success: true, message: "Estado actualizado" } };
}
__name(handleUpdateApptStatus_, "handleUpdateApptStatus_");
async function handleDeleteCita_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const appointmentId = normalizeText_(body.id_cita || body.appointment_id);
  if (!appointmentId) {
    return { status: 400, payload: { success: false, message: "Falta id_cita." } };
  }
  const access = await resolveAccessibleAppointmentForSession_(env, validation.session, appointmentId);
  if (!access.ok) {
    return access.result;
  }
  if (!canPatientDeleteOwnAppointmentForSession_(validation.session, access.appointment)) {
    return {
      status: 403,
      payload: {
        success: false,
        message: "Solo puedes eliminar citas que agendaste tu mismo y que sigan pendientes."
      }
    };
  }
  const deleteRes = await supabaseRest_(env, "delete", "citas", {
    filters: { id_cita: eq_(appointmentId) }
  });
  if (!deleteRes.success) {
    return errorResult_(500, deleteRes.message || "No se pudo eliminar la cita.");
  }
  let notifyWarning = "";
  if (validationSessionIsPaciente_(validation.session)) {
    const doctor = await loadUserByRoleAndId_(env, "admin", access.patient.creado_por);
    const notifyRes = await sendAppointmentNotificationsByBridge_(env, {
      event: "cancel",
      id_cita: appointmentId,
      id_paciente: normalizeText_(access.patient.id_paciente),
      fecha: normalizeIsoDateValue_(access.appointment && access.appointment.fecha),
      hora: normalizeTimeText_(access.appointment && access.appointment.hora),
      motivo: normalizeText_(access.appointment && access.appointment.motivo),
      recomendaciones: normalizeText_(access.appointment && access.appointment.recomendaciones_serv),
      patient_email: normalizeLower_(access.patient.correo),
      patient_nombre: normalizeText_(access.patient.nombre_completo),
      patient_telefono: normalizeText_(access.patient.telefono),
      doctor_email: normalizeLower_(doctor && (doctor.correo_notificaciones || doctor.correo)),
      doctor_nombre: normalizeText_(doctor && (doctor.nombre_doctor || doctor.nombre || access.patient.creado_por)),
      doctor_telefono: normalizeText_(doctor && doctor.telefono)
    });
    if (!notifyRes.success) {
      notifyWarning = notifyRes.message || "La cita se elimino, pero no se pudo enviar el correo de notificacion.";
    }
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: notifyWarning ? "Cita eliminada correctamente. Advertencia: " + notifyWarning : "Cita eliminada correctamente",
      warning: notifyWarning
    }
  };
}
__name(handleDeleteCita_, "handleDeleteCita_");
async function handleDeleteBulkCitas_(body, env) {
  const access = await requireAccessiblePatientForAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!access.ok) {
    return access.result;
  }
  const ids = normalizeIdList_(body.ids);
  if (!ids.length) {
    return {
      status: 400,
      payload: { success: false, deleted_count: 0, missing_ids: [], message: "No se recibieron citas para eliminar." }
    };
  }
  const lookupRes = await supabaseRest_(env, "get", "citas", {
    select: "id_cita,id_paciente,creado_por,estado,fecha,hora,motivo,recomendaciones_serv",
    filters: [
      ["id_paciente", eq_(access.patient.id_paciente)],
      ["id_cita", inList_(ids)]
    ]
  });
  if (!lookupRes.success) {
    return errorResult_(500, lookupRes.message || "No se pudieron validar las citas a eliminar.");
  }
  const matches = Array.isArray(lookupRes.data) ? lookupRes.data : [];
  if (!matches.length) {
    return {
      status: 404,
      payload: {
        success: false,
        deleted_count: 0,
        missing_ids: ids,
        message: "No se encontraron citas para eliminar."
      }
    };
  }
  const matchedIds = matches.map(function(row) {
    return normalizeText_(row && row.id_cita);
  }).filter(Boolean);
  if (matchedIds.length !== ids.length) {
    return {
      status: 400,
      payload: {
        success: false,
        deleted_count: 0,
        missing_ids: ids.filter(function(id) {
          return matchedIds.indexOf(id) === -1;
        }),
        message: "Una o mas citas no pertenecen a este paciente."
      }
    };
  }
  if (validationSessionIsPaciente_(access.session)) {
    const denied = matches.find(function(row) {
      return !canPatientDeleteOwnAppointmentForSession_(access.session, row);
    });
    if (denied) {
      return {
        status: 403,
        payload: {
          success: false,
          deleted_count: 0,
          missing_ids: [],
          message: "Solo puedes eliminar citas que agendaste tu mismo y que sigan pendientes."
        }
      };
    }
  }
  const deleteRes = await supabaseRest_(env, "delete", "citas", {
    filters: [
      ["id_paciente", eq_(access.patient.id_paciente)],
      ["id_cita", inList_(matchedIds)]
    ]
  });
  if (!deleteRes.success) {
    return errorResult_(500, deleteRes.message || "No se pudieron eliminar las citas seleccionadas.");
  }
  let notifyWarning = "";
  if (validationSessionIsPaciente_(access.session)) {
    const doctor = await loadUserByRoleAndId_(env, "admin", access.patient.creado_por);
    const notifyErrors = [];
    for (const row of matches) {
      const notifyRes = await sendAppointmentNotificationsByBridge_(env, {
        event: "cancel",
        id_cita: normalizeText_(row && row.id_cita),
        id_paciente: normalizeText_(access.patient.id_paciente),
        fecha: normalizeIsoDateValue_(row && row.fecha),
        hora: normalizeTimeText_(row && row.hora),
        motivo: normalizeText_(row && row.motivo),
        recomendaciones: normalizeText_(row && row.recomendaciones_serv),
        patient_email: normalizeLower_(access.patient.correo),
        patient_nombre: normalizeText_(access.patient.nombre_completo),
        patient_telefono: normalizeText_(access.patient.telefono),
        doctor_email: normalizeLower_(doctor && (doctor.correo_notificaciones || doctor.correo)),
        doctor_nombre: normalizeText_(doctor && (doctor.nombre_doctor || doctor.nombre || access.patient.creado_por)),
        doctor_telefono: normalizeText_(doctor && doctor.telefono)
      });
      if (!notifyRes.success) {
        notifyErrors.push(notifyRes.message || "No se pudo enviar el correo de notificacion.");
      }
    }
    if (notifyErrors.length) {
      notifyWarning = notifyErrors[0];
    }
  }
  return {
    status: 200,
    payload: {
      success: true,
      deleted_count: matchedIds.length,
      missing_ids: [],
      message: notifyWarning ? (matchedIds.length === 1 ? "Se elimino 1 cita." : "Se eliminaron " + matchedIds.length + " cita(s).") + " Advertencia: " + notifyWarning : matchedIds.length === 1 ? "Se elimino 1 cita." : "Se eliminaron " + matchedIds.length + " cita(s).",
      warning: notifyWarning
    }
  };
}
__name(handleDeleteBulkCitas_, "handleDeleteBulkCitas_");
async function handleSelfUpdatePatientProfile_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["paciente"] });
  if (!validation.ok) {
    return validation.result;
  }
  const safePayload = body.data && typeof body.data === "object" ? body.data : {};
  const patch = {};
  if (Object.prototype.hasOwnProperty.call(safePayload, "nombre_completo")) patch.nombre_completo = normalizeUpper_(safePayload.nombre_completo);
  if (Object.prototype.hasOwnProperty.call(safePayload, "correo")) patch.correo = normalizeLower_(safePayload.correo);
  if (Object.prototype.hasOwnProperty.call(safePayload, "telefono")) patch.telefono = normalizeDigits_(safePayload.telefono);
  if (Object.prototype.hasOwnProperty.call(safePayload, "direccion")) patch.direccion = normalizeUpper_(safePayload.direccion);
  if (Object.prototype.hasOwnProperty.call(safePayload, "ocupacion")) patch.ocupacion = normalizeUpper_(safePayload.ocupacion);
  if (Object.prototype.hasOwnProperty.call(safePayload, "fecha_nacimiento")) patch.fecha_nacimiento = normalizeIsoDateValue_(safePayload.fecha_nacimiento);
  const res = await supabaseRest_(env, "patch", "pacientes", {
    filters: { id_paciente: eq_(validation.session.user_id) },
    prefer: "return=representation",
    body: patch
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo actualizar el perfil del paciente.");
  }
  const updated = res.data[0] || {};
  return {
    status: 200,
    payload: {
      success: true,
      message: "Perfil actualizado.",
      data: {
        id_paciente: String(updated.id_paciente || validation.session.user_id),
        nombre_completo: String(updated.nombre_completo || ""),
        cedula: String(updated.cedula || ""),
        correo: String(updated.correo || ""),
        telefono: String(updated.telefono || ""),
        direccion: String(updated.direccion || ""),
        ocupacion: String(updated.ocupacion || ""),
        fecha_nacimiento: String(updated.fecha_nacimiento || "")
      }
    }
  };
}
__name(handleSelfUpdatePatientProfile_, "handleSelfUpdatePatientProfile_");
async function handleSelfUpdateAdminProfile_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const safePayload = body.data && typeof body.data === "object" ? body.data : {};
  const patch = {};
  if (Object.prototype.hasOwnProperty.call(safePayload, "nombre_doctor")) patch.nombre_doctor = normalizeUpper_(safePayload.nombre_doctor);
  if (Object.prototype.hasOwnProperty.call(safePayload, "rol")) {
    const role = normalizeUpper_(safePayload.rol);
    patch.rol = role;
    patch.ocupacion = role;
  }
  if (Object.prototype.hasOwnProperty.call(safePayload, "correo_notificaciones")) {
    const email = normalizeLower_(safePayload.correo_notificaciones);
    patch.correo_notificaciones = email;
    patch.correo = email;
  }
  if (Object.prototype.hasOwnProperty.call(safePayload, "telefono")) patch.telefono = normalizeDigits_(safePayload.telefono);
  if (Object.prototype.hasOwnProperty.call(safePayload, "registro_sanitario")) patch.registro_sanitario = normalizeUpper_(safePayload.registro_sanitario);
  if (Object.prototype.hasOwnProperty.call(safePayload, "usar_firma_virtual")) patch.usar_firma_virtual = boolToSheetFlag_(safePayload.usar_firma_virtual);
  const res = await supabaseRest_(env, "patch", "usuarios_admin", {
    filters: { usuario: eq_(validation.session.user_id) },
    prefer: "return=representation",
    body: patch
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo actualizar el perfil del usuario admin.");
  }
  const updated = res.data[0] || {};
  return {
    status: 200,
    payload: {
      success: true,
      message: "Perfil actualizado.",
      data: {
        usuario: String(updated.usuario || validation.session.user_id),
        nombre_doctor: String(updated.nombre_doctor || ""),
        rol: String(updated.rol || updated.ocupacion || ""),
        correo_notificaciones: String(updated.correo_notificaciones || updated.correo || ""),
        telefono: String(updated.telefono || ""),
        registro_sanitario: String(updated.registro_sanitario || ""),
        usar_firma_virtual: sheetFlagToBool_(updated.usar_firma_virtual)
      }
    }
  };
}
__name(handleSelfUpdateAdminProfile_, "handleSelfUpdateAdminProfile_");
async function handleGetMyDoctorInfo_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["paciente"] });
  if (!validation.ok) {
    return validation.result;
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const doctorUser = normalizeLower_(patient.creado_por);
  if (!doctorUser) {
    return {
      status: 200,
      payload: { success: true, data: { nombre_doctor: "", telefono: "", correo: "" } }
    };
  }
  const doctor = await loadUserByRoleAndId_(env, "admin", doctorUser);
  if (!doctor) {
    return {
      status: 200,
      payload: { success: true, data: { nombre_doctor: "", telefono: "", correo: "" } }
    };
  }
  return {
    status: 200,
    payload: {
      success: true,
      data: {
        nombre_doctor: normalizeUpper_(doctor.nombre_doctor || doctor.nombre || ""),
        telefono: normalizeText_(doctor.telefono),
        correo: normalizeLower_(doctor.correo_notificaciones || doctor.correo || "")
      }
    }
  };
}
__name(handleGetMyDoctorInfo_, "handleGetMyDoctorInfo_");
async function handleGetFileBase64_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, {
    allowRoles: ["admin", "paciente", "superadmin"]
  });
  if (!validation.ok) {
    return validation.result;
  }
  const fileId = normalizeText_(body.file_id || body.id);
  if (!fileId) {
    return { status: 400, payload: { success: false, message: "Falta file_id." } };
  }
  const canAccess = await canSessionAccessLegacyDriveFile_(env, validation.session, fileId);
  if (!canAccess) {
    return { status: 403, payload: { success: false, message: "Acceso denegado." } };
  }
  const candidates = [
    "https://lh3.googleusercontent.com/d/" + encodeURIComponent(fileId),
    "https://drive.google.com/uc?export=view&id=" + encodeURIComponent(fileId)
  ];
  let lastError = "";
  for (const url of candidates) {
    const fetched = await fetchRemoteFileAsDataUrl_(url);
    if (fetched.success) {
      return { status: 200, payload: { success: true, data: fetched.data } };
    }
    lastError = fetched.message || lastError;
  }
  return {
    status: 502,
    payload: {
      success: false,
      message: lastError || "No se pudo cargar la imagen solicitada."
    }
  };
}
__name(handleGetFileBase64_, "handleGetFileBase64_");
async function handleSetMyVacation_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const doctorUser = validation.session.user_id;
  const safePayload = body.data && typeof body.data === "object" ? body.data : {};
  const active = safePayload.activo === void 0 ? true : !!safePayload.activo;
  const fechaHasta = normalizeIsoDateValue_(safePayload.fecha_hasta || safePayload.hasta || "");
  const titulo = normalizeUpper_(safePayload.titulo);
  const mensaje = normalizeText_(safePayload.mensaje);
  if (active && !fechaHasta) {
    return {
      status: 400,
      payload: { success: false, message: "Debes indicar la fecha hasta la que estaras fuera." }
    };
  }
  const nowIso = (/* @__PURE__ */ new Date()).toISOString();
  const existing = await findDoctorVacationRecord_(env, doctorUser);
  let res;
  if (existing) {
    res = await supabaseRest_(env, "patch", "config_vacaciones", {
      filters: { doctor_usuario: eq_(doctorUser) },
      prefer: "return=representation",
      body: {
        activo: boolToSheetFlag_(active),
        fecha_hasta: fechaHasta,
        titulo,
        mensaje,
        fecha_actualizacion: nowIso
      }
    });
  } else {
    res = await supabaseRest_(env, "post", "config_vacaciones", {
      prefer: "return=representation",
      body: {
        doctor_usuario: doctorUser,
        activo: boolToSheetFlag_(active),
        fecha_hasta: fechaHasta,
        titulo,
        mensaje,
        fecha_actualizacion: nowIso
      }
    });
  }
  if (!res.success || !existing && (!Array.isArray(res.data) || !res.data.length)) {
    return errorResult_(500, res.message || "No se pudo actualizar el aviso de vacaciones.");
  }
  const refreshed = await findDoctorVacationRecord_(env, doctorUser);
  const payload = buildVacationResponse_(doctorUser, refreshed || {
    doctor_usuario: doctorUser,
    activo: boolToSheetFlag_(active),
    fecha_hasta: fechaHasta,
    titulo,
    mensaje,
    fecha_actualizacion: nowIso
  });
  payload.message = "Aviso de vacaciones actualizado.";
  return { status: 200, payload };
}
__name(handleSetMyVacation_, "handleSetMyVacation_");
async function handleGetMyVacation_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const doctorUser = validation.session.user_id;
  const record = await findDoctorVacationRecord_(env, doctorUser);
  if (!record) {
    return {
      status: 200,
      payload: {
        success: true,
        doctor_usuario: doctorUser,
        active: false,
        fecha_hasta: "",
        titulo: "",
        mensaje: "",
        fecha_actualizacion: "",
        block_message: ""
      }
    };
  }
  return { status: 200, payload: buildVacationResponse_(doctorUser, record) };
}
__name(handleGetMyVacation_, "handleGetMyVacation_");
async function handleGetMyDoctorVacation_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["paciente"] });
  if (!validation.ok) {
    return validation.result;
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const doctorUser = normalizeLower_(patient.creado_por);
  if (!doctorUser) {
    return {
      status: 200,
      payload: {
        success: true,
        doctor_usuario: "",
        active: false,
        fecha_hasta: "",
        titulo: "",
        mensaje: "",
        fecha_actualizacion: "",
        block_message: ""
      }
    };
  }
  const record = await findDoctorVacationRecord_(env, doctorUser);
  if (!record) {
    return {
      status: 200,
      payload: {
        success: true,
        doctor_usuario: doctorUser,
        active: false,
        fecha_hasta: "",
        titulo: "",
        mensaje: "",
        fecha_actualizacion: "",
        block_message: ""
      }
    };
  }
  return { status: 200, payload: buildVacationResponse_(doctorUser, record) };
}
__name(handleGetMyDoctorVacation_, "handleGetMyDoctorVacation_");
async function handleSavePromotion_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const data = body.data && typeof body.data === "object" ? body.data : {};
  const mensaje = normalizeText_(data.mensaje);
  const fechaInicio = normalizeIsoDateValue_(data.fecha_inicio);
  const fechaFin = normalizeIsoDateValue_(data.fecha_fin);
  const scope = normalizePromotionScope_(data.scope_visibility);
  if (!mensaje || !fechaInicio || !fechaFin) {
    return { status: 400, payload: { success: false, message: "Completa mensaje, fecha_inicio y fecha_fin." } };
  }
  const idPromo = "PROMO-" + Date.now();
  const row = {
    id_promo: idPromo,
    mensaje,
    fecha_inicio: fechaInicio,
    fecha_fin: fechaFin,
    scope_visibility: scope,
    owner_usuario: validation.session.user_id,
    fecha_creacion: (/* @__PURE__ */ new Date()).toISOString()
  };
  const res = await supabaseRest_(env, "post", "config_promociones", {
    prefer: "return=representation",
    body: row
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo guardar la promocion.");
  }
  return { status: 200, payload: { success: true, message: "Promocion guardada." } };
}
__name(handleSavePromotion_, "handleSavePromotion_");
async function handleGetPromoList_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const isSuper = validation.session.role === "superadmin";
  const res = await supabaseRest_(env, "get", "config_promociones", {
    select: "id_promo,mensaje,fecha_inicio,fecha_fin,scope_visibility,owner_usuario,fecha_creacion",
    orderBy: "fecha_creacion",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar la lista de promociones.");
  }
  const list = (Array.isArray(res.data) ? res.data : []).map(normalizePromotionRow_).filter((item) => {
    if (!item.id) return false;
    if (isSuper) return true;
    return normalizeLower_(item.owner_usuario) === validation.session.user_id;
  });
  return { status: 200, payload: { success: true, list } };
}
__name(handleGetPromoList_, "handleGetPromoList_");
async function handleDeletePromotion_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const idPromo = normalizeText_(body.id || body.data && body.data.id);
  if (!idPromo) {
    return { status: 400, payload: { success: false, message: "Datos incompletos." } };
  }
  const existing = await findPromotionById_(env, idPromo);
  if (!existing) {
    return { status: 404, payload: { success: false, message: "Promocion no encontrada." } };
  }
  if (validation.session.role !== "superadmin" && normalizeLower_(existing.owner_usuario) !== validation.session.user_id) {
    return { status: 403, payload: { success: false, message: "Solo el medico creador puede eliminar esta promocion." } };
  }
  const res = await supabaseRest_(env, "delete", "config_promociones", {
    filters: { id_promo: eq_(idPromo) }
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo eliminar la promocion.");
  }
  return { status: 200, payload: { success: true, message: "Promocion eliminada." } };
}
__name(handleDeletePromotion_, "handleDeletePromotion_");
async function handleGetActivePromotion_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["paciente"] });
  if (!validation.ok) return validation.result;
  const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const owner = normalizeLower_(patient.creado_por);
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const res = await supabaseRest_(env, "get", "config_promociones", {
    select: "id_promo,mensaje,fecha_inicio,fecha_fin,scope_visibility,owner_usuario,fecha_creacion",
    orderBy: "fecha_creacion",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo cargar promociones.");
  }
  const rows = (Array.isArray(res.data) ? res.data : []).map(normalizePromotionRow_);
  for (const item of rows) {
    if (!item.id || !item.inicio || !item.fin) continue;
    if (!(today >= item.inicio && today <= item.fin)) continue;
    if (item.scope_visibility === "ALL" || owner && normalizeLower_(item.owner_usuario) === owner) {
      return {
        status: 200,
        payload: {
          success: true,
          active: true,
          id: item.id,
          mensaje: item.mensaje,
          fin: item.fin,
          scope_visibility: item.scope_visibility
        }
      };
    }
  }
  return { status: 200, payload: { success: true, active: false } };
}
__name(handleGetActivePromotion_, "handleGetActivePromotion_");
async function handleSaveInfographicPost_(body, env, url) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const data = body.data && typeof body.data === "object" ? body.data : {};
  const inputId = normalizeText_(data.id_post || data.id);
  const existing = inputId ? await findInfographicPostById_(env, inputId) : null;
  if (inputId && !existing) {
    return { status: 404, payload: { success: false, message: "Publicacion no encontrada." } };
  }
  if (existing && validation.session.role !== "superadmin" && normalizeLower_(existing.doctor_usuario) !== validation.session.user_id) {
    return { status: 403, payload: { success: false, message: "Solo el medico creador puede modificar esta publicacion." } };
  }
  const postId = existing ? existing.id_post : "INFO-" + Date.now();
  const imageDataUrl = normalizeText_(data.imagen_data_url);
  const imageUrlRaw = normalizeText_(data.imagen_url);
  const existingImageUrl = normalizeText_(existing && existing.imagen_url);
  let imageUrl = "";
  if (imageDataUrl || isDataImageUrl_(imageUrlRaw) || existing && !imageDataUrl && !imageUrlRaw && isDataImageUrl_(existingImageUrl)) {
    const upload = await uploadDataUrlToWorkerStorage_(
      env,
      url,
      joinStorageObjectKey_([
        "infografias",
        validation.session.user_id,
        postId,
        "imagen_" + Date.now() + "_" + randomHex_(4)
      ]),
      imageDataUrl || imageUrlRaw || existingImageUrl
    );
    if (!upload.success) {
      return errorResult_(500, upload.message || "No se pudo guardar la imagen de la publicacion.");
    }
    imageUrl = normalizeText_(upload.url);
  } else {
    imageUrl = normalizeExternalUrl_(imageUrlRaw || existingImageUrl || "");
  }
  if (!imageUrl) {
    return { status: 400, payload: { success: false, message: "Debes subir una imagen o ingresar una URL valida." } };
  }
  const finalPost = {
    id_post: postId,
    doctor_usuario: existing ? normalizeLower_(existing.doctor_usuario) : validation.session.user_id,
    scope_visibility: Object.prototype.hasOwnProperty.call(data, "scope_visibility") ? normalizePromotionScope_(data.scope_visibility) : normalizePromotionScope_(existing && existing.scope_visibility),
    activo: Object.prototype.hasOwnProperty.call(data, "activo") ? boolToSheetFlag_(!!data.activo) : boolToSheetFlag_(existing ? sheetFlagToBool_(existing.activo) : true),
    titulo: sanitizeInfographicText_(Object.prototype.hasOwnProperty.call(data, "titulo") ? data.titulo : existing && existing.titulo, 120),
    mensaje: sanitizeInfographicText_(Object.prototype.hasOwnProperty.call(data, "mensaje") ? data.mensaje : existing && existing.mensaje, 1600),
    imagen_url: imageUrl,
    imagen_file_id: "",
    show_btn_agenda: boolToSheetFlag_(Object.prototype.hasOwnProperty.call(data, "show_btn_agenda") ? !!data.show_btn_agenda : existing ? sheetFlagToBool_(existing.show_btn_agenda) : true),
    btn_agenda_text: sanitizeInfographicText_(Object.prototype.hasOwnProperty.call(data, "btn_agenda_text") ? data.btn_agenda_text : existing && existing.btn_agenda_text || "Agenda tu cita", 40) || "Agenda tu cita",
    show_btn_info: boolToSheetFlag_(Object.prototype.hasOwnProperty.call(data, "show_btn_info") ? !!data.show_btn_info : existing ? sheetFlagToBool_(existing.show_btn_info) : true),
    btn_info_text: sanitizeInfographicText_(Object.prototype.hasOwnProperty.call(data, "btn_info_text") ? data.btn_info_text : existing && existing.btn_info_text || "Mas informacion", 40) || "Mas informacion",
    btn_info_url: "",
    show_btn_source: boolToSheetFlag_(Object.prototype.hasOwnProperty.call(data, "show_btn_source") ? !!data.show_btn_source : existing ? sheetFlagToBool_(existing.show_btn_source) : false),
    btn_source_text: sanitizeInfographicText_(Object.prototype.hasOwnProperty.call(data, "btn_source_text") ? data.btn_source_text : existing && existing.btn_source_text || "Ir a fuente", 40) || "Ir a fuente",
    btn_source_url: normalizeExternalUrl_(Object.prototype.hasOwnProperty.call(data, "btn_source_url") ? data.btn_source_url : existing && existing.btn_source_url),
    show_btn_contacto: boolToSheetFlag_(Object.prototype.hasOwnProperty.call(data, "show_btn_contacto") ? !!data.show_btn_contacto : existing ? sheetFlagToBool_(existing.show_btn_contacto) : true),
    btn_contacto_text: sanitizeInfographicText_(Object.prototype.hasOwnProperty.call(data, "btn_contacto_text") ? data.btn_contacto_text : existing && existing.btn_contacto_text || "Contactanos", 40) || "Contactanos",
    fecha_creacion: existing ? String(existing.fecha_creacion || "") : (/* @__PURE__ */ new Date()).toISOString(),
    fecha_actualizacion: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (!finalPost.titulo && !finalPost.mensaje) {
    return { status: 400, payload: { success: false, message: "Debes ingresar al menos un titulo o mensaje." } };
  }
  if (sheetFlagToBool_(finalPost.show_btn_source) && !finalPost.btn_source_url) {
    return { status: 400, payload: { success: false, message: "Si habilitas 'Ir a fuente' debes ingresar su enlace." } };
  }
  let res;
  if (existing) {
    res = await supabaseRest_(env, "patch", "config_infografias", {
      filters: { id_post: eq_(existing.id_post) },
      prefer: "return=representation",
      body: finalPost
    });
  } else {
    res = await supabaseRest_(env, "post", "config_infografias", {
      prefer: "return=representation",
      body: finalPost
    });
  }
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo guardar la publicacion.");
  }
  const cleanupUrls = [];
  if (existingImageUrl && existingImageUrl !== imageUrl && isWorkerManagedUrlWorker_(existingImageUrl)) {
    cleanupUrls.push(existingImageUrl);
  }
  const cleanupRes = await deleteWorkerManagedAssetUrls_(env, cleanupUrls);
  return {
    status: 200,
    payload: {
      success: true,
      message: existing ? "Publicacion actualizada." : "Publicacion guardada.",
      warning: cleanupRes.success ? "" : cleanupRes.warning || "No se pudo eliminar la imagen anterior de Cloudflare R2.",
      data: normalizeInfographicRow_(Array.isArray(res.data) && res.data.length ? res.data[0] : finalPost)
    }
  };
}
__name(handleSaveInfographicPost_, "handleSaveInfographicPost_");
async function handleGetInfographicPostsAdmin_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const res = await supabaseRest_(env, "get", "config_infografias", {
    select: "id_post,doctor_usuario,scope_visibility,activo,titulo,mensaje,imagen_url,imagen_file_id,show_btn_agenda,btn_agenda_text,show_btn_info,btn_info_text,btn_info_url,show_btn_source,btn_source_text,btn_source_url,show_btn_contacto,btn_contacto_text,fecha_creacion,fecha_actualizacion",
    orderBy: "fecha_actualizacion",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudieron cargar publicaciones.");
  }
  const isSuper = validation.session.role === "superadmin";
  const list = (Array.isArray(res.data) ? res.data : []).map(normalizeInfographicRow_).filter((item) => item.id_post && (isSuper || normalizeLower_(item.doctor_usuario) === validation.session.user_id));
  return { status: 200, payload: { success: true, list } };
}
__name(handleGetInfographicPostsAdmin_, "handleGetInfographicPostsAdmin_");
async function handleDeleteInfographicPost_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const idPost = normalizeText_(body.id || body.data && body.data.id_post);
  if (!idPost) {
    return { status: 400, payload: { success: false, message: "Acceso denegado." } };
  }
  const existing = await findInfographicPostById_(env, idPost);
  if (!existing) {
    return { status: 404, payload: { success: false, message: "Publicacion no encontrada." } };
  }
  if (validation.session.role !== "superadmin" && normalizeLower_(existing.doctor_usuario) !== validation.session.user_id) {
    return { status: 403, payload: { success: false, message: "Solo el medico creador puede eliminar esta publicacion." } };
  }
  const res = await supabaseRest_(env, "delete", "config_infografias", {
    filters: { id_post: eq_(idPost) }
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo eliminar la publicacion.");
  }
  const cleanupRes = await deleteWorkerManagedAssetByUrl_(env, existing.imagen_url);
  return {
    status: 200,
    payload: {
      success: true,
      message: cleanupRes.success || cleanupRes.skipped ? "Publicacion eliminada." : "Publicacion eliminada con advertencia.",
      warning: cleanupRes.success || cleanupRes.skipped ? "" : "La publicacion se elimino, pero no se pudo borrar su imagen de Cloudflare R2."
    }
  };
}
__name(handleDeleteInfographicPost_, "handleDeleteInfographicPost_");
async function handleGetPatientInfographics_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["paciente"] });
  if (!validation.ok) return validation.result;
  const patient = await loadUserByRoleAndId_(env, "paciente", validation.session.user_id);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const doctorOwner = normalizeLower_(patient.creado_por);
  const res = await supabaseRest_(env, "get", "config_infografias", {
    select: "id_post,doctor_usuario,scope_visibility,activo,titulo,mensaje,imagen_url,imagen_file_id,show_btn_agenda,btn_agenda_text,show_btn_info,btn_info_text,btn_info_url,show_btn_source,btn_source_text,btn_source_url,show_btn_contacto,btn_contacto_text,fecha_creacion,fecha_actualizacion",
    orderBy: "fecha_actualizacion",
    ascending: false
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudieron cargar las publicaciones.");
  }
  const visible = (Array.isArray(res.data) ? res.data : []).map(normalizeInfographicRow_).filter((post) => {
    if (!post.id_post) return false;
    if (!post.activo) return false;
    if (post.scope_visibility === "ALL") return true;
    return !!doctorOwner && normalizeLower_(post.doctor_usuario) === doctorOwner;
  });
  const doctorCache = {};
  const list = [];
  for (const post of visible) {
    const doctorUser = normalizeLower_(post.doctor_usuario);
    if (!doctorCache[doctorUser]) {
      doctorCache[doctorUser] = doctorUser ? await loadUserByRoleAndId_(env, "admin", doctorUser) : null;
    }
    const doctor = doctorCache[doctorUser] || {};
    list.push({
      id_post: post.id_post,
      doctor_usuario: post.doctor_usuario,
      doctor_nombre: normalizeText_(doctor.nombre_doctor || doctor.nombre || ""),
      scope_visibility: post.scope_visibility,
      titulo: post.titulo,
      mensaje: post.mensaje,
      imagen_url: post.imagen_url,
      show_btn_agenda: post.show_btn_agenda !== false,
      btn_agenda_text: post.btn_agenda_text || "Agenda tu cita",
      show_btn_info: post.show_btn_info !== false,
      btn_info_text: post.btn_info_text || "Mas informacion",
      show_btn_source: post.show_btn_source === true,
      btn_source_text: post.btn_source_text || "Ir a fuente",
      btn_source_url: post.btn_source_url || "",
      show_btn_contacto: post.show_btn_contacto !== false,
      btn_contacto_text: post.btn_contacto_text || "Contactanos",
      doctor_wa_number: normalizePhoneForWa_(doctor.telefono || ""),
      fecha_actualizacion: post.fecha_actualizacion
    });
  }
  return { status: 200, payload: { success: true, list } };
}
__name(handleGetPatientInfographics_, "handleGetPatientInfographics_");
async function handleSuperadminGetData_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const doctorsRes = await supabaseRest_(env, "get", "usuarios_admin", {
    select: "nombre_doctor,usuario,password,rol,ocupacion,correo_notificaciones,correo,telefono",
    orderBy: "nombre_doctor",
    ascending: true
  });
  if (!doctorsRes.success) {
    return errorResult_(500, doctorsRes.message || "No se pudo cargar la lista de medicos.");
  }
  const patientsRes = await supabaseRest_(env, "get", "pacientes", {
    select: "id_paciente,cedula,nombre_completo,creado_por",
    orderBy: "nombre_completo",
    ascending: true
  });
  if (!patientsRes.success) {
    return errorResult_(500, patientsRes.message || "No se pudo cargar la lista de pacientes.");
  }
  const doctors = (Array.isArray(doctorsRes.data) ? doctorsRes.data : []).map(function(row) {
    return {
      nombre_doctor: normalizeUpper_(row && row.nombre_doctor),
      usuario: normalizeText_(row && row.usuario),
      password: String(row && row.password || ""),
      rol: normalizeText_(row && row.rol || row && row.ocupacion),
      correo_notificaciones: normalizeText_(row && row.correo_notificaciones || row && row.correo),
      telefono: normalizeText_(row && row.telefono)
    };
  });
  const patients = (Array.isArray(patientsRes.data) ? patientsRes.data : []).map(function(row) {
    return {
      id_paciente: normalizeText_(row && row.id_paciente),
      cedula: normalizeText_(row && row.cedula),
      nombre_completo: normalizeText_(row && row.nombre_completo),
      creado_por: normalizeText_(row && row.creado_por)
    };
  });
  return { status: 200, payload: { success: true, data: { doctors, patients } } };
}
__name(handleSuperadminGetData_, "handleSuperadminGetData_");
async function handleSuperadminCreateDoctor_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const payload = normalizeDoctorWritePayloadWorker_(body.data && typeof body.data === "object" ? body.data : {});
  if (!payload.nombre_doctor || !payload.usuario || !payload.password) {
    return { status: 400, payload: { success: false, message: "Completa nombre, usuario y contrasena." } };
  }
  const existing = await findAdminByUser_(env, payload.usuario);
  if (existing) {
    return { status: 400, payload: { success: false, message: "El usuario ya existe." } };
  }
  const row = {
    nombre_doctor: payload.nombre_doctor,
    usuario: payload.usuario,
    password: await toStoredPasswordWorker_(payload.password),
    rol: payload.rol || "DOCTOR",
    ocupacion: payload.rol || "DOCTOR",
    correo_notificaciones: payload.correo_notificaciones,
    correo: payload.correo_notificaciones,
    telefono: payload.telefono,
    first_login: "SI"
  };
  const res = await supabaseRest_(env, "post", "usuarios_admin", {
    prefer: "return=representation",
    body: row
  });
  if (!res.success) {
    return errorResult_(500, res.message || "No se pudo crear el medico.");
  }
  return {
    status: 200,
    payload: { success: true, message: "Medico creado correctamente." }
  };
}
__name(handleSuperadminCreateDoctor_, "handleSuperadminCreateDoctor_");
async function handleSuperadminUpdateDoctor_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const payload = normalizeDoctorWritePayloadWorker_(body.data && typeof body.data === "object" ? body.data : {});
  const oldUsuario = normalizeLower_(payload.old_usuario);
  const newUsuario = normalizeLower_(payload.usuario);
  if (!oldUsuario || !newUsuario || !payload.nombre_doctor) {
    return { status: 400, payload: { success: false, message: "Faltan datos del medico." } };
  }
  const existing = await findAdminByUser_(env, oldUsuario);
  if (!existing) {
    return { status: 404, payload: { success: false, message: "Medico no encontrado." } };
  }
  if (oldUsuario !== newUsuario) {
    const collision = await findAdminByUser_(env, newUsuario);
    if (collision) {
      return { status: 400, payload: { success: false, message: "El usuario ya existe." } };
    }
  }
  const patch = {
    nombre_doctor: payload.nombre_doctor,
    usuario: newUsuario,
    rol: payload.rol || "DOCTOR",
    ocupacion: payload.rol || "DOCTOR",
    correo_notificaciones: payload.correo_notificaciones,
    correo: payload.correo_notificaciones,
    telefono: payload.telefono
  };
  if (payload.password) {
    patch.password = await toStoredPasswordWorker_(payload.password);
    patch.first_login = "SI";
  }
  const updateRes = await supabaseRest_(env, "patch", "usuarios_admin", {
    filters: { usuario: eq_(oldUsuario) },
    prefer: "return=representation",
    body: patch
  });
  if (!updateRes.success || !Array.isArray(updateRes.data) || !updateRes.data.length) {
    return errorResult_(500, updateRes.message || "No se pudo actualizar el medico.");
  }
  let reassignedCount = 0;
  if (oldUsuario !== newUsuario) {
    const patientsRes = await supabaseRest_(env, "get", "pacientes", {
      select: "id_paciente",
      filters: { creado_por: eq_(oldUsuario) }
    });
    if (!patientsRes.success) {
      return errorResult_(500, patientsRes.message || "No se pudieron cargar los pacientes a reasignar.");
    }
    reassignedCount = Array.isArray(patientsRes.data) ? patientsRes.data.length : 0;
    if (reassignedCount) {
      const patientPatch = await supabaseRest_(env, "patch", "pacientes", {
        filters: { creado_por: eq_(oldUsuario) },
        prefer: "return=minimal",
        body: { creado_por: newUsuario }
      });
      if (!patientPatch.success) {
        return errorResult_(500, patientPatch.message || "No se pudieron reasignar los pacientes del medico.");
      }
    }
    await supabaseRest_(env, "delete", "worker_sessions", {
      filters: [
        ["role", eq_("admin")],
        ["user_id", eq_(oldUsuario)]
      ]
    });
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: "Medico actualizado.",
      reassigned_patients: reassignedCount
    }
  };
}
__name(handleSuperadminUpdateDoctor_, "handleSuperadminUpdateDoctor_");
async function handleSuperadminDeleteDoctor_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const doctorUsuario = normalizeLower_(body.data && body.data.usuario);
  if (!doctorUsuario) {
    return { status: 400, payload: { success: false, message: "Falta usuario del medico." } };
  }
  const doctor = await findAdminByUser_(env, doctorUsuario);
  if (!doctor) {
    return { status: 404, payload: { success: false, message: "Medico no encontrado." } };
  }
  const patientsRes = await supabaseRest_(env, "get", "pacientes", {
    select: "id_paciente",
    filters: { creado_por: eq_(doctorUsuario) }
  });
  if (!patientsRes.success) {
    return errorResult_(500, patientsRes.message || "No se pudieron cargar los pacientes del medico.");
  }
  const unassigned = Array.isArray(patientsRes.data) ? patientsRes.data.length : 0;
  if (unassigned) {
    const patientPatch = await supabaseRest_(env, "patch", "pacientes", {
      filters: { creado_por: eq_(doctorUsuario) },
      prefer: "return=minimal",
      body: { creado_por: "" }
    });
    if (!patientPatch.success) {
      return errorResult_(500, patientPatch.message || "No se pudieron desasignar los pacientes del medico.");
    }
  }
  const deleteRes = await supabaseRest_(env, "delete", "usuarios_admin", {
    filters: { usuario: eq_(doctorUsuario) }
  });
  if (!deleteRes.success) {
    return errorResult_(500, deleteRes.message || "No se pudo eliminar el medico.");
  }
  await supabaseRest_(env, "delete", "worker_sessions", {
    filters: [
      ["role", eq_("admin")],
      ["user_id", eq_(doctorUsuario)]
    ]
  });
  return {
    status: 200,
    payload: {
      success: true,
      message: "Medico eliminado.",
      unassigned_patients: unassigned
    }
  };
}
__name(handleSuperadminDeleteDoctor_, "handleSuperadminDeleteDoctor_");
async function handleSuperadminAssignPatientDoctor_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const patientId = normalizeText_(body.patient_id);
  const doctorUsuario = normalizeLower_(body.doctor_usuario);
  if (!patientId || !doctorUsuario) {
    return { status: 400, payload: { success: false, message: "Faltan datos para asignar." } };
  }
  const doctor = await findAdminByUser_(env, doctorUsuario);
  if (!doctor) {
    return { status: 404, payload: { success: false, message: "Doctor no encontrado." } };
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", patientId);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const res = await supabaseRest_(env, "patch", "pacientes", {
    filters: { id_paciente: eq_(patientId) },
    prefer: "return=representation",
    body: { creado_por: doctorUsuario }
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo reasignar el paciente.");
  }
  return { status: 200, payload: { success: true, message: "Paciente reasignado." } };
}
__name(handleSuperadminAssignPatientDoctor_, "handleSuperadminAssignPatientDoctor_");
async function handleSuperadminUpdatePatientPassword_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const patientId = normalizeText_(body.patient_id);
  const newPassword = normalizeText_(body.new_password);
  if (!patientId || !newPassword) {
    return { status: 400, payload: { success: false, message: "Faltan datos para actualizar clave." } };
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", patientId);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const res = await supabaseRest_(env, "patch", "pacientes", {
    filters: { id_paciente: eq_(patientId) },
    prefer: "return=representation",
    body: { password: await toStoredPasswordWorker_(newPassword) }
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo actualizar la contrasena del paciente.");
  }
  return { status: 200, payload: { success: true, message: "Contrasena de paciente actualizada." } };
}
__name(handleSuperadminUpdatePatientPassword_, "handleSuperadminUpdatePatientPassword_");
async function handleSuperadminUpdatePatientManagement_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const payload = body.data && typeof body.data === "object" ? body.data : {};
  const patientId = normalizeText_(payload.patient_id);
  const doctorUsuario = normalizeLower_(payload.doctor_usuario);
  const newPassword = normalizeText_(payload.new_password);
  if (!patientId || !doctorUsuario) {
    return { status: 400, payload: { success: false, message: "Faltan datos para actualizar paciente." } };
  }
  const doctor = await findAdminByUser_(env, doctorUsuario);
  if (!doctor) {
    return { status: 404, payload: { success: false, message: "Doctor no encontrado." } };
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", patientId);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  const patch = { creado_por: doctorUsuario };
  if (newPassword) {
    patch.password = await toStoredPasswordWorker_(newPassword);
  }
  const res = await supabaseRest_(env, "patch", "pacientes", {
    filters: { id_paciente: eq_(patientId) },
    prefer: "return=representation",
    body: patch
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) {
    return errorResult_(500, res.message || "No se pudo actualizar el paciente.");
  }
  return { status: 200, payload: { success: true, message: "Paciente actualizado correctamente." } };
}
__name(handleSuperadminUpdatePatientManagement_, "handleSuperadminUpdatePatientManagement_");
async function handleSuperadminDeletePatient_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["superadmin"] });
  if (!validation.ok) {
    return validation.result;
  }
  const patientId = normalizeText_(body.patient_id);
  if (!patientId) {
    return { status: 400, payload: { success: false, message: "Falta patient_id." } };
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", patientId);
  if (!patient) {
    return { status: 404, payload: { success: false, message: "Paciente no encontrado." } };
  }
  return deletePatientCascadeWorker_(env, patientId, {
    action: "superadmin_delete_patient",
    patient_id: patientId,
    requester: validation.session.user_id
  });
}
__name(handleSuperadminDeletePatient_, "handleSuperadminDeletePatient_");
async function handleGetP12Status_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const bucket = getWorkerStorageBucket_(env);
  if (!bucket) return errorResult_(500, "R2 no esta configurado en el Worker.");
  const key = "firmas/" + validation.session.user_id + "/firma.p12";
  const obj = await bucket.head(key);
  let certName = "Profesional M\xE9dico";
  if (obj) {
    const metaObj = await bucket.get(key + ".meta");
    if (metaObj) {
      try {
        const metaJson = await metaObj.json();
        certName = metaJson.cert_name || certName;
      } catch (e) {
      }
    }
  }
  return { status: 200, payload: { success: true, has_p12: !!obj, uploaded_at: obj ? obj.uploaded : null, cert_name: certName } };
}
__name(handleGetP12Status_, "handleGetP12Status_");
async function handleUploadP12_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const bucket = getWorkerStorageBucket_(env);
  if (!bucket) return errorResult_(500, "R2 no esta configurado en el Worker.");
  const dataUrl = normalizeText_(body.p12_data_url);
  if (!dataUrl) return { status: 400, payload: { success: false, message: "Falta el archivo p12." } };
  const parsed = parseDataUrlWorker_(dataUrl);
  if (!parsed || !parsed.base64) return { status: 400, payload: { success: false, message: "Archivo p12 invalido." } };
  let bytes;
  try {
    const binary = atob(parsed.base64);
    bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  } catch (e) {
    return { status: 400, payload: { success: false, message: "No se pudo decodificar el archivo p12." } };
  }
  const certName = normalizeText_(body.cert_name) || "Profesional M\xE9dico";
  const key = "firmas/" + validation.session.user_id + "/firma.p12";
  try {
    await bucket.put(key, bytes, {
      httpMetadata: { contentType: "application/x-pkcs12", cacheControl: "private, no-cache" }
    });
    await bucket.put(key + ".meta", JSON.stringify({ cert_name: certName }), { httpMetadata: { contentType: "application/json" } });
  } catch (e) {
    return errorResult_(500, "No se pudo guardar la firma en R2: " + toErrorMessage(e));
  }
  return { status: 200, payload: { success: true, message: "Firma guardada en la boveda." } };
}
__name(handleUploadP12_, "handleUploadP12_");
async function handleDeleteP12_(body, env) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const bucket = getWorkerStorageBucket_(env);
  if (!bucket) return errorResult_(500, "R2 no esta configurado en el Worker.");
  const key = "firmas/" + validation.session.user_id + "/firma.p12";
  await bucket.delete(key);
  await bucket.delete(key + ".meta");
  return { status: 200, payload: { success: true, message: "Firma eliminada de la boveda." } };
}
__name(handleDeleteP12_, "handleDeleteP12_");
async function requireAccessiblePatientForAction_(env, body, options) {
  const validation = await validateOwnSessionAction_(env, body, options || {});
  if (!validation.ok) {
    return { ok: false, result: validation.result };
  }
  const access = await resolveAccessiblePatientForSession_(
    env,
    validation.session,
    body.id_paciente || body.patient_id || body.user_id
  );
  if (!access.ok) {
    return { ok: false, result: access.result };
  }
  return { ok: true, session: validation.session, patient: access.patient };
}
__name(requireAccessiblePatientForAction_, "requireAccessiblePatientForAction_");
async function resolveAccessibleAppointmentForSession_(env, session, appointmentId) {
  const targetId = normalizeText_(appointmentId);
  if (!targetId) {
    return { ok: false, result: { status: 400, payload: { success: false, message: "Falta id_cita." } } };
  }
  const appointment = await findSingleByField_(env, "citas", "id_cita", targetId);
  if (!appointment) {
    return { ok: false, result: { status: 404, payload: { success: false, message: "Cita no encontrada." } } };
  }
  const access = await resolveAccessiblePatientForSession_(env, session, appointment.id_paciente);
  if (!access.ok) {
    return access;
  }
  return { ok: true, appointment, patient: access.patient };
}
__name(resolveAccessibleAppointmentForSession_, "resolveAccessibleAppointmentForSession_");
async function resolveAccessiblePatientForSession_(env, session, patientId) {
  const targetId = normalizeText_(patientId || (session && session.role === "paciente" ? session.user_id : ""));
  if (!targetId) {
    return { ok: false, result: { status: 400, payload: { success: false, message: "Falta id_paciente." } } };
  }
  const patient = await loadUserByRoleAndId_(env, "paciente", targetId);
  if (!patient) {
    return { ok: false, result: { status: 404, payload: { success: false, message: "Paciente no encontrado." } } };
  }
  const role = normalizeLower_(session && session.role);
  if (role === "superadmin") {
    return { ok: true, patient };
  }
  if (role === "paciente") {
    if (normalizeText_(patient.id_paciente) !== normalizeText_(session.user_id)) {
      return { ok: false, result: { status: 403, payload: { success: false, message: "Acceso denegado." } } };
    }
    return { ok: true, patient };
  }
  if (role === "admin" && normalizeLower_(patient.creado_por) === normalizeLower_(session.user_id)) {
    return { ok: true, patient };
  }
  return { ok: false, result: { status: 403, payload: { success: false, message: "Acceso denegado." } } };
}
__name(resolveAccessiblePatientForSession_, "resolveAccessiblePatientForSession_");
async function validateOwnSessionAction_(env, body, options) {
  try {
    assertSupabaseEnv_(env);
  } catch (error) {
    return { ok: false, result: errorResult_(500, toErrorMessage(error)) };
  }
  const session = await requireValidSession_(env, body.session_token);
  if (!session.ok) {
    return {
      ok: false,
      result: { status: 401, payload: { success: false, message: "Sesion invalida o expirada." } }
    };
  }
  const allowRoles = Array.isArray(options && options.allowRoles) ? options.allowRoles : [];
  if (allowRoles.length && allowRoles.indexOf(session.role) === -1) {
    return {
      ok: false,
      result: { status: 403, payload: { success: false, message: "Acceso denegado." } }
    };
  }
  if (body.requester && !requesterMatchesSession_(body.requester, session)) {
    return {
      ok: false,
      result: { status: 403, payload: { success: false, message: "Acceso denegado." } }
    };
  }
  const roleFromBody = normalizeLower_(body.role);
  if (roleFromBody && roleFromBody !== session.role) {
    return {
      ok: false,
      result: { status: 403, payload: { success: false, message: "Acceso denegado." } }
    };
  }
  const userIdFromBody = normalizeSessionUserId_(session.role, body.user_id);
  if (userIdFromBody && userIdFromBody !== session.user_id) {
    return {
      ok: false,
      result: { status: 403, payload: { success: false, message: "Acceso denegado." } }
    };
  }
  await touchSession_(env, session.token_hash);
  return { ok: true, session };
}
__name(validateOwnSessionAction_, "validateOwnSessionAction_");
async function proxyToAppsScript_(body, env) {
  const targetUrl = normalizeText_(env.APPS_SCRIPT_API_URL);
  if (!targetUrl) {
    return {
      status: 501,
      payload: {
        success: false,
        message: "Accion no implementada en el Worker y APPS_SCRIPT_API_URL no esta configurado."
      }
    };
  }
  const proxiedBody = cloneWithoutSessionToken_(body);
  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(proxiedBody)
    });
    const text = await response.text();
    const parsed = safeJsonParse_(text);
    if (parsed !== null) {
      return {
        status: response.ok ? 200 : 502,
        payload: parsed
      };
    }
    return {
      status: 502,
      payload: {
        success: false,
        message: "El proxy recibio una respuesta no JSON desde Apps Script.",
        upstream_status: response.status
      }
    };
  } catch (error) {
    return {
      status: 502,
      payload: {
        success: false,
        message: "No se pudo contactar Apps Script desde el Worker.",
        detail: toErrorMessage(error)
      }
    };
  }
}
__name(proxyToAppsScript_, "proxyToAppsScript_");
async function sendAppointmentNotificationsByBridge_(env, payload) {
  const targetUrl = normalizeText_(env && env.APPS_SCRIPT_API_URL);
  const bridgeTokens = resolveBridgeTokenCandidates_(env);
  if (!targetUrl || !bridgeTokens.length) {
    return {
      success: false,
      skipped: true,
      message: "Puente de correo no configurado."
    };
  }
  const safePayload = payload && typeof payload === "object" ? payload : {};
  let lastError = "";
  let authRejected = false;
  for (const bridgeToken of bridgeTokens) {
    const body = {
      action: "worker_send_cita_notifications",
      bridge_token: bridgeToken,
      data: safePayload
    };
    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
      });
      const text = await response.text();
      const parsed = safeJsonParse_(text);
      if (!parsed || typeof parsed !== "object") {
        lastError = "El puente de correo respondio en formato no JSON.";
        continue;
      }
      if (parsed.success) {
        return { success: true };
      }
      const msg = normalizeText_(parsed.message) || "No se pudieron enviar las notificaciones de correo.";
      if (msg.toLowerCase().indexOf("acci\xF3n api no reconocida: worker_send_cita_notifications") === 0 || msg.toLowerCase().indexOf("accion api no reconocida: worker_send_cita_notifications") === 0) {
        return {
          success: false,
          message: "La cita se guardo, pero el modulo de correos del Apps Script publicado esta desactualizado."
        };
      }
      lastError = msg;
      const msgLower = msg.toLowerCase();
      if (msgLower.indexOf("acceso denegado") === 0 || msgLower.indexOf("bridge token") > -1) {
        authRejected = true;
        continue;
      }
      return { success: false, message: msg };
    } catch (error) {
      lastError = "No se pudo contactar el puente de correo: " + toErrorMessage(error);
      continue;
    }
  }
  if (authRejected) {
    return {
      success: false,
      message: "Bridge token rechazado por Apps Script. Configura el mismo token en ambos lados: Worker (.dev.vars: WORKER_BRIDGE_TOKEN o WORKER_BRIDGE_TOKENS) y Apps Script Script Properties (VIDAFEM_WORKER_BRIDGE_TOKEN o WORKER_BRIDGE_TOKEN)."
    };
  }
  return {
    success: false,
    message: lastError || "No se pudieron enviar las notificaciones de correo."
  };
}
__name(sendAppointmentNotificationsByBridge_, "sendAppointmentNotificationsByBridge_");
function resolveBridgeTokenCandidates_(env) {
  const rawList = [
    normalizeText_(env && env.WORKER_BRIDGE_TOKENS),
    normalizeText_(env && env.WORKER_BRIDGE_TOKEN)
  ];
  const out = [];
  const seen = {};
  rawList.forEach(function(raw) {
    if (!raw) return;
    raw.split(/[\s,;]+/).forEach(function(token) {
      const clean = normalizeBridgeTokenValueWorker_(token);
      if (!clean || seen[clean]) return;
      seen[clean] = true;
      out.push(clean);
    });
  });
  return out;
}
__name(resolveBridgeTokenCandidates_, "resolveBridgeTokenCandidates_");
function normalizeBridgeTokenValueWorker_(value) {
  let token = normalizeText_(value);
  if (!token) return "";
  if (token.charAt(0) === '"' && token.charAt(token.length - 1) === '"' || token.charAt(0) === "'" && token.charAt(token.length - 1) === "'") {
    token = normalizeText_(token.substring(1, token.length - 1));
  }
  return token;
}
__name(normalizeBridgeTokenValueWorker_, "normalizeBridgeTokenValueWorker_");
async function requireValidSession_(env, token) {
  const rawToken = normalizeText_(token);
  if (!rawToken) return { ok: false };
  const tokenHash = await sha256Base64Url_(rawToken);
  const session = await findSessionByHash_(env, tokenHash);
  if (!session) return { ok: false };
  const expiresAtMs = Date.parse(String(session.expires_at || ""));
  if (!expiresAtMs || expiresAtMs <= Date.now()) {
    await deleteSessionByHash_(env, tokenHash);
    return { ok: false };
  }
  return {
    ok: true,
    token_hash: tokenHash,
    role: normalizeLower_(session.role),
    user_id: normalizeSessionUserId_(session.role, session.user_id),
    expires_at: String(session.expires_at || "")
  };
}
__name(requireValidSession_, "requireValidSession_");
async function createSession_(env, role, userId) {
  const token = randomBase64Url_(32);
  const tokenHash = await sha256Base64Url_(token);
  const now = /* @__PURE__ */ new Date();
  const expiresAt = new Date(now.getTime() + getSessionTtlSeconds_(env) * 1e3).toISOString();
  const insert = await supabaseRest_(env, "post", "worker_sessions", {
    prefer: "return=representation",
    body: {
      token_hash: tokenHash,
      role: normalizeLower_(role),
      user_id: normalizeSessionUserId_(role, userId),
      expires_at: expiresAt,
      created_at: now.toISOString(),
      last_seen_at: now.toISOString(),
      metadata: { version: 1 }
    }
  });
  if (!insert.success) {
    return { success: false, message: insert.message || "No se pudo crear la sesion." };
  }
  return { success: true, token, expires_at: expiresAt };
}
__name(createSession_, "createSession_");
async function findSessionByHash_(env, tokenHash) {
  const res = await supabaseRest_(env, "get", "worker_sessions", {
    select: "*",
    filters: { token_hash: eq_(tokenHash) },
    limit: 1
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) return null;
  return res.data[0];
}
__name(findSessionByHash_, "findSessionByHash_");
async function deleteSessionByToken_(env, token) {
  const tokenHash = await sha256Base64Url_(normalizeText_(token));
  return deleteSessionByHash_(env, tokenHash);
}
__name(deleteSessionByToken_, "deleteSessionByToken_");
async function deleteSessionByHash_(env, tokenHash) {
  const res = await supabaseRest_(env, "delete", "worker_sessions", {
    filters: { token_hash: eq_(tokenHash) }
  });
  return { success: !!res.success, message: res.message || "" };
}
__name(deleteSessionByHash_, "deleteSessionByHash_");
async function touchSession_(env, tokenHash) {
  await supabaseRest_(env, "patch", "worker_sessions", {
    filters: { token_hash: eq_(tokenHash) },
    prefer: "return=minimal",
    body: { last_seen_at: (/* @__PURE__ */ new Date()).toISOString() }
  });
}
__name(touchSession_, "touchSession_");
async function findAdminByUser_(env, usuario) {
  return findSingleByField_(env, "usuarios_admin", "usuario", normalizeLower_(usuario));
}
__name(findAdminByUser_, "findAdminByUser_");
async function findSuperadminByUser_(env, usuario) {
  return findSingleByField_(env, "usuarios_superadmin", "usuario", normalizeLower_(usuario));
}
__name(findSuperadminByUser_, "findSuperadminByUser_");
async function findPatientByCedula_(env, cedula) {
  return findSingleByField_(env, "pacientes", "cedula", normalizeDigits_(cedula));
}
__name(findPatientByCedula_, "findPatientByCedula_");
async function loadUserByRoleAndId_(env, role, userId) {
  const r = normalizeLower_(role);
  if (r === "admin") return findSingleByField_(env, "usuarios_admin", "usuario", normalizeLower_(userId));
  if (r === "superadmin") return findSingleByField_(env, "usuarios_superadmin", "usuario", normalizeLower_(userId));
  if (r === "paciente") return findSingleByField_(env, "pacientes", "id_paciente", normalizeText_(userId));
  return null;
}
__name(loadUserByRoleAndId_, "loadUserByRoleAndId_");
async function findSingleByField_(env, tableName, fieldName, value) {
  const clean = normalizeText_(value);
  if (!clean) return null;
  const res = await supabaseRest_(env, "get", tableName, {
    select: "*",
    filters: { [fieldName]: eq_(clean) },
    limit: 1
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) return null;
  return res.data[0];
}
__name(findSingleByField_, "findSingleByField_");
async function loadPatientMapByIds_(env, patientIds) {
  const ids = normalizeIdList_(patientIds);
  if (!ids.length) return {};
  const res = await supabaseRest_(env, "get", "pacientes", {
    select: "id_paciente,nombre_completo,telefono,creado_por",
    filters: { id_paciente: inList_(ids) }
  });
  if (!res.success || !Array.isArray(res.data)) return {};
  const map = {};
  res.data.forEach(function(row) {
    const patientId = normalizeText_(row && row.id_paciente);
    if (!patientId) return;
    map[patientId] = row || {};
  });
  return map;
}
__name(loadPatientMapByIds_, "loadPatientMapByIds_");
async function maybeUpgradePasswordHash_(env, role, row, plainPassword) {
  const stored = String(row && row.password || "");
  const input = normalizeText_(plainPassword);
  if (!stored || !input || isPasswordHash_(stored) || stored !== input) return;
  await updateUserPassword_(env, role, getUserIdForRole_(role, row), input, { clearFirstLogin: false });
}
__name(maybeUpgradePasswordHash_, "maybeUpgradePasswordHash_");
async function findDoctorVacationRecord_(env, doctorUser) {
  const doctor = normalizeLower_(doctorUser);
  if (!doctor) return null;
  const res = await supabaseRest_(env, "get", "config_vacaciones", {
    select: "doctor_usuario,activo,fecha_hasta,titulo,mensaje,fecha_actualizacion",
    filters: { doctor_usuario: eq_(doctor) },
    orderBy: "fecha_actualizacion",
    ascending: false,
    limit: 1
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) return null;
  return res.data[0];
}
__name(findDoctorVacationRecord_, "findDoctorVacationRecord_");
async function findPromotionById_(env, idPromo) {
  const res = await supabaseRest_(env, "get", "config_promociones", {
    select: "id_promo,mensaje,fecha_inicio,fecha_fin,scope_visibility,owner_usuario,fecha_creacion",
    filters: { id_promo: eq_(idPromo) },
    limit: 1
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) return null;
  return res.data[0];
}
__name(findPromotionById_, "findPromotionById_");
async function findInfographicPostById_(env, idPost) {
  const res = await supabaseRest_(env, "get", "config_infografias", {
    select: "id_post,doctor_usuario,scope_visibility,activo,titulo,mensaje,imagen_url,imagen_file_id,show_btn_agenda,btn_agenda_text,show_btn_info,btn_info_text,btn_info_url,show_btn_source,btn_source_text,btn_source_url,show_btn_contacto,btn_contacto_text,fecha_creacion,fecha_actualizacion",
    filters: { id_post: eq_(idPost) },
    limit: 1
  });
  if (!res.success || !Array.isArray(res.data) || !res.data.length) return null;
  return res.data[0];
}
__name(findInfographicPostById_, "findInfographicPostById_");
async function updateUserPassword_(env, role, userId, newPassword, options) {
  const tableMeta = getTableMetaForRole_(role);
  if (!tableMeta.table || !tableMeta.keyField || !tableMeta.keyValue(userId)) {
    return { success: false, message: "No se pudo identificar la tabla del usuario." };
  }
  const patch = {
    password: await hashPassword_(newPassword)
  };
  if (options && options.clearFirstLogin && tableMeta.hasFirstLogin) {
    patch.first_login = "NO";
  }
  const res = await supabaseRest_(env, "patch", tableMeta.table, {
    filters: { [tableMeta.keyField]: eq_(tableMeta.keyValue(userId)) },
    prefer: "return=representation",
    body: patch
  });
  return { success: !!res.success, message: res.message || "" };
}
__name(updateUserPassword_, "updateUserPassword_");
async function updateFirstLoginFlag_(env, role, userId, value) {
  const tableMeta = getTableMetaForRole_(role);
  if (!tableMeta.table || !tableMeta.keyField || !tableMeta.hasFirstLogin) {
    return { success: false, message: "Este rol no maneja primer ingreso." };
  }
  const res = await supabaseRest_(env, "patch", tableMeta.table, {
    filters: { [tableMeta.keyField]: eq_(tableMeta.keyValue(userId)) },
    prefer: "return=representation",
    body: { first_login: normalizeUpper_(value) || "NO" }
  });
  return { success: !!res.success, message: res.message || "" };
}
__name(updateFirstLoginFlag_, "updateFirstLoginFlag_");
async function toStoredPasswordWorker_(value) {
  const pass = normalizeText_(value);
  if (!pass) return "";
  if (isPasswordHash_(pass)) return pass;
  return hashPassword_(pass);
}
__name(toStoredPasswordWorker_, "toStoredPasswordWorker_");
function normalizeDoctorWritePayloadWorker_(payload) {
  const src = payload && typeof payload === "object" ? payload : {};
  return {
    old_usuario: normalizeLower_(src.old_usuario),
    usuario: normalizeLower_(src.usuario),
    nombre_doctor: normalizeUpper_(src.nombre_doctor),
    password: normalizeText_(src.password),
    rol: normalizeUpper_(src.rol || "DOCTOR") || "DOCTOR",
    correo_notificaciones: normalizeLower_(src.correo_notificaciones),
    telefono: normalizeDigits_(src.telefono)
  };
}
__name(normalizeDoctorWritePayloadWorker_, "normalizeDoctorWritePayloadWorker_");
async function normalizePatientWritePayloadWorker_(payload) {
  const src = payload && typeof payload === "object" ? payload : {};
  const out = {};
  if (Object.prototype.hasOwnProperty.call(src, "id_paciente")) out.id_paciente = normalizeText_(src.id_paciente);
  if (Object.prototype.hasOwnProperty.call(src, "nombre_completo")) out.nombre_completo = normalizeUpper_(src.nombre_completo);
  if (Object.prototype.hasOwnProperty.call(src, "cedula")) out.cedula = normalizeDigits_(src.cedula);
  if (Object.prototype.hasOwnProperty.call(src, "telefono")) out.telefono = normalizeDigits_(src.telefono);
  if (Object.prototype.hasOwnProperty.call(src, "correo")) out.correo = normalizeLower_(src.correo);
  if (Object.prototype.hasOwnProperty.call(src, "direccion")) out.direccion = normalizeUpper_(src.direccion);
  if (Object.prototype.hasOwnProperty.call(src, "ocupacion")) out.ocupacion = normalizeUpper_(src.ocupacion);
  if (Object.prototype.hasOwnProperty.call(src, "fecha_nacimiento")) out.fecha_nacimiento = normalizeIsoDateValue_(src.fecha_nacimiento);
  if (Object.prototype.hasOwnProperty.call(src, "fecha_registro")) out.fecha_registro = normalizeIsoDateValue_(src.fecha_registro);
  if (Object.prototype.hasOwnProperty.call(src, "creado_por")) out.creado_por = normalizeLower_(src.creado_por);
  if (Object.prototype.hasOwnProperty.call(src, "first_login")) out.first_login = normalizeUpper_(src.first_login);
  const antecedentes = Object.prototype.hasOwnProperty.call(src, "antecedentes_medicos") ? src.antecedentes_medicos : src.antecedentes;
  if (antecedentes !== void 0) {
    out.antecedentes_medicos = normalizeUpper_(antecedentes);
  }
  if (Object.prototype.hasOwnProperty.call(src, "password")) {
    out.password = await toStoredPasswordWorker_(src.password);
  }
  return out;
}
__name(normalizePatientWritePayloadWorker_, "normalizePatientWritePayloadWorker_");
async function deletePatientCascadeWorker_(env, patientId, proxyBody) {
  const targetId = normalizeText_(patientId);
  if (!targetId) {
    return { status: 400, payload: { success: false, message: "Falta patient_id." } };
  }
  const patientStoragePrefix = getPatientStoragePrefix_(targetId);
  const diagnosesRes = await supabaseRest_(env, "get", "diagnosticos_archivos", {
    select: "id_reporte,id_paciente,datos_json,pdf_url",
    filters: { id_paciente: eq_(targetId) }
  });
  if (!diagnosesRes.success) {
    return errorResult_(500, diagnosesRes.message || "No se pudieron validar los diagnosticos del paciente.");
  }
  const diagnoses = Array.isArray(diagnosesRes.data) ? diagnosesRes.data : [];
  const hasLegacyDriveAssets = diagnoses.some(diagnosisRecordRequiresAppsScriptCleanup_);
  const cleanupSteps = [
    {
      table: "historia_clinica",
      filters: { id_paciente: eq_(targetId) },
      message: "No se pudo eliminar la historia clinica del paciente."
    },
    {
      table: "citas",
      filters: { id_paciente: eq_(targetId) },
      message: "No se pudieron eliminar las citas del paciente."
    },
    {
      table: "diagnosticos_archivos",
      filters: { id_paciente: eq_(targetId) },
      message: "No se pudieron eliminar los diagnosticos del paciente."
    },
    {
      table: "evolucion_paciente",
      filters: { id_paciente: eq_(targetId) },
      message: "No se pudo eliminar la evolucion del paciente."
    },
    {
      table: "worker_sessions",
      filters: [
        ["role", eq_("paciente")],
        ["user_id", eq_(targetId)]
      ],
      message: "No se pudieron limpiar las sesiones activas del paciente."
    }
  ];
  for (const step of cleanupSteps) {
    const res = await supabaseRest_(env, "delete", step.table, {
      filters: step.filters
    });
    if (!res.success) {
      return errorResult_(500, step.message || res.message || "No se pudo limpiar informacion relacionada del paciente.");
    }
  }
  const deletePatientRes = await supabaseRest_(env, "delete", "pacientes", {
    filters: { id_paciente: eq_(targetId) }
  });
  if (!deletePatientRes.success) {
    return errorResult_(500, deletePatientRes.message || "No se pudo eliminar el paciente.");
  }
  const storageCleanup = patientStoragePrefix ? await deleteWorkerStoragePrefix_(env, patientStoragePrefix) : { success: true, warning: "" };
  const warnings = [];
  if (hasLegacyDriveAssets) {
    warnings.push("El paciente tenia diagnosticos con archivos heredados de Drive. Los registros se eliminaron de Supabase, pero esos archivos externos no se borraron fisicamente.");
  }
  if (!storageCleanup.success) {
    warnings.push(storageCleanup.warning || "No se pudieron borrar todos los archivos del paciente en Cloudflare R2.");
  }
  return {
    status: 200,
    payload: {
      success: true,
      message: warnings.length ? "Paciente y sus datos eliminados con advertencia." : "Paciente y todos sus datos eliminados correctamente.",
      warning: warnings.join(" | ")
    }
  };
}
__name(deletePatientCascadeWorker_, "deletePatientCascadeWorker_");
function getTableMetaForRole_(role) {
  const normalized = normalizeLower_(role);
  if (normalized === "admin") {
    return {
      table: "usuarios_admin",
      keyField: "usuario",
      keyValue: /* @__PURE__ */ __name((value) => normalizeLower_(value), "keyValue"),
      hasFirstLogin: true
    };
  }
  if (normalized === "superadmin") {
    return {
      table: "usuarios_superadmin",
      keyField: "usuario",
      keyValue: /* @__PURE__ */ __name((value) => normalizeLower_(value), "keyValue"),
      hasFirstLogin: false
    };
  }
  if (normalized === "paciente") {
    return {
      table: "pacientes",
      keyField: "id_paciente",
      keyValue: /* @__PURE__ */ __name((value) => normalizeText_(value), "keyValue"),
      hasFirstLogin: true
    };
  }
  return { table: "", keyField: "", keyValue: /* @__PURE__ */ __name(() => "", "keyValue"), hasFirstLogin: false };
}
__name(getTableMetaForRole_, "getTableMetaForRole_");
function getUserIdForRole_(role, row) {
  const r = normalizeLower_(role);
  if (!row || typeof row !== "object") return "";
  if (r === "admin" || r === "superadmin") return normalizeLower_(row.usuario);
  if (r === "paciente") return normalizeText_(row.id_paciente);
  return "";
}
__name(getUserIdForRole_, "getUserIdForRole_");
function requesterMatchesSession_(requester, session) {
  const normalizedRequester = normalizeSessionUserId_(session.role, requester);
  return !!normalizedRequester && normalizedRequester === session.user_id;
}
__name(requesterMatchesSession_, "requesterMatchesSession_");
function normalizeSessionUserId_(role, userId) {
  const r = normalizeLower_(role);
  const raw = normalizeText_(userId);
  if (!raw) return "";
  if (r === "admin" || r === "superadmin") return normalizeLower_(raw);
  return raw;
}
__name(normalizeSessionUserId_, "normalizeSessionUserId_");
function sanitizeUserData_(row) {
  const out = {};
  const src = row && typeof row === "object" ? row : {};
  for (const key of Object.keys(src)) {
    if (key === "password") continue;
    out[key] = src[key];
  }
  return out;
}
__name(sanitizeUserData_, "sanitizeUserData_");
function isPasswordHash_(value) {
  const raw = String(value || "");
  return raw.startsWith("sha256$") && raw.split("$").length === 3;
}
__name(isPasswordHash_, "isPasswordHash_");
async function hashPassword_(plainPassword) {
  const plain = normalizeText_(plainPassword);
  if (!plain) return "";
  const salt = randomHex_(8);
  const digest = await sha256Base64Url_(salt + "|" + plain);
  return "sha256$" + salt + "$" + digest;
}
__name(hashPassword_, "hashPassword_");
async function verifyPassword_(inputPassword, storedPassword) {
  const input = normalizeText_(inputPassword);
  const stored = String(storedPassword || "");
  if (!stored || !input) return false;
  if (!isPasswordHash_(stored)) {
    return stored === input;
  }
  const parts = stored.split("$");
  if (parts.length !== 3) return false;
  const salt = parts[1];
  const expected = parts[2];
  const actual = await sha256Base64Url_(salt + "|" + input);
  return actual === expected;
}
__name(verifyPassword_, "verifyPassword_");
async function supabaseRest_(env, method, tableName, options) {
  const baseUrl = normalizeText_(env.SUPABASE_URL).replace(/\/+$/g, "");
  const serviceRole = normalizeText_(env.SUPABASE_SERVICE_ROLE_KEY);
  const table = normalizeText_(tableName);
  if (!baseUrl || !serviceRole || !table) {
    return { success: false, message: "Faltan variables de Supabase en el Worker." };
  }
  const opts = options || {};
  const query = [];
  if (opts.select) query.push("select=" + encodeURIComponent(String(opts.select)));
  if (opts.limit) query.push("limit=" + encodeURIComponent(String(opts.limit)));
  if (opts.onConflict) query.push("on_conflict=" + encodeURIComponent(String(opts.onConflict)));
  if (opts.orderBy) {
    query.push(
      "order=" + encodeURIComponent(String(opts.orderBy)) + "." + encodeURIComponent(opts.ascending === true ? "asc" : "desc")
    );
  }
  if (Array.isArray(opts.filters)) {
    for (const entry of opts.filters) {
      const key = Array.isArray(entry) ? entry[0] : "";
      const value = Array.isArray(entry) ? entry[1] : "";
      const cleanKey = normalizeText_(key);
      const cleanValue = String(value === void 0 || value === null ? "" : value).trim();
      if (!cleanKey || !cleanValue) continue;
      query.push(encodeURIComponent(cleanKey) + "=" + encodeURIComponent(cleanValue));
    }
  } else if (opts.filters && typeof opts.filters === "object") {
    for (const [key, value] of Object.entries(opts.filters)) {
      const cleanKey = normalizeText_(key);
      const cleanValue = String(value === void 0 || value === null ? "" : value).trim();
      if (!cleanKey || !cleanValue) continue;
      query.push(encodeURIComponent(cleanKey) + "=" + encodeURIComponent(cleanValue));
    }
  }
  const url = baseUrl + "/rest/v1/" + encodeURIComponent(table) + (query.length ? "?" + query.join("&") : "");
  const headers = {
    apikey: serviceRole,
    Authorization: "Bearer " + serviceRole,
    Accept: "application/json"
  };
  if (opts.prefer) headers.Prefer = String(opts.prefer);
  const requestInit = {
    method: String(method || "get").toUpperCase(),
    headers
  };
  if (Object.prototype.hasOwnProperty.call(opts, "body")) {
    headers["Content-Type"] = "application/json";
    requestInit.body = JSON.stringify(opts.body);
  }
  try {
    const response = await fetch(url, requestInit);
    const text = await response.text();
    const data = safeJsonParse_(text);
    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        message: extractSupabaseErrorMessage_(text, data) || "Supabase HTTP " + response.status,
        data
      };
    }
    return { success: true, status: response.status, data };
  } catch (error) {
    return { success: false, message: toErrorMessage(error) };
  }
}
__name(supabaseRest_, "supabaseRest_");
async function handleSignExistingDiagnosisAsset_(body, env, requestUrl) {
  const validation = await validateOwnSessionAction_(env, body, { allowRoles: ["admin", "superadmin"] });
  if (!validation.ok) return validation.result;
  const reportId = normalizeText_(body.id_reporte);
  const assetType = normalizeText_(body.asset_type);
  const assetId = normalizeText_(body.asset_id);
  const pdfDataUrl = normalizeText_(body.pdf_data_url);
  const password = normalizeText_(body.firma_password);
  if (!reportId || !assetType || !pdfDataUrl || !password) {
    return { status: 400, payload: { success: false, message: "Faltan datos para firmar el documento." } };
  }
  const signed = await signPdfWithCloudflareWorker_(env, validation.session.user_id, password, pdfDataUrl);
  if (!signed.success || !signed.dataUrl || signed.warning) {
    return { status: 500, payload: { success: false, message: signed.message || signed.warning || "Error criptografico al firmar el PDF." } };
  }
  const report = await findSingleByField_(env, "diagnosticos_archivos", "id_reporte", reportId);
  if (!report) return { status: 404, payload: { success: false, message: "Reporte no encontrado." } };
  const patientAccess = await resolveAccessiblePatientForSession_(env, validation.session, report.id_paciente);
  if (!patientAccess.ok) return patientAccess.result;
  const newKey = joinStorageObjectKey_([report.id_paciente, reportId, "firmados", assetType + "_" + Date.now() + "_" + randomHex_(4)]);
  const upload = await uploadDataUrlToWorkerStorage_(env, requestUrl, newKey, signed.dataUrl);
  if (!upload.success) return { status: 500, payload: { success: false, message: "No se pudo guardar el PDF firmado." } };
  const newUrl = upload.url;
  const payload = parseStoredDiagnosisJson_(report.datos_json);
  let updatedPdfUrl = normalizeText_(report.pdf_url);
  let oldUrl = "";
  if (assetType === "report_pdf") {
    oldUrl = updatedPdfUrl;
    updatedPdfUrl = newUrl;
  } else if (assetType === "recipe_pdf") {
    oldUrl = payload.pdf_receta_link;
    payload.pdf_receta_link = newUrl;
  } else if (assetType === "certificate_pdf") {
    oldUrl = payload.pdf_certificado_link;
    payload.pdf_certificado_link = newUrl;
  } else if (assetType === "external_pdf") {
    let externalItems = getDiagnosisExternalPdfItemsForWorker_(payload);
    const idx = externalItems.findIndex((i) => String(i.id) === assetId || String(i.url) === assetId);
    if (idx > -1) {
      oldUrl = externalItems[idx].url;
      externalItems[idx].url = newUrl;
      payload.pdf_externos = externalItems;
      if (idx === 0) payload.pdf_externo_link = newUrl;
    }
  }
  const updateRes = await supabaseRest_(env, "patch", "diagnosticos_archivos", { filters: { id_reporte: eq_(reportId) }, prefer: "return=minimal", body: { datos_json: JSON.stringify(payload), pdf_url: updatedPdfUrl } });
  if (!updateRes.success) return { status: 500, payload: { success: false, message: "No se pudo actualizar BD." } };
  if (oldUrl && isWorkerManagedUrlWorker_(oldUrl)) await deleteWorkerManagedAssetByUrl_(env, oldUrl);
  return { status: 200, payload: { success: true, message: "Documento firmado exitosamente.", new_url: newUrl } };
}
__name(handleSignExistingDiagnosisAsset_, "handleSignExistingDiagnosisAsset_");
function extractSupabaseErrorMessage_(rawText, parsed) {
  if (parsed && typeof parsed === "object") {
    if (parsed.message) return String(parsed.message);
    if (parsed.error && typeof parsed.error === "string") return parsed.error;
  }
  return normalizeText_(rawText);
}
__name(extractSupabaseErrorMessage_, "extractSupabaseErrorMessage_");
function assertSupabaseEnv_(env) {
  if (!normalizeText_(env.SUPABASE_URL) || !normalizeText_(env.SUPABASE_SERVICE_ROLE_KEY)) {
    throw new Error("SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY son obligatorias.");
  }
}
__name(assertSupabaseEnv_, "assertSupabaseEnv_");
function getSessionTtlSeconds_(env) {
  const raw = Number(String(env.SESSION_TTL_SECONDS || "").trim());
  if (!Number.isFinite(raw) || raw <= 0) return SESSION_TTL_DEFAULT_SECONDS;
  return Math.max(300, Math.floor(raw));
}
__name(getSessionTtlSeconds_, "getSessionTtlSeconds_");
function cloneWithoutSessionToken_(body) {
  const out = {};
  for (const key of Object.keys(body || {})) {
    if (key === "session_token") continue;
    out[key] = body[key];
  }
  return out;
}
__name(cloneWithoutSessionToken_, "cloneWithoutSessionToken_");
function readJsonBody_(request) {
  return request.json().catch(() => null);
}
__name(readJsonBody_, "readJsonBody_");
function safeJsonParse_(text) {
  try {
    return text ? JSON.parse(text) : null;
  } catch (error) {
    return null;
  }
}
__name(safeJsonParse_, "safeJsonParse_");
function eq_(value) {
  return "eq." + String(value === void 0 || value === null ? "" : value).trim();
}
__name(eq_, "eq_");
function inList_(values) {
  const list = normalizeIdList_(values);
  return list.length ? "in.(" + list.map(encodePostgrestInValue_).join(",") + ")" : "";
}
__name(inList_, "inList_");
function gte_(value) {
  return "gte." + normalizeText_(value);
}
__name(gte_, "gte_");
function lte_(value) {
  return "lte." + normalizeText_(value);
}
__name(lte_, "lte_");
function encodePostgrestInValue_(value) {
  return String(value === void 0 || value === null ? "" : value).trim();
}
__name(encodePostgrestInValue_, "encodePostgrestInValue_");
function jsonResponse(request, env, payload, status) {
  const headers = buildCorsHeaders_(request, env);
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(payload), {
    status: status || 200,
    headers
  });
}
__name(jsonResponse, "jsonResponse");
function buildPreflightResponse(request, env) {
  const headers = buildCorsHeaders_(request, env);
  headers.set("access-control-allow-methods", "GET,POST,OPTIONS");
  headers.set("access-control-allow-headers", "content-type");
  headers.set("access-control-max-age", "86400");
  return new Response(null, { status: 204, headers });
}
__name(buildPreflightResponse, "buildPreflightResponse");
function buildCorsHeaders_(request, env) {
  const headers = new Headers();
  headers.set("access-control-allow-origin", resolveAllowedOrigin_(request, env));
  headers.set("access-control-allow-methods", "GET,POST,OPTIONS");
  headers.set("access-control-allow-headers", "content-type");
  headers.set("vary", "Origin");
  return headers;
}
__name(buildCorsHeaders_, "buildCorsHeaders_");
function resolveAllowedOrigin_(request, env) {
  const origin = normalizeText_(request.headers.get("Origin"));
  const configured = String(env.CORS_ALLOWED_ORIGINS || "").split(",").map((item) => normalizeText_(item)).filter(Boolean);
  if (!configured.length || configured.indexOf("*") !== -1) {
    return origin || "*";
  }
  if (origin && configured.indexOf(origin) !== -1) {
    return origin;
  }
  return configured[0];
}
__name(resolveAllowedOrigin_, "resolveAllowedOrigin_");
function normalizeText_(value) {
  return String(value === void 0 || value === null ? "" : value).trim();
}
__name(normalizeText_, "normalizeText_");
function normalizeLower_(value) {
  return normalizeText_(value).toLowerCase();
}
__name(normalizeLower_, "normalizeLower_");
function normalizeUpper_(value) {
  return normalizeText_(value).toUpperCase();
}
__name(normalizeUpper_, "normalizeUpper_");
function normalizeDigits_(value) {
  return String(value === void 0 || value === null ? "" : value).replace(/[^\d]/g, "");
}
__name(normalizeDigits_, "normalizeDigits_");
function normalizeIdList_(values) {
  const list = Array.isArray(values) ? values : [values];
  const seen = {};
  const out = [];
  list.forEach(function(value) {
    const clean = normalizeText_(value);
    if (!clean || seen[clean]) return;
    seen[clean] = true;
    out.push(clean);
  });
  return out;
}
__name(normalizeIdList_, "normalizeIdList_");
function collectAppointmentPatientIds_(appointments) {
  const ids = [];
  (Array.isArray(appointments) ? appointments : []).forEach(function(row) {
    ids.push(row && row.id_paciente);
  });
  return normalizeIdList_(ids);
}
__name(collectAppointmentPatientIds_, "collectAppointmentPatientIds_");
function buildAgendaAppointmentOutput_(appointmentRow, patientRow) {
  const row = appointmentRow || {};
  const patient = patientRow || {};
  const duration = normalizeDurationMinutesWorker_(row && row.duracion_minutos);
  return {
    id_cita: normalizeText_(row.id_cita),
    id_paciente: normalizeText_(row.id_paciente),
    nombre_paciente: normalizeText_(patient.nombre_completo) || "Desconocido",
    telefono: normalizeText_(patient.telefono),
    fecha: normalizeIsoDateValue_(row.fecha),
    hora: normalizeTimeText_(row.hora),
    motivo: normalizeText_(row.motivo),
    estado: normalizeAppointmentStatus_(row.estado) || "PENDIENTE",
    fecha_registro: normalizeText_(row.fecha_registro),
    nota: normalizeText_(row.nota_paciente),
    nota_paciente: normalizeText_(row.nota_paciente),
    recomendaciones: normalizeText_(row.recomendaciones_serv),
    recomendaciones_serv: normalizeText_(row.recomendaciones_serv),
    creado_por: normalizeLower_(row.creado_por),
    duracion_minutos: duration
  };
}
__name(buildAgendaAppointmentOutput_, "buildAgendaAppointmentOutput_");
function compareAgendaAppointmentsAsc_(a, b) {
  const dateCmp = normalizeIsoDateValue_(a && a.fecha).localeCompare(normalizeIsoDateValue_(b && b.fecha));
  if (dateCmp !== 0) return dateCmp;
  return normalizeTimeText_(a && a.hora).localeCompare(normalizeTimeText_(b && b.hora));
}
__name(compareAgendaAppointmentsAsc_, "compareAgendaAppointmentsAsc_");
function validationSessionIsPaciente_(session) {
  return normalizeLower_(session && session.role) === "paciente";
}
__name(validationSessionIsPaciente_, "validationSessionIsPaciente_");
function canPatientDeleteOwnAppointmentForSession_(session, appointmentRow) {
  if (!validationSessionIsPaciente_(session)) return true;
  const createdBy = normalizeLower_(appointmentRow && appointmentRow.creado_por);
  const status = normalizeAppointmentStatus_(appointmentRow && appointmentRow.estado);
  const ownCreated = createdBy === "paciente_web" || createdBy === normalizeLower_(session && session.user_id);
  return ownCreated && (status === "PENDIENTE" || status === "REAGENDADO");
}
__name(canPatientDeleteOwnAppointmentForSession_, "canPatientDeleteOwnAppointmentForSession_");
function normalizeAppointmentStatus_(value) {
  const status = normalizeUpper_(value);
  return {
    PENDIENTE: true,
    ASISTIO: true,
    NO_ASISTIO: true,
    REAGENDADO: true,
    CANCELADO: true
  }[status] ? status : "";
}
__name(normalizeAppointmentStatus_, "normalizeAppointmentStatus_");
function normalizeMonthKey_(value) {
  const raw = normalizeText_(value);
  if (/^\d{4}-\d{2}$/.test(raw)) return raw;
  const dateKey = normalizeIsoDateValue_(value);
  return /^\d{4}-\d{2}-\d{2}$/.test(dateKey) ? dateKey.slice(0, 7) : "";
}
__name(normalizeMonthKey_, "normalizeMonthKey_");
function parseDateAtMidday_(value) {
  const raw = normalizeIsoDateValue_(value);
  const parts = raw.split("-");
  if (parts.length !== 3) return null;
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}
__name(parseDateAtMidday_, "parseDateAtMidday_");
function getWeekDateRange_(value) {
  const base = parseDateAtMidday_(value) || parseDateAtMidday_(/* @__PURE__ */ new Date()) || /* @__PURE__ */ new Date();
  const weekRef = new Date(base);
  const day = weekRef.getDay();
  const diff = weekRef.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(weekRef.setDate(diff));
  monday.setHours(12, 0, 0, 0);
  const saturday = new Date(monday);
  saturday.setDate(monday.getDate() + 5);
  saturday.setHours(12, 0, 0, 0);
  return {
    start: normalizeIsoDateValue_(monday),
    end: normalizeIsoDateValue_(saturday)
  };
}
__name(getWeekDateRange_, "getWeekDateRange_");
function getMonthDateRange_(monthKey) {
  const normalized = normalizeMonthKey_(monthKey);
  const parts = normalized.split("-");
  if (parts.length !== 2) return { start: "", end: "" };
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  if (!year || !month) return { start: "", end: "" };
  const first = new Date(year, month - 1, 1, 12, 0, 0, 0);
  const last = new Date(year, month, 0, 12, 0, 0, 0);
  return {
    start: normalizeIsoDateValue_(first),
    end: normalizeIsoDateValue_(last)
  };
}
__name(getMonthDateRange_, "getMonthDateRange_");
function buildClinicalHistoryWriteRow_(payload, patientId) {
  const data = payload && typeof payload === "object" ? payload : {};
  return {
    id_paciente: normalizeText_(patientId || data.id_paciente),
    app: normalizeText_(data.app),
    apf: normalizeText_(data.apf),
    alergias: normalizeText_(data.alergias),
    aqx: normalizeText_(data.aqx),
    menarquia: normalizeText_(data.menarquia),
    prs: normalizeText_(data.prs),
    num_parejas: normalizeText_(data.num_parejas),
    ago_g: normalizeText_(data.ago_g),
    ago_p: normalizeText_(data.ago_p),
    ago_c: normalizeText_(data.ago_c),
    ago_a: normalizeText_(data.ago_a),
    fecha_aborto: normalizeIsoDateValue_(data.fecha_aborto || data.fecha_ultimo_evento),
    pap: normalizeText_(data.pap),
    fum: normalizeIsoDateValue_(data.fum),
    anticonceptivos: normalizeText_(data.anticonceptivos),
    tipo_anti: normalizeText_(data.tipo_anti),
    tiempo_uso: normalizeText_(data.tiempo_uso),
    tipo_ultimo: normalizeText_(data.tipo_ultimo),
    fecha_actualizacion: normalizeIsoDateTimeValue_(/* @__PURE__ */ new Date())
  };
}
__name(buildClinicalHistoryWriteRow_, "buildClinicalHistoryWriteRow_");
function buildPatientEvolutionWriteRow_(payload, base) {
  const data = payload && typeof payload === "object" ? payload : {};
  const defaults = base && typeof base === "object" ? base : {};
  return {
    id_evolucion: normalizeText_(defaults.id_evolucion || data.id_evolucion),
    id_paciente: normalizeText_(defaults.id_paciente || data.id_paciente),
    fecha_consulta: normalizeIsoDateTimeValue_(data.fecha_consulta || defaults.fecha_consulta || /* @__PURE__ */ new Date()),
    motivo_consulta: normalizeText_(data.motivo_consulta),
    evolucion: normalizeText_(data.evolucion),
    diagnostico: normalizeText_(data.diagnostico),
    tratamiento: normalizeText_(data.tratamiento),
    sugerencias: normalizeText_(data.sugerencias),
    creado_por: normalizeLower_(defaults.creado_por || data.creado_por),
    fecha_actualizacion: normalizeIsoDateTimeValue_(defaults.fecha_actualizacion || data.fecha_actualizacion || /* @__PURE__ */ new Date())
  };
}
__name(buildPatientEvolutionWriteRow_, "buildPatientEvolutionWriteRow_");
function buildServiceConfigMapWorker_(rows, allowedServices) {
  const map = {};
  const allowed = allowedServices && typeof allowedServices === "object" ? allowedServices : null;
  (Array.isArray(rows) ? rows : []).forEach(function(row) {
    const serviceName = normalizeText_(row && row.servicio);
    if (!serviceName) return;
    if (allowed && !allowed[serviceName]) return;
    if (!map[serviceName]) map[serviceName] = [];
    let opcionesStr = normalizeText_(row && row.opciones);
    let orden = 9999;
    const match = opcionesStr.match(/\|\|ORDEN:(\d+)$/);
    if (match) {
      orden = parseInt(match[1], 10);
      opcionesStr = opcionesStr.replace(/\|\|ORDEN:\d+$/, "");
    }
    map[serviceName].push({
      nombre: normalizeText_(row && row.campo_nombre),
      etiqueta: normalizeText_(row && row.campo_etiqueta),
      tipo: normalizeLower_(row && row.campo_tipo),
      opciones: opcionesStr,
      _orden: orden
    });
  });
  for (const srv in map) {
    map[srv].sort(function(a, b) {
      return a._orden - b._orden;
    });
    map[srv].forEach(function(item) {
      delete item._orden;
    });
  }
  return map;
}
__name(buildServiceConfigMapWorker_, "buildServiceConfigMapWorker_");
async function loadServiceConfigRowsForService_(env, serviceName) {
  const target = normalizeText_(serviceName);
  if (!target) return [];
  const res = await supabaseRest_(env, "get", "config_campos", {
    select: "servicio,campo_nombre,campo_etiqueta,campo_tipo,opciones",
    filters: { servicio: eq_(target) }
  });
  if (!res.success || !Array.isArray(res.data)) return [];
  const items = res.data.map(function(row) {
    let opcionesStr = normalizeText_(row && row.opciones);
    let orden = 9999;
    const match = opcionesStr.match(/\|\|ORDEN:(\d+)$/);
    if (match) {
      orden = parseInt(match[1], 10);
      opcionesStr = opcionesStr.replace(/\|\|ORDEN:\d+$/, "");
    }
    return {
      nombre: normalizeText_(row && row.campo_nombre),
      etiqueta: normalizeText_(row && row.campo_etiqueta),
      tipo: normalizeLower_(row && row.campo_tipo),
      opciones: opcionesStr,
      _orden: orden
    };
  }).filter(function(row) {
    return !!(row.nombre || row.etiqueta || row.tipo);
  });
  items.sort(function(a, b) {
    return a._orden - b._orden;
  });
  items.forEach(function(item) {
    delete item._orden;
  });
  return items;
}
__name(loadServiceConfigRowsForService_, "loadServiceConfigRowsForService_");
async function findServiceByNameInsensitive_(env, serviceName) {
  const target = normalizeLower_(serviceName);
  if (!target) return null;
  const res = await supabaseRest_(env, "get", "servicios", {
    select: "id,nombre_servicio,recomendaciones,titulo_reporte,scope_visibility,owner_usuario,duracion_minutos",
    orderBy: "nombre_servicio",
    ascending: true
  });
  if (!res.success || !Array.isArray(res.data)) return null;
  for (const row of res.data) {
    if (normalizeLower_(row && row.nombre_servicio) === target) {
      return row;
    }
  }
  return null;
}
__name(findServiceByNameInsensitive_, "findServiceByNameInsensitive_");
function normalizeServiceScopeWorker_(value) {
  const scope = normalizeUpper_(value);
  if (scope === "OWNER" || scope === "ALL") return scope;
  return "";
}
__name(normalizeServiceScopeWorker_, "normalizeServiceScopeWorker_");
function normalizeServiceFieldRowsWorker_(campos, serviceName) {
  const targetService = normalizeText_(serviceName);
  return (Array.isArray(campos) ? campos : []).map(function(campo, index) {
    const item = campo && typeof campo === "object" ? campo : {};
    let opcionesStr = normalizeText_(item.opciones);
    opcionesStr = opcionesStr ? opcionesStr + "||ORDEN:" + index : "||ORDEN:" + index;
    return {
      servicio: targetService,
      campo_nombre: normalizeText_(item.nombre),
      campo_etiqueta: normalizeText_(item.etiqueta),
      campo_tipo: normalizeLower_(item.tipo),
      opciones: opcionesStr
    };
  }).filter(function(item) {
    return !!targetService && !!item.campo_etiqueta;
  });
}
__name(normalizeServiceFieldRowsWorker_, "normalizeServiceFieldRowsWorker_");
function normalizeStorageObjectName_(value, fallback) {
  const raw = normalizeText_(value);
  const safe = raw.replace(/[^\w.-]+/g, "_").replace(/^_+|_+$/g, "");
  return safe || String(fallback || "archivo");
}
__name(normalizeStorageObjectName_, "normalizeStorageObjectName_");
function joinStorageObjectKey_(parts) {
  const source = Array.isArray(parts) ? parts : [parts];
  const out = [];
  for (let i = 0; i < source.length; i++) {
    const clean = normalizeStorageObjectName_(source[i], "");
    if (clean) out.push(clean);
  }
  return out.join("/");
}
__name(joinStorageObjectKey_, "joinStorageObjectKey_");
function encodeStorageObjectPath_(path) {
  return String(path || "").split("/").map(function(part) {
    return encodeURIComponent(String(part || "").trim());
  }).join("/");
}
__name(encodeStorageObjectPath_, "encodeStorageObjectPath_");
function decodeStorageObjectPath_(path) {
  return String(path || "").split("/").map(function(part) {
    try {
      return decodeURIComponent(String(part || "").trim());
    } catch (error) {
      return String(part || "").trim();
    }
  }).filter(Boolean).join("/");
}
__name(decodeStorageObjectPath_, "decodeStorageObjectPath_");
function parseDataUrlWorker_(value) {
  const raw = normalizeText_(value);
  const match = raw.match(/^data:([^;,]+)(?:;[^,]*)?;base64,(.+)$/);
  if (!match) return null;
  return {
    mime: normalizeText_(match[1]),
    base64: normalizeText_(match[2])
  };
}
__name(parseDataUrlWorker_, "parseDataUrlWorker_");
function arrayBufferToBase64Worker_(buffer) {
  const bytes = new Uint8Array(buffer || new ArrayBuffer(0));
  let binary = "";
  const chunkSize = 32768;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}
__name(arrayBufferToBase64Worker_, "arrayBufferToBase64Worker_");
async function fetchRemoteFileAsDataUrl_(url) {
  const target = normalizeText_(url);
  if (!target) return { success: false, message: "URL invalida." };
  try {
    const response = await fetch(target);
    if (!response.ok) {
      return { success: false, message: "HTTP " + response.status + " al cargar el archivo." };
    }
    const mime = normalizeText_(response.headers.get("content-type")) || "application/octet-stream";
    const buffer = await response.arrayBuffer();
    return {
      success: true,
      data: "data:" + mime + ";base64," + arrayBufferToBase64Worker_(buffer)
    };
  } catch (error) {
    return { success: false, message: toErrorMessage(error) };
  }
}
__name(fetchRemoteFileAsDataUrl_, "fetchRemoteFileAsDataUrl_");
function getWorkerStorageBucket_(env) {
  if (!env || typeof env !== "object") return null;
  return env.ASSETS_BUCKET || env.DIAGNOSIS_BUCKET || null;
}
__name(getWorkerStorageBucket_, "getWorkerStorageBucket_");
function hasWorkerStorageBinding_(env) {
  const bucket = getWorkerStorageBucket_(env);
  return !!(bucket && typeof bucket.get === "function" && typeof bucket.put === "function" && typeof bucket.delete === "function");
}
__name(hasWorkerStorageBinding_, "hasWorkerStorageBinding_");
function buildWorkerStoragePublicUrl_(requestUrl, objectKey) {
  const path = encodeStorageObjectPath_(objectKey);
  if (!path) return "";
  try {
    const parsed = requestUrl instanceof URL ? requestUrl : new URL(String(requestUrl || ""));
    return parsed.origin + WORKER_STORAGE_ROUTE_PREFIX + path;
  } catch (error) {
    return "";
  }
}
__name(buildWorkerStoragePublicUrl_, "buildWorkerStoragePublicUrl_");
function isWorkerManagedUrlWorker_(url) {
  const raw = normalizeText_(url);
  if (!raw) return false;
  try {
    const parsed = new URL(raw);
    return normalizePath_(parsed.pathname).indexOf(WORKER_STORAGE_ROUTE_PREFIX) === 0;
  } catch (error) {
    return false;
  }
}
__name(isWorkerManagedUrlWorker_, "isWorkerManagedUrlWorker_");
function extractWorkerStorageObjectKeyFromUrl_(url) {
  const raw = normalizeText_(url);
  if (!raw) return "";
  try {
    const parsed = new URL(raw);
    const pathname = normalizePath_(parsed.pathname);
    if (pathname.indexOf(WORKER_STORAGE_ROUTE_PREFIX) !== 0) return "";
    return decodeStorageObjectPath_(pathname.substring(WORKER_STORAGE_ROUTE_PREFIX.length));
  } catch (error) {
    return "";
  }
}
__name(extractWorkerStorageObjectKeyFromUrl_, "extractWorkerStorageObjectKeyFromUrl_");
async function uploadDataUrlToWorkerStorage_(env, requestUrl, objectPath, dataUrl) {
  const bucket = getWorkerStorageBucket_(env);
  const parsed = parseDataUrlWorker_(dataUrl);
  const objectKey = decodeStorageObjectPath_(objectPath);
  if (!bucket || !parsed || !parsed.mime || !parsed.base64 || !objectKey) {
    return { success: false, message: "Archivo adjunto invalido." };
  }
  let bytes;
  try {
    const binary = atob(parsed.base64);
    bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  } catch (error) {
    return { success: false, message: "No se pudo decodificar el archivo adjunto." };
  }
  try {
    await bucket.put(objectKey, bytes, {
      httpMetadata: {
        contentType: parsed.mime,
        cacheControl: WORKER_STORAGE_CACHE_CONTROL,
        contentDisposition: parsed.mime === "application/pdf" ? "inline" : void 0
      }
    });
  } catch (error) {
    return { success: false, message: "No se pudo guardar el archivo en Cloudflare R2: " + toErrorMessage(error) };
  }
  return {
    success: true,
    mime: parsed.mime,
    key: objectKey,
    url: buildWorkerStoragePublicUrl_(requestUrl, objectKey)
  };
}
__name(uploadDataUrlToWorkerStorage_, "uploadDataUrlToWorkerStorage_");
async function deleteWorkerStorageObjectByKey_(env, objectKey) {
  const bucket = getWorkerStorageBucket_(env);
  const key = decodeStorageObjectPath_(objectKey);
  if (!bucket || !key) return { success: false, message: "Archivo no encontrado en Cloudflare R2." };
  try {
    await bucket.delete(key);
    return { success: true, key };
  } catch (error) {
    return { success: false, message: toErrorMessage(error), key };
  }
}
__name(deleteWorkerStorageObjectByKey_, "deleteWorkerStorageObjectByKey_");
async function deleteWorkerManagedAssetByUrl_(env, url) {
  const key = extractWorkerStorageObjectKeyFromUrl_(url);
  if (!key) return { success: true, skipped: true };
  return deleteWorkerStorageObjectByKey_(env, key);
}
__name(deleteWorkerManagedAssetByUrl_, "deleteWorkerManagedAssetByUrl_");
async function deleteWorkerManagedAssetUrls_(env, urls) {
  const seen = {};
  const list = Array.isArray(urls) ? urls : [urls];
  const errors = [];
  for (let i = 0; i < list.length; i++) {
    const url = normalizeText_(list[i]);
    if (!url || !isWorkerManagedUrlWorker_(url) || seen[url]) continue;
    seen[url] = true;
    const removed = await deleteWorkerManagedAssetByUrl_(env, url);
    if (!removed.success && !removed.skipped) {
      errors.push(removed.message || "No se pudo eliminar " + url);
    }
  }
  return {
    success: errors.length === 0,
    warning: errors.length ? errors.join(" | ") : ""
  };
}
__name(deleteWorkerManagedAssetUrls_, "deleteWorkerManagedAssetUrls_");
function getPatientStoragePrefix_(patientId) {
  const clean = normalizeStorageObjectName_(patientId, "");
  return clean ? clean + "/" : "";
}
__name(getPatientStoragePrefix_, "getPatientStoragePrefix_");
async function deleteWorkerStoragePrefix_(env, prefix) {
  const bucket = getWorkerStorageBucket_(env);
  const targetPrefix = decodeStorageObjectPath_(prefix);
  if (!bucket || !targetPrefix) return { success: false, message: "Prefijo invalido para borrar archivos del paciente." };
  const errors = [];
  let cursor = void 0;
  do {
    let listed = null;
    try {
      listed = await bucket.list({
        prefix: targetPrefix,
        cursor
      });
    } catch (error) {
      return { success: false, message: "No se pudo listar archivos del paciente en Cloudflare R2: " + toErrorMessage(error) };
    }
    const objects = listed && Array.isArray(listed.objects) ? listed.objects : [];
    for (let i = 0; i < objects.length; i++) {
      const key = normalizeText_(objects[i] && objects[i].key);
      if (!key) continue;
      try {
        await bucket.delete(key);
      } catch (error) {
        errors.push("No se pudo borrar " + key + " en Cloudflare R2.");
      }
    }
    cursor = listed && listed.truncated ? listed.cursor : void 0;
  } while (cursor);
  return {
    success: errors.length === 0,
    warning: errors.length ? errors.join(" | ") : ""
  };
}
__name(deleteWorkerStoragePrefix_, "deleteWorkerStoragePrefix_");
async function prepareDiagnosisPersistenceWorker_(env, payload, options) {
  const src = payload && typeof payload === "object" ? Object.assign({}, payload) : {};
  const opts = options && typeof options === "object" ? options : {};
  const patientId = normalizeText_(opts.patientId);
  const reportId = normalizeText_(opts.reportId);
  const requestUrl = opts.requestUrl;
  const out = Object.assign({}, src);
  let reportPdfUrl = "";
  let recipePdfUrl = "";
  let certificatePdfUrl = "";
  let reportPdfKey = "";
  let recipePdfKey = "";
  let certificatePdfKey = "";
  let signatureWarnings = [];
  if (Object.prototype.hasOwnProperty.call(src, "imagenes")) {
    const images = [];
    const list = Array.isArray(src.imagenes) ? src.imagenes : [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i] && typeof list[i] === "object" ? list[i] : {};
      const index = Number(item.index);
      const safeIndex = Number.isFinite(index) && index > 0 ? Math.floor(index) : i + 1;
      const title = normalizeText_(item.title);
      const size = normalizeLower_(item.size);
      const uploadedData = normalizeText_(item.data);
      if (uploadedData) {
        const upload = await uploadDataUrlToWorkerStorage_(
          env,
          requestUrl,
          joinStorageObjectKey_([
            patientId,
            reportId,
            "imagenes",
            "img_" + safeIndex + "_" + randomHex_(6)
          ]),
          uploadedData
        );
        if (!upload.success) {
          return { success: false, status: 500, message: upload.message || "No se pudo guardar una imagen del diagnostico." };
        }
        images.push({
          index: safeIndex,
          title,
          url: upload.url,
          fileId: "",
          size
        });
        continue;
      }
      const imageUrl = normalizeText_(item.url || item.src);
      const fileId = normalizeText_(item.fileId);
      if (!imageUrl && !fileId) continue;
      images.push({
        index: safeIndex,
        title,
        url: imageUrl,
        fileId,
        size
      });
    }
    out.imagenes = images;
  }
  if (Object.prototype.hasOwnProperty.call(src, "pdf_externos")) {
    const pdfs = [];
    const list = Array.isArray(src.pdf_externos) ? src.pdf_externos : [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i] && typeof list[i] === "object" ? list[i] : {};
      const fileData = normalizeText_(item.data);
      const currentId = normalizeText_(item.id) || "external_pdf_" + (i + 1);
      const label = normalizeText_(item.label || item.nombre_visible || item.display_name || item.name) || "Adjunto PDF " + (i + 1);
      const name = normalizeText_(item.name) || normalizeStorageObjectName_(label, "adjunto") + ".pdf";
      if (fileData) {
        const upload = await uploadDataUrlToWorkerStorage_(
          env,
          requestUrl,
          joinStorageObjectKey_([
            patientId,
            reportId,
            "externos",
            normalizeStorageObjectName_(currentId, "adjunto_" + (i + 1)) + "_" + randomHex_(6)
          ]),
          fileData
        );
        if (!upload.success) {
          return { success: false, status: 500, message: upload.message || "No se pudo guardar un PDF adjunto." };
        }
        pdfs.push({
          id: currentId,
          label,
          url: upload.url,
          file_id: "",
          name
        });
        continue;
      }
      const fileUrl = normalizeText_(item.url || item.pdf_externo_link);
      const fileId = normalizeText_(item.file_id || item.fileId);
      if (!fileUrl && !fileId) continue;
      pdfs.push({
        id: currentId,
        label,
        url: fileUrl,
        file_id: fileId,
        name
      });
    }
    out.pdf_externos = pdfs;
  }
  const reportPdfDataUrl = normalizeText_(src.report_pdf_data_url);
  if (reportPdfDataUrl) {
    let finalReportPdfDataUrl = reportPdfDataUrl;
    if (opts.firmaPassword && opts.doctorId) {
      const signed = await signPdfWithCloudflareWorker_(env, opts.doctorId, opts.firmaPassword, reportPdfDataUrl);
      if (signed.success && signed.dataUrl) {
        finalReportPdfDataUrl = signed.dataUrl;
        if (signed.warning) signatureWarnings.push("Informe: " + signed.warning);
      }
    }
    const upload = await uploadDataUrlToWorkerStorage_(
      env,
      requestUrl,
      joinStorageObjectKey_([
        patientId,
        reportId,
        "reportes",
        "informe_principal_" + Date.now() + "_" + randomHex_(4)
      ]),
      finalReportPdfDataUrl
    );
    if (!upload.success) {
      return { success: false, status: 500, message: upload.message || "No se pudo guardar el PDF principal." };
    }
    reportPdfUrl = upload.url;
    reportPdfKey = upload.key || "";
  }
  const recipePdfDataUrl = normalizeText_(src.recipe_pdf_data_url);
  if (recipePdfDataUrl) {
    let finalRecipePdfDataUrl = recipePdfDataUrl;
    if (opts.firmaPassword && opts.doctorId) {
      const signed = await signPdfWithCloudflareWorker_(env, opts.doctorId, opts.firmaPassword, recipePdfDataUrl);
      if (signed.success && signed.dataUrl) {
        finalRecipePdfDataUrl = signed.dataUrl;
        if (signed.warning) signatureWarnings.push("Receta: " + signed.warning);
      }
    }
    const upload = await uploadDataUrlToWorkerStorage_(
      env,
      requestUrl,
      joinStorageObjectKey_([
        patientId,
        reportId,
        "reportes",
        "receta_" + Date.now() + "_" + randomHex_(4)
      ]),
      finalRecipePdfDataUrl
    );
    if (!upload.success) {
      return { success: false, status: 500, message: upload.message || "No se pudo guardar el PDF de receta." };
    }
    recipePdfUrl = upload.url;
    recipePdfKey = upload.key || "";
  }
  const certificatePdfDataUrl = normalizeText_(src.certificate_pdf_data_url);
  if (certificatePdfDataUrl) {
    let finalCertificatePdfDataUrl = certificatePdfDataUrl;
    if (opts.firmaPassword && opts.doctorId) {
      const signed = await signPdfWithCloudflareWorker_(env, opts.doctorId, opts.firmaPassword, certificatePdfDataUrl);
      if (signed.success && signed.dataUrl) {
        finalCertificatePdfDataUrl = signed.dataUrl;
        if (signed.warning) signatureWarnings.push("Certificado: " + signed.warning);
      }
    }
    const upload = await uploadDataUrlToWorkerStorage_(
      env,
      requestUrl,
      joinStorageObjectKey_([
        patientId,
        reportId,
        "reportes",
        "certificado_medico_" + Date.now() + "_" + randomHex_(4)
      ]),
      finalCertificatePdfDataUrl
    );
    if (!upload.success) {
      return { success: false, status: 500, message: upload.message || "No se pudo guardar el PDF de certificado medico." };
    }
    certificatePdfUrl = upload.url;
    certificatePdfKey = upload.key || "";
  }
  delete out.report_pdf_data_url;
  delete out.recipe_pdf_data_url;
  delete out.certificate_pdf_data_url;
  return {
    success: true,
    data: out,
    reportPdfUrl,
    recipePdfUrl,
    certificatePdfUrl,
    reportPdfKey,
    recipePdfKey,
    certificatePdfKey
  };
}
__name(prepareDiagnosisPersistenceWorker_, "prepareDiagnosisPersistenceWorker_");
async function signPdfWithCloudflareWorker_(env, doctorId, password, pdfDataUrl) {
  try {
    const bucket = getWorkerStorageBucket_(env);
    if (!bucket) return { success: false, message: "R2 no configurado." };
    const p12Obj = await bucket.get("firmas/" + doctorId + "/firma.p12");
    if (!p12Obj) return { success: false, message: "No se encontro archivo .p12 en la boveda." };
    const p12Buffer = await p12Obj.arrayBuffer();
    const parsedPdf = parseDataUrlWorker_(pdfDataUrl);
    if (!parsedPdf) return { success: false, message: "PDF invalido." };
    try {
      let signer = signpdfPkg.default || signpdfPkg;
      if (signer && signer.default && typeof signer.default.sign === "function") signer = signer.default;
      if (typeof signer.sign !== "function") {
        const SignPdfClass = signpdfPkg.SignPdf || signer.SignPdf;
        if (SignPdfClass) signer = new SignPdfClass();
      }
      let plainAddPlaceholder2 = placeholderPkg.plainAddPlaceholder || placeholderPkg.default || placeholderPkg;
      if (typeof plainAddPlaceholder2 !== "function" && plainAddPlaceholder2.plainAddPlaceholder) {
        plainAddPlaceholder2 = plainAddPlaceholder2.plainAddPlaceholder;
      }
      const pdfBinary = atob(parsedPdf.base64);
      const pdfBytes = new Uint8Array(pdfBinary.length);
      for (let i = 0; i < pdfBinary.length; i++) pdfBytes[i] = pdfBinary.charCodeAt(i);
      let pdfBuffer = Buffer2.from(pdfBytes);
      const metaObj = await bucket.get("firmas/" + doctorId + "/firma.p12.meta");
      let signerName = "Profesional Medico";
      if (metaObj) {
        try {
          const metaJson = await metaObj.json();
          signerName = metaJson.cert_name || signerName;
        } catch (e) {
        }
      }
      pdfBuffer = await plainAddPlaceholder2({
        pdfBuffer,
        reason: "Firma Electronica Medica",
        signatureLength: 33280,
        name: signerName,
        location: "Ecuador"
      });
      let P12SignerClass = signerP12Pkg.P12Signer || signerP12Pkg.default && signerP12Pkg.default.P12Signer || signerP12Pkg;
      if (typeof P12SignerClass !== "function" && P12SignerClass.P12Signer) P12SignerClass = P12SignerClass.P12Signer;
      const p12SignerInstance = new P12SignerClass(Buffer2.from(p12Buffer), { passphrase: password });
      const signedBytes = await signer.sign(pdfBuffer, p12SignerInstance);
      const signedBase64 = Buffer2.from(signedBytes).toString("base64");
      return { success: true, dataUrl: "data:application/pdf;base64," + signedBase64 };
    } catch (e) {
      console.warn("Worker: PAdES Error:", e.message);
      return { success: true, dataUrl: pdfDataUrl, warning: "Error Criptografico: " + e.message };
    }
  } catch (error) {
    return { success: false, message: toErrorMessage(error) };
  }
}
__name(signPdfWithCloudflareWorker_, "signPdfWithCloudflareWorker_");
function normalizeDiagnosisSavePayloadForMode_(payload, oldPayload) {
  const data = payload && typeof payload === "object" ? Object.assign({}, payload) : {};
  const oldData = oldPayload && typeof oldPayload === "object" ? oldPayload : {};
  const tipo = normalizeUpper_(data.tipo_examen);
  if (tipo !== "TODO") return data;
  const hasRecipe = diagnosisHasMeaningfulRecipePayload_(data) || !Object.prototype.hasOwnProperty.call(data, "medicamentos") && diagnosisHasMeaningfulRecipePayload_(oldData);
  const hasExternalPdf = diagnosisHasMeaningfulExternalPdfPayload_(data, oldData);
  const hasReportContent = diagnosisHasMeaningfulClinicalPayload_(data) || !Object.prototype.hasOwnProperty.call(data, "datos_json") && diagnosisHasMeaningfulClinicalPayload_(oldData);
  if (!hasReportContent) {
    if (hasRecipe) {
      data.tipo_examen = "RECETA";
    } else if (hasExternalPdf) {
      data.tipo_examen = "EXAMENPDF";
    }
  }
  return data;
}
__name(normalizeDiagnosisSavePayloadForMode_, "normalizeDiagnosisSavePayloadForMode_");
function parseStoredDiagnosisJson_(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.assign({}, value);
  }
  const parsed = safeJsonParse_(normalizeText_(value));
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}
__name(parseStoredDiagnosisJson_, "parseStoredDiagnosisJson_");
function isDriveManagedUrlWorker_(url) {
  const raw = normalizeText_(url).toLowerCase();
  if (!raw) return false;
  return raw.indexOf("drive.google.com/") !== -1 || raw.indexOf("docs.google.com/") !== -1 || raw.indexOf("googleusercontent.com/") !== -1;
}
__name(isDriveManagedUrlWorker_, "isDriveManagedUrlWorker_");
function getDiagnosisExternalPdfItemsForWorker_(payload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const modern = normalizeDiagnosisExternalPdfsForStorage_(data.pdf_externos);
  return modern.length ? modern : getLegacyDiagnosisExternalPdfsForStorage_(data);
}
__name(getDiagnosisExternalPdfItemsForWorker_, "getDiagnosisExternalPdfItemsForWorker_");
function diagnosisExternalItemNeedsAppsScriptCleanup_(item) {
  const current = item || {};
  const url = normalizeText_(current.url || current.pdf_externo_link);
  const fileId = normalizeText_(current.file_id || current.fileId);
  if (isDriveManagedUrlWorker_(url)) return true;
  return !url && !!fileId;
}
__name(diagnosisExternalItemNeedsAppsScriptCleanup_, "diagnosisExternalItemNeedsAppsScriptCleanup_");
function diagnosisRecordRequiresAppsScriptCleanup_(report) {
  const row = report || {};
  const payload = parseStoredDiagnosisJson_(row.datos_json);
  if (isDriveManagedUrlWorker_(row.pdf_url || row.pdf_link)) return true;
  if (isDriveManagedUrlWorker_(payload.pdf_receta_link)) return true;
  if (isDriveManagedUrlWorker_(payload.pdf_certificado_link)) return true;
  if (normalizeText_(payload.report_folder_id)) return true;
  if (Array.isArray(payload.drive_file_ids) && payload.drive_file_ids.some(function(item) {
    return !!normalizeText_(item);
  })) {
    return true;
  }
  if (Array.isArray(payload.imagenes) && payload.imagenes.some(function(img) {
    return !!normalizeText_(img && img.fileId);
  })) {
    return true;
  }
  if (getDiagnosisExternalPdfItemsForWorker_(payload).some(diagnosisExternalItemNeedsAppsScriptCleanup_)) {
    return true;
  }
  return false;
}
__name(diagnosisRecordRequiresAppsScriptCleanup_, "diagnosisRecordRequiresAppsScriptCleanup_");
function collectDiagnosisAssetUrlsWorker_(pdfUrl, payload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const seen = {};
  const out = [];
  function add(url) {
    const clean = normalizeText_(url);
    if (!clean || seen[clean]) return;
    seen[clean] = true;
    out.push(clean);
  }
  __name(add, "add");
  add(pdfUrl);
  add(data.pdf_receta_link);
  add(data.pdf_certificado_link);
  const images = Array.isArray(data.imagenes) ? data.imagenes : [];
  for (let i = 0; i < images.length; i++) {
    add(images[i] && (images[i].url || images[i].src));
  }
  const externalItems = getDiagnosisExternalPdfItemsForWorker_(data);
  for (let i = 0; i < externalItems.length; i++) {
    add(externalItems[i] && (externalItems[i].url || externalItems[i].pdf_externo_link));
  }
  return out;
}
__name(collectDiagnosisAssetUrlsWorker_, "collectDiagnosisAssetUrlsWorker_");
function collectDiagnosisAssetUrlsFromReportWorker_(report) {
  const row = report || {};
  return collectDiagnosisAssetUrlsWorker_(row.pdf_url || row.pdf_link, parseStoredDiagnosisJson_(row.datos_json));
}
__name(collectDiagnosisAssetUrlsFromReportWorker_, "collectDiagnosisAssetUrlsFromReportWorker_");
function buildDiagnosisRemainingDocsWorker_(pdfUrl, payload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const externalItems = getDiagnosisExternalPdfItemsForWorker_(data);
  const externalLink = externalItems.length ? normalizeText_(externalItems[0].url) : normalizeText_(data.pdf_externo_link);
  return {
    pdf_url: normalizeText_(pdfUrl),
    pdf_receta_link: normalizeText_(data.pdf_receta_link),
    pdf_certificado_link: normalizeText_(data.pdf_certificado_link),
    pdf_externo_link: externalLink,
    pdf_externos: externalItems
  };
}
__name(buildDiagnosisRemainingDocsWorker_, "buildDiagnosisRemainingDocsWorker_");
function buildDiagnosisStoragePayload_(payload, options) {
  const data = payload && typeof payload === "object" ? payload : {};
  const opts = options && typeof options === "object" ? options : {};
  const oldPayload = opts.oldPayload && typeof opts.oldPayload === "object" ? opts.oldPayload : {};
  const out = Object.assign({}, oldPayload);
  out.id_reporte = normalizeText_(opts.id_reporte || data.id_reporte || oldPayload.id_reporte);
  out.id_paciente = normalizeText_(opts.id_paciente || data.id_paciente || oldPayload.id_paciente);
  out.nombre_paciente = normalizeText_(data.nombre_paciente || oldPayload.nombre_paciente || opts.nombre_paciente);
  out.tipo_examen = normalizeText_(data.tipo_examen || oldPayload.tipo_examen);
  out.doctor_usuario = normalizeLower_(opts.doctor_usuario || oldPayload.doctor_usuario);
  out.incluir_firma_virtual = Object.prototype.hasOwnProperty.call(data, "incluir_firma_virtual") ? !!data.incluir_firma_virtual : !!oldPayload.incluir_firma_virtual;
  if (Object.prototype.hasOwnProperty.call(data, "datos_json")) {
    out.datos_json = normalizeDiagnosisDynamicPayload_(data.datos_json);
  } else if (oldPayload.datos_json && typeof oldPayload.datos_json === "object") {
    out.datos_json = normalizeDiagnosisDynamicPayload_(oldPayload.datos_json);
  }
  if (Object.prototype.hasOwnProperty.call(data, "certificado_medico")) {
    const cert = normalizeDiagnosisMedicalCertificateForStorage_(data.certificado_medico);
    if (cert) out.certificado_medico = cert;
    else delete out.certificado_medico;
  } else if (oldPayload.certificado_medico && typeof oldPayload.certificado_medico === "object") {
    const oldCert = normalizeDiagnosisMedicalCertificateForStorage_(oldPayload.certificado_medico);
    if (oldCert) out.certificado_medico = oldCert;
  }
  [
    "motivo",
    "evaluacion",
    "vagina",
    "vulva",
    "ano",
    "hallazgos",
    "diagnostico",
    "biopsia",
    "recomendaciones",
    "observaciones_receta"
  ].forEach(function(key) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      out[key] = normalizeText_(data[key]);
    } else if (Object.prototype.hasOwnProperty.call(oldPayload, key)) {
      out[key] = normalizeText_(oldPayload[key]);
    }
  });
  if (Object.prototype.hasOwnProperty.call(data, "pdf_receta_link")) {
    out.pdf_receta_link = normalizeText_(data.pdf_receta_link);
  } else if (normalizeText_(oldPayload.pdf_receta_link)) {
    out.pdf_receta_link = normalizeText_(oldPayload.pdf_receta_link);
  }
  if (Object.prototype.hasOwnProperty.call(data, "pdf_certificado_link")) {
    out.pdf_certificado_link = normalizeText_(data.pdf_certificado_link);
  } else if (normalizeText_(oldPayload.pdf_certificado_link)) {
    out.pdf_certificado_link = normalizeText_(oldPayload.pdf_certificado_link);
  }
  out.medicamentos = normalizeDiagnosisMedicamentosForStorage_(
    Object.prototype.hasOwnProperty.call(data, "medicamentos") ? data.medicamentos : oldPayload.medicamentos
  );
  out.imagenes = normalizeDiagnosisImagesForStorage_(
    Object.prototype.hasOwnProperty.call(data, "imagenes") ? data.imagenes : oldPayload.imagenes
  );
  out.pdf_externos = Object.prototype.hasOwnProperty.call(data, "pdf_externos") ? normalizeDiagnosisExternalPdfsForStorage_(data.pdf_externos) : normalizeDiagnosisExternalPdfsForStorage_(oldPayload.pdf_externos);
  if (!out.pdf_externos.length) {
    out.pdf_externos = getLegacyDiagnosisExternalPdfsForStorage_(data).length ? getLegacyDiagnosisExternalPdfsForStorage_(data) : getLegacyDiagnosisExternalPdfsForStorage_(oldPayload);
  }
  out.pdf_externo_link = out.pdf_externos.length ? normalizeText_(out.pdf_externos[0].url) : "";
  if (Array.isArray(oldPayload.drive_file_ids)) out.drive_file_ids = oldPayload.drive_file_ids.slice();
  if (normalizeText_(oldPayload.report_folder_id)) out.report_folder_id = normalizeText_(oldPayload.report_folder_id);
  return out;
}
__name(buildDiagnosisStoragePayload_, "buildDiagnosisStoragePayload_");
function diagnosisHasMeaningfulRecipePayload_(payload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const meds = Array.isArray(data.medicamentos) ? data.medicamentos : [];
  const hasMeds = meds.some(function(item) {
    return !!normalizeText_(item && item.nombre);
  });
  const hasObs = !!normalizeText_(data.observaciones_receta);
  return hasMeds || hasObs;
}
__name(diagnosisHasMeaningfulRecipePayload_, "diagnosisHasMeaningfulRecipePayload_");
function diagnosisHasMeaningfulClinicalPayload_(payload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const fixedKeys = [
    "motivo",
    "evaluacion",
    "vagina",
    "vulva",
    "ano",
    "hallazgos",
    "diagnostico",
    "biopsia",
    "recomendaciones"
  ];
  for (let i = 0; i < fixedKeys.length; i++) {
    if (normalizeText_(data[fixedKeys[i]])) return true;
  }
  const dyn = data.datos_json && typeof data.datos_json === "object" ? data.datos_json : null;
  if (dyn) {
    for (const key of Object.keys(dyn)) {
      if (normalizeText_(dyn[key])) return true;
    }
  }
  return !!(Array.isArray(data.imagenes) && data.imagenes.length);
}
__name(diagnosisHasMeaningfulClinicalPayload_, "diagnosisHasMeaningfulClinicalPayload_");
function diagnosisHasMeaningfulExternalPdfPayload_(payload, oldPayload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const oldData = oldPayload && typeof oldPayload === "object" ? oldPayload : {};
  const currentItems = Object.prototype.hasOwnProperty.call(data, "pdf_externos") ? normalizeDiagnosisExternalPdfsForStorage_(data.pdf_externos) : [];
  if (currentItems.length) return true;
  const current = data.pdf_externo && typeof data.pdf_externo === "object" ? data.pdf_externo : null;
  if (current) {
    if (current.delete === true) return false;
    if (normalizeText_(current.data) || normalizeText_(current.name) || normalizeText_(current.mime)) return true;
  }
  return !!(normalizeDiagnosisExternalPdfsForStorage_(oldData.pdf_externos).length || getLegacyDiagnosisExternalPdfsForStorage_(oldData).length);
}
__name(diagnosisHasMeaningfulExternalPdfPayload_, "diagnosisHasMeaningfulExternalPdfPayload_");
function normalizeDiagnosisDynamicPayload_(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const out = {};
  Object.keys(value).forEach(function(key) {
    const cleanKey = normalizeText_(key);
    if (!cleanKey) return;
    const rawValue = value[key];
    if (rawValue === void 0) return;
    out[cleanKey] = rawValue === null ? "" : rawValue;
  });
  return out;
}
__name(normalizeDiagnosisDynamicPayload_, "normalizeDiagnosisDynamicPayload_");
function normalizeDiagnosisMedicalCertificateForStorage_(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const src = value;
  const out = {
    ciudad: normalizeText_(src.ciudad),
    nombre_paciente: normalizeText_(src.nombre_paciente),
    cedula: normalizeText_(src.cedula),
    cuadro_clinico: normalizeText_(src.cuadro_clinico),
    diagnostico: normalizeText_(src.diagnostico),
    lugar_trabajo: normalizeText_(src.lugar_trabajo),
    ocupacion: normalizeText_(src.ocupacion),
    lugar_atencion: normalizeText_(src.lugar_atencion),
    establecimiento: normalizeText_(src.establecimiento),
    reposo_sugerido: normalizeUpper_(src.reposo_sugerido) === "SI" ? "SI" : "NO",
    reposo_inicio: normalizeIsoDateValue_(src.reposo_inicio),
    reposo_fin: normalizeIsoDateValue_(src.reposo_fin)
  };
  const hasContent = !!(out.nombre_paciente || out.cedula || out.cuadro_clinico || out.diagnostico || out.lugar_trabajo || out.ocupacion || out.lugar_atencion || out.establecimiento || out.reposo_inicio || out.reposo_fin);
  return hasContent ? out : null;
}
__name(normalizeDiagnosisMedicalCertificateForStorage_, "normalizeDiagnosisMedicalCertificateForStorage_");
function normalizeDiagnosisMedicamentosForStorage_(items) {
  return (Array.isArray(items) ? items : []).map(function(item) {
    return {
      nombre: normalizeText_(item && item.nombre),
      cantidad: normalizeText_(item && item.cantidad),
      frecuencia: normalizeText_(item && item.frecuencia)
    };
  }).filter(function(item) {
    return !!(item.nombre || item.cantidad || item.frecuencia);
  });
}
__name(normalizeDiagnosisMedicamentosForStorage_, "normalizeDiagnosisMedicamentosForStorage_");
function normalizeDiagnosisImagesForStorage_(items) {
  const allowedSizes = { small: true, medium: true, large: true };
  return (Array.isArray(items) ? items : []).map(function(item, index) {
    const size = normalizeLower_(item && item.size);
    const rawIndex = Number(item && item.index);
    return {
      index: Number.isFinite(rawIndex) && rawIndex > 0 ? rawIndex : index + 1,
      title: normalizeText_(item && item.title),
      url: normalizeText_(item && (item.url || item.src)),
      fileId: normalizeText_(item && item.fileId),
      isNew: false,
      size: allowedSizes[size] ? size : "small"
    };
  }).filter(function(item) {
    return !!(item.url || item.fileId || item.title || item.index);
  });
}
__name(normalizeDiagnosisImagesForStorage_, "normalizeDiagnosisImagesForStorage_");
function extractDriveFileIdFromUrlWorker_(url) {
  const raw = normalizeText_(url);
  if (!raw) return "";
  if (!/^https?:\/\//i.test(raw)) {
    return /^[a-zA-Z0-9_-]{20,}$/.test(raw) ? raw : "";
  }
  if (!isDriveManagedUrlWorker_(raw)) return "";
  let match = raw.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return match[1];
  match = raw.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return match[1];
  return "";
}
__name(extractDriveFileIdFromUrlWorker_, "extractDriveFileIdFromUrlWorker_");
function reportContainsFileIdWorker_(report, fileId) {
  const target = normalizeText_(fileId);
  const row = report || {};
  if (!target) return false;
  if (extractDriveFileIdFromUrlWorker_(row.pdf_url || row.pdf_link) === target) return true;
  const payload = parseStoredDiagnosisJson_(row.datos_json);
  if (extractDriveFileIdFromUrlWorker_(payload.pdf_receta_link) === target) return true;
  if (extractDriveFileIdFromUrlWorker_(payload.pdf_certificado_link) === target) return true;
  if (extractDriveFileIdFromUrlWorker_(payload.pdf_externo_link) === target) return true;
  const list = Array.isArray(payload.drive_file_ids) ? payload.drive_file_ids : [];
  for (let i = 0; i < list.length; i++) {
    if (normalizeText_(list[i]) === target) return true;
  }
  const images = Array.isArray(payload.imagenes) ? payload.imagenes : [];
  for (let i = 0; i < images.length; i++) {
    if (normalizeText_(images[i] && images[i].fileId) === target) return true;
  }
  const externalItems = getDiagnosisExternalPdfItemsForWorker_(payload);
  for (let i = 0; i < externalItems.length; i++) {
    const current = externalItems[i] || {};
    if (normalizeText_(current.file_id || current.fileId) === target) return true;
    if (extractDriveFileIdFromUrlWorker_(current.url || current.pdf_externo_link) === target) return true;
  }
  return false;
}
__name(reportContainsFileIdWorker_, "reportContainsFileIdWorker_");
async function canSessionAccessLegacyDriveFile_(env, session, fileId) {
  if (!session || !session.ok) return false;
  if (session.role === "superadmin") return true;
  const lookup = await supabaseRest_(env, "get", "diagnosticos_archivos", {
    select: "id_paciente,datos_json,pdf_url"
  });
  if (!lookup.success) return false;
  const rows = Array.isArray(lookup.data) ? lookup.data : [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] || {};
    const rawJson = normalizeText_(row.datos_json);
    const rawPdf = normalizeText_(row.pdf_url);
    if (rawJson.indexOf(fileId) === -1 && rawPdf.indexOf(fileId) === -1) continue;
    if (!reportContainsFileIdWorker_(row, fileId)) continue;
    const access = await resolveAccessiblePatientForSession_(env, session, row.id_paciente);
    if (access.ok) return true;
  }
  return false;
}
__name(canSessionAccessLegacyDriveFile_, "canSessionAccessLegacyDriveFile_");
function normalizeDiagnosisExternalPdfsForStorage_(items) {
  return (Array.isArray(items) ? items : []).map(function(item, index) {
    const url = normalizeText_(item && (item.url || item.pdf_externo_link));
    const fileId = normalizeText_(item && (item.file_id || item.fileId)) || (isDriveManagedUrlWorker_(url) ? extractDriveFileIdFromUrlWorker_(url) : "");
    const name = normalizeText_(item && item.name);
    const label = normalizeText_(item && (item.label || item.display_name || item.nombre_visible || name)) || "Adjunto PDF " + (index + 1);
    const id = normalizeText_(item && item.id) || fileId || "external_pdf_" + (index + 1);
    return {
      id,
      label,
      url,
      file_id: fileId,
      name
    };
  }).filter(function(item) {
    return !!item.url;
  });
}
__name(normalizeDiagnosisExternalPdfsForStorage_, "normalizeDiagnosisExternalPdfsForStorage_");
function getLegacyDiagnosisExternalPdfsForStorage_(payload) {
  const data = payload && typeof payload === "object" ? payload : {};
  const legacyUrl = normalizeText_(data.pdf_externo_link);
  if (!legacyUrl) return [];
  const fileId = extractDriveFileIdFromUrlWorker_(legacyUrl);
  return [{
    id: fileId || "external_pdf_1",
    label: normalizeText_(data.pdf_externo_nombre || data.titulo_adjunto || "Adjunto PDF"),
    url: legacyUrl,
    file_id: fileId,
    name: ""
  }];
}
__name(getLegacyDiagnosisExternalPdfsForStorage_, "getLegacyDiagnosisExternalPdfsForStorage_");
function parseAllowedDurationMinutesWorker_(value) {
  const num = Number(String(value === void 0 || value === null ? "" : value).trim());
  const allowed = { 30: true, 60: true, 120: true, 180: true, 240: true, 300: true };
  return allowed[num] ? num : 0;
}
__name(parseAllowedDurationMinutesWorker_, "parseAllowedDurationMinutesWorker_");
function normalizeDurationMinutesWorker_(value) {
  return parseAllowedDurationMinutesWorker_(value) || 30;
}
__name(normalizeDurationMinutesWorker_, "normalizeDurationMinutesWorker_");
function durationLabelWorker_(value) {
  const mins = normalizeDurationMinutesWorker_(value);
  if (mins === 30) return "30 minutos";
  const hours = mins / 60;
  return hours + " hora" + (hours === 1 ? "" : "s");
}
__name(durationLabelWorker_, "durationLabelWorker_");
function normalizeServiceOutputRow_(row) {
  const service = row || {};
  let scope = normalizeUpper_(service.scope_visibility);
  if (scope !== "ALL" && scope !== "OWNER") scope = "ALL";
  const duration = normalizeDurationMinutesWorker_(service.duracion_minutos);
  return {
    id: normalizeText_(service.id),
    nombre_servicio: normalizeText_(service.nombre_servicio),
    recomendaciones: normalizeText_(service.recomendaciones),
    titulo_reporte: normalizeText_(service.titulo_reporte),
    scope_visibility: scope,
    owner_usuario: normalizeLower_(service.owner_usuario),
    duracion_minutos: duration,
    duracion_label: durationLabelWorker_(duration)
  };
}
__name(normalizeServiceOutputRow_, "normalizeServiceOutputRow_");
function normalizeTimeText_(value) {
  const raw = normalizeText_(value);
  if (!raw) return "";
  const match = raw.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
  if (match) return String(match[1]).padStart(2, "0") + ":" + match[2];
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;
  return String(parsed.getHours()).padStart(2, "0") + ":" + String(parsed.getMinutes()).padStart(2, "0");
}
__name(normalizeTimeText_, "normalizeTimeText_");
function compareAppointmentsAsc_(a, b) {
  const dateCmp = normalizeIsoDateValue_(a && a.fecha).localeCompare(normalizeIsoDateValue_(b && b.fecha));
  if (dateCmp !== 0) return dateCmp;
  return normalizeTimeText_(a && a.hora).localeCompare(normalizeTimeText_(b && b.hora));
}
__name(compareAppointmentsAsc_, "compareAppointmentsAsc_");
function compareDiagnosisDesc_(a, b) {
  const aTime = Date.parse(normalizeText_(a && a.fecha)) || 0;
  const bTime = Date.parse(normalizeText_(b && b.fecha)) || 0;
  return bTime - aTime;
}
__name(compareDiagnosisDesc_, "compareDiagnosisDesc_");
function compareEvolutionDesc_(a, b) {
  const aTime = Date.parse(normalizeText_(a && (a.fecha_consulta || a.fecha_actualizacion) || "")) || 0;
  const bTime = Date.parse(normalizeText_(b && (b.fecha_consulta || b.fecha_actualizacion) || "")) || 0;
  return bTime - aTime;
}
__name(compareEvolutionDesc_, "compareEvolutionDesc_");
function extractServiceNameFromAppointmentMotiveWorker_(motivo) {
  const raw = normalizeText_(motivo);
  if (!raw) return "";
  const marker = raw.indexOf(" | Nota:");
  if (marker > -1) return raw.substring(0, marker).trim();
  return raw;
}
__name(extractServiceNameFromAppointmentMotiveWorker_, "extractServiceNameFromAppointmentMotiveWorker_");
function timeTextToMinutesWorker_(value) {
  const raw = normalizeTimeText_(value);
  const match = raw.match(/^(\d{2}):(\d{2})$/);
  if (!match) return NaN;
  return Number(match[1]) * 60 + Number(match[2]);
}
__name(timeTextToMinutesWorker_, "timeTextToMinutesWorker_");
function minutesToTimeTextWorker_(minutes) {
  const total = Number(minutes);
  if (!Number.isFinite(total)) return "";
  const h = Math.floor(total / 60);
  const m = total % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}
__name(minutesToTimeTextWorker_, "minutesToTimeTextWorker_");
function getAppointmentHalfHourSlotCountWorker_(durationMinutes) {
  return Math.max(1, Math.round(normalizeDurationMinutesWorker_(durationMinutes) / 30));
}
__name(getAppointmentHalfHourSlotCountWorker_, "getAppointmentHalfHourSlotCountWorker_");
function buildHalfHourSlotsFromTimeWorker_(startTime, durationMinutes) {
  const startMinutes = timeTextToMinutesWorker_(startTime);
  if (!Number.isFinite(startMinutes)) return [];
  const count = getAppointmentHalfHourSlotCountWorker_(durationMinutes);
  const slots = [];
  for (let i = 0; i < count; i++) {
    slots.push(minutesToTimeTextWorker_(startMinutes + i * 30));
  }
  return slots;
}
__name(buildHalfHourSlotsFromTimeWorker_, "buildHalfHourSlotsFromTimeWorker_");
function getAvailableStartSlotsForDateWorker_(occupiedSlots, durationMinutes) {
  const occupiedMap = {};
  (occupiedSlots || []).forEach(function(slot) {
    occupiedMap[slot] = true;
  });
  const dayStart = timeTextToMinutesWorker_("09:00");
  const dayEnd = timeTextToMinutesWorker_("17:30");
  const lastStart = dayEnd - 30;
  const blockMinutes = getAppointmentHalfHourSlotCountWorker_(durationMinutes) * 30;
  const available = [];
  for (let start = dayStart; start <= lastStart; start += 30) {
    const end = start + blockMinutes;
    if (end > dayEnd) continue;
    let free = true;
    for (let cursor = start; cursor < end; cursor += 30) {
      if (occupiedMap[minutesToTimeTextWorker_(cursor)]) {
        free = false;
        break;
      }
    }
    if (free) available.push(minutesToTimeTextWorker_(start));
  }
  return available;
}
__name(getAvailableStartSlotsForDateWorker_, "getAvailableStartSlotsForDateWorker_");
async function resolveAppointmentDurationMinutesWorker_(env, appointmentRow) {
  const explicit = parseAllowedDurationMinutesWorker_(appointmentRow && appointmentRow.duracion_minutos);
  if (explicit) return explicit;
  const serviceName = extractServiceNameFromAppointmentMotiveWorker_(appointmentRow && appointmentRow.motivo);
  if (!serviceName) return 30;
  const service = await findSingleByField_(env, "servicios", "nombre_servicio", serviceName);
  return normalizeDurationMinutesWorker_(service && service.duracion_minutos);
}
__name(resolveAppointmentDurationMinutesWorker_, "resolveAppointmentDurationMinutesWorker_");
async function resolveRequestedAppointmentDurationWorker_(env, appointmentInput) {
  const input = appointmentInput || {};
  const explicit = parseAllowedDurationMinutesWorker_(input.duracion_minutos);
  if (explicit) return explicit;
  const serviceName = normalizeText_(input.servicio_nombre) || extractServiceNameFromAppointmentMotiveWorker_(input.motivo);
  if (!serviceName) return 30;
  const service = await findSingleByField_(env, "servicios", "nombre_servicio", serviceName);
  return normalizeDurationMinutesWorker_(service && service.duracion_minutos);
}
__name(resolveRequestedAppointmentDurationWorker_, "resolveRequestedAppointmentDurationWorker_");
async function getOccupiedSlotsForDateWorker_(env, appointments, options) {
  const excludeId = normalizeText_(options && options.excludeId);
  const occupied = {};
  for (const row of Array.isArray(appointments) ? appointments : []) {
    const rowId = normalizeText_(row && row.id_cita);
    if (excludeId && rowId === excludeId) continue;
    const duration = await resolveAppointmentDurationMinutesWorker_(env, row || {});
    const slots = buildHalfHourSlotsFromTimeWorker_(row && row.hora, duration);
    slots.forEach(function(slot) {
      occupied[slot] = true;
    });
  }
  return Object.keys(occupied).sort();
}
__name(getOccupiedSlotsForDateWorker_, "getOccupiedSlotsForDateWorker_");
async function isAppointmentRangeAvailableWorker_(env, dateString, startTime, durationMinutes, options) {
  const startMinutes = timeTextToMinutesWorker_(startTime);
  if (!Number.isFinite(startMinutes)) return false;
  const dayStart = timeTextToMinutesWorker_("09:00");
  const dayEnd = timeTextToMinutesWorker_("17:30");
  const blockMinutes = getAppointmentHalfHourSlotCountWorker_(durationMinutes) * 30;
  if (startMinutes < dayStart || startMinutes + blockMinutes > dayEnd) return false;
  const appointmentsRes = await supabaseRest_(env, "get", "citas", {
    select: "id_cita,fecha,hora,motivo,duracion_minutos",
    filters: { fecha: eq_(normalizeIsoDateValue_(dateString)) }
  });
  if (!appointmentsRes.success) return false;
  const occupiedList = await getOccupiedSlotsForDateWorker_(env, Array.isArray(appointmentsRes.data) ? appointmentsRes.data : [], options || {});
  const occupiedMap = {};
  occupiedList.forEach(function(slot) {
    occupiedMap[slot] = true;
  });
  const neededSlots = buildHalfHourSlotsFromTimeWorker_(startTime, durationMinutes);
  for (let i = 0; i < neededSlots.length; i++) {
    if (occupiedMap[neededSlots[i]]) return false;
  }
  return true;
}
__name(isAppointmentRangeAvailableWorker_, "isAppointmentRangeAvailableWorker_");
function normalizeIsoDateValue_(value) {
  if (!value) return "";
  const raw = normalizeText_(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  if (/^\d{4}-\d{2}-\d{2}T/.test(raw)) return raw.split("T")[0];
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toISOString().split("T")[0];
}
__name(normalizeIsoDateValue_, "normalizeIsoDateValue_");
function normalizeIsoDateTimeValue_(value) {
  if (!value) return "";
  const raw = normalizeText_(value);
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(raw)) {
    const parsed2 = new Date(raw);
    if (!Number.isNaN(parsed2.getTime())) return parsed2.toISOString();
    return raw;
  }
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  return raw;
}
__name(normalizeIsoDateTimeValue_, "normalizeIsoDateTimeValue_");
function normalizePromotionScope_(value) {
  return normalizeUpper_(value) === "ALL" ? "ALL" : "OWNER";
}
__name(normalizePromotionScope_, "normalizePromotionScope_");
function normalizePromotionRow_(row) {
  const item = row || {};
  return {
    id: normalizeText_(item.id || item.id_promo),
    mensaje: normalizeText_(item.mensaje),
    inicio: normalizeIsoDateValue_(item.inicio || item.fecha_inicio),
    fin: normalizeIsoDateValue_(item.fin || item.fecha_fin),
    scope_visibility: normalizePromotionScope_(item.scope_visibility),
    owner_usuario: normalizeLower_(item.owner_usuario),
    fecha_creacion: normalizeIsoDateValue_(item.fecha_creacion)
  };
}
__name(normalizePromotionRow_, "normalizePromotionRow_");
function sanitizeInfographicText_(value, maxLen) {
  const raw = normalizeText_(value);
  const limit = Number(maxLen || 0);
  if (!limit || raw.length <= limit) return raw;
  return raw.substring(0, limit);
}
__name(sanitizeInfographicText_, "sanitizeInfographicText_");
function normalizeExternalUrl_(value) {
  const raw = normalizeText_(value);
  if (!raw) return "";
  return /^https?:\/\//i.test(raw) ? raw : "";
}
__name(normalizeExternalUrl_, "normalizeExternalUrl_");
function isDataImageUrl_(value) {
  return /^data:image\/[a-zA-Z0-9.+-]+;base64,/.test(normalizeText_(value));
}
__name(isDataImageUrl_, "isDataImageUrl_");
function normalizeImageUrl_(value) {
  const raw = normalizeText_(value);
  if (!raw) return "";
  if (isDataImageUrl_(raw)) return raw;
  return normalizeExternalUrl_(raw);
}
__name(normalizeImageUrl_, "normalizeImageUrl_");
function normalizeInfographicRow_(row) {
  const item = row || {};
  return {
    id_post: normalizeText_(item.id_post),
    doctor_usuario: normalizeLower_(item.doctor_usuario),
    scope_visibility: normalizePromotionScope_(item.scope_visibility),
    activo: sheetFlagToBool_(item.activo),
    titulo: sanitizeInfographicText_(item.titulo, 120),
    mensaje: sanitizeInfographicText_(item.mensaje, 1600),
    imagen_url: normalizeImageUrl_(item.imagen_url),
    imagen_file_id: normalizeText_(item.imagen_file_id),
    show_btn_agenda: Object.prototype.hasOwnProperty.call(item, "show_btn_agenda") ? sheetFlagToBool_(item.show_btn_agenda) : true,
    btn_agenda_text: sanitizeInfographicText_(item.btn_agenda_text, 40),
    show_btn_info: Object.prototype.hasOwnProperty.call(item, "show_btn_info") ? sheetFlagToBool_(item.show_btn_info) : true,
    btn_info_text: sanitizeInfographicText_(item.btn_info_text, 40),
    btn_info_url: normalizeExternalUrl_(item.btn_info_url),
    show_btn_source: Object.prototype.hasOwnProperty.call(item, "show_btn_source") ? sheetFlagToBool_(item.show_btn_source) : false,
    btn_source_text: sanitizeInfographicText_(item.btn_source_text, 40),
    btn_source_url: normalizeExternalUrl_(item.btn_source_url),
    show_btn_contacto: Object.prototype.hasOwnProperty.call(item, "show_btn_contacto") ? sheetFlagToBool_(item.show_btn_contacto) : true,
    btn_contacto_text: sanitizeInfographicText_(item.btn_contacto_text, 40),
    fecha_creacion: normalizeIsoDateValue_(item.fecha_creacion),
    fecha_actualizacion: normalizeIsoDateValue_(item.fecha_actualizacion)
  };
}
__name(normalizeInfographicRow_, "normalizeInfographicRow_");
function normalizePhoneForWa_(phone) {
  let digits = normalizeDigits_(phone);
  if (!digits) return "";
  if (digits.length === 10 && digits.charAt(0) === "0") {
    digits = "593" + digits.substring(1);
  } else if (digits.length === 9) {
    digits = "593" + digits;
  }
  return digits;
}
__name(normalizePhoneForWa_, "normalizePhoneForWa_");
function boolToSheetFlag_(value) {
  if (value === true || value === 1) return "SI";
  const raw = normalizeLower_(value);
  if (raw === "si" || raw === "true" || raw === "1" || raw === "yes" || raw === "on") return "SI";
  return "NO";
}
__name(boolToSheetFlag_, "boolToSheetFlag_");
function sheetFlagToBool_(value) {
  const raw = normalizeLower_(value);
  return raw === "si" || raw === "true" || raw === "1" || raw === "yes" || raw === "on";
}
__name(sheetFlagToBool_, "sheetFlagToBool_");
function isVacationCurrentlyActive_(record) {
  if (!record || !sheetFlagToBool_(record.activo)) return false;
  const until = normalizeIsoDateValue_(record.fecha_hasta);
  if (!until) return false;
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return today <= until;
}
__name(isVacationCurrentlyActive_, "isVacationCurrentlyActive_");
function buildVacationResponse_(doctorUser, record) {
  const until = normalizeIsoDateValue_(record && record.fecha_hasta);
  const title = normalizeText_(record && record.titulo || "") || "Aviso importante";
  const message = normalizeText_(record && record.mensaje || "") || "Tu medico se encuentra temporalmente fuera del consultorio.";
  return {
    success: true,
    doctor_usuario: normalizeLower_(doctorUser || record && record.doctor_usuario || ""),
    active: isVacationCurrentlyActive_(record),
    fecha_hasta: until,
    titulo: title,
    mensaje: message,
    fecha_actualizacion: normalizeIsoDateValue_(record && record.fecha_actualizacion),
    block_message: "No se pueden agendar citas hasta " + (until || "nuevo aviso") + "."
  };
}
__name(buildVacationResponse_, "buildVacationResponse_");
function normalizePath_(value) {
  const raw = normalizeText_(value);
  if (!raw) return "/";
  return raw.startsWith("/") ? raw : "/" + raw;
}
__name(normalizePath_, "normalizePath_");
function randomBase64Url_(byteLength) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return bytesToBase64Url_(bytes);
}
__name(randomBase64Url_, "randomBase64Url_");
function randomHex_(byteLength) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, byteLength * 2);
}
__name(randomHex_, "randomHex_");
async function sha256Base64Url_(value) {
  const data = new TextEncoder().encode(String(value || ""));
  const digest = await crypto.subtle.digest("SHA-256", data);
  return bytesToBase64Url_(new Uint8Array(digest));
}
__name(sha256Base64Url_, "sha256Base64Url_");
function bytesToBase64Url_(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
__name(bytesToBase64Url_, "bytesToBase64Url_");
function maskUrlForHealth_(url) {
  try {
    const parsed = new URL(url);
    return parsed.origin + parsed.pathname;
  } catch (error) {
    return "";
  }
}
__name(maskUrlForHealth_, "maskUrlForHealth_");
function errorResult_(status, message) {
  return {
    status: status || 500,
    payload: {
      success: false,
      message: message || "Error del Worker."
    }
  };
}
__name(errorResult_, "errorResult_");
function toErrorMessage(error) {
  if (!error) return "Error desconocido.";
  if (typeof error === "string") return error;
  if (error instanceof Error && error.message) return error.message;
  try {
    return JSON.stringify(error);
  } catch (jsonError) {
    return String(error);
  }
}
__name(toErrorMessage, "toErrorMessage");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
