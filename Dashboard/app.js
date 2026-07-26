const banner = document.getElementById("banner");
const monthSelect = document.getElementById("monthSelect");
const charts = {};

function drawBanner(items) {

    banner.innerHTML = "";

    items.forEach(item => {

        const trendClass =
            item.text.trim().startsWith("-")
                ? "negative"
                : "positive";

        let valueHTML;

        if (item.units === "£") {

            valueHTML = `
                <div class="valueRow">
                    <span class="value">£${Number(item.data).toLocaleString()}</span>
                </div>
            `;

        } else {

            valueHTML = `
                <div class="valueRow">
                    <span class="value">${Number(item.data).toLocaleString()}</span>
                    <span class="units">${item.units}</span>
                </div>
            `;

        }

        banner.innerHTML += `

        <div class="card">

            <div class="icon">
                <img src="images/${item.icon}">
            </div>

            <div class="content">

                <h3>${item.title}</h3>

                ${valueHTML}

                <div class="small ${trendClass}">
                    ${item.text}
                </div>

            </div>

        </div>

        `;

    });

}

const lineShadowPlugin = {

    id: "lineShadow",

    beforeDatasetDraw(chart, args) {

        const { ctx } = chart;

        ctx.save();

        ctx.shadowColor = "rgba(0,0,0,0.45)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

    },

    afterDatasetDraw(chart, args) {
        chart.ctx.restore();
    }

};

Chart.register(lineShadowPlugin);

function resizeCharts() {

    Object.values(charts).forEach(chart => {

        if (chart) {
            chart.resize();
        }

    });

}

function drawLineChart(canvasId, config) {

    // Destroy existing chart if it exists
    if (charts[canvasId]) {
        charts[canvasId].destroy();
    }

    const ctx = document
        .getElementById(canvasId)
        .getContext("2d");

    charts[canvasId] = new Chart(ctx, {

        type: "line",
        data: {
            labels: config.labels,
            datasets: config.datasets
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: "index",
                intersect: false
            },

            plugins: {
                legend: {
                    display:false,
                    labels: {
                        usePointStyle: true,
                        pointStyle: "line"
                    }

                }

            },

					scales: config.scales || {

						x: {
							
						title: {
							display: true,
							text: config.xTitle
						},

						grid: {
							display: false
						}
						
					},

						y: {
							beginAtZero: true,
							title: {
								display: true,
								text: config.yTitle
							}
						}
					}
        }
    });
}

const donutPercentagePlugin = {

    id: "donutPercentageLabels",

    afterDatasetsDraw(chart) {

        if (chart.config.type !== "doughnut") {
            return;
        }

        const { ctx } = chart;
        const dataset = chart.data.datasets[0];
        const values = dataset.data;

        const total = values.reduce(
            (sum, value) => sum + Number(value),
            0
        );

        const meta = chart.getDatasetMeta(0);

        ctx.save();

        ctx.font = "600 16px Segoe UI, Arial, sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        meta.data.forEach((arc, index) => {

            const value = Number(values[index]);

            if (!total || value <= 0) {
                return;
            }

            const percentage = Math.round(
                (value / total) * 100
            );

            const position = arc.tooltipPosition();

            ctx.fillText(
                `${percentage}%`,
                position.x,
                position.y
            );

        });

        ctx.restore();

    }

};

