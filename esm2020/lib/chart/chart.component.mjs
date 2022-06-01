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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYXBleGNoYXJ0cy9zcmMvbGliL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWFwZXhjaGFydHMvc3JjL2xpYi9jaGFydC9jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxFQUNULE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFzQnZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxVQUFVLE1BQU0sWUFBWSxDQUFDOztBQVFwQyxNQUFNLE9BQU8sY0FBYztJQTZCekIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBT2pDLENBQUM7SUFFRCxRQUFRO1FBQ04sYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDL0Q7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FB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O2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFFRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBRXdDLFlBQVk7c0JBQXpELFNBQVM7dUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFwZXhBbm5vdGF0aW9ucyxcbiAgQXBleEF4aXNDaGFydFNlcmllcyxcbiAgQXBleENoYXJ0LFxuICBBcGV4RGF0YUxhYmVscyxcbiAgQXBleEZpbGwsXG4gIEFwZXhHcmlkLFxuICBBcGV4TGVnZW5kLFxuICBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxuICBBcGV4TWFya2VycyxcbiAgQXBleE5vRGF0YSxcbiAgQXBleFBsb3RPcHRpb25zLFxuICBBcGV4UmVzcG9uc2l2ZSxcbiAgQXBleFN0YXRlcyxcbiAgQXBleFN0cm9rZSxcbiAgQXBleFRoZW1lLFxuICBBcGV4VGl0bGVTdWJ0aXRsZSxcbiAgQXBleFRvb2x0aXAsXG4gIEFwZXhYQXhpcyxcbiAgQXBleFlBeGlzLFxufSBmcm9tIFwiLi4vbW9kZWwvYXBleC10eXBlc1wiO1xuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCBBcGV4Q2hhcnRzIGZyb20gXCJhcGV4Y2hhcnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHgtY2hhcnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2hhcnQuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY2hhcnQ6IEFwZXhDaGFydDtcbiAgQElucHV0KCkgYW5ub3RhdGlvbnM6IEFwZXhBbm5vdGF0aW9ucztcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcbiAgQElucHV0KCkgZGF0YUxhYmVsczogQXBleERhdGFMYWJlbHM7XG4gIEBJbnB1dCgpIHNlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XG4gIEBJbnB1dCgpIHN0cm9rZTogQXBleFN0cm9rZTtcbiAgQElucHV0KCkgbGFiZWxzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgbGVnZW5kOiBBcGV4TGVnZW5kO1xuICBASW5wdXQoKSBtYXJrZXJzOiBBcGV4TWFya2VycztcbiAgQElucHV0KCkgbm9EYXRhOiBBcGV4Tm9EYXRhO1xuICBASW5wdXQoKSBmaWxsOiBBcGV4RmlsbDtcbiAgQElucHV0KCkgdG9vbHRpcDogQXBleFRvb2x0aXA7XG4gIEBJbnB1dCgpIHBsb3RPcHRpb25zOiBBcGV4UGxvdE9wdGlvbnM7XG4gIEBJbnB1dCgpIHJlc3BvbnNpdmU6IEFwZXhSZXNwb25zaXZlW107XG4gIEBJbnB1dCgpIHhheGlzOiBBcGV4WEF4aXM7XG4gIEBJbnB1dCgpIHlheGlzOiBBcGV4WUF4aXMgfCBBcGV4WUF4aXNbXTtcbiAgQElucHV0KCkgZ3JpZDogQXBleEdyaWQ7XG4gIEBJbnB1dCgpIHN0YXRlczogQXBleFN0YXRlcztcbiAgQElucHV0KCkgdGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xuICBASW5wdXQoKSBzdWJ0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XG4gIEBJbnB1dCgpIHRoZW1lOiBBcGV4VGhlbWU7XG4gIEBJbnB1dCgpIGZvcmVjYXN0RGF0YVBvaW50czogYW55O1xuXG4gIEBJbnB1dCgpIGF1dG9VcGRhdGVTZXJpZXMgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hdXRvVXBkYXRlU2VyaWVzICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcigoYykgPT4gYyAhPT0gXCJzZXJpZXNcIikubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJpZXModGhpcy5zZXJpZXMsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICBvcHRpb25zLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIG9wdGlvbnMuY2hhcnQgPSB0aGlzLmNoYXJ0O1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcbiAgICAgIG9wdGlvbnMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcbiAgICAgIG9wdGlvbnMuZGF0YUxhYmVscyA9IHRoaXMuZGF0YUxhYmVscztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XG4gICAgICBvcHRpb25zLnNlcmllcyA9IHRoaXMuc2VyaWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdHJva2UpIHtcbiAgICAgIG9wdGlvbnMuc3Ryb2tlID0gdGhpcy5zdHJva2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVscykge1xuICAgICAgb3B0aW9ucy5sYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgICB9XG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XG4gICAgICBvcHRpb25zLmxlZ2VuZCA9IHRoaXMubGVnZW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICBvcHRpb25zLmZpbGwgPSB0aGlzLmZpbGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIG9wdGlvbnMudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMucGxvdE9wdGlvbnMgPSB0aGlzLnBsb3RPcHRpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSB0aGlzLnJlc3BvbnNpdmU7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcbiAgICAgIG9wdGlvbnMubWFya2VycyA9IHRoaXMubWFya2VycztcbiAgICB9XG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XG4gICAgICBvcHRpb25zLm5vRGF0YSA9IHRoaXMubm9EYXRhO1xuICAgIH1cbiAgICBpZiAodGhpcy54YXhpcykge1xuICAgICAgb3B0aW9ucy54YXhpcyA9IHRoaXMueGF4aXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnlheGlzKSB7XG4gICAgICBvcHRpb25zLnlheGlzID0gdGhpcy55YXhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgb3B0aW9ucy5ncmlkID0gdGhpcy5ncmlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZXMpIHtcbiAgICAgIG9wdGlvbnMuc3RhdGVzID0gdGhpcy5zdGF0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICBvcHRpb25zLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3VidGl0bGUpIHtcbiAgICAgIG9wdGlvbnMuc3VidGl0bGUgPSB0aGlzLnN1YnRpdGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy50aGVtZSkge1xuICAgICAgb3B0aW9ucy50aGVtZSA9IHRoaXMudGhlbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyh0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5yZW5kZXIoKSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlT3B0aW9ucyhcbiAgICBvcHRpb25zOiBhbnksXG4gICAgcmVkcmF3UGF0aHM/OiBib29sZWFuLFxuICAgIGFuaW1hdGU/OiBib29sZWFuLFxuICAgIHVwZGF0ZVN5bmNlZENoYXJ0cz86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudXBkYXRlT3B0aW9ucyhcbiAgICAgIG9wdGlvbnMsXG4gICAgICByZWRyYXdQYXRocyxcbiAgICAgIGFuaW1hdGUsXG4gICAgICB1cGRhdGVTeW5jZWRDaGFydHNcbiAgICApKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTZXJpZXMoXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgICBhbmltYXRlPzogYm9vbGVhblxuICApIHtcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKSk7XG4gIH1cblxuICBwdWJsaWMgYXBwZW5kU2VyaWVzKFxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5hcHBlbmRTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKSk7XG4gIH1cblxuICBwdWJsaWMgYXBwZW5kRGF0YShuZXdEYXRhOiBhbnlbXSkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouYXBwZW5kRGF0YShuZXdEYXRhKSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93U2VyaWVzKHNlcmllc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouc2hvd1NlcmllcyhzZXJpZXNOYW1lKSk7XG4gIH1cblxuICBwdWJsaWMgaGlkZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmhpZGVTZXJpZXMoc2VyaWVzTmFtZSkpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgem9vbVgobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai56b29tWChtaW4sIG1heCkpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihcbiAgICBzZXJpZXNJbmRleDogbnVtYmVyLFxuICAgIGRhdGFQb2ludEluZGV4PzogbnVtYmVyXG4gICkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudG9nZ2xlRGF0YVBvaW50U2VsZWN0aW9uKHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCkpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnNldExvY2FsZShsb2NhbGVOYW1lKSk7XG4gIH1cblxuICBwdWJsaWMgcGFwZXIoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5wYXBlcigpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRYYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFhheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRZYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRQb2ludEFubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVBbm5vdGF0aW9uKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnJlbW92ZUFubm90YXRpb24oaWQsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucykpO1xuICB9XG5cbiAgcHVibGljIGRhdGFVUkkob3B0aW9ucz86IGFueSk6IFByb21pc2U8eyBpbWdVUkk6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmouZGF0YVVSSShvcHRpb25zKTtcbiAgfVxufVxuIiwiPGRpdiAjY2hhcnQ+PC9kaXY+XG4iXX0=