const dashboard = {				
	"2026-06": {			
		banner:[		
			{	
				title: "Total Energy Used",
				data: 666,
				units: "MWh",
				icon: "icon1.png",
				text: "+1.3% vs May 2026"
			},	
			{	
				title: "Total CO2 Emissions",
				data: 139,
				units: "tCO<sub>2</sub>e",
				icon: "icon2.png",
				text: "+1.3% vs May 2026"
			},	
			{	
				title: "Cost",
				data: 89634,
				units: "£",
				icon: "icon3.png",
				text: "+8% vs May 2026"
			},	
			{	
				title: "LTHW Produced",
				data: 259,
				units: "MWh",
				icon: "icon4.png",
				text: "-19.9% vs May 2026"
			},	
			{	
				title: "CHW Produced",
				data: 687,
				units: "MWh",
				icon: "icon5.png",
				text: "+45% vs May 2026"
			}	
		],		
		energyTrend: {		
			labels: [	
				1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30
			],	
			energy: [	
				20863,18624,20475,19950,21534,19702,18933,24116,20570,20461,19575,20837,19443,23390,20526,22446,24924,23443,23759,22785,25310,25280,27234,27714,27137,28261,22154,24832,22200,21878
			]	
		},		
		productionTrend: {		
			labels: [	
				1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30
			],	
			lthw: [	
				8250,8750,8920,8790,9390,9410,8420,9380,10310,10270,10420,9200,9030,9400,8770,8690,8810,8240,8460,8140,7890,8250,8180,8070,7650,7730,7190,8160,8250,8540
			],	
			chw:[	
				20739,18400,16977,16164,14944,14842,14741,14436,14232,13012,12606,15554,15351,16400,16900,19800,21600,22900,27100,26800,29400,29200,32600,37600,37400,35300,33700,29900,26100,25300
			]	
		},
		energySource: {
			title: "Energy Use by Source (MWh)",
			datasets: [
        {
           label: "Gas",
           value: 425,
           colour: "#4f78c4"
        },
        {
           label: "Electricity",
           value: 242,
           colour: "#19a4e3"
        }
			]
		},
		productionType: {
			title: "Production by Type (MWh)",
			datasets: [
        {
           label: "CHW",
           value: 687,
           colour: "#4f78c4"
        },
        {
           label: "LTHW",
           value: 259,
           colour: "#19a4e3"
        },
				{
           label: "Electricity",
           value: 78,
           colour: "#113782"
        }
			]
		},
		performanceIndicators: [
			{
        title: "Energy Efficiency",
        icon: "kpi1.png",
		prefix: "",
        data: 1.51,
        units: "kWh/kWh",
        text: "+1.3% vs May"
			},
			{
        title: "Carbon Intensity",
        icon: "kpi2.png",
		prefix: "",
        data: 0.14,
        units: "kg CO₂/kWh",
        text: "-16.4% vs May"
			},
			{
        title: "Cost Recovery",
        icon: "kpi3.png",
		prefix: "£",
        data: 107320,
        units: "",
        text: "+120% of Costs"
			}
		]
	},			
	"2026-07": {			
		 banner:[		
			{	
				title: "Total Energy Used",
				data: 688,
				units: "MWh",
				icon: "icon1.png",
				text: "-1.3% vs June 2026"
			},	
			{	
				title: "Total CO2 Emissions",
				data: 139,
				units: "tCO<sub>2</sub>e",
				icon: "icon2.png",
				text: "+1.3% vs June 2026"
			},	
			{	
				title: "Cost",
				data: 189634,
				units: "£",
				icon: "icon3.png",
				text: "+8% vs June 2026"
			},	
			{	
				title: "LTHW Produced",
				data: 259,
				units: "MWh",
				icon: "icon4.png",
				text: "-19.9% vs June 2026"
			},	
			{	
				title: "CHW Produced",
				data: 1687,
				units: "MWh",
				icon: "icon5.png",
				text: "+45% vs June 2026"
			}	
		],		
		energyTrend: {		
			labels: [	
				1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30,31
			],	
			energy: [	
				20920,18304,20182,19530,21355,19254,18516,24417,20432,20715,19977,21050,19278,23707,20138,22594,25106,23029,24237,23126,25089,24988,27672,27481,27120,27775,22395,25140,21813,22119,22000
			]	
		},		
		productionTrend: {		
			labels: [	
				1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30,31
			],	
			lthw: [	
				7755,8618,9420,8553,9122,8972,8256,9347,9967,9971,10476,9243,8647,9727,8279,8192,8787,8466,8166,8444,8380,7985,7747,7739,7794,7344,7551,8019,8358,8202,7669
			],	
			chw:[	
				20625,18172,17320,15837,15407,15027,14649,14074,14431,13076,12800,15476,15494,16856,17060,20077,21989,22528,27380,27087,28991,29015,32869,37515,37621,35250,33856,30258,25892,25552,25833
			]	
		},
		energySource: {
			title: "Energy Use by Source (MWh)",
			datasets: [
        {
           label: "Gas",
           value: 525,
           colour: "#4f78c4"
        },
        {
           label: "Electricity",
           value: 202,
           colour: "#19a4e3"
        }
			]
		},
		productionType: {
			title: "Production by Type (MWh)",
			datasets: [
        {
           label: "CHW",
           value: 325,
           colour: "#4f78c4"
        },
        {
           label: "LTHW",
           value: 102,
           colour: "#19a4e3"
        },
				{
           label: "Electricity",
           value: 99,
           colour: "#113782"
        }
			]
		},
		performanceIndicators: [
			{
        title: "Energy Efficiency",
        icon: "kpi1.png",
		prefix: "",
        data: 1.91,
        units: "kWh/kWh",
        text: "+1.6% vs June"
			},
			{
        title: "Carbon Intensity",
        icon: "kpi2.png",
		prefix: "",
        data: 0.81,
        units: "kg CO₂/kWh",
        text: "+16.4% vs June"
			},
			{
        title: "Cost Recovery",
        icon: "kpi3.png",
        prefix: "£",
		data: 99320,
        units: "",
        text: "-90% of Costs"
			}
		]
	}			
}