function drawDonutChart(canvasId, legendId, config) {

    // Destroy previous chart
    if (charts[canvasId]) {
        charts[canvasId].destroy();
    }

    // Build the legend
    const legend = document.getElementById(legendId);
    legend.innerHTML = "";
    config.datasets.forEach(item => {
        legend.innerHTML += `
            <div class="legendRow">
                <span class="legendColour"
                      style="background:${item.colour}">
                </span>
                ${item.label} - ${item.value}
            </div>
        `;
    });

    // Draw chart
    charts[canvasId] = new Chart(
        document.getElementById(canvasId),
        {
            type: "doughnut",
            data: {
                labels: config.datasets.map(x => x.label),
                datasets: [{
                    data: config.datasets.map(x => x.value),
                    backgroundColor:
                        config.datasets.map(x => x.colour),
                    borderColor: "#ffffff",
                    borderWidth: 2
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "45%",
								layout: {
									padding: 15
								},
                plugins: {
                    legend: {
                        display: false
                    }
                }
            },
						plugins: [donutPercentagePlugin]
        }
    );
}

function drawPerformanceIndicators(containerId, items) {

    const panel = document.getElementById(containerId);

    if (!panel) {
        console.error(
            `Performance indicator container not found: ${containerId}`
        );
        return;
    }

    panel.innerHTML = "";

    if (!Array.isArray(items)) {
        console.error(
            "Performance indicator data is not an array:",
            items
        );
        return;
    }

    items.forEach(item => {

        let valueHTML;

        if (item.units === "£") {

            valueHTML =
                `£${Number(item.data).toLocaleString("en-GB")}`;

        } else {

            valueHTML = `
                ${item.data}
                <span class="performanceUnits">
                    ${item.units}
                </span>
            `;

        }

        let trendClass = "";

        if (item.text.startsWith("-")) {
            trendClass = "negative";
        } else if (item.text.startsWith("+")) {
            trendClass = "positive";
        }

        panel.insertAdjacentHTML(
            "beforeend",
            `
            <div class="performanceItem">

                <img
                    src="images/${item.icon}"
                    class="performanceIcon"
                    alt=""
                >

                <div class="performanceText">

                    <div class="performanceTitle">
                        ${item.title}
                    </div>

                <div class="performanceValue">
                    ${item.prefix ?? ""}${Number(item.data).toLocaleString("en-GB")}
                </div>

            <div class="performanceUnits">
                ${item.units}
            </div>

            <div class="performanceTrend ${trendClass}">
                ${item.text}
            </div>

        </div>

    </div>
    `
);

    });

}

function showEnergyChart(monthData) {

    drawLineChart("energyChart", {

        labels: monthData.energyTrend.labels,

        xTitle: monthSelect.options[
            monthSelect.selectedIndex
        ].text.split(" ")[0],

        yTitle: "kWh",

        datasets: [

            {

                label: "Energy (kWh)",
                data: monthData.energyTrend.energy,
                borderColor: "#3f6cc3",
                borderWidth: 4,
                pointRadius: 0,
                tension: 0,
                fill: false

            }

        ]

    });

}

function showProductionChart(monthData) {

    drawLineChart("productionChart", {

        labels: monthData.productionTrend.labels,

        xTitle: monthSelect.options[
            monthSelect.selectedIndex
        ].text.split(" ")[0],

        datasets: [

            {
                label: "LTHW (kWh)",
                data: monthData.productionTrend.lthw,
                borderColor: "#d62828",
                borderWidth: 4,
                pointRadius: 0,
                tension: 0,
                fill: false,
                yAxisID: "y"
            },

            {
                label: "CHW (kWh)",
                data: monthData.productionTrend.chw,
                borderColor: "#3f6cc3",
                borderWidth: 4,
                pointRadius: 0,
                tension: 0,
                fill: false,
                yAxisID: "y1"
            }

        ],

        scales: {
		
						x: {
							title: {
								display: true,
								text: monthSelect.options[
									monthSelect.selectedIndex
								].text.split(" ")[0]
							},
							grid: {
								display: false
							}
						},
		
            y: {
                type: "linear",
                position: "left",
                title: {
                    display: true,
                    text: "LTHW kWh"
                }
            },
						
            y1: {
                type: "linear",
                position: "right",
                grid: {
                    drawOnChartArea: false
                },
                title: {
                    display: true,
                    text: "CHW kWh"
                }
            }

        }

    });

}

function showEnergySourceChart(data){

    drawDonutChart(
        "energySourceChart",
        "energySourceLegend",
        data.energySource
    );

}

function showProductionTypeChart(data){

    drawDonutChart(
        "productionTypeChart",
        "productionTypeLegend",
        data.productionType
    );

}

function showPerformanceIndicators(data) {

    drawPerformanceIndicators(
        "performanceIndicators",
        data.performanceIndicators
    );

}

function loadMonth(month) {

    if (!dashboard[month]) {
        console.error("No data for", month);
        return;
    }

    // Get the selected month's text (e.g. "June 2026")
    const selectedMonth =
        monthSelect.options[monthSelect.selectedIndex].text;

    // Update the page title
    document.getElementById("dashboardTitle").textContent =
        "Heating and Cooling Monthly Dashboard - " + selectedMonth;

    
    const d = dashboard[month];
		// Draw the banner
		drawBanner(d.banner);
		// Draw the charts
		showEnergyChart(d);
		showProductionChart(d);
		showEnergySourceChart(d);
		showProductionTypeChart(d);
		showPerformanceIndicators(d);
}

monthSelect.addEventListener("change", function () {
    loadMonth(this.value);
});

loadMonth(monthSelect.value);