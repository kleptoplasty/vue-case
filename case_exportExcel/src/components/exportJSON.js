import { export_json_to_excel } from '@/vendor/JsonToExcel';

function formatJson(filterVal, jsonData) {
  return jsonData.map((v) => filterVal.map((j) => v[j]));
}

export default class ExportJSON {
  static loadExcel(tableColumns, list, title) {
    const filterVal = [];
    const tHeader = [];
    for (const key in tableColumns) {
      if (key) {
        filterVal.push(key);
        tHeader.push(tableColumns[key]);
      }
    }
    require.ensure([], () => {
      const data = formatJson(filterVal, list);
      export_json_to_excel(tHeader, data, title);
    });
  }
}
