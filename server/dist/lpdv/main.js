(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/graemekillick/Angular/lpdv/src/main.ts */"zUnb");


/***/ }),

/***/ "0+/P":
/*!****************************************************!*\
  !*** ./src/app/edit-order/edit-order.component.ts ***!
  \****************************************************/
/*! exports provided: EditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function() { return EditOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models_item_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item_order.model */ "B9Xe");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/order.model */ "qHRi");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/order.service */ "kVqo");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _services_item_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/item-orders.service */ "C+v0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/search-filter.pipe */ "KyFs");
















function EditOrderComponent_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", item_r5.name);
} }
function EditOrderComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sliced", item_r6.sliced_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " ", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", item_r6.name);
} }
function EditOrderComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " ", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", item_r7.name);
} }
function EditOrderComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditOrderComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class EditOrderComponent {
    constructor(orderService, itemsService, itemOrdersService, fb, dialogRef, data) {
        this.orderService = orderService;
        this.itemsService = itemsService;
        this.itemOrdersService = itemOrdersService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.viewClass = "Edit Order";
        this.edit = true;
        this.loading = false;
        this.success = false;
        this.total = 0;
        this.sub_total = 0;
        this.tax = 0;
        this.searchText = '';
        this.items = {
            "viennoiserie": [],
            "pains": [],
            "noel": []
        };
        this.tax_classifications = [
            { value: 'normal', viewValue: 'normal' },
            { value: 'no_tax_6', viewValue: 'tax before 6' },
            { value: 'no_tax', viewValue: 'no tax' },
        ];
        this.order = this.orderService.getOrderById(data.id);
        console.log("constructor running");
    }
    ngOnInit() {
        for (let item of this.itemsService.items) {
            for (let item_type in this.items) {
                if (item.item_type == item_type) {
                    this.items[item_type].push(item);
                }
                this.items[item_type].sort((a, b) => {
                    return ('' + a.name).localeCompare(b.name);
                });
            }
        }
        var tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        this.myForm = this.fb.group({
            first_name: [this.order.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last_name: [this.order.last_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //client_number: ['', Validators.required],
            telephone: [this.order.telephone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: [new Date(this.order.date), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        for (var key in this.items) {
            this.items[key].forEach(element => {
                var found = false;
                for (let itemOrder of this.order.itemOrders) {
                    if (itemOrder.item_id == element.id) {
                        found = true;
                        this.myForm.addControl(element.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](itemOrder.amount));
                    }
                }
                if (!found) {
                    this.myForm.addControl(element.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
                }
            });
        }
        this.updateTotals();
        this.onChanges();
    }
    submitHandler() {
        this.loading = true;
        const formValue = this.myForm.value;
        formValue.sub_total = this.sub_total;
        formValue.tax = this.tax;
        formValue.total = this.total;
        formValue.date.setHours(0, 0, 0, 0);
        let order = _models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"].newOrder(formValue);
        order.id = this.order.id;
        order.user_id = this.order.user_id;
        this.orderService.editOrder(order).subscribe(res => {
            order = res;
            console.log(res);
            var itemOrders = [];
            for (let key in this.items) {
                console.log(key);
                for (let item of this.items[key]) {
                    if (formValue[item.name]) {
                        itemOrders.push(new _models_item_order_model__WEBPACK_IMPORTED_MODULE_3__["ItemOrder"](null, order.user_id, item.name, item.combined_name, order.id, item.id, formValue[item.name], false, res.date));
                    }
                }
            }
            order.itemOrders = itemOrders;
            this.orderService.orders = this.orderService.orders.filter(or => {
                return !(order.id === or.id);
            });
            this.orderService.orders.push(order);
            console.log(order);
            this.orderService.orderChangedSubject.next(this.orderService.orders);
            this.itemOrdersService.addItemOrders(itemOrders).subscribe(orders => {
                console.log(itemOrders);
            }, error => {
                console.log(error);
            });
        }, error => {
            //console.log(error)
        });
        try {
            //use this object to create order
            this.success = true;
            this.dialogRef.close();
        }
        catch (err) {
            console.error(err);
        }
        this.loading = false;
    }
    increment(elmRef) {
        console.log(elmRef.value);
        elmRef.value = (Number(elmRef.value) + 1).toString();
    }
    decrement(elmRef) {
        console.log(elmRef.value);
        elmRef.value = (Number(elmRef.value) - 1).toString();
    }
    delete() {
        this.orderService.deleteOrder(this.order).subscribe();
        this.dialogRef.close();
    }
    //functions for calculating order totals with relevant taxes
    onChanges() {
        this.myForm.valueChanges.subscribe(val => {
            this.updateTotals();
        });
    }
    //function to update total prices 
    updateTotals() {
        var before_tax = 0;
        var tax = 0;
        var tax_items = {
            "no_tax": { "count": 0, "total": 0 },
            "normal": { "count": 0, "total": 0 },
            "no_tax_6": { "count": 0, "total": 0 },
        };
        let formValue = this.myForm.value;
        for (let key in this.items) {
            for (let item of this.items[key]) {
                if (formValue[item.name] > 0 && item.tax_catagory != null) {
                    tax_items[item.tax_catagory]["count"] += formValue[item.name];
                    tax_items[item.tax_catagory]["total"] += (formValue[item.name] * item.price);
                }
            }
        }
        before_tax += tax_items.no_tax_6.total + tax_items.no_tax.total + tax_items.normal.total;
        //calculate individual taxes 
        if (tax_items.no_tax_6.count < 6) {
            tax += tax_items.no_tax_6.total * .14975;
        }
        console.log(tax);
        tax += tax_items.normal.total * .14975;
        this.tax = tax;
        this.sub_total = before_tax;
        this.total = this.tax + this.sub_total;
    }
}
EditOrderComponent.ɵfac = function EditOrderComponent_Factory(t) { return new (t || EditOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_6__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_item_orders_service__WEBPACK_IMPORTED_MODULE_7__["ItemOrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditOrderComponent, selectors: [["app-edit-order"]], decls: 61, vars: 30, consts: [[1, "form-flex", 3, "formGroup", "ngSubmit"], [1, "row", "top"], [1, "col-sm"], ["matInput", "", "placeholder", "First Name", "formControlName", "first_name"], ["matInput", "", "placeholder", "Last Name", "formControlName", "last_name"], ["type", "telephone", "matInput", "", "placeholder", "t\u00E9l\u00E9phone", "formControlName", "telephone"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "Filter items", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "row", "flex-row"], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "col-6", "wrap"], ["class", "w-100", 3, "sliced", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], ["mat-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["mat-button", "", "type", "button", "class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], [1, "total_price"], [1, "subheading"], [1, "subheadingbold"], [1, "w-100"], ["type", "number", "autocomplete", "off", "matInput", "", 3, "placeholder", "formControlName"], ["type", "number", "matInput", "", "autocomplete", "off", 3, "placeholder", "formControlName"], ["mat-button", "", "type", "button", 1, "btn", "btn-danger", "ml-1", 3, "click"]], template: function EditOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditOrderComponent_Template_form_ngSubmit_2_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditOrderComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Viennoiserie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditOrderComponent_mat_form_field_25_Template, 2, 2, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditOrderComponent_mat_form_field_31_Template, 2, 4, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "N\u00F6el");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditOrderComponent_mat_form_field_37_Template, 2, 2, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EditOrderComponent_button_43_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Subtotal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tax: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0))("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 14, ctx.items.viennoiserie, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 17, ctx.items.pains, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 20, ctx.items.noel, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 23, ctx.sub_total), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 25, ctx.tax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 27, ctx.total), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]], styles: [".top[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-width: 90vw;\n}\n\n.total_price[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: grey;\n}\n\n.subheadingbold[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n}\n\n.sliced[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n\n\n.filter-field[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  font-size: 16px;\n}\n\n  .filter-field .mat-form-field-underline {\n  background-color: transparent !important;\n}\n\n  .mat-dialog-container {\n  display: flex;\n  flex-flow: column;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1;\n}\n\n.form-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25ldy1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBR0E7Ozs7Ozs7OztDQUFBOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksd0NBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQURKOztBQUlBO0VBQ0ksT0FBQTtBQURKIiwiZmlsZSI6Im5ldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AgbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICAgIG1heC13aWR0aDogOTB2dztcbn1cblxuLnRvdGFsX3ByaWNlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uc3ViaGVhZGluZ2JvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2xpY2VkIHtcbiAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcbn1cblxuXG4vKlxuLndyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMlO1xufVxuKi9cblxuLmZpbHRlci1maWVsZCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG46Om5nLWRlZXAgLmZpbHRlci1maWVsZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGZsZXg6IDE7XG59XG5cbi5mb3JtLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZmxleDogMTtcbn1cblxuLmZsZXgtcm93IHtcbiAgICBmbGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-order',
                templateUrl: '../new-order/new-order.component.html',
                styleUrls: ['../new-order/new-order.component.scss']
            }]
    }], function () { return [{ type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }, { type: _services_items_service__WEBPACK_IMPORTED_MODULE_6__["ItemsService"] }, { type: _services_item_orders_service__WEBPACK_IMPORTED_MODULE_7__["ItemOrdersService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RegisterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function RegisterComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Confirmation must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['login']);
    }
    onSubmit(form) {
        const { username, password, passwordConf } = form.value;
        console.log(username);
        console.log(password);
        const passwordConsitent = password === passwordConf;
        if (!passwordConsitent) {
            this.errorMessage = "password must be the same as confirmation password";
        }
        if (passwordConsitent && form.valid) {
            this.authService.signup(username, password).subscribe(res => {
                console.log(res);
                this.router.navigate(['/dashboard']);
            }, errorRes => {
                this.errorMessage = errorRes;
            });
        }
        form.reset();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "ngModel", "", "name", "username", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["password", "ngModel"], ["class", "help-block alert alert-danger", 4, "ngIf"], ["for", "passwordConf"], ["type", "password", "id", "passwordConf", "ngModel", "", "name", "passwordConf", "required", "", "minlength", "6", 1, "form-control"], ["passwordConf", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-danger"], [1, "help-block", "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_span_21_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_25_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.valid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "2hcr":
/*!******************************************!*\
  !*** ./src/app/pipes/capitalize.pipe.ts ***!
  \******************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CapitalizePipe {
    transform(value, ...args) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'capitalize'
            }]
    }], null, null); })();


/***/ }),

/***/ "3IFh":
/*!*********************************************!*\
  !*** ./src/app/auth-interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "ccyI");





class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(user => {
            if (!user) {
                console.log('no user');
                return next.handle(req);
            }
            else {
                console.log(user.token);
                const modifiedReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'auth-token': user.token }) });
                return next.handle(modifiedReq);
            }
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B9Xe":
/*!********************************************!*\
  !*** ./src/app/models/item_order.model.ts ***!
  \********************************************/
/*! exports provided: ItemOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemOrder", function() { return ItemOrder; });
class ItemOrder {
    //item order will have a reference to the item it belongs to and contain sliced data if needed
    constructor(id, user_id, itemName, combined_name, order_id, item_id, amount, sliced, date) {
        this.id = id;
        this.user_id = user_id;
        this.itemName = itemName;
        this.combined_name = combined_name;
        this.order_id = order_id;
        this.item_id = item_id;
        this.amount = amount;
        this.sliced = sliced;
        this.date = date;
    }
    static newItemOrder(params) {
        return new ItemOrder(params.id, params.user_id, params.string, params.combined_name, params.order_id, params.item_id, params.amount, params.sliced, params.date);
    }
}


/***/ }),

/***/ "C+v0":
/*!*************************************************!*\
  !*** ./src/app/services/item-orders.service.ts ***!
  \*************************************************/
/*! exports provided: ItemOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemOrdersService", function() { return ItemOrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ItemOrdersService {
    constructor(http) {
        this.http = http;
        this.itemOrderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.itemOrders = [];
        console.log(this.itemOrders);
    }
    addItemOrders(itemOrde) {
        const orders = { orders: itemOrde };
        this.itemOrders = this.itemOrders.filter(itemOr => {
            return !(itemOr.order_id === itemOrde[0].order_id);
        });
        return this.http.post('/api/itemOrders/add', orders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => {
            for (let itemOrder of res['itemOrders']) {
                console.log(itemOrder);
                console.log(this.itemOrders);
                this.itemOrders.push(itemOrder);
            }
            this.itemOrderSubject.next(this.itemOrders);
        }));
    }
    getItemOrders() {
        return this.http.get('api/itemOrders').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => {
            this.itemOrders = [];
            console.log(res['itemOrders']);
            this.itemOrders = res['itemOrders'];
            if (!this.itemOrders) {
                this.itemOrders = [];
            }
            this.itemOrderSubject.next(this.itemOrders);
        }));
    }
    deleteItemOrdersForOrder(ord_id) {
        this.itemOrders = this.itemOrders.filter(itemOrder => {
            return !(itemOrder.order_id === ord_id);
        });
    }
    handleErrors(errorRes) {
        let errorMessage = "an unknown error occured";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }
        switch (errorRes.error.error) {
            case "ITEM_EXISTS":
                errorMessage = "The item already exists";
        }
        throw (errorMessage);
    }
}
ItemOrdersService.ɵfac = function ItemOrdersService_Factory(t) { return new (t || ItemOrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ItemOrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemOrdersService, factory: ItemOrdersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemOrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Dilc":
/*!**************************************************!*\
  !*** ./src/app/new-order/new-order.component.ts ***!
  \**************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_item_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item_order.model */ "B9Xe");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/order.model */ "qHRi");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _services_item_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/item-orders.service */ "C+v0");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/order.service */ "kVqo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/search-filter.pipe */ "KyFs");
















const _c0 = ["input"];
function NewOrderComponent_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", item_r5.name);
} }
function NewOrderComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sliced", item_r6.sliced_option);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", item_r6.name);
} }
function NewOrderComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", " ", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", item_r7.name);
} }
function NewOrderComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewOrderComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { standalone: true }; };
class NewOrderComponent {
    constructor(itemsService, itemOrdersService, orderService, fb, dialogRef) {
        this.itemsService = itemsService;
        this.itemOrdersService = itemOrdersService;
        this.orderService = orderService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.viewClass = "New Order";
        this.edit = false;
        this.loading = false;
        this.success = false;
        this.total = 0;
        this.sub_total = 0;
        this.tax = 0;
        this.searchText = '';
        this.items = {
            "viennoiserie": [],
            "pains": [],
            "noel": []
        };
        this.itemtypes = ["viennoiserie", "pains", "noel"];
        this.tax_classifications = [
            { value: 'normal', viewValue: 'normal' },
            { value: 'no_tax_6', viewValue: 'tax before 6' },
            { value: 'no_tax', viewValue: 'no tax' },
        ];
    }
    ngOnInit() {
        for (let item of this.itemsService.items) {
            for (let item_type in this.items) {
                if (item.item_type == item_type) {
                    this.items[item_type].push(item);
                }
                this.items[item_type].sort((a, b) => {
                    if (a.combined_name == b.combined_name) {
                        return ('' + a.sliced).localeCompare(b.sliced);
                    }
                    else {
                        return ('' + a.combined_name).localeCompare(b.combined_name);
                    }
                });
            }
        }
        var tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        this.myForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            //client_number: ['', Validators.required],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [tomorrow, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        console.log(this.items);
        for (var key in this.items) {
            this.items[key].forEach(element => {
                console.log(element.item_type);
                this.myForm.addControl(element.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
            });
        }
        this.onChanges();
    }
    submitHandler() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const formValue = this.myForm.value;
            formValue.sub_total = this.sub_total;
            formValue.tax = this.tax;
            formValue.total = this.total;
            formValue.date.setHours(0, 0, 0, 0);
            let order = _models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"].newOrder(formValue);
            this.orderService.addOrder(order).subscribe(res => {
                order = res;
                var itemOrders = [];
                for (let key in this.items) {
                    console.log(key);
                    for (let item of this.items[key]) {
                        console.log(item.id);
                        console.log(formValue[item.name]);
                        if (formValue[item.name]) {
                            itemOrders.push(new _models_item_order_model__WEBPACK_IMPORTED_MODULE_3__["ItemOrder"](null, order.user_id, item.name, item.combined_name, order.id, item.id, formValue[item.name], item.sliced, res.date));
                        }
                    }
                }
                order.itemOrders = itemOrders;
                this.orderService.orders.push(order);
                this.orderService.orderChangedSubject.next(this.orderService.orders);
                this.itemOrdersService.addItemOrders(itemOrders).subscribe(orders => {
                }, error => {
                    console.log(error);
                });
            }, error => {
                //console.log(error)
            });
            console.log("Order:");
            console.log(order);
            try {
                //use this object to create order
                this.success = true;
                this.dialogRef.close();
            }
            catch (err) {
                console.error(err);
            }
            this.loading = false;
        });
    }
    increment(elmRef) {
        console.log(elmRef.value);
        elmRef.value = (Number(elmRef.value) + 1).toString();
    }
    decrement(elmRef) {
        console.log(elmRef.value);
        elmRef.value = (Number(elmRef.value) - 1).toString();
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    //functions for calculating order totals with relevant taxes
    onChanges() {
        this.myForm.valueChanges.subscribe(val => {
            var before_tax = 0;
            var tax = 0;
            var tax_items = {
                "no_tax": { "count": 0, "total": 0 },
                "normal": { "count": 0, "total": 0 },
                "no_tax_6": { "count": 0, "total": 0 },
            };
            let formValue = this.myForm.value;
            for (let key in this.items) {
                for (let item of this.items[key]) {
                    if (formValue[item.name] > 0 && item.tax_catagory != null) {
                        tax_items[item.tax_catagory]["count"] += formValue[item.name];
                        tax_items[item.tax_catagory]["total"] += (formValue[item.name] * item.price);
                    }
                }
            }
            before_tax += tax_items.no_tax_6.total + tax_items.no_tax.total + tax_items.normal.total;
            //calculate individual taxes 
            if (tax_items.no_tax_6.count < 6) {
                tax += tax_items.no_tax_6.total * .14975;
            }
            tax += tax_items.normal.total * .14975;
            this.tax = tax;
            this.sub_total = before_tax;
            this.total = this.tax + this.sub_total;
        });
    }
}
NewOrderComponent.ɵfac = function NewOrderComponent_Factory(t) { return new (t || NewOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_item_orders_service__WEBPACK_IMPORTED_MODULE_6__["ItemOrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"])); };
NewOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewOrderComponent, selectors: [["app-new-order"]], viewQuery: function NewOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elemRef = _t.first);
    } }, decls: 61, vars: 30, consts: [[1, "form-flex", 3, "formGroup", "ngSubmit"], [1, "row", "top"], [1, "col-sm"], ["matInput", "", "placeholder", "First Name", "formControlName", "first_name"], ["matInput", "", "placeholder", "Last Name", "formControlName", "last_name"], ["type", "telephone", "matInput", "", "placeholder", "t\u00E9l\u00E9phone", "formControlName", "telephone"], ["matInput", "", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "Filter items", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "row", "flex-row"], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "col-6", "wrap"], ["class", "w-100", 3, "sliced", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], ["mat-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["mat-button", "", "type", "button", "class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], [1, "total_price"], [1, "subheading"], [1, "subheadingbold"], [1, "w-100"], ["type", "number", "autocomplete", "off", "matInput", "", 3, "placeholder", "formControlName"], ["type", "number", "matInput", "", "autocomplete", "off", 3, "placeholder", "formControlName"], ["mat-button", "", "type", "button", 1, "btn", "btn-danger", "ml-1", 3, "click"]], template: function NewOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewOrderComponent_Template_form_ngSubmit_2_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NewOrderComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Viennoiserie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, NewOrderComponent_mat_form_field_25_Template, 2, 2, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Pains");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, NewOrderComponent_mat_form_field_31_Template, 2, 4, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "N\u00F6el");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, NewOrderComponent_mat_form_field_37_Template, 2, 2, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Save Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, NewOrderComponent_button_43_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Subtotal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Tax: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.viewClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1))("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 14, ctx.items.viennoiserie, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 17, ctx.items.pains, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 20, ctx.items.noel, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 23, ctx.sub_total), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 25, ctx.tax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 27, ctx.total), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], pipes: [_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]], styles: [".top[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-width: 90vw;\n}\n\n.total_price[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: grey;\n}\n\n.subheadingbold[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n}\n\n.sliced[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n\n\n.filter-field[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  font-size: 16px;\n}\n\n  .filter-field .mat-form-field-underline {\n  background-color: transparent !important;\n}\n\n  .mat-dialog-container {\n  display: flex;\n  flex-flow: column;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1;\n}\n\n.form-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25ldy1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBR0E7Ozs7Ozs7OztDQUFBOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksd0NBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQURKOztBQUlBO0VBQ0ksT0FBQTtBQURKIiwiZmlsZSI6Im5ldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AgbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICAgIG1heC13aWR0aDogOTB2dztcbn1cblxuLnRvdGFsX3ByaWNlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uc3ViaGVhZGluZ2JvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2xpY2VkIHtcbiAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcbn1cblxuXG4vKlxuLndyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMlO1xufVxuKi9cblxuLmZpbHRlci1maWVsZCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG46Om5nLWRlZXAgLmZpbHRlci1maWVsZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGZsZXg6IDE7XG59XG5cbi5mb3JtLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZmxleDogMTtcbn1cblxuLmZsZXgtcm93IHtcbiAgICBmbGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-new-order',
                templateUrl: './new-order.component.html',
                styleUrls: ['./new-order.component.scss']
            }]
    }], function () { return [{ type: _services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"] }, { type: _services_item_orders_service__WEBPACK_IMPORTED_MODULE_6__["ItemOrdersService"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }]; }, { elemRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataService {
    constructor() {
        this.items = [];
        this.itemsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.orders = [];
        this.orderChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.idTraker = 0;
        this.orderQuantities = [];
        this.orderCountQuantities = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemNames = [];
        /*
            if ((<any>window).require) {
              try {
                this.ipc = (<any>window).require('electron').ipcRenderer;
              } catch (e) {
                throw e;
              }
            } else {
              console.warn('App not running inside Electron!');
            }
            */
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KyFs":
/*!*********************************************!*\
  !*** ./src/app/pipes/search-filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchFilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.name.toLocaleLowerCase().includes(searchText);
        });
    }
}
SearchFilterPipe.ɵfac = function SearchFilterPipe_Factory(t) { return new (t || SearchFilterPipe)(); };
SearchFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchFilter", type: SearchFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "QDTB":
/*!****************************************!*\
  !*** ./src/app/login-gaurd.service.ts ***!
  \****************************************/
/*! exports provided: LoginGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGaurdService", function() { return LoginGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginGaurdService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            return !user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(isAuth => {
            console.log(isAuth);
            if (!isAuth) {
                this.router.navigate(['/dashboard']);
                return false;
            }
            return true;
        }));
    }
}
LoginGaurdService.ɵfac = function LoginGaurdService_Factory(t) { return new (t || LoginGaurdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginGaurdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGaurdService, factory: LoginGaurdService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGaurdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-order/edit-order.component */ "0+/P");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-order/new-order.component */ "Dilc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/order.service */ "kVqo");
/* harmony import */ var _services_item_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/item-orders.service */ "C+v0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");




















const _c0 = ["firstTableSort"];
const _c1 = ["secondTableSort"];
const _c2 = ["thirdTableSort"];
function DashboardComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r54.first_name, " ");
} }
function DashboardComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r55.last_name, " ");
} }
function DashboardComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " telephone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r56.telephone, " ");
} }
function DashboardComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.orderSummary(item_r57), " ");
} }
function DashboardComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r58.total), " ");
} }
function DashboardComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r59.date, "mediumDate"), " ");
} }
function DashboardComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_td_41_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const item_r60 = ctx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.openEditDialog(item_r60.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
function DashboardComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 48);
} }
function DashboardComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r64.first_name, " ");
} }
function DashboardComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 49);
} }
function DashboardComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r65.last_name, " ");
} }
function DashboardComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 49);
} }
function DashboardComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " telephone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r66.telephone, " ");
} }
function DashboardComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 49);
} }
function DashboardComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.orderSummary(item_r67), " ");
} }
function DashboardComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 49);
} }
function DashboardComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r68.total), " ");
} }
function DashboardComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r35.calculateTotal(ctx_r35.ordersByDate)), " ");
} }
function DashboardComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_td_70_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const item_r69 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.openEditDialog(item_r69.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 49);
} }
function DashboardComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
function DashboardComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 48);
} }
function DashboardComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function DashboardComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r73.name, " ");
} }
function DashboardComponent_th_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r74.type, " ");
} }
function DashboardComponent_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r75.amount, " ");
} }
function DashboardComponent_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tranch\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r76.sliced_amount > 0 ? item_r76.sliced_amount : "", " ");
} }
function DashboardComponent_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
function DashboardComponent_tr_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 48);
} }
class DashboardComponent {
    constructor(datePipe, itemsService, ordersService, itemOrdersService, dialog, dataService, changeDetection, zone) {
        this.datePipe = datePipe;
        this.itemsService = itemsService;
        this.ordersService = ordersService;
        this.itemOrdersService = itemOrdersService;
        this.dialog = dialog;
        this.dataService = dataService;
        this.changeDetection = changeDetection;
        this.zone = zone;
        this.itemQuantities = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.orders = [];
        this.all_orders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.orderItemCountsList = [];
        this.ordersByDate = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.orderItemCounts = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ["name", "type", "amount", "sliced_amount"];
        this.displayedOrderColumns = ["first_name", "last_name", "telephone", "summary", "total", "details"];
        this.displayedAllOrderColumns = ["first_name", "last_name", "telephone", "summary", "total", "date", "details"];
        this.orderDateFooterColumnsToDisplay = ["total"];
        this.activeTab = "All Orders";
        this.itemOrders = [];
        this.searchText = "";
        this.total_for_date = 0;
        this.stringDate = "";
        this.filteredValues = {
            date: '',
            searchText: '',
        };
    }
    applyFilter() {
        var filterValue = this.searchText;
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.all_orders.filter = filterValue;
        this.orderItemCounts.filter = filterValue;
        console.log('Here is the date:');
        this.stringDate = new Date(this.currentlySelctedDate.setHours(0, 0, 0, 0)).toISOString();
        this.filteredValues.date = new Date(this.currentlySelctedDate.setHours(0, 0, 0, 0)).toISOString();
        this.filteredValues.searchText = this.searchText;
        this.ordersByDate.filter = JSON.stringify(this.filteredValues);
    }
    ngOnInit() {
        this.ordersByDate.filterPredicate = this.customFilterPredicate;
        this.itemsService.fetchItems().subscribe();
        this.ordersService.getOrders().subscribe();
        this.itemOrdersService.getItemOrders().subscribe();
        this.currentlySelctedDate = new Date();
        this.currentlySelctedDate.setDate(new Date().getDate() + 1);
        this.currentlySelctedDate.setHours(0, 0, 0, 0);
        this.dateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentlySelctedDate);
        this.getOrdersForCurrentlySelectedDate();
        this.itemOrdersService.itemOrderSubject.subscribe((itemOrders) => {
            this.itemOrders = itemOrders;
            this.getOrdersForCurrentlySelectedDate();
            this.applyFilter();
        });
        this.ordersService.orderChangedSubject.subscribe(orders => {
            this.getOrdersForCurrentlySelectedDate();
            this.all_orders.data = orders;
            this.ordersByDate.data = orders;
            console.log(orders);
            this.changeDetection.detectChanges();
        });
    }
    onTabChange(event) {
        this.activeTab = event.tab.textLabel;
    }
    onDateSelected(event) {
        this.currentlySelctedDate = event.value;
        console.log(event.value);
        this.getOrdersForCurrentlySelectedDate();
        this.changeDetection.detectChanges();
    }
    getOrdersForCurrentlySelectedDate() {
        var orders = this.ordersService.orders;
        console.log(orders);
        var filteredOrders = orders.filter(order => {
            let selectedDate = new Date(this.currentlySelctedDate);
            let orderDate = new Date(order.date);
            selectedDate.setHours(0, 0, 0, 0);
            orderDate.setHours(0, 0, 0, 0);
            return orderDate.toDateString() === selectedDate.toDateString();
        });
        var sortedOrders = filteredOrders.sort((a, b) => {
            return +a.id - +b.id;
        });
        this.orders = sortedOrders;
        this.orderItemCountsList = [];
        this.orderItemCounts.data = this.orderItemCountsList;
        for (let item of this.itemsService.items) {
            if (!item.sliced) {
                this.orderItemCountsList.push({ id: item.id, name: item['combined_name'], amount: 0, sliced_amount: 0, type: item.item_type });
            }
        }
        var filteredItemOrders = this.itemOrders.filter(iorder => {
            let selectedDate = new Date(this.currentlySelctedDate);
            let orderDate = new Date(iorder.date);
            selectedDate.setHours(0, 0, 0, 0);
            orderDate.setHours(0, 0, 0, 0);
            return orderDate.toDateString() === selectedDate.toDateString();
        });
        for (let itemOrder of filteredItemOrders) {
            for (let orderItemCount of this.orderItemCountsList) {
                if (itemOrder.combined_name === orderItemCount.name) {
                    console.log('item order:');
                    console.log(itemOrder);
                    orderItemCount.amount += itemOrder.amount;
                    if (itemOrder.sliced) {
                        console.log('its sliced');
                        orderItemCount.sliced_amount += itemOrder.amount;
                    }
                }
            }
        }
        this.orderItemCounts.data = this.orderItemCountsList;
        this.applyFilter();
    }
    updateSearch(search) {
        this.searchText = search;
        this.applyFilter();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__["NewOrderComponent"], {
            width: '100%',
            height: '98%',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    calculateTotal(source) {
        let data = source.filteredData;
        var total = 0;
        data.forEach((order) => total += order.total);
        return total;
    }
    openEditDialog(id) {
        console.log(id);
        var dialogRef = this.dialog.open(_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_3__["EditOrderComponent"], {
            width: '100%',
            height: '98%',
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    //one order summary no need for database
    orderSummary(order) {
        if (order.itemOrders != null) {
            var itemOrders = order.itemOrders;
            itemOrders.sort((a, b) => {
                //not working
                return ('' + a.itemName).localeCompare(b.itemName);
            });
            var summary = "";
            for (let item_order of itemOrders) {
                if (item_order.amount > 0) {
                    summary = summary + item_order.amount + " ";
                    summary = summary + item_order.itemName + ", ";
                }
            }
        }
        return summary;
    }
    printPage() {
        const html = document.getElementById('orderAmountTable');
        //this.dataService.sendDataToPrint(html.innerHTML)
    }
    ngAfterViewInit() {
        this.ordersByDate.sort = this.firstTableSort;
        this.orderItemCounts.sort = this.thirdTableSort;
        this.all_orders.sort = this.secondTableSort;
    }
    //filter stuff
    customFilterPredicate(data, filter) {
        const filterObject = JSON.parse(filter);
        const first_name = data.first_name.toString().trim().toLowerCase().indexOf(filterObject.searchText.toLowerCase()) !== -1;
        const last_name = data.last_name.toString().trim().toLowerCase().indexOf(filterObject.searchText.toLowerCase()) !== -1;
        return data.date == filterObject.date && (first_name || last_name);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_6__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_item_orders_service__WEBPACK_IMPORTED_MODULE_8__["ItemOrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondTableSort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstTableSort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thirdTableSort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], decls: 93, vars: 15, consts: [[1, "container-fluid", "mt-3"], [1, "row", "no-print"], [1, "col-sm", "header-bar"], [1, "btn", "btn-primary", "v-top", 3, "click"], [1, "ml-2"], ["matInput", "", "autocomplete", "off", "placeholder", "Filter items", 3, "keyup"], [1, "ml-2", "mr-2"], ["matInput", "", 3, "matDatepicker", "formControl", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "row"], [1, "col-sm"], [3, "selectedTabChange"], ["label", "All Orders"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "mt-3", "table-max", 3, "dataSource"], ["firstTable", "", "firstTableSort", "matSort"], ["matColumnDef", "first_name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "last_name"], ["matColumnDef", "telephone"], ["matColumnDef", "summary"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "total"], ["matColumnDef", "date"], ["matColumnDef", "details"], ["mat-header-cell", "", "mat-sort-header", "", "class", "no-print", 4, "matHeaderCellDef"], ["class", "no-print", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Orders for Date"], ["secondTable", "", "secondTableSort", "matSort"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["label", "Production Quantities"], ["id", "orderAmountTable", "mat-table", "", "matSort", "", 1, "mat-elevation-z8", "mt-3", "table-max", 3, "dataSource"], ["thirdTable", "", "thirdTableSort", "matSort"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["matColumnDef", "amount"], ["matColumnDef", "sliced_amount"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "no-print"], ["mat-cell", "", 1, "no-print"], [1, "btn", "btn-primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-cell", ""], [1, "no-print", "btn", "btn-primary", 3, "click"], ["mat-footer-row", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_3_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_6_listener($event) { return ctx.updateSearch($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DashboardComponent_Template_input_dateChange_10_listener($event) { return ctx.onDateSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function DashboardComponent_Template_mat_tab_group_selectedTabChange_16_listener($event) { return ctx.onTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_th_22_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardComponent_td_23_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DashboardComponent_th_25_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DashboardComponent_td_26_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DashboardComponent_th_28_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DashboardComponent_td_29_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DashboardComponent_th_31_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_td_32_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_th_34_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_td_35_Template, 3, 3, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DashboardComponent_th_37_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DashboardComponent_td_38_Template, 3, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DashboardComponent_th_40_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DashboardComponent_td_41_Template, 3, 0, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DashboardComponent_tr_42_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_tr_43_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 14, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DashboardComponent_th_49_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DashboardComponent_td_50_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, DashboardComponent_td_51_Template, 1, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_th_53_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, DashboardComponent_td_54_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DashboardComponent_td_55_Template, 1, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, DashboardComponent_th_57_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DashboardComponent_td_58_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, DashboardComponent_td_59_Template, 1, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DashboardComponent_th_61_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DashboardComponent_td_62_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, DashboardComponent_td_63_Template, 1, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DashboardComponent_th_65_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, DashboardComponent_td_66_Template, 3, 3, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DashboardComponent_td_67_Template, 4, 3, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, DashboardComponent_th_69_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, DashboardComponent_td_70_Template, 3, 0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DashboardComponent_td_71_Template, 1, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, DashboardComponent_tr_72_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, DashboardComponent_tr_73_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DashboardComponent_tr_74_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-tab", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, DashboardComponent_th_80_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, DashboardComponent_td_81_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](82, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DashboardComponent_th_83_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DashboardComponent_td_84_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, DashboardComponent_th_86_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, DashboardComponent_td_87_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, DashboardComponent_th_89_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, DashboardComponent_td_90_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, DashboardComponent_tr_91_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, DashboardComponent_tr_92_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden-item", ctx.activeTab == "All Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("formControl", ctx.dateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.all_orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedAllOrderColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedAllOrderColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.ordersByDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedOrderColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedOrderColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", ctx.displayedOrderColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.orderItemCounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatFooterRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".hidden-item[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.v-top[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW4taXRlbSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udi10b3Age1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _services_items_service__WEBPACK_IMPORTED_MODULE_6__["ItemsService"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] }, { type: _services_item_orders_service__WEBPACK_IMPORTED_MODULE_8__["ItemOrdersService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { secondTableSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['firstTableSort']
        }], firstTableSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['secondTableSort']
        }], thirdTableSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['thirdTableSort']
        }] }); })();


/***/ }),

