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
        '<p class="intro">The map depicts the gradual installation of bus lanes -- a critical priority for enhancing the efficiency of public transportation in Tbilisi -- after City Hall announced a U-turn in its approach to transportation planning in July 2018.</p><p class="intro" style="font-size: 12px;"><b>NOTE:</b></p><p class="intro" style="font-size: 11px;"><i><b>Hover over a specific lane to retrieve the date, location and approximate length of the installation. Scroll up and down or zoom in and out to chart progress or view more detailed images of the network.</b></i></p>',
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
      title: "December 2018",
      image: "",
      description:
        'At the end of 2018, the bus lane network covered around <span style="color: #9a0000;"><strong>10 kilometres</strong></span>. However, nearly half the length of the network had been installed well before 2018.',
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
      title: "December 2019",
      image: "",
      description:
        'Only a <span style="color: #9a0000;"><strong>675-metre stretch</strong></span> was added to the network. Comprehensive street redesign projects commenced on Chavchavadze Avenue and in the suburb of Gldani.',
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
      title: "December 2020",
      image: "",
      description:
        'City Hall added <span style="color: #9a0000;"><strong>18 kilometres</strong></span> of lanes to its network, the largest annual increase in a single year. But with parliamentary elections slated for late October 2020, political considerations started to affect the process. <a href="https://cdia.asia/wp-content/uploads/2023/03/GEO_TbilisiTransportDepartmentAdvisoryProject_Dec2020.pdf">According to a group of international consultants,</a> who advised City Hall and its Transport and Urban Development Agency (TUDA), even though the COVID-19 pandemic slowed implementation, between July 2020 and the start of the election campaign around early September, several bus lanes were either fully constructed or in the process of being constructed. In the run-up to the vote, however, transport authorities abandoned their initial commitment to provide a continuous bus lane on a key transit corridor to speed up buses on at least one arterial route. As the consultants noted, ‘the order of priorities was amended to focus on quick wins until after the election (for example, on wider streets with no parking problems)’.',
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
      title: "December 2021",
      image: "",
      description:
        'After the parliamentary elections, the city braced itself for a local self-government vote in early October 2021. This had a knock-on effect on the expansion of the bus network, resulting in a mere <span style="color: #9a0000;"><strong>5-kilometre</strong></span> extension that year. Although City Hall has frequently cited the Covid-19 pandemic and accompanying challenges as a reason for the lack of progress, experts <a href="https://netgazeti.ge/opinion/638653/">argue</a> that the pandemic, in fact, presented a missed opportunity for implementing bus priority measures.',
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
      title: "December 2022",
      image: "",
      description:
        'The process regained momentum, with <span style="color: #9a0000;"><strong>14.5 kilometres</strong></span> of bus lanes added to the network.',
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
      title: "July 2023",
      image: "",
      description:
        'The bus lane network in Tbilisi increased by an additional <span style="color: #9a0000;"><strong>13.5 kilometres</strong></span>.',
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
        'Five years after declaring public transport a priority, City Hall has only managed to install just over <b>55 per cent (61 kilometres)</b> of the designated bus lanes. Overall, implementation of the project has been extremely fragmented and none of the proposed 10 arterial bus corridors have been established. Once complete, the TBT network should connect the fragmented lanes and cover some <span style="color: #9a0000;"><strong>110 kilometres</strong></span>. But if the process continues at the usual speed, it will take four more years before the whole network is finally established. In addition, recent official permission granted to certain categories of taxis to use bus lanes further reduces the speed of public transport and undermines the integrity of the bus lane system, not to mention the entire transport reform.<p><div class="legend-scale"><ul class="legend-labels"><li><span style="background:#cd3333;"></span>Existing Routes</li><li><span style="background:#0e5c5d;"></span>Planned Routes</li></ul></div><p>',
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
