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
          key: '1',
          sublinks: true,
          links: [
            {
              title: 'ระยะสั้น',
              link: '#ระยะสั้น',
              key: '1',
              sublinks: true,
              links: [
                {
                  title: 'มีด',
                  link: '#มีด',
                  key: '1',
                  sublinks: false,
                },
                {
                  title: 'ดาบ',
                  link: '#',
                  key: '2',
                  sublinks: false,
                },
                {
                  title: 'กระบี่',
                  link: '#',
                  key: '3',
                  sublinks: false,
                },
              ]
            },
            {
              title: 'ระยะยาว',
              link: '#ระยะยาว',
              key: '2',
              sublinks: true,
              links: [
                {
                  title: 'หอก',
                  link: '#หอก',
                  key: '1',
                  sublinks: false,
                },
                {
                  title: 'ทวน',
                  link: '#ทวน',
                  key: '2',
                  sublinks: false,
                },
                {
                  title: 'ง้าว',
                  key: '3',
                  link: '#ง้าว',
                  sublinks: false,
                },
              ]
            },
          ]
        },
        { title: 'อาวุธปืน',
          link: '#ปืน',
          key: '2',
          sublinks: true,
          links: [
            {
              title: 'ปืนสั้น',
              link: '#ปืนสั้น',
              key: '1',
              sublinks: false,
            },
            {
              title: 'ปืนยาว',
              link: '#ปืนยาว',
              key: '2',
              sublinks: false,
            },
          ]
        },
        { title: 'วัตถุระเบิด',
          link: '#ปืน',
          key: '3',
          sublinks: true,
          links: [
            {
              title: 'กับระเบิด',
              link: '#กับระเบิด',
              key: '1',
              sublinks: false,
            },
            {
              title: 'ระเบิดมือ',
              link: '#ระเบิดมือ',
              key: '2',
              sublinks: true,
              links: [
                {
                  title: 'มือหนึ่ง',
                  link: '#มือหนึ่ง',
                  key: '1',
                  sublinks: false,
                },
                {
                  title: 'มือสอง',
                  link: '#มือสอง',
                  key: '2',
                  sublinks: false,
                },
              ]
            },
            {
              title: 'เครื่องยิงจรวด',
              link: '#เครื่องยิงจรวด',
              key: '3',
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
          title: 'จัดการรูปภาพ',
          link: '',
          key: '1',
          sublinks: true,
          links: [
            {
              title: 'Resize',
              link: '/imgResize',
              key: '1',
              sublinks: false,
            },
          ]
        },
        {
          title: 'รับผลิต',
          link: '#รับผลิต',
          key: '2',
          sublinks: true,
          links: [
            {
              title: 'สมุนไพร',
              link: '#สมุนไพร',
              key: '1',
              sublinks: false,
            },
            {
              title: 'เคมี',
              link: '#เคมี',
              key: '2',
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