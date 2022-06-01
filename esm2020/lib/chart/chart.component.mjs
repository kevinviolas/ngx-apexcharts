import { Component, ElementRef, Input, ViewChild, NgZone, ChangeDetectionStrategy, } from "@angular/core";
import { asapScheduler } from "rxjs";
import ApexCharts from "apexcharts";
import * as i0 from "@angular/core";
export class ChartComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.autoUpdateSeries = true;
    }
    ngOnInit() {
        asapScheduler.schedule(() => {
            this.createElement();
        });
    }
    ngOnChanges(changes) {
        asapScheduler.schedule(() => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((c) => c !== "series").length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        });
    }
    ngOnDestroy() {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    createElement() {
        const options = {};
        if (this.annotations) {
            options.annotations = this.annotations;
        }
        if (this.chart) {
            options.chart = this.chart;
        }
        if (this.colors) {
            options.colors = this.colors;
        }
        if (this.dataLabels) {
            options.dataLabels = this.dataLabels;
        }
        if (this.series) {
            options.series = this.series;
        }
        if (this.stroke) {
            options.stroke = this.stroke;
        }
        if (this.labels) {
            options.labels = this.labels;
        }
        if (this.legend) {
            options.legend = this.legend;
        }
        if (this.fill) {
            options.fill = this.fill;
        }
        if (this.tooltip) {
            options.tooltip = this.tooltip;
        }
        if (this.plotOptions) {
            options.plotOptions = this.plotOptions;
        }
        if (this.responsive) {
            options.responsive = this.responsive;
        }
        if (this.markers) {
            options.markers = this.markers;
        }
        if (this.noData) {
            options.noData = this.noData;
        }
        if (this.xaxis) {
            options.xaxis = this.xaxis;
        }
        if (this.yaxis) {
            options.yaxis = this.yaxis;
        }
        if (this.grid) {
            options.grid = this.grid;
        }
        if (this.states) {
            options.states = this.states;
        }
        if (this.title) {
            options.title = this.title;
        }
        if (this.subtitle) {
            options.subtitle = this.subtitle;
        }
        if (this.theme) {
            options.theme = this.theme;
        }
        if (this.forecastDataPoints) {
            options.forecastDataPoints = this.forecastDataPoints;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        this.ngZone.runOutsideAngular(() => {
            this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        });
        this.render();
    }
    render() {
        return this.ngZone.runOutsideAngular(() => this.chartObj.render());
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.ngZone.runOutsideAngular(() => this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
    }
    updateSeries(newSeries, animate) {
        return this.ngZone.runOutsideAngular(() => this.chartObj.updateSeries(newSeries, animate));
    }
    appendSeries(newSeries, animate) {
        this.ngZone.runOutsideAngular(() => this.chartObj.appendSeries(newSeries, animate));
    }
    appendData(newData) {
        this.ngZone.runOutsideAngular(() => this.chartObj.appendData(newData));
    }
    toggleSeries(seriesName) {
        return this.ngZone.runOutsideAngular(() => this.chartObj.toggleSeries(seriesName));
    }
    showSeries(seriesName) {
        this.ngZone.runOutsideAngular(() => this.chartObj.showSeries(seriesName));
    }
    hideSeries(seriesName) {
        this.ngZone.runOutsideAngular(() => this.chartObj.hideSeries(seriesName));
    }
    resetSeries() {
        this.ngZone.runOutsideAngular(() => this.chartObj.resetSeries());
    }
    zoomX(min, max) {
        this.ngZone.runOutsideAngular(() => this.chartObj.zoomX(min, max));
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.ngZone.runOutsideAngular(() => this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex));
    }
    destroy() {
        this.chartObj.destroy();
    }
    setLocale(localeName) {
        this.ngZone.runOutsideAngular(() => this.chartObj.setLocale(localeName));
    }
    paper() {
        this.ngZone.runOutsideAngular(() => this.chartObj.paper());
    }
    addXaxisAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartObj.addXaxisAnnotation(options, pushToMemory, context));
    }
    addYaxisAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartObj.addYaxisAnnotation(options, pushToMemory, context));
    }
    addPointAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartObj.addPointAnnotation(options, pushToMemory, context));
    }
    removeAnnotation(id, options) {
        this.ngZone.runOutsideAngular(() => this.chartObj.removeAnnotation(id, options));
    }
    clearAnnotations(options) {
        this.ngZone.runOutsideAngular(() => this.chartObj.clearAnnotations(options));
    }
    dataURI(options) {
        return this.chartObj.dataURI(options);
    }
}
/** @nocollapse */ /** @nocollapse */ ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: ChartComponent, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: ChartComponent, selector: "apx-chart", inputs: { chart: "chart", annotations: "annotations", colors: "colors", dataLabels: "dataLabels", series: "series", stroke: "stroke", labels: "labels", legend: "legend", markers: "markers", noData: "noData", fill: "fill", tooltip: "tooltip", plotOptions: "plotOptions", responsive: "responsive", xaxis: "xaxis", yaxis: "yaxis", grid: "grid", states: "states", title: "title", subtitle: "subtitle", theme: "theme", forecastDataPoints: "forecastDataPoints", autoUpdateSeries: "autoUpdateSeries" }, viewQueries: [{ propertyName: "chartElement", first: true, predicate: ["chart"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div #chart></div>\n", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{ selector: "apx-chart", changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #chart></div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { chart: [{
                type: Input
            }], annotations: [{
                type: Input
            }], colors: [{
                type: Input
            }], dataLabels: [{
                type: Input
            }], series: [{
                type: Input
            }], stroke: [{
                type: Input
            }], labels: [{
                type: Input
            }], legend: [{
                type: Input
            }], markers: [{
                type: Input
            }], noData: [{
                type: Input
            }], fill: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], plotOptions: [{
                type: Input
            }], responsive: [{
                type: Input
            }], xaxis: [{
                type: Input
            }], yaxis: [{
                type: Input
            }], grid: [{
                type: Input
            }], states: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], theme: [{
                type: Input
            }], forecastDataPoints: [{
                type: Input
            }], autoUpdateSeries: [{
                type: Input
            }], chartElement: [{
                type: ViewChild,
                args: ["chart", { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYXBleGNoYXJ0cy9zcmMvbGliL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWFwZXhjaGFydHMvc3JjL2xpYi9jaGFydC9jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxFQUNULE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFzQnZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxVQUFVLE1BQU0sWUFBWSxDQUFDOztBQVFwQyxNQUFNLE9BQU8sY0FBYztJQTZCekIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBT2pDLENBQUM7SUFFRCxRQUFRO1FBQ04sYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDL0Q7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixPQUFPLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sYUFBYSxDQUNsQixPQUFZLEVBQ1osV0FBcUIsRUFDckIsT0FBaUIsRUFDakIsa0JBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDcEUsT0FBTyxFQUNQLFdBQVcsRUFDWCxPQUFPLEVBQ1Asa0JBQWtCLENBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxZQUFZLENBQ2pCLFNBQXVELEVBQ3ZELE9BQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU0sWUFBWSxDQUNqQixTQUF1RCxFQUN2RCxPQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxVQUFVLENBQUMsT0FBYztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLFlBQVksQ0FBQyxVQUFrQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU0sVUFBVSxDQUFDLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sVUFBVSxDQUFDLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLHdCQUF3QixDQUM3QixXQUFtQixFQUNuQixjQUF1QjtRQUV2QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxTQUFTLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLGtCQUFrQixDQUN2QixPQUFZLEVBQ1osWUFBc0IsRUFDdEIsT0FBYTtRQUViLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVNLGtCQUFrQixDQUN2QixPQUFZLEVBQ1osWUFBc0IsRUFDdEIsT0FBYTtRQUViLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVNLGtCQUFrQixDQUN2QixPQUFZLEVBQ1osWUFBc0IsRUFDdEIsT0FBYTtRQUViLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQVUsRUFBRSxPQUFhO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsT0FBYTtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0sT0FBTyxDQUFDLE9BQWE7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztpSkF6UFUsY0FBYztxSUFBZCxjQUFjLDJxQkMzQzNCLHNCQUNBOzJGRDBDYSxjQUFjO2tCQU4xQixTQUFTOytCQUNFLFdBQVcsbUJBR0osdUJBQXVCLENBQUMsTUFBTTs2RkFHdEMsS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBRUcsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUV3QyxZQUFZO3NCQUF6RCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBcGV4QW5ub3RhdGlvbnMsXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXG4gIEFwZXhDaGFydCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhGaWxsLFxuICBBcGV4R3JpZCxcbiAgQXBleExlZ2VuZCxcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgQXBleE1hcmtlcnMsXG4gIEFwZXhOb0RhdGEsXG4gIEFwZXhQbG90T3B0aW9ucyxcbiAgQXBleFJlc3BvbnNpdmUsXG4gIEFwZXhTdGF0ZXMsXG4gIEFwZXhTdHJva2UsXG4gIEFwZXhUaGVtZSxcbiAgQXBleFRpdGxlU3VidGl0bGUsXG4gIEFwZXhUb29sdGlwLFxuICBBcGV4WEF4aXMsXG4gIEFwZXhZQXhpcyxcbn0gZnJvbSBcIi4uL21vZGVsL2FwZXgtdHlwZXNcIjtcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgQXBleENoYXJ0cyBmcm9tIFwiYXBleGNoYXJ0c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXB4LWNoYXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhcnQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYXJ0LmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIEBJbnB1dCgpIGFubm90YXRpb25zOiBBcGV4QW5ub3RhdGlvbnM7XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG4gIEBJbnB1dCgpIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBASW5wdXQoKSBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzO1xuICBASW5wdXQoKSBzdHJva2U6IEFwZXhTdHJva2U7XG4gIEBJbnB1dCgpIGxhYmVsczogc3RyaW5nW107XG4gIEBJbnB1dCgpIGxlZ2VuZDogQXBleExlZ2VuZDtcbiAgQElucHV0KCkgbWFya2VyczogQXBleE1hcmtlcnM7XG4gIEBJbnB1dCgpIG5vRGF0YTogQXBleE5vRGF0YTtcbiAgQElucHV0KCkgZmlsbDogQXBleEZpbGw7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IEFwZXhUb29sdGlwO1xuICBASW5wdXQoKSBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xuICBASW5wdXQoKSByZXNwb25zaXZlOiBBcGV4UmVzcG9uc2l2ZVtdO1xuICBASW5wdXQoKSB4YXhpczogQXBleFhBeGlzO1xuICBASW5wdXQoKSB5YXhpczogQXBleFlBeGlzIHwgQXBleFlBeGlzW107XG4gIEBJbnB1dCgpIGdyaWQ6IEFwZXhHcmlkO1xuICBASW5wdXQoKSBzdGF0ZXM6IEFwZXhTdGF0ZXM7XG4gIEBJbnB1dCgpIHRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcbiAgQElucHV0KCkgc3VidGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xuICBASW5wdXQoKSB0aGVtZTogQXBleFRoZW1lO1xuICBASW5wdXQoKSBmb3JlY2FzdERhdGFQb2ludHM6IGFueTtcblxuICBASW5wdXQoKSBhdXRvVXBkYXRlU2VyaWVzID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKFwiY2hhcnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnRPYmo6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZVNlcmllcyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2VyaWVzKHRoaXMuc2VyaWVzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge307XG5cbiAgICBpZiAodGhpcy5hbm5vdGF0aW9ucykge1xuICAgICAgb3B0aW9ucy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICBvcHRpb25zLmNoYXJ0ID0gdGhpcy5jaGFydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sb3JzKSB7XG4gICAgICBvcHRpb25zLmNvbG9ycyA9IHRoaXMuY29sb3JzO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhTGFiZWxzKSB7XG4gICAgICBvcHRpb25zLmRhdGFMYWJlbHMgPSB0aGlzLmRhdGFMYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcmllcykge1xuICAgICAgb3B0aW9ucy5zZXJpZXMgPSB0aGlzLnNlcmllcztcbiAgICB9XG4gICAgaWYgKHRoaXMuc3Ryb2tlKSB7XG4gICAgICBvcHRpb25zLnN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbHMpIHtcbiAgICAgIG9wdGlvbnMubGFiZWxzID0gdGhpcy5sYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB0aGlzLmxlZ2VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgb3B0aW9ucy5maWxsID0gdGhpcy5maWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICBvcHRpb25zLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBsb3RPcHRpb25zKSB7XG4gICAgICBvcHRpb25zLnBsb3RPcHRpb25zID0gdGhpcy5wbG90T3B0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzcG9uc2l2ZSkge1xuICAgICAgb3B0aW9ucy5yZXNwb25zaXZlID0gdGhpcy5yZXNwb25zaXZlO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXJrZXJzKSB7XG4gICAgICBvcHRpb25zLm1hcmtlcnMgPSB0aGlzLm1hcmtlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vRGF0YSkge1xuICAgICAgb3B0aW9ucy5ub0RhdGEgPSB0aGlzLm5vRGF0YTtcbiAgICB9XG4gICAgaWYgKHRoaXMueGF4aXMpIHtcbiAgICAgIG9wdGlvbnMueGF4aXMgPSB0aGlzLnhheGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy55YXhpcykge1xuICAgICAgb3B0aW9ucy55YXhpcyA9IHRoaXMueWF4aXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIG9wdGlvbnMuZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGVzKSB7XG4gICAgICBvcHRpb25zLnN0YXRlcyA9IHRoaXMuc3RhdGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy50aXRsZSkge1xuICAgICAgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIGlmICh0aGlzLnN1YnRpdGxlKSB7XG4gICAgICBvcHRpb25zLnN1YnRpdGxlID0gdGhpcy5zdWJ0aXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGhlbWUpIHtcbiAgICAgIG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JlY2FzdERhdGFQb2ludHMpIHtcbiAgICAgIG9wdGlvbnMuZm9yZWNhc3REYXRhUG9pbnRzID0gdGhpcy5mb3JlY2FzdERhdGFQb2ludHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyh0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5yZW5kZXIoKSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlT3B0aW9ucyhcbiAgICBvcHRpb25zOiBhbnksXG4gICAgcmVkcmF3UGF0aHM/OiBib29sZWFuLFxuICAgIGFuaW1hdGU/OiBib29sZWFuLFxuICAgIHVwZGF0ZVN5bmNlZENoYXJ0cz86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudXBkYXRlT3B0aW9ucyhcbiAgICAgIG9wdGlvbnMsXG4gICAgICByZWRyYXdQYXRocyxcbiAgICAgIGFuaW1hdGUsXG4gICAgICB1cGRhdGVTeW5jZWRDaGFydHNcbiAgICApKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTZXJpZXMoXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgICBhbmltYXRlPzogYm9vbGVhblxuICApIHtcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKSk7XG4gIH1cblxuICBwdWJsaWMgYXBwZW5kU2VyaWVzKFxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5hcHBlbmRTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKSk7XG4gIH1cblxuICBwdWJsaWMgYXBwZW5kRGF0YShuZXdEYXRhOiBhbnlbXSkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouYXBwZW5kRGF0YShuZXdEYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93U2VyaWVzKHNlcmllc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouc2hvd1NlcmllcyhzZXJpZXNOYW1lKSk7XG4gIH1cblxuICBwdWJsaWMgaGlkZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmhpZGVTZXJpZXMoc2VyaWVzTmFtZSkpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgem9vbVgobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai56b29tWChtaW4sIG1heCkpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihcbiAgICBzZXJpZXNJbmRleDogbnVtYmVyLFxuICAgIGRhdGFQb2ludEluZGV4PzogbnVtYmVyXG4gICkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudG9nZ2xlRGF0YVBvaW50U2VsZWN0aW9uKHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCkpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnNldExvY2FsZShsb2NhbGVOYW1lKSk7XG4gIH1cblxuICBwdWJsaWMgcGFwZXIoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5wYXBlcigpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRYYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFhheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRZYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRQb2ludEFubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVBbm5vdGF0aW9uKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnJlbW92ZUFubm90YXRpb24oaWQsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucykpO1xuICB9XG5cbiAgcHVibGljIGRhdGFVUkkob3B0aW9ucz86IGFueSk6IFByb21pc2U8eyBpbWdVUkk6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmouZGF0YVVSSShvcHRpb25zKTtcbiAgfVxufVxuIiwiPGRpdiAjY2hhcnQ+PC9kaXY+XG4iXX0=