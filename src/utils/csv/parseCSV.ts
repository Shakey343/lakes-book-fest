type CSVRow = Record<string, string>;

const parseCSV = (csvText: string): CSVRow[] => {
  const rows = csvText.trim().split(/\r?\n/);

  if (rows.length === 0) return [];

  const headers = rows[0].split(",").map((h) => h.trim());
  const data: CSVRow[] = [];

  for (let i = 1; i < rows.length; i++) {
    if (!rows[i]) continue;

    const rowData = rows[i].split(",");
    const rowObject: CSVRow = {};

    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j]?.trim() ?? "";
    }

    data.push(rowObject);
  }

  return data.sort((a, b) => {
    const dateA = new Date(a["DATE"]);
    const dateB = new Date(b["DATE"]);
    return dateA.getTime() - dateB.getTime();
  });
};

export default parseCSV;
