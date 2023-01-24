export const links = [
    { title: 'หน้าแรก',
      link: '/',
      sublinks: false,
    },
    { title: 'สินค้า',
      link: '#product',
      sublinks: true,
      links: [
        { title: 'อาวุธมีคม',
          link: '#อาวุธมีคม',
          sublinks: true,
          links: [
            {
              title: 'ระยะสั้น',
              link: '#ระยะสั้น',
              sublinks: true,
              links: [
                {
                  title: 'มีด',
                  link: '#มีด',
                  sublinks: false,
                },
                {
                  title: 'ดาบ',
                  link: '#',
                  sublinks: false,
                },
                {
                  title: 'กระบี่',
                  link: '#',
                  sublinks: false,
                },
              ]
            },
            {
              title: 'ระยะยาว',
              link: '#ระยะยาว',
              sublinks: true,
              links: [
                {
                  title: 'หอก',
                  link: '#หอก',
                  sublinks: false,
                },
                {
                  title: 'ทวน',
                  link: '#ทวน',
                  sublinks: false,
                },
                {
                  title: 'ง้าว',
                  link: '#ง้าว',
                  sublinks: false,
                },
              ]
            },
          ]
        },
        { title: 'อาวุธปืน',
          link: '#ปืน',
          sublinks: true,
          links: [
            {
              title: 'ปืนสั้น',
              link: '#ปืนสั้น',
              sublinks: false,
            },
            {
              title: 'ปืนยาว',
              link: '#ปืนยาว',
              sublinks: false,
            },
          ]
        },
        { title: 'วัตถุระเบิด',
          link: '#ปืน',
          sublinks: true,
          links: [
            {
              title: 'กับระเบิด',
              link: '#กับระเบิด',
              sublinks: false,
            },
            {
              title: 'ระเบิดมือ',
              link: '#ระเบิดมือ',
              sublinks: true,
              links: [
                {
                  title: 'มือหนึ่ง',
                  link: '#มือหนึ่ง',
                  sublinks: false,
                },
                {
                  title: 'มือสอง',
                  link: '#มือสอง',
                  sublinks: false,
                },
              ]
            },
            {
              title: 'เครื่องยิงจรวด',
              link: '#เครื่องยิงจรวด',
              sublinks: false,
            },
          ]
        },
      ]
    },
    { title: 'บริการ',
      link: '#service',
      sublinks: true,
      links: [
        {
          title: 'รับเดินจงกรม',
          link: '#เดิน',
          sublinks: false,
        },
        {
          title: 'รับผลิต',
          link: '#รับผลิต',
          sublinks: true,
          links: [
            {
              title: 'สมุนไพร',
              link: '#สมุนไพร',
              sublinks: false,
            },
            {
              title: 'เคมี',
              link: '#เคมี',
              sublinks: false,
            },
          ]
        },
      ]
    },
    { title: 'Contact',
      link: '/',
      sublinks: false,
    },
    { title: 'About',
      link: '/',
      sublinks: false,
    },
  ]