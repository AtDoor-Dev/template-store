import jsonData from './data.json';

const createRasiTable = (rasiKatam) => {
  return [
    [
      { value: '' },
      { value: "Me" },
      { value: '' },
      { value: '' }
    ],
    [
      { value: '' },
      { value: <b>Rasi</b>, colspan: 2, rowspan: 2 },
      { value: "Ve" }
    ],
    [
      { value: ['Ma', 'Me'] },
      { value: "Mo" }
    ],
    [
      { value: '' },
      { value: '' },
      { value: ['Ma', 'Me'] },
      { value: '' }
    ]
  ];
};

const createNavamsaTable = (navamsaKatam) => {
  return [
    [
      { value: "Ka" },
      { value: '' },
      { value: '' },
      { value: '' }
    ],
    [
      { value: "ve" },
      { value: <b>Navasam</b>, colspan: 2, rowspan: 2 },
      { value: '' }
    ],
    [
      { value: ['Mo', 'Ju'] },
      { value: '' }
    ],
    [
      { value: '' },
      { value: ['Ma', 'Me'] },
      { value: '' },
      { value: "Sa" }
    ]
  ];
};

const table1 = createRasiTable(jsonData.rasiKatam);
const table2 = createNavamsaTable(jsonData.navamsaKatam);

export { table1, table2 };
