var config = {
  style: "mapbox://styles/jorjone90/clkgpfa8o006t01pbct1ye32p",
  accessToken:
    "pk.eyJ1Ijoiam9yam9uZTkwIiwiYSI6ImNrZ3R6M2FvdTBwbmwycXBibGRqM2w2enYifQ.BxjvFSGqefuC9yFCrXC-nQ",
  showMarkers: false,
  theme: "light",
  title: "",
  subtitle: "",
  intro: "",
  byline: "",
  footer:
    'Source: Consultancy reports, <a href="https://maps.tbilisi.gov.ge/">interactive map</a> by Tbilisi Municipality City Hall, media reports and public appearances, <a href="https://zaxis.ge/blog-ka-visual/urban-mobility-tbilisi">Z.axis</a>',
  chapters: [
    {
      id: "intro",
      alignment: "right",
      title: "",
      image: "",
      description:
        '<p class="intro">The map depicts the gradual installation of bus lanes on Tbilisi&#8217;s streets since City Hall&#8217;s new administration announced a definitive turn in transport planning approach in July 2018. It shows the ebbs and flows of the inconsistent process and the remainder of the road before the ten transit corridors traversing some 110 kilometres are all finally there.</p><p class="intro" style="font-size: 12px;"><b>NOTE:</b></p><p class="intro" style="font-size: 11px;"><i><b>Hover over a specific lane to retrieve the date, location and approximate length of the installation. Scroll up and down or zoom in and out to chart progress or view more detailed images of the network.</b></i></p>',
      location: {
        center: [44.850, 41.733],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0,
        },
      ],
    },
    {
      id: "bus-lanes-2018",
      alignment: "right",
      title: "December, 2018",
      image: "",
      description:
        'At the end of 2018, the bus lane network covered around <span style="color: #9a0000;"><strong>10 kilometers</strong></span>. Nearly half of this network&#8217;s length was installed well before 2018.',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2018",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2018",
          opacity: 0,
        },
      ],
    },
    {
      id: "bus-lanes-2019",
      alignment: "right",
      title: "December, 2019",
      image: "",
      description:
        'Only a <span style="color: #9a0000;"><strong>675 meter-strech</strong></span> was added to the network.',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2019",
          opacity: 1,
        },
        {
          layer: "tbs-bus-lanes-2019a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2019",
          opacity: 0,
        },
        {
          layer: "tbs-bus-lanes-2019a",
          opacity: 0,
        },
      ],
    },
    {
      id: "bus-lanes-2020a",
      alignment: "right",
      title: "December, 2020",
      image: "",
      description:
        'In 2020, City Hall added <span style="color: #9a0000;"><strong>18 kilometers</strong></span> of lanes to its network - the biggest annual increase. But the year also saw controversies. International consultants <a href="https://cdia.asia/wp-content/uploads/2023/03/GEO_TbilisiTransportDepartmentAdvisoryProject_Dec2020.pdf">noted</a> that before the 2020 parliamentary elections transport authorities deviated from their plan to create a continuous bus lane on a vital transit route. Instead, they decided to sporadically place bus lanes on wide streets without parking issues - a decision that highlights persistent short-term thinking hindering reforms.',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2020",
          opacity: 1,
        },
        {
          layer: "tbs-bus-lanes-2020a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2020",
          opacity: 0,
        },
        {
          layer: "tbs-bus-lanes-2020a",
          opacity: 0,
        },
      ],
    },
    //კოდის ეს ნაწილი გათიშულია. ამ chapter გასააქტიურებლად უბრალოდ წაშალეთ მის წინ არსებული დროფებით//
    //        {
    //            id: 'bus-lanes-2020b',
    //            alignment: 'right',
    //            title: 'December, 2020',
    //            image: '',
    //            description: 'In total, the network grew by approximately <span style="color: #9a0000;"><strong>18 km</strong></span> throughout 2020.',
    //            location: {
    //                center: [44.809, 41.733],
    //                zoom: 11.15,
    //                pitch: 0.00,
    //                bearing: 0.00
    //            },
    //            onChapterEnter: [
    //                {
    //                    layer: 'tbs-bus-lanes-2020',
    //                    opacity: 1
    //                }
    //            ],
    //            onChapterExit: [
    //                {
    //                    layer: 'tbs-bus-lanes-2020',
    //                    opacity: 0
    //                }
    //            ]
    //        },
    {
      id: "bus-lanes-2021",
      alignment: "right",
      title: "December, 2021",
      image: "",
      description:
        'Only <span style="color: #9a0000;"><strong>5 km</strong></span> of bus lanes was added throughout 2021. Although City Hall has frequently cited the Covid-19 pandemic and accompanying challenges as a reason for the lag in progress, experts <a href="https://netgazeti.ge/opinion/638653/">argue</a> that the pandemic, in fact, presented a missed opportunity for implementing bus priority measures, as the short-term thinking is constantly interfering with the reforms.',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2021",
          opacity: 1,
        },
        {
          layer: "tbs-bus-lanes-2021a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2021",
          opacity: 0,
        },
        {
          layer: "tbs-bus-lanes-2021a",
          opacity: 0,
        },
      ],
    },
    {
      id: "bus-lanes-2022a",
      alignment: "right",
      title: "December, 2022",
      image: "",
      description:
        'In 2022, a total of <span style="color: #9a0000;"><strong>14.5 km</strong></span> of bus lanes was added to the network.',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2022",
          opacity: 1,
        },
        {
          layer: "tbs-bus-lanes-2022a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2022",
          opacity: 0,
        },
        {
          layer: "tbs-bus-lanes-2022a",
          opacity: 0,
        },
      ],
    },
    {
      id: "bus-lanes-2023",
      alignment: "right",
      title: "July, 2023",
      image: "",
      description:
        'This year the bus lane network in Tbilisi has increased with an additional span of <span style="color: #9a0000;"><strong>13.5 km</strong></span>. Five years after making sustainable mobility a priority, City Hall has installed just over <b>55% (61 km)</b> of the designated bus lanes and in a way that is extremely fragmented, forming none of the proposed 10 arterial bus corridors to date. ',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2023",
          opacity: 1,
        },
        {
          layer: "tbs-bus-lanes-2023a",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2023",
          opacity: 0,
        },
        {
          layer: "tbs-bus-lanes-2023a",
          opacity: 0,
        },
      ],
    },
    //კოდის ეს ნაწილი გათიშულია. ამ chapter გასააქტიურებლად უბრალოდ წაშალეთ მის წინ არსებული დროფებით//
    //       {
    //           id: 'bus-lanes-future-a',
    //           alignment: 'right',
    //           title: 'Future Expansion',
    //           image: '',
    //           description: 'Currently, a street redesign project is underway at <u>Akaki Tsereteli avenue</u>. It is expected to be <a href="https://www.radiotavisupleba.ge/a/32371925.html">finished</a> in early 2024.',
    //           location: {
    //               center: [44.785592, 41.735011],
    //               zoom: 13.90,
    //               pitch: 0.00,
    //               bearing: 68.00
    //           },
    //           onChapterEnter: [
    //               {
    //                   layer: 'annotation-tsereteli',
    //                   opacity: 1
    //               },
    //               {
    //                   layer: 'bus-lanes-future-tsereteli',
    //                   opacity: 1
    //               },
    //               {
    //                   layer: 'mapbox-satellite',
    //                   opacity: 1
    //               }

    //            ],
    //            onChapterExit: [
    //                {
    //                    layer: 'annotation-tsereteli',
    //                    opacity: 0
    //                },
    //                {
    //                    layer: 'bus-lanes-future-tsereteli',
    //                    opacity: 0
    //                },
    //                {
    //                    layer: 'mapbox-satellite',
    //                    opacity: 0
    //                },
    //            ]
    //        },
    {
      id: "bus-lanes-future-b",
      alignment: "right",
      title: "Future Expansion",
      image: "",
      description:
        'The complete bus lane network is set to connect all the missing links to cover a system of some <span style="color: #9a0000;"><strong>110 km</strong></span> long.<p><div class="legend-scale"><ul class="legend-labels"><li><span style="background:#cd3333;"></span>Existing Routes</li><li><span style="background:#0e5c5d;"></span>Planned Routes</li></ul></div><p>',
      location: {
        center: [44.809, 41.733],
        zoom: 11.15,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "tbs-bus-lanes-2023-full",
          opacity: 1,
        },
        {
          layer: "bus-lanes-future-all",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "tbs-bus-lanes-2023-full",
          opacity: 0,
        },
        {
          layer: "bus-lanes-future-all",
          opacity: 0,
        },
      ],
    },
  ],
};
