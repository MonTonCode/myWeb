export const links = [
    { title: 'หน้าแรก',
      link: '/',
      key: '1',
      sublinks: false,
    },
    { title: 'สินค้า',
      link: '#product',
      key: '2',
      sublinks: true,
      links: [
        { title: 'อาวุธมีคม',
          link: '#อาวุธมีคม',
          key: '21',
          sublinks: true,
          links: [
            {
              title: 'ระยะสั้น',
              link: '#ระยะสั้น',
              key: '211',
              sublinks: true,
              links: [
                {
                  title: 'มีด',
                  link: '#มีด',
                  key: '2111',
                  sublinks: false,
                },
                {
                  title: 'ดาบ',
                  link: '#',
                  key: '2112',
                  sublinks: false,
                },
                {
                  title: 'กระบี่',
                  link: '#',
                  key: '2113',
                  sublinks: false,
                },
              ]
            },
            {
              title: 'ระยะยาว',
              link: '#ระยะยาว',
              key: '212',
              sublinks: true,
              links: [
                {
                  title: 'หอก',
                  link: '#หอก',
                  key: '2121',
                  sublinks: false,
                },
                {
                  title: 'ทวน',
                  link: '#ทวน',
                  key: '2122',
                  sublinks: false,
                },
                {
                  title: 'ง้าว',
                  key: '2123',
                  link: '#ง้าว',
                  sublinks: false,
                },
              ]
            },
          ]
        },
        { title: 'อาวุธปืน',
          link: '#ปืน',
          key: '22',
          sublinks: true,
          links: [
            {
              title: 'ปืนสั้น',
              link: '#ปืนสั้น',
              key: '221',
              sublinks: false,
            },
            {
              title: 'ปืนยาว',
              link: '#ปืนยาว',
              key: '222',
              sublinks: false,
            },
          ]
        },
        { title: 'วัตถุระเบิด',
          link: '#ปืน',
          key: '23',
          sublinks: true,
          links: [
            {
              title: 'กับระเบิด',
              link: '#กับระเบิด',
              key: '231',
              sublinks: false,
            },
            {
              title: 'ระเบิดมือ',
              link: '#ระเบิดมือ',
              key: '232',
              sublinks: true,
              links: [
                {
                  title: 'มือหนึ่ง',
                  link: '#มือหนึ่ง',
                  key: '2321',
                  sublinks: false,
                },
                {
                  title: 'มือสอง',
                  link: '#มือสอง',
                  key: '2322',
                  sublinks: false,
                },
              ]
            },
            {
              title: 'เครื่องยิงจรวด',
              link: '#เครื่องยิงจรวด',
              key: '233',
              sublinks: false,
            },
          ]
        },
      ]
    },
    { title: 'บริการ',
      link: '#service',
      key: '3',
      sublinks: true,
      links: [
        {
          title: 'รับเดินจงกรม',
          link: '#เดิน',
          key: '31',
          sublinks: false,
        },
        {
          title: 'รับผลิต',
          link: '#รับผลิต',
          key: '32',
          sublinks: true,
          links: [
            {
              title: 'สมุนไพร',
              link: '#สมุนไพร',
              key: '321',
              sublinks: false,
            },
            {
              title: 'เคมี',
              link: '#เคมี',
              key: '322',
              sublinks: false,
            },
          ]
        },
      ]
    },
    { title: 'Contact',
      link: '/',
      key: '4',
      sublinks: false,
    },
    { title: 'About',
      link: '/',
      key: '5',
      sublinks: false,
    },
  ]