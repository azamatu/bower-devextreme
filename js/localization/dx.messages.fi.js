/*!
* DevExtreme (dx.messages.fi.js)
* Version: 18.2.10 (build 19227)
* Build date: Thu Aug 15 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        fi: {
            Yes: "Kyll\xe4",
            No: "Ei",
            Cancel: "Peruuta",
            Clear: "Tyhjenn\xe4",
            Done: "Valmis",
            Loading: "Ladataan...",
            Select: "Valitse...",
            Search: "Haku",
            Back: "Takaisin",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Ei n\xe4ytett\xe4vi\xe4 tietoja",
            "validation-required": "Pakollinen",
            "validation-required-formatted": "{0} on pakollinen",
            "validation-numeric": "Arvon on oltava luku",
            "validation-numeric-formatted": "{0} on oltava luku",
            "validation-range": "Arvo on alueen ulkopuolella",
            "validation-range-formatted": "{0} on alueen ulkopuolella",
            "validation-stringLength": "Arvon pituus ei ole oikein",
            "validation-stringLength-formatted": "Arvolla {0} on v\xe4\xe4r\xe4 pituus",
            "validation-custom": "Arvo on virheellinen",
            "validation-custom-formatted": "{0} on virheellinen",
            "validation-compare": "Arvot eiv\xe4t t\xe4sm\xe4\xe4",
            "validation-compare-formatted": "{0} eiv\xe4t t\xe4sm\xe4\xe4",
            "validation-pattern": "Arvo ei vastaa mallia",
            "validation-pattern-formatted": "{0} ei vastaa mallia",
            "validation-email": "S\xe4hk\xf6postiosoite on virheellinen",
            "validation-email-formatted": "{0} on virheellinen",
            "validation-mask": "Arvo on virheellinen",
            "dxLookup-searchPlaceholder": "Merkkien v\xe4himm\xe4ism\xe4\xe4r\xe4: {0}",
            "dxList-pullingDownText": "P\xe4ivit\xe4 vet\xe4m\xe4ll\xe4 alas...",
            "dxList-pulledDownText": "P\xe4ivit\xe4 vapauttamalla...",
            "dxList-refreshingText": "P\xe4ivitet\xe4\xe4n...",
            "dxList-pageLoadingText": "Ladataan...",
            "dxList-nextButtonText": "Lis\xe4\xe4",
            "dxList-selectAll": "Valitse kaikki",
            "dxListEditDecorator-delete": "Poista",
            "dxListEditDecorator-more": "Lis\xe4\xe4",
            "dxScrollView-pullingDownText": "P\xe4ivit\xe4 vet\xe4m\xe4ll\xe4 alas...",
            "dxScrollView-pulledDownText": "P\xe4ivit\xe4 vapauttamalla...",
            "dxScrollView-refreshingText": "P\xe4ivitet\xe4\xe4n...",
            "dxScrollView-reachBottomText": "Ladataan...",
            "dxDateBox-simulatedDataPickerTitleTime": "Valitse kellonaika",
            "dxDateBox-simulatedDataPickerTitleDate": "Valitse p\xe4iv\xe4m\xe4\xe4r\xe4",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Valitse p\xe4iv\xe4m\xe4\xe4r\xe4 ja kellonaika",
            "dxDateBox-validation-datetime": "Arvon on oltava p\xe4iv\xe4ys tai aika",
            "dxFileUploader-selectFile": "Valitse tiedosto",
            "dxFileUploader-dropFile": "tai ved\xe4 ja pudota tiedosto t\xe4h\xe4n",
            "dxFileUploader-bytes": "tavua",
            "dxFileUploader-kb": "kt",
            "dxFileUploader-Mb": "Mt",
            "dxFileUploader-Gb": "Gt",
            "dxFileUploader-upload": "L\xe4het\xe4",
            "dxFileUploader-uploaded": "L\xe4hetetty",
            "dxFileUploader-readyToUpload": "Valmis l\xe4hetett\xe4v\xe4ksi",
            "dxFileUploader-uploadFailedMessage": "L\xe4hetys ep\xe4onnistui",
            "dxFileUploader-invalidFileExtension": "",
            "dxFileUploader-invalidMaxFileSize": "",
            "dxFileUploader-invalidMinFileSize": "",
            "dxRangeSlider-ariaFrom": "Alkaen",
            "dxRangeSlider-ariaTill": "Asti",
            "dxSwitch-switchedOnText": "P\xc4\xc4LLE",
            "dxSwitch-switchedOffText": "POIS",
            "dxForm-optionalMark": "valinnainen",
            "dxForm-requiredMessage": "{0} on valinnainen",
            "dxNumberBox-invalidValueMessage": "Arvon on oltava numero",
            "dxDataGrid-columnChooserTitle": "Sarakkeenvalitsin",
            "dxDataGrid-columnChooserEmptyText": "Ved\xe4 sarake t\xe4\xe4ll\xe4 piilottaa sen",
            "dxDataGrid-groupContinuesMessage": "Jatkuu seuraavalla sivulla",
            "dxDataGrid-groupContinuedMessage": "Jatkoa edelliselt\xe4 sivulta",
            "dxDataGrid-groupHeaderText": "Ryhmittele t\xe4m\xe4n sarakkeen mukaan",
            "dxDataGrid-ungroupHeaderText": "Poista ryhmittely",
            "dxDataGrid-ungroupAllText": "Poista kaikki ryhmittym\xe4t",
            "dxDataGrid-editingEditRow": "Muokkaa",
            "dxDataGrid-editingSaveRowChanges": "Tallenna",
            "dxDataGrid-editingCancelRowChanges": "Peruuta",
            "dxDataGrid-editingDeleteRow": "Poista",
            "dxDataGrid-editingUndeleteRow": "Palauta",
            "dxDataGrid-editingConfirmDeleteMessage": "Oletko varma, ett\xe4 haluat poistaa t\xe4m\xe4n tietueen?",
            "dxDataGrid-validationCancelChanges": "Peruuta muutokset",
            "dxDataGrid-groupPanelEmptyText": "Ved\xe4 sarakeotsikko t\xe4h\xe4n, jos haluat ryhmitell\xe4 kyseisen sarakkeen mukaan",
            "dxDataGrid-noDataText": "Ei dataa",
            "dxDataGrid-searchPanelPlaceholder": "Haku...",
            "dxDataGrid-filterRowShowAllText": "(Kaikki)",
            "dxDataGrid-filterRowResetOperationText": "Palauta",
            "dxDataGrid-filterRowOperationEquals": "Yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationNotEquals": "Eri suuri kuin",
            "dxDataGrid-filterRowOperationLess": "Pienempi kuin",
            "dxDataGrid-filterRowOperationLessOrEquals": "Pienempi tai yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationGreater": "Suurempi kuin",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Suurempi tai yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationStartsWith": "Alkaa merkeill\xe4",
            "dxDataGrid-filterRowOperationContains": "Sis\xe4lt\xe4\xe4",
            "dxDataGrid-filterRowOperationNotContains": "Ei sis\xe4ll\xe4",
            "dxDataGrid-filterRowOperationEndsWith": "Loppuu merkeill\xe4",
            "dxDataGrid-filterRowOperationBetween": "V\xe4lill\xe4",
            "dxDataGrid-filterRowOperationBetweenStartText": "Alkaa",
            "dxDataGrid-filterRowOperationBetweenEndText": "Loppu",
            "dxDataGrid-applyFilterText": "K\xe4yt\xe4 suodatinta",
            "dxDataGrid-trueText": "tosi",
            "dxDataGrid-falseText": "ep\xe4tosi",
            "dxDataGrid-sortingAscendingText": "Lajittele nouseva",
            "dxDataGrid-sortingDescendingText": "Lajittele laskeva",
            "dxDataGrid-sortingClearText": "Tyhjenn\xe4 lajittelu",
            "dxDataGrid-editingSaveAllChanges": "Tallenna muutokset",
            "dxDataGrid-editingCancelAllChanges": "Hylk\xe4\xe4 muutokset",
            "dxDataGrid-editingAddRow": "Lis\xe4\xe4 rivi",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min {1} on {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max {1} on {0}",
            "dxDataGrid-summaryAvg": "Keskiarvo: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Keskiarvo {1} on {0}",
            "dxDataGrid-summarySum": "Summa: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summa {1} on {0}",
            "dxDataGrid-summaryCount": "M\xe4\xe4r\xe4: {0}",
            "dxDataGrid-columnFixingFix": "Kiinte\xe4t sarakkeet",
            "dxDataGrid-columnFixingUnfix": "Poista kiinte\xe4t sarakkeet",
            "dxDataGrid-columnFixingLeftPosition": "Vasemmalle",
            "dxDataGrid-columnFixingRightPosition": "Oikealle",
            "dxDataGrid-exportTo": "Vie",
            "dxDataGrid-exportToExcel": "Vie Exceliin",
            "dxDataGrid-excelFormat": "Excel-tiedostot",
            "dxDataGrid-selectedRows": "Valitut tietueet",
            "dxDataGrid-exportSelectedRows": "Vie valitut tietueet",
            "dxDataGrid-exportAll": "Vie kaikki tiedot",
            "dxDataGrid-headerFilterEmptyValue": "(Tyhj\xe4t)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Peruuta",
            "dxDataGrid-ariaColumn": "Sarake",
            "dxDataGrid-ariaValue": "Arvo",
            "dxDataGrid-ariaFilterCell": "Suodatinsolu",
            "dxDataGrid-ariaCollapse": "Tiivist\xe4",
            "dxDataGrid-ariaExpand": "Laajenna",
            "dxDataGrid-ariaDataGrid": "Tietoruudukko",
            "dxDataGrid-ariaSearchInGrid": "Hae tietorivilt\xe4",
            "dxDataGrid-ariaSelectAll": "Valitse kaikki",
            "dxDataGrid-ariaSelectRow": "Valitse rivi",
            "dxDataGrid-filterBuilderPopupTitle": "Suodattimen muodostin",
            "dxDataGrid-filterPanelCreateFilter": "Luo suodatin",
            "dxDataGrid-filterPanelClearFilter": "Tyhjenn\xe4",
            "dxDataGrid-filterPanelFilterEnabledHint": "Ota suodatin k\xe4ytt\xf6\xf6n",
            "dxTreeList-ariaTreeList": "Puu",
            "dxTreeList-editingAddRowToNode": "Lis\xe4\xe4",
            "dxPager-infoText": "Sivu {0}/{1} ({2} kohdetta)",
            "dxPager-pagesCountText": "/",
            "dxPivotGrid-grandTotal": "Loppusumma",
            "dxPivotGrid-total": "{0} Summa",
            "dxPivotGrid-fieldChooserTitle": "Kent\xe4n valitseminen",
            "dxPivotGrid-showFieldChooser": "Avaa kent\xe4n valitsemistoiminto",
            "dxPivotGrid-expandAll": "Laajenna kaikki",
            "dxPivotGrid-collapseAll": "Tiivist\xe4 kaikki",
            "dxPivotGrid-sortColumnBySummary": 'Lajittele "{0}" t\xe4h\xe4n sarakkeeseen',
            "dxPivotGrid-sortRowBySummary": 'Lajittele "{0}" t\xe4m\xe4n rivin mukaan',
            "dxPivotGrid-removeAllSorting": "Poista kaikki lajittelu",
            "dxPivotGrid-dataNotAvailable": "Puuttuu",
            "dxPivotGrid-rowFields": "Rivikent\xe4t",
            "dxPivotGrid-columnFields": "Sarakekent\xe4t",
            "dxPivotGrid-dataFields": "Tietokent\xe4t",
            "dxPivotGrid-filterFields": "Suodatinkent\xe4t",
            "dxPivotGrid-allFields": "Kaikki kent\xe4t",
            "dxPivotGrid-columnFieldArea": "Pudota sarakekent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-dataFieldArea": "Pudota tietokent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-rowFieldArea": "Pudota rivikent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-filterFieldArea": "Pudota suodatinkent\xe4t t\xe4h\xe4n",
            "dxScheduler-editorLabelTitle": "Aihe",
            "dxScheduler-editorLabelStartDate": "Alkamisp\xe4iv\xe4",
            "dxScheduler-editorLabelEndDate": "P\xe4\xe4ttymisp\xe4iv\xe4",
            "dxScheduler-editorLabelDescription": "Kuvaus",
            "dxScheduler-editorLabelRecurrence": "Toista",
            "dxScheduler-openAppointment": "Avaa tapaaminen",
            "dxScheduler-recurrenceNever": "Ei koskaan",
            "dxScheduler-recurrenceDaily": "P\xe4ivitt\xe4in",
            "dxScheduler-recurrenceWeekly": "Viikoittain",
            "dxScheduler-recurrenceMonthly": "Kuukausittain",
            "dxScheduler-recurrenceYearly": "Vuosittain",
            "dxScheduler-recurrenceEvery": "Joka",
            "dxScheduler-recurrenceEnd": "Loppu",
            "dxScheduler-recurrenceAfter": "J\xe4lkeen",
            "dxScheduler-recurrenceOn": "Aika",
            "dxScheduler-recurrenceRepeatDaily": "p\xe4ivitt\xe4in",
            "dxScheduler-recurrenceRepeatWeekly": "viikon v\xe4lein",
            "dxScheduler-recurrenceRepeatMonthly": "kuukauden v\xe4lein",
            "dxScheduler-recurrenceRepeatYearly": "vuosittain",
            "dxScheduler-switcherDay": "P\xe4iv\xe4",
            "dxScheduler-switcherWeek": "Viikko",
            "dxScheduler-switcherWorkWeek": "Ty\xf6viikko",
            "dxScheduler-switcherMonth": "Kuukausi",
            "dxScheduler-switcherAgenda": "Esityslista",
            "dxScheduler-switcherTimelineDay": "Aikajana p\xe4iv\xe4",
            "dxScheduler-switcherTimelineWeek": "Aikajana viikko",
            "dxScheduler-switcherTimelineWorkWeek": "Aikajana ty\xf6viikko",
            "dxScheduler-switcherTimelineMonth": "Aikajana kuukausi",
            "dxScheduler-recurrenceRepeatOnDate": "p\xe4iv\xe4m\xe4\xe4r\xe4ll\xe4",
            "dxScheduler-recurrenceRepeatCount": "esiintymi\xe4",
            "dxScheduler-allDay": "Koko p\xe4iv\xe4",
            "dxScheduler-confirmRecurrenceEditMessage": "Haluatko muokata vain t\xe4m\xe4n tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Haluatko poistaa vain t\xe4m\xe4n tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceEditSeries": "Muokkaa sarjaa",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Poista sarja",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Muokkaa tapaaminen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Poista tapaaminen",
            "dxScheduler-noTimezoneTitle": "Ei aikavy\xf6hyke",
            "dxScheduler-moreAppointments": "{0} lis\xe4\xe4",
            "dxCalendar-todayButtonText": "T\xe4n\xe4\xe4n",
            "dxCalendar-ariaWidgetName": "Kalenteri",
            "dxColorView-ariaRed": "Punainen",
            "dxColorView-ariaGreen": "Vihre\xe4",
            "dxColorView-ariaBlue": "Sininen",
            "dxColorView-ariaAlpha": "L\xe4pin\xe4kyvyys",
            "dxColorView-ariaHex": "V\xe4rikoodi",
            "dxTagBox-selected": "{0} valittu",
            "dxTagBox-allSelected": "Kaikki valitut ({0})",
            "dxTagBox-moreSelected": "{0} lis\xe4\xe4",
            "vizExport-printingButtonText": "Tulosta",
            "vizExport-titleMenuText": "Vienti/Tulostus",
            "vizExport-exportButtonText": "{0} tiedosto",
            "dxFilterBuilder-and": "Ja",
            "dxFilterBuilder-or": "Tai",
            "dxFilterBuilder-notAnd": "Ei ja",
            "dxFilterBuilder-notOr": "Ei tai",
            "dxFilterBuilder-addCondition": "Lis\xe4\xe4 ehto",
            "dxFilterBuilder-addGroup": "Lis\xe4\xe4 ryhm\xe4",
            "dxFilterBuilder-enterValueText": "<anna arvo>",
            "dxFilterBuilder-filterOperationEquals": "On sama kuin",
            "dxFilterBuilder-filterOperationNotEquals": "Ei ole sama kuin",
            "dxFilterBuilder-filterOperationLess": "Pienempi kuin",
            "dxFilterBuilder-filterOperationLessOrEquals": "Pienempi tai yht\xe4 suuri kuin",
            "dxFilterBuilder-filterOperationGreater": "Suurempi kuin",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Suurempi tai yht\xe4 suuri kuin",
            "dxFilterBuilder-filterOperationStartsWith": "Alkaa merkill\xe4",
            "dxFilterBuilder-filterOperationContains": "Sis\xe4lt\xe4\xe4",
            "dxFilterBuilder-filterOperationNotContains": "Ei sis\xe4ll\xe4",
            "dxFilterBuilder-filterOperationEndsWith": "Loppuu merkill\xe4",
            "dxFilterBuilder-filterOperationIsBlank": "On tyhj\xe4",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ei ole tyhj\xe4",
            "dxFilterBuilder-filterOperationBetween": "V\xe4lill\xe4",
            "dxFilterBuilder-filterOperationAnyOf": "Joku n\xe4ist\xe4",
            "dxFilterBuilder-filterOperationNoneOf": "Ei mik\xe4\xe4n n\xe4ist\xe4",
            "dxHtmlEditor-dialogColorCaption": "!TODO!",
            "dxHtmlEditor-dialogBackgroundCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkUrlField": "!TODO!",
            "dxHtmlEditor-dialogLinkTextField": "!TODO!",
            "dxHtmlEditor-dialogLinkTargetField": "!TODO!",
            "dxHtmlEditor-dialogImageCaption": "!TODO!",
            "dxHtmlEditor-dialogImageUrlField": "!TODO!",
            "dxHtmlEditor-dialogImageAltField": "!TODO!",
            "dxHtmlEditor-dialogImageWidthField": "!TODO!",
            "dxHtmlEditor-dialogImageHeightField": "!TODO!",
            "dxHtmlEditor-heading": "!TODO!",
            "dxHtmlEditor-normalText": "!TODO!"
        }
    })
});
