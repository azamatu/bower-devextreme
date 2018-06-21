/*!
* DevExtreme (dx.messages.it.js)
* Version: 17.1.12
* Build date: Wed Jun 20 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        factory(DevExpress.localization)
    }
}(this, function(localization) {
    localization.loadMessages({
        it: {
            Yes: "Si",
            No: "No",
            Cancel: "Annulla",
            Clear: "Pulisci",
            Done: "Eseguito",
            Loading: "Caricamento...",
            Select: "Seleziona...",
            Search: "Cerca",
            Back: "Indietro",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Nessun dato da mostrare",
            "validation-required": "Richiesto",
            "validation-required-formatted": "{0} è richiesto",
            "validation-numeric": "Il valore deve essere numerico",
            "validation-numeric-formatted": "{0} deve essere un numero",
            "validation-range": "Valore fuori dai limiti",
            "validation-range-formatted": "{0} è fuori dal range ammesso",
            "validation-stringLength": "Lunghezza del valore errata",
            "validation-stringLength-formatted": "La lunghezza di {0} non è corretta",
            "validation-custom": "Il valore non è valido",
            "validation-custom-formatted": "{0} è invalido",
            "validation-compare": "I valori non corrispondono",
            "validation-compare-formatted": "{0} non corrisponde",
            "validation-pattern": "Il valore non soddisfa i requisiti",
            "validation-pattern-formatted": "{0} non soddisfa i requisiti",
            "validation-email": "Email non valida",
            "validation-email-formatted": "{0} è invalida",
            "validation-mask": "Il valore non è valido",
            "dxLookup-searchPlaceholder": "Lunghezza minima: {0}",
            "dxList-pullingDownText": "Trascinare in basso per aggiornare...",
            "dxList-pulledDownText": "Rilasciare per aggiornare...",
            "dxList-refreshingText": "Aggiornamento...",
            "dxList-pageLoadingText": "Caricamento...",
            "dxList-nextButtonText": "Carica altri risultati",
            "dxList-selectAll": "Seleziona tutti",
            "dxListEditDecorator-delete": "Elimina",
            "dxListEditDecorator-more": "Ancora",
            "dxScrollView-pullingDownText": "Trascinare in basso per aggiornare...",
            "dxScrollView-pulledDownText": "Rilasciare per aggiornare...",
            "dxScrollView-refreshingText": "Aggiornamento...",
            "dxScrollView-reachBottomText": "Caricamento...",
            "dxDateBox-simulatedDataPickerTitleTime": "Seleziona orario",
            "dxDateBox-simulatedDataPickerTitleDate": "Seleziona data",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Seleziona data e ora",
            "dxDateBox-validation-datetime": "Il valore deve essere una data o un'orario",
            "dxFileUploader-selectFile": "Seleziona file",
            "dxFileUploader-dropFile": "o rilascia il file qui",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Carica",
            "dxFileUploader-uploaded": "Caricato",
            "dxFileUploader-readyToUpload": "Pronto per il caricamento",
            "dxFileUploader-uploadFailedMessage": "Caricamento fallito",
            "dxRangeSlider-ariaFrom": "Da",
            "dxRangeSlider-ariaTill": "fino a",
            "dxSwitch-onText": "Acceso",
            "dxSwitch-offText": "Spento",
            "dxForm-optionalMark": "opzionale",
            "dxForm-requiredMessage": "{0} è richiesto",
            "dxNumberBox-invalidValueMessage": "Il valore deve essere numerico",
            "dxDataGrid-columnChooserTitle": "Selezione colonne",
            "dxDataGrid-columnChooserEmptyText": "Trascinare una colonna qui per nasconderla",
            "dxDataGrid-groupContinuesMessage": "Pagina sucessiva",
            "dxDataGrid-groupContinuedMessage": "Continua da una pagina precedente",
            "dxDataGrid-groupHeaderText": "Raggruppa per questa colonna",
            "dxDataGrid-ungroupHeaderText": "Separa",
            "dxDataGrid-ungroupAllText": "Separa tutti",
            "dxDataGrid-editingEditRow": "Modifica",
            "dxDataGrid-editingSaveRowChanges": "Salva",
            "dxDataGrid-editingCancelRowChanges": "Annulla",
            "dxDataGrid-editingDeleteRow": "Elimina",
            "dxDataGrid-editingUndeleteRow": "Ripristina",
            "dxDataGrid-editingConfirmDeleteMessage": "Sei sicuro di voler eliminare questa registrazione?",
            "dxDataGrid-validationCancelChanges": "Annulla le modifiche",
            "dxDataGrid-groupPanelEmptyText": "Trascinare l'intestazione di una colonna qui per raggrupparla",
            "dxDataGrid-noDataText": "Nessun dato",
            "dxDataGrid-searchPanelPlaceholder": "Cerca...",
            "dxDataGrid-filterRowShowAllText": "(Tutti)",
            "dxDataGrid-filterRowResetOperationText": "Annulla",
            "dxDataGrid-filterRowOperationEquals": "Uguali",
            "dxDataGrid-filterRowOperationNotEquals": "Non uguale",
            "dxDataGrid-filterRowOperationLess": "Minore di",
            "dxDataGrid-filterRowOperationLessOrEquals": "Minore o uguale a",
            "dxDataGrid-filterRowOperationGreater": "Maggiore di",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Maggiore o uguale a",
            "dxDataGrid-filterRowOperationStartsWith": "Inizia con",
            "dxDataGrid-filterRowOperationContains": "Contiene",
            "dxDataGrid-filterRowOperationNotContains": "Non contiene",
            "dxDataGrid-filterRowOperationEndsWith": "Finisce per",
            "dxDataGrid-filterRowOperationBetween": "Compreso",
            "dxDataGrid-filterRowOperationBetweenStartText": "Inizio",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fine",
            "dxDataGrid-applyFilterText": "Applica filtro",
            "dxDataGrid-trueText": "vero",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Ordinamento ascendente",
            "dxDataGrid-sortingDescendingText": "Ordinamento discendente",
            "dxDataGrid-sortingClearText": "Annulla ordinamento",
            "dxDataGrid-editingSaveAllChanges": "Salva le modifiche",
            "dxDataGrid-editingCancelAllChanges": "Annulla le modifiche",
            "dxDataGrid-editingAddRow": "Aggiungi una riga",
            "dxDataGrid-summaryMin": "Minore: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minore di {1} è {0}",
            "dxDataGrid-summaryMax": "Massimo: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Massimo di {1} è {0}",
            "dxDataGrid-summaryAvg": "Media: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Media di {1} è {0}",
            "dxDataGrid-summarySum": "Somma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Somma di {1} è {0}",
            "dxDataGrid-summaryCount": "Elementi: {0}",
            "dxDataGrid-columnFixingFix": "Blocca",
            "dxDataGrid-columnFixingUnfix": "Sblocca",
            "dxDataGrid-columnFixingLeftPosition": "Alla sinistra",
            "dxDataGrid-columnFixingRightPosition": "Alla destra",
            "dxDataGrid-exportTo": "Esporta",
            "dxDataGrid-exportToExcel": "Esporta in un file Excel",
            "dxDataGrid-excelFormat": "Excel file",
            "dxDataGrid-selectedRows": "Righe selezionate",
            "dxDataGrid-exportSelectedRows": "Esporta le righe selezionate",
            "dxDataGrid-exportAll": "Esporta tutti i dati",
            "dxDataGrid-headerFilterEmptyValue": "(vuoto)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annulla",
            "dxDataGrid-ariaColumn": "Colonna",
            "dxDataGrid-ariaValue": "Valore",
            "dxDataGrid-ariaFilterCell": "Cella filtrante",
            "dxDataGrid-ariaCollapse": "Chiudi",
            "dxDataGrid-ariaExpand": "Espandi",
            "dxDataGrid-ariaDataGrid": "Griglia dati",
            "dxDataGrid-ariaSearchInGrid": "Cerca nella griglia",
            "dxDataGrid-ariaSelectAll": "Seleziona tutti",
            "dxDataGrid-ariaSelectRow": "Seleziona riga",
            "dxTreeList-ariaTreeList": "Albero",
            "dxTreeList-editingAddRowToNode": "Aggiungi",
            "dxPager-infoText": "Pagina {0} di {1} ({2} elementi)",
            "dxPager-pagesCountText": "di",
            "dxPivotGrid-grandTotal": "Totale",
            "dxPivotGrid-total": "{0} Totale",
            "dxPivotGrid-fieldChooserTitle": "Selezione campi",
            "dxPivotGrid-showFieldChooser": "Mostra selezione campi",
            "dxPivotGrid-expandAll": "Espandi tutt0",
            "dxPivotGrid-collapseAll": "Comprimi tutto",
            "dxPivotGrid-sortColumnBySummary": 'Ordina "{0}" per questa colonna',
            "dxPivotGrid-sortRowBySummary": 'Ordina "{0}" per questa colonna',
            "dxPivotGrid-removeAllSorting": "Rimuovi ordinamenti",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Campi riga",
            "dxPivotGrid-columnFields": "Campi colonna",
            "dxPivotGrid-dataFields": "Campi data",
            "dxPivotGrid-filterFields": "Campi filtro",
            "dxPivotGrid-allFields": "Aggiungi campi",
            "dxPivotGrid-columnFieldArea": "Trascina i campi colonna qui",
            "dxPivotGrid-dataFieldArea": "Trascina i campi dati qui",
            "dxPivotGrid-rowFieldArea": "Trascina i campi riga qui",
            "dxPivotGrid-filterFieldArea": "Trascina i campi filtro qui",
            "dxScheduler-editorLabelTitle": "Soggetto",
            "dxScheduler-editorLabelStartDate": "Data inizio",
            "dxScheduler-editorLabelEndDate": "Data fine",
            "dxScheduler-editorLabelDescription": "Descrizione",
            "dxScheduler-editorLabelRecurrence": "Ripeti",
            "dxScheduler-openAppointment": "Apri appuntamento",
            "dxScheduler-recurrenceNever": "Mai",
            "dxScheduler-recurrenceDaily": "Giornaliero",
            "dxScheduler-recurrenceWeekly": "Settimanale",
            "dxScheduler-recurrenceMonthly": "Mensile",
            "dxScheduler-recurrenceYearly": "Annuale",
            "dxScheduler-recurrenceEvery": "Ogni",
            "dxScheduler-recurrenceEnd": "Termina ripetizione",
            "dxScheduler-recurrenceAfter": "Dopo",
            "dxScheduler-recurrenceOn": "Di",
            "dxScheduler-recurrenceRepeatDaily": "giorno(i)",
            "dxScheduler-recurrenceRepeatWeekly": "settimana(e)",
            "dxScheduler-recurrenceRepeatMonthly": "mese(i)",
            "dxScheduler-recurrenceRepeatYearly": "anno(i)",
            "dxScheduler-switcherDay": "Giorno",
            "dxScheduler-switcherWeek": "Settimana",
            "dxScheduler-switcherWorkWeek": "Settimana lavorativa",
            "dxScheduler-switcherMonth": "Mese",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Cronologia giornaliera",
            "dxScheduler-switcherTimelineWeek": "Cronologia settimanale",
            "dxScheduler-switcherTimelineWorkWeek": "Cronologia settimana lavorativa",
            "dxScheduler-switcherTimelineMonth": "Cronologia mensile",
            "dxScheduler-recurrenceRepeatOnDate": "alla data",
            "dxScheduler-recurrenceRepeatCount": "occorrenza(e)",
            "dxScheduler-allDay": "Tutto il giorno",
            "dxScheduler-confirmRecurrenceEditMessage": "Vuoi modificare solo questo appuntamento o tutte le sue ricorrenze?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Vuoi eliminare solo questo appuntamento o tutte le sue ricorrenze?",
            "dxScheduler-confirmRecurrenceEditSeries": "Modifica serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Elimina serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Modifica appuntamento",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Elimina appuntamento",
            "dxScheduler-noTimezoneTitle": "Nessun fuso orario",
            "dxCalendar-todayButtonText": "Oggi",
            "dxCalendar-ariaWidgetName": "Calendario",
            "dxColorView-ariaRed": "Rosso",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Blu",
            "dxColorView-ariaAlpha": "Trasparenza",
            "dxColorView-ariaHex": "Colore",
            "vizExport-printingButtonText": "Stampa",
            "vizExport-titleMenuText": "Esportazione/Stampa",
            "vizExport-exportButtonText": "{0} file"
        }
    })
});
