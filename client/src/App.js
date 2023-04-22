"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Table_1 = require("@mui/material/Table");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var Paper_1 = require("@mui/material/Paper");
function BasicTable() {
    var _this = this;
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    var getData = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, jsonData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api.jsonbin.io/v3/b/64409cc3c0e7653a05a80169")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    setData(jsonData.record);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        getData();
    }, []);
    return (<TableContainer_1.default sx={{ padding: 3, maxWidth: 1000, ml: 30, mr: 30, mt: 30, mb: 20 }} component={Paper_1.default}>
      <Table_1.default sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead_1.default>
          <TableRow_1.default>
            <TableCell_1.default>Universities</TableCell_1.default>
            <TableCell_1.default>Location</TableCell_1.default>
            <TableCell_1.default>Students</TableCell_1.default>
            <TableCell_1.default>Undergraduates</TableCell_1.default>
            <TableCell_1.default>Postgraduates</TableCell_1.default>
          </TableRow_1.default>
        </TableHead_1.default>
        <TableBody_1.default>
          {data.map(function (data) { return (<TableRow_1.default key={data.universityName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell_1.default component="th" scope="row">
                {data.universityName}
              </TableCell_1.default>
              <TableCell_1.default>{data.geographicalData.location} </TableCell_1.default>
              <TableCell_1.default>{data.populationData.Students}</TableCell_1.default>
              <TableCell_1.default>{data.populationData.Undergraduates} </TableCell_1.default>
              <TableCell_1.default>{data.populationData.Postgraduates}</TableCell_1.default>
            </TableRow_1.default>); })}
        </TableBody_1.default>
      </Table_1.default>
    </TableContainer_1.default>);
}
export default BasicTable;