/***/ "RNaf":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-item/add-item.component */ "cV+c");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-item/edit-item.component */ "T6+m");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/capitalize.pipe */ "2hcr");












function ItemsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function ItemsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r11.name), " ");
} }
function ItemsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r12.item_type), " ");
} }
function ItemsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r13.price), " ");
} }
function ItemsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 15);
} }
function ItemsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.editItemDialog(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function ItemsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
class ItemsComponent {
    constructor(itemService, dialog, changeDetection, zone) {
        this.itemService = itemService;
        this.dialog = dialog;
        this.changeDetection = changeDetection;
        this.zone = zone;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedItemColumns = ["name", "item_type", "price", "edit"];
    }
    ngOnInit() {
        console.log('init');
        this.dataSource.data = this.itemService.items;
        this.itemService.itemsSubject.subscribe((items) => {
            this.dataSource.data = items.sort((a, b) => {
                return +b.id - +a.id;
            });
            this.changeDetection.detectChanges();
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__["AddItemComponent"], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(result => {
            //refresh table
            this.errorMessage = result;
        });
    }
    editItemDialog(item) {
        console.log(item);
        var dialogRef;
        this.zone.run(() => {
            dialogRef = this.dialog.open(_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_3__["EditItemComponent"], {
                width: '250px',
                data: {
                    item: item
                }
            });
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], viewQuery: function ItemsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 21, vars: 4, consts: [[1, "container-fluid"], ["class", "alert alert-danger", 4, "ngIf"], [1, "row"], [1, "col-sm", "mt-3"], [1, "btn", "btn-primary", 3, "click"], ["mat-table", "", "matSort", "", 1, "table-max", "mat-elevation-z8", "mt-3", "table-max", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "item_type"], ["matColumnDef", "price"], ["matColumnDef", "edit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "alert", "alert-danger"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemsComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_4_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemsComponent_th_8_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemsComponent_td_9_Template, 3, 3, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemsComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ItemsComponent_td_12_Template, 3, 3, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItemsComponent_th_14_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ItemsComponent_td_15_Template, 3, 3, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ItemsComponent_th_17_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ItemsComponent_td_18_Template, 3, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ItemsComponent_tr_19_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ItemsComponent_tr_20_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedItemColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedItemColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_8__["CapitalizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items',
                templateUrl: './items.component.html',
                styleUrls: ['./items.component.scss']
            }]
    }], function () { return [{ type: _services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.title = 'lpdv';
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.authService.autoLogin();
        console.log('getting data');
        //this.dataService.getStoredData()
    }
    logout() {
        this.authService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "items", 1, "nav-link"], [1, "navbar-nav", "navbar-right"], ["type", "button", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Le Pain Dans les Voiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["#logo[_ngcontent-%COMP%] {\n  height: 69%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XG4gICAgaGVpZ2h0OiA2OSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "T6+m":
/*!**************************************************!*\
  !*** ./src/app/edit-item/edit-item.component.ts ***!
  \**************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/item.model */ "yZ/a");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function EditItemComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r2.viewValue, " ");
} }
function EditItemComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r3.viewValue, " ");
} }
class EditItemComponent {
    constructor(itemService, fb, dialogRef, data) {
        this.itemService = itemService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.success = false;
        //types of foods
        this.types = [
            { value: 'viennoiserie', viewValue: 'Viennoiserie' },
            { value: 'pains', viewValue: 'Pains' },
            { value: 'noel', viewValue: 'Nöel' }
        ];
        this.tax_classifications = [
            { value: 'normal', viewValue: 'normal' },
            { value: 'no_tax_6', viewValue: 'tax before 6' },
            { value: 'no_tax', viewValue: 'no tax' },
        ];
        console.log(data);
        this.item = data.item;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            item_type: [this.item.item_type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [this.item.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sliced: [this.item.sliced, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax_catagory: [this.item.tax_catagory, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submitHandler() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const formValue = this.myForm.value;
            try {
                //use this object to create product
                const item = _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"].newItem(formValue);
                item.id = this.item.id;
                item.user_id = this.item.user_id;
                this.itemService.editItem(item).subscribe(res => {
                    console.log(res);
                });
                //this.dataService.saveItem(item)
                this.success = true;
                this.dialogRef.close();
            }
            catch (err) {
                console.error(err);
            }
            this.loading = false;
        });
    }
    delete() {
        this.itemService.deleteItem(this.item).subscribe(res => {
            console.log(res);
        });
        this.dialogRef.close();
    }
}
EditItemComponent.ɵfac = function EditItemComponent_Factory(t) { return new (t || EditItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
EditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditItemComponent, selectors: [["app-edit-item"]], decls: 27, vars: 6, consts: [[3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "name", "formControlName", "name"], ["appearance", "fill"], ["formControlName", "item_type"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "tax_catagory"], ["formControlName", "sliced"], [3, "value"], ["matInput", "", "placeholder", "price", "formControlName", "price"], ["mat-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["mat-button", "", "color", "primary", "type", "button", 1, "ml-2", "btn", "btn-danger", 3, "click"]], template: function EditItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditItemComponent_Template_form_ngSubmit_2_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Type of item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditItemComponent_mat_option_9_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tax classification");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditItemComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " No Slice Option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Include sliced Option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Save Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditItemComponent_Template_button_click_25_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tax_classifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-item',
                templateUrl: './edit-item.component.html',
                styleUrls: ['./edit-item.component.scss']
            }]
    }], function () { return [{ type: _services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(
    //bakery name
    id, name, token) {
        this.id = id;
        this.name = name;
        this.token = token;
    }
    setExpiaryTime(issuedTime) {
        console.log(issuedTime);
        this.expiaryTime = new Date(0);
        this.expiaryTime.setUTCSeconds(issuedTime + 86400);
        console.log(this.expiaryTime);
    }
    getToken() {
        if (this.expiaryTime > new Date()) {
            return this.token;
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "W8Z6":
/*!**********************************!*\
  !*** ./src/app/router.module.ts ***!
  \**********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-item/add-item.component */ "cV+c");
/* harmony import */ var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-gaurd.service */ "zXKA");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _login_gaurd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-gaurd.service */ "QDTB");











const appRoutes = [
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_login_gaurd_service__WEBPACK_IMPORTED_MODULE_8__["LoginGaurdService"]] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_login_gaurd_service__WEBPACK_IMPORTED_MODULE_8__["LoginGaurdService"]] },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurdService"]] },
    { path: "items", component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"], canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurdService"]] },
    { path: "items/addItem", component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__["AddItemComponent"], canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurdService"]] }
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./router.module */ "W8Z6");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-item/add-item.component */ "cV+c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-order/new-order.component */ "Dilc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-order/edit-order.component */ "0+/P");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "T6+m");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth-interceptor.service */ "3IFh");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "2hcr");
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/search-filter.pipe */ "KyFs");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_27__["AuthInterceptorService"], multi: true }
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _router_module__WEBPACK_IMPORTED_MODULE_11__["RoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _items_items_component__WEBPACK_IMPORTED_MODULE_10__["ItemsComponent"],
        _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"],
        _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_18__["NewOrderComponent"],
        _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_22__["EditOrderComponent"],
        _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_23__["EditItemComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
        _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_29__["CapitalizePipe"],
        _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["SearchFilterPipe"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _router_module__WEBPACK_IMPORTED_MODULE_11__["RoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _items_items_component__WEBPACK_IMPORTED_MODULE_10__["ItemsComponent"],
                    _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"],
                    _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_18__["NewOrderComponent"],
                    _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_22__["EditOrderComponent"],
                    _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_23__["EditItemComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                    _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_29__["CapitalizePipe"],
                    _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["SearchFilterPipe"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _router_module__WEBPACK_IMPORTED_MODULE_11__["RoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_27__["AuthInterceptorService"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZOSX":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item.model */ "yZ/a");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "ccyI");







class ItemsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.items = [];
        this.itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.authService.user.subscribe(user => {
            if (user) {
                this.fetchItems().subscribe(res => {
                    console.log(res);
                });
            }
        });
    }
    addItem(item) {
        //assign user id to item
        item.name = item.name.toLowerCase();
        this.authService.user.subscribe(user => {
            console.log(user);
            item.user_id = user.id;
        });
        return this.http.post('/api/items/add', item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.items.push(res);
            this.itemsSubject.next(this.items);
        }));
    }
    fetchItems() {
        console.log("getting items");
        return this.http.get('/api/items').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.items = [];
            for (let item of res['items']) {
                this.items.push(item);
            }
            this.itemsSubject.next(this.items);
        }));
    }
    editItem(item) {
        console.log(item);
        item.name = item.name.toLowerCase();
        return this.http.put('api/items', item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.items = this.items.map((item) => {
                if (item.id === res['id']) {
                    return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].newItem(res);
                }
                else {
                    return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].newItem(item);
                }
            });
            this.itemsSubject.next(this.items);
        }));
    }
    deleteItem(item) {
        return this.http.delete('api/items/' + item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.items = this.items.filter(item => {
                return !(item.id === res['id']);
            });
            this.itemsSubject.next(this.items);
        }));
    }
    handleErrors(errorRes) {
        let errorMessage = "an unknown error occured";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorRes);
        }
        switch (errorRes.error.error) {
            case "ITEM_EXISTS":
                errorMessage = "The item already exists";
        }
        throw (errorMessage);
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "cV+c":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item.model */ "yZ/a");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function AddItemComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r2.viewValue, " ");
} }
function AddItemComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r3.viewValue, " ");
} }
class AddItemComponent {
    constructor(itemsService, fb, dialogRef) {
        this.itemsService = itemsService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.success = false;
        //types of foods
        this.types = [
            { value: 'viennoiserie', viewValue: 'Viennoiserie' },
            { value: 'pains', viewValue: 'Pains' },
            { value: 'noel', viewValue: 'Nöel' },
        ];
        this.tax_classifications = [
            { value: 'normal', viewValue: 'normal' },
            { value: 'no_tax_6', viewValue: 'tax before 6' },
            { value: 'no_tax', viewValue: 'no tax' },
        ];
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            item_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sliced: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax_catagory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submitHandler() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const formValue = this.myForm.value;
            try {
                //use this object to create product
                console.log(formValue);
                const item = _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].newItem(formValue);
                //this will verify that sliced and non sliced items can be called for the same item
                item.name = item.name.toLowerCase();
                item.combined_name = item.name;
                //if sliced duplicate 
                if (item.sliced) {
                    item.sliced_option = true;
                    let item2 = _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].newItem(item);
                    item2.sliced = true;
                    item.sliced = false;
                    item2.name = item2.name + " Tr.";
                    this.itemsService.addItem(item2).subscribe(response => {
                        console.log(response);
                        this.dialogRef.close();
                    }, errorRes => {
                        console.log(errorRes);
                        this.dialogRef.close(errorRes);
                    });
                }
                else {
                    item.sliced_option = false;
                }
                this.itemsService.addItem(item).subscribe(response => {
                    console.log(response);
                    this.dialogRef.close();
                }, errorRes => {
                    console.log(errorRes);
                    this.dialogRef.close(errorRes);
                });
                //this.dataService.addItem(item)
                this.success = true;
            }
            catch (err) {
                console.error(err);
            }
            this.loading = false;
        });
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 25, vars: 6, consts: [[3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "name", "formControlName", "name"], ["appearance", "fill"], ["formControlName", "item_type"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "tax_catagory"], ["formControlName", "sliced"], [3, "value"], ["matInput", "", "placeholder", "price", "formControlName", "price"], ["mat-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add a new Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddItemComponent_Template_form_ngSubmit_2_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Type of item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddItemComponent_mat_option_9_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tax classification");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddItemComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " No Slice Option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Include sliced Option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tax_classifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-item',
                templateUrl: './add-item.component.html',
                styleUrls: ['./add-item.component.scss']
            }]
    }], function () { return [{ type: _services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/user.model */ "Tj/N");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    signup(username, password) {
        return this.http.post('/api/user/register', {
            name: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(resData => {
            this.handleAuthentication(resData.id, resData.name, resData.token);
        }));
    }
    login(username, password) {
        return this.http.post('/api/user/login', {
            name: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(resData => {
            this.handleAuthentication(resData.id, resData.name, resData.token);
        }));
    }
    handleAuthentication(id, name, token) {
        const data = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](id, name, token);
        //user.setExpiaryTime(Date(data['iat']))
        user.setExpiaryTime(data['iat']);
        this.user.next(new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](id, name, token));
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogout();
    }
    autoLogin() {
        if (localStorage.getItem('userData')) {
            const { id, name, token, expiaryTime } = JSON.parse(localStorage.getItem('userData'));
            const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](id, name, token);
            const expiaryDate = new Date(expiaryTime).getTime() / 1000;
            user.setExpiaryTime(expiaryDate);
            if (user.getToken()) {
                this.user.next(user);
                this.router.navigate(['/dashboard']);
                console.log('login worked');
                this.autoLogout();
            }
            else {
                console.log('the token expired');
            }
        }
        else {
            console.log('no user data saved');
        }
    }
    autoLogout() {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, 86400000);
    }
    logout() {
        console.log('logout called');
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
    }
    handleErrors(errorRes) {
        let errorMessage = "an unknown error occured";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }
        switch (errorRes.error.error) {
            case "USER_EXISTS":
                errorMessage = "This user already exists";
                break;
            case 'INVALID_USERNAME':
                errorMessage = "Invalid username or password";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "Invalid username or password";
                break;
            case 'ACCESS_DENIED':
                errorMessage = "Invalid creddentials";
                break;
            case 'INVALID_TOKEN':
                errorMessage = "Invalid creddentials";
                break;
        }
        throw (errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/order.model */ "qHRi");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _item_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-orders.service */ "C+v0");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class OrderService {
    constructor(itemOrderService, authService, http) {
        this.itemOrderService = itemOrderService;
        this.authService = authService;
        this.http = http;
        this.orders = [];
        this.orderChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addOrder(order) {
        console.log('order: ');
        console.log(order);
        //assign user id to item
        this.authService.user.subscribe((user) => {
            console.log(user);
            order.user_id = user.id;
        });
        console.log(order);
        return this.http.post('/api/orders/add', order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            console.log(res);
        }));
    }
    getOrders() {
        return this.http.get('/api/orders').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.orders = [];
            for (let order of res['orders']) {
                this.orders.push(_models_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"].newOrder(order));
            }
            this.orderChangedSubject.next(this.orders);
        }));
    }
    editOrder(order) {
        return this.http.put('api/orders', order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            console.log(res);
        }));
    }
    deleteOrder(order) {
        console.log('deleting');
        this.itemOrderService.deleteItemOrdersForOrder(order.id);
        return this.http.delete('api/orders/' + order.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.orders = this.orders.filter(item => {
                return !(item.id === res['id']);
            });
            this.orderChangedSubject.next(this.orders);
        }));
    }
    getOrderById(id) {
        for (let order of this.orders) {
            if (order.id === id) {
                return order;
            }
        }
    }
    handleErrors(errorRes) {
        let errorMessage = "an unknown error occured";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorRes);
        }
        switch (errorRes.error.error) {
            case "ITEM_EXISTS":
                errorMessage = "The item already exists";
        }
        throw (errorMessage);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_item_orders_service__WEBPACK_IMPORTED_MODULE_4__["ItemOrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _item_orders_service__WEBPACK_IMPORTED_MODULE_4__["ItemOrdersService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qHRi":
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
    constructor(id, user_id, first_name, last_name, telephone, date, sub_total, tax, total) {
        this.id = id;
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.telephone = telephone;
        this.date = date;
        this.sub_total = sub_total;
        this.tax = tax;
        this.total = total;
    }
    static newOrder(params) {
        let order = new Order(params.id, params.user_id, params.first_name, params.last_name, params.telephone, params.date, params.sub_total, params.tax, params.total);
        order.itemOrders = params.itemOrders;
        return order;
    }
    addItemOrder(itemOrder) {
        this.itemOrders.push(itemOrder);
    }
}


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        if (this.authService.user) {
            this.authService.autoLogin();
        }
    }
    onSubmit(form) {
        console.log(form);
        const { username, password } = form.value;
        if (form.valid) {
            this.authService.login(username, password).subscribe(res => {
                console.log(res);
                this.router.navigate(['/dashboard']);
            }, errorRes => {
                console.log(errorRes);
                this.errorMessage = errorRes;
            });
        }
        form.reset();
    }
    signUp() {
        this.router.navigate(['/register']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-xs-8", "col-md-6", "col-md-offset-1"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "ngModel", "", "name", "username", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "yZ/a":
/*!**************************************!*\
  !*** ./src/app/models/item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor(id, user_id, name, combined_name, item_type, price, sliced, sliced_option, tax_catagory) {
        this.id = id;
        this.user_id = user_id;
        this.name = name;
        this.combined_name = combined_name;
        this.item_type = item_type;
        this.price = price;
        this.sliced = sliced;
        this.sliced_option = sliced_option;
        this.tax_catagory = tax_catagory;
    }
    static newItem(params) {
        let item = new Item(params.id, params.user_id, params.name, params.combined_name, params.item_type, params.price, params.sliced, params.sliced_option, params.tax_catagory);
        return item;
    }
}
//const {type, data} = resp_data


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXKA":
/*!***************************************!*\
  !*** ./src/app/auth-gaurd.service.ts ***!
  \***************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGaurdService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            return !!user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(isAuth => {
            console.log(isAuth);
            if (!isAuth) {
                this.router.navigate(['/login']);
            }
        }));
    }
}
AuthGaurdService.ɵfac = function AuthGaurdService_Factory(t) { return new (t || AuthGaurdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGaurdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGaurdService, factory: AuthGaurdService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGaurdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map