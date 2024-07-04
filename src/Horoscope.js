import React, { useEffect, useState } from 'react';
import Handlebars from 'handlebars';

Handlebars.registerHelper('backgroundImageClass', function (isEnabled) {
  return isEnabled ? 'enabled-bg' : 'disabled-bg';
});

const Horoscope = ({ data, isEnabled, imageSrc }) => {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch('/templates/template-one.handlebars')
      .then(response => response.text())
      .then(templateSource => {
        const compiledTemplate = Handlebars.compile(templateSource);
        setTemplate(() => compiledTemplate);
      });
  }, []);

  const table1 = [
    [
      { value: '' },
      { value: data.Tablevalue.Me },
      { value: '' },
      { value: '' }
    ],
    [
      { value: '' },
      { value: data.Tablevalue.rasi, colspan: 2, rowspan: 2 },
      { value: data.Tablevalue.Ve }
    ],
    [
      { value: `${data.Tablevalue.Ma}<br/>${data.Tablevalue.Me}` },
      { value: data.Tablevalue.Mo }
    ],
    [
      { value: '' },
      { value: '' },
      { value: `${data.Tablevalue.Ma}<br/>${data.Tablevalue.Me}` },
      { value: '' }
    ]
  ];

  const table2 = [
    [
      { value: data.Tablevalue.Ka },
      { value: '' },
      { value: '' },
      { value: '' }
    ],
    [
      { value: data.Tablevalue.ve },
      { value: data.Tablevalue.navasam, colspan: 2, rowspan: 2 },
      { value: '' }
    ],
    [
      { value: `${data.Tablevalue.Mo}<br/>${data.Tablevalue.Ju}` },
      { value: '' }
    ],
    [
      { value: '' },
      { value: `${data.Tablevalue.Ma}<br/>${data.Tablevalue.Me}` },
      { value: '' },
      { value: data.Tablevalue.Sa }
    ]
  ];

  if (!template) {
    return <div>Loading template...</div>;
  }

  const htmlContent = template({ ...data, isEnabled, table1, table2, imageSrc });

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Horoscope;
