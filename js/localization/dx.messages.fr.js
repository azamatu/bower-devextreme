/*!
* DevExtreme (dx.messages.fr.js)
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
        fr: {
            Yes: "Oui",
            No: "Non",
            Cancel: "Annuler",
            Clear: "Vider",
            Done: "Termin\xe9",
            Loading: "Chargement...",
            Select: "S\xe9lection...",
            Search: "Recherche",
            Back: "Retour",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Pas de donn\xe9es",
            "validation-required": "Obligatoire",
            "validation-required-formatted": "{0} est obligatoire",
            "validation-numeric": "La valeur doit \xeatre un nombre",
            "validation-numeric-formatted": "{0} doit \xeatre un nombre",
            "validation-range": "La valeur ne se trouve pas dans la plage valide",
            "validation-range-formatted": "{0} ne se trouve pas dans la plage valide",
            "validation-stringLength": "La longueur de la valeur est incorrecte",
            "validation-stringLength-formatted": "La longueur de {0} est incorrecte",
            "validation-custom": "La valeur est invalide",
            "validation-custom-formatted": "{0} est invalide",
            "validation-compare": "La valeur est inappropri\xe9e",
            "validation-compare-formatted": "{0} est inappropri\xe9e",
            "validation-pattern": "La valeur ne correspond pas au mod\xe8le",
            "validation-pattern-formatted": "{0} ne correspond pas au mod\xe8le",
            "validation-email": "L'adresse email est invalide",
            "validation-email-formatted": "{0} est invalide",
            "validation-mask": "La valeur est invalide",
            "dxLookup-searchPlaceholder": "Nombre minimum de caract\xe8res: {0}",
            "dxList-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxList-pulledDownText": "Relacher pour actualiser...",
            "dxList-refreshingText": "Actualisation...",
            "dxList-pageLoadingText": "Chargement...",
            "dxList-nextButtonText": "Suivant",
            "dxList-selectAll": "S\xe9lectionner tout",
            "dxListEditDecorator-delete": "Supprimer",
            "dxListEditDecorator-more": "Plus",
            "dxScrollView-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxScrollView-pulledDownText": "Relacher pour actualiser...",
            "dxScrollView-refreshingText": "Mise \xe0 jour...",
            "dxScrollView-reachBottomText": "Chargement...",
            "dxDateBox-simulatedDataPickerTitleTime": "Choisissez l'heure",
            "dxDateBox-simulatedDataPickerTitleDate": "Choisissez la date",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Choisissez la date et l'heure",
            "dxDateBox-validation-datetime": "La valeur doit \xeatre une date ou une heure.",
            "dxFileUploader-selectFile": "Choisissez un fichier",
            "dxFileUploader-dropFile": "Enlever fichier",
            "dxFileUploader-bytes": "Bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "T\xe9l\xe9charger",
            "dxFileUploader-uploaded": "T\xe9l\xe9charg\xe9",
            "dxFileUploader-readyToUpload": "Pret \xe0 t\xe9l\xe9charger",
            "dxFileUploader-uploadFailedMessage": "Echec du t\xe9l\xe9chargement",
            "dxFileUploader-invalidFileExtension": "Type de fichier non autoris\xe9",
            "dxFileUploader-invalidMaxFileSize": "Fichier trop volumineux",
            "dxFileUploader-invalidMinFileSize": "Fichier trop petit",
            "dxRangeSlider-ariaFrom": "De {0}",
            "dxRangeSlider-ariaTill": "\xe0 {0}",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "optionnel",
            "dxForm-requiredMessage": "{0} est obligatoire",
            "dxNumberBox-invalidValueMessage": "La valeur doit \xeatre un nombre",
            "dxDataGrid-columnChooserTitle": "Choisir les colonnes",
            "dxDataGrid-columnChooserEmptyText": "Faites glisser une colonne ici pour la cacher",
            "dxDataGrid-groupContinuesMessage": "Suite \xe0 la page suivante",
            "dxDataGrid-groupContinuedMessage": "Suite de la page pr\xe9c\xe9dente",
            "dxDataGrid-groupHeaderText": "Grouper avec cette colonne",
            "dxDataGrid-ungroupHeaderText": "D\xe9grouper",
            "dxDataGrid-ungroupAllText": "D\xe9grouper tout",
            "dxDataGrid-editingEditRow": "Editer",
            "dxDataGrid-editingSaveRowChanges": "Sauvegarder",
            "dxDataGrid-editingCancelRowChanges": "Annuler",
            "dxDataGrid-editingDeleteRow": "Supprimer",
            "dxDataGrid-editingUndeleteRow": "Restaurer",
            "dxDataGrid-editingConfirmDeleteMessage": "\xcates-vous s\xfbr de vouloir supprimer cet \xe9l\xe9ment ?",
            "dxDataGrid-validationCancelChanges": "Annuler les changements",
            "dxDataGrid-groupPanelEmptyText": "Faites glisser une colonne ICI pour grouper par celle-ci",
            "dxDataGrid-noDataText": "Pas de donn\xe9es",
            "dxDataGrid-searchPanelPlaceholder": "Recherche...",
            "dxDataGrid-filterRowShowAllText": "(tous)",
            "dxDataGrid-filterRowResetOperationText": "R\xe9initialiser",
            "dxDataGrid-filterRowOperationEquals": "Egale",
            "dxDataGrid-filterRowOperationNotEquals": "Diff\xe9rent de",
            "dxDataGrid-filterRowOperationLess": "Plus petit",
            "dxDataGrid-filterRowOperationLessOrEquals": "Plus petit ou \xe9gal",
            "dxDataGrid-filterRowOperationGreater": "Plus grand",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Plus grand ou \xe9gal",
            "dxDataGrid-filterRowOperationStartsWith": "Commence par",
            "dxDataGrid-filterRowOperationContains": "Contient",
            "dxDataGrid-filterRowOperationNotContains": "Ne contient pas",
            "dxDataGrid-filterRowOperationEndsWith": "Termine par",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "D\xe9but",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrer le texte",
            "dxDataGrid-trueText": "Vrai",
            "dxDataGrid-falseText": "Faux",
            "dxDataGrid-sortingAscendingText": "Tri croissant",
            "dxDataGrid-sortingDescendingText": "Tri d\xe9croissant",
            "dxDataGrid-sortingClearText": "Supprimer le tri",
            "dxDataGrid-editingSaveAllChanges": "Sauvegarder les changements",
            "dxDataGrid-editingCancelAllChanges": "Ignorer les changements",
            "dxDataGrid-editingAddRow": "Ajouter ligne",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minimum de {1} est {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maximum de {1} est {0}",
            "dxDataGrid-summaryAvg": "Moy: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Moyenne de {1} est {0}",
            "dxDataGrid-summarySum": "Somme: {0}",
            "dxDataGrid-summarySumOtherColumn": "Somme de {1} est {0}",
            "dxDataGrid-summaryCount": "Total: {0}",
            "dxDataGrid-columnFixingFix": "Fixer",
            "dxDataGrid-columnFixingUnfix": "D\xe9tacher",
            "dxDataGrid-columnFixingLeftPosition": "A gauche",
            "dxDataGrid-columnFixingRightPosition": "A droite",
            "dxDataGrid-exportTo": "Exporter",
            "dxDataGrid-exportToExcel": "Exporter sous Excel",
            "dxDataGrid-excelFormat": "Fichier Excel",
            "dxDataGrid-selectedRows": "Lignes s\xe9lectionn\xe9es",
            "dxDataGrid-exportSelectedRows": "Exporter les lignes s\xe9lectionn\xe9es",
            "dxDataGrid-exportAll": "Exporter tout",
            "dxDataGrid-headerFilterEmptyValue": "(aucune valeur)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuler",
            "dxDataGrid-ariaColumn": "Colonne",
            "dxDataGrid-ariaValue": "Valeur",
            "dxDataGrid-ariaFilterCell": "Filtre de cellule",
            "dxDataGrid-ariaCollapse": "R\xe9duire",
            "dxDataGrid-ariaExpand": "Etendre",
            "dxDataGrid-ariaDataGrid": "Grille",
            "dxDataGrid-ariaSearchInGrid": "Rechercher dans la grille",
            "dxDataGrid-ariaSelectAll": "S\xe9lectionner tout",
            "dxDataGrid-ariaSelectRow": "S\xe9lectionner ligne",
            "dxDataGrid-filterBuilderPopupTitle": "Cr\xe9ation de filtre",
            "dxDataGrid-filterPanelCreateFilter": "Cr\xe9er un filtre",
            "dxDataGrid-filterPanelClearFilter": "Supprimer",
            "dxDataGrid-filterPanelFilterEnabledHint": "Activer le filtre",
            "dxTreeList-ariaTreeList": "Liste arborescente",
            "dxTreeList-editingAddRowToNode": "Ajouter",
            "dxPager-infoText": "Page {0} sur {1} ({2} \xe9lements)",
            "dxPager-pagesCountText": "sur",
            "dxPivotGrid-grandTotal": "Total g\xe9n\xe9ral",
            "dxPivotGrid-total": "Total {0}",
            "dxPivotGrid-fieldChooserTitle": "Liste des champs",
            "dxPivotGrid-showFieldChooser": "Afficher la liste des champs",
            "dxPivotGrid-expandAll": "Etendre tout",
            "dxPivotGrid-collapseAll": "R\xe9duire tout",
            "dxPivotGrid-sortColumnBySummary": 'Trier par colonne "{0}"',
            "dxPivotGrid-sortRowBySummary": 'Trier par ligne "{0}"',
            "dxPivotGrid-removeAllSorting": "Supprimer les tris",
            "dxPivotGrid-dataNotAvailable": "ND",
            "dxPivotGrid-rowFields": "Lignes",
            "dxPivotGrid-columnFields": "Colonnes",
            "dxPivotGrid-dataFields": "Valeurs",
            "dxPivotGrid-filterFields": "Filtres",
            "dxPivotGrid-allFields": "Tous les champs",
            "dxPivotGrid-columnFieldArea": "D\xe9poser les champs de colonne ici",
            "dxPivotGrid-dataFieldArea": "D\xe9poser les champs de donn\xe9es ici",
            "dxPivotGrid-rowFieldArea": "D\xe9poser les champs de ligne ici",
            "dxPivotGrid-filterFieldArea": "D\xe9poser les champs de filtre ici",
            "dxScheduler-editorLabelTitle": "Titre",
            "dxScheduler-editorLabelStartDate": "Date de d\xe9but",
            "dxScheduler-editorLabelEndDate": "Date de fin",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "R\xe9currence",
            "dxScheduler-openAppointment": "D\xe9finir un \xe9venement",
            "dxScheduler-recurrenceNever": "Jamais",
            "dxScheduler-recurrenceDaily": "Quotidien",
            "dxScheduler-recurrenceWeekly": "Hebdomadaire",
            "dxScheduler-recurrenceMonthly": "Mensuel",
            "dxScheduler-recurrenceYearly": "Annuel",
            "dxScheduler-recurrenceEvery": "Chaque",
            "dxScheduler-recurrenceEnd": "Jusqu'\xe0",
            "dxScheduler-recurrenceAfter": "Apr\xe8s",
            "dxScheduler-recurrenceOn": "Le",
            "dxScheduler-recurrenceRepeatDaily": "Jour(s)",
            "dxScheduler-recurrenceRepeatWeekly": "Semaine(s)",
            "dxScheduler-recurrenceRepeatMonthly": "Mois(s)",
            "dxScheduler-recurrenceRepeatYearly": "Ann\xe9e(s)",
            "dxScheduler-switcherDay": "Jour",
            "dxScheduler-switcherWeek": "Semaine",
            "dxScheduler-switcherWorkWeek": "Semaine de travail",
            "dxScheduler-switcherMonth": "Mois",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Jour",
            "dxScheduler-switcherTimelineWeek": "Timeline Semaine",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Semaine de travail",
            "dxScheduler-switcherTimelineMonth": "Timeline Mois",
            "dxScheduler-recurrenceRepeatOnDate": "le",
            "dxScheduler-recurrenceRepeatCount": "occurence(s)",
            "dxScheduler-allDay": "Temps plein",
            "dxScheduler-confirmRecurrenceEditMessage": "Voulez-vous \xe9diter cet \xe9venement ou la s\xe9rie enti\xe8re ?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Voulez-vous supprimer cet \xe9venement ou la s\xe9rie enti\xe8re ?",
            "dxScheduler-confirmRecurrenceEditSeries": "Editer serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Supprimer serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Editer \xe9venement",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Supprimer \xe9venement",
            "dxScheduler-noTimezoneTitle": "Pas de fuseau horaire",
            "dxScheduler-moreAppointments": "{0} en plus",
            "dxCalendar-todayButtonText": "Aujourd'hui",
            "dxCalendar-ariaWidgetName": "Calendrier",
            "dxColorView-ariaRed": "Rouge",
            "dxColorView-ariaGreen": "Vert",
            "dxColorView-ariaBlue": "Bleu",
            "dxColorView-ariaAlpha": "Transparence",
            "dxColorView-ariaHex": "Code couleur",
            "dxTagBox-selected": "{0} selectionn\xe9s",
            "dxTagBox-allSelected": "Tous s\xe9lectionn\xe9s ({0})",
            "dxTagBox-moreSelected": "{0} en plus",
            "vizExport-printingButtonText": "Imprimer",
            "vizExport-titleMenuText": "Exporter/Imprimer",
            "vizExport-exportButtonText": "{0} fichier",
            "dxFilterBuilder-and": "Et",
            "dxFilterBuilder-or": "Ou",
            "dxFilterBuilder-notAnd": "Non Et",
            "dxFilterBuilder-notOr": "Non Ou",
            "dxFilterBuilder-addCondition": "Ajouter une condition",
            "dxFilterBuilder-addGroup": "Ajouter un groupe",
            "dxFilterBuilder-enterValueText": "<entrer une valeur>",
            "dxFilterBuilder-filterOperationEquals": "Est \xe9gal \xe0",
            "dxFilterBuilder-filterOperationNotEquals": "Est diff\xe9rent de",
            "dxFilterBuilder-filterOperationLess": "Est plus petit que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Est plus petit ou \xe9gal \xe0",
            "dxFilterBuilder-filterOperationGreater": "Est plus grand que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Est plus grand ou \xe9gal \xe0",
            "dxFilterBuilder-filterOperationStartsWith": "Commence par",
            "dxFilterBuilder-filterOperationContains": "Contient",
            "dxFilterBuilder-filterOperationNotContains": "Ne contient pas",
            "dxFilterBuilder-filterOperationEndsWith": "Finit par",
            "dxFilterBuilder-filterOperationIsBlank": "Est vide",
            "dxFilterBuilder-filterOperationIsNotBlank": "N'est pas vide",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Est parmi",
            "dxFilterBuilder-filterOperationNoneOf": "N'est pas parmi",
            "dxHtmlEditor-dialogColorCaption": "Changer couleur police",
            "dxHtmlEditor-dialogBackgroundCaption": "Changer couleur fond",
            "dxHtmlEditor-dialogLinkCaption": "Ajouter un hyperlien",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Texte",
            "dxHtmlEditor-dialogLinkTargetField": "Ouvrir le lien dans une nouvelle fen\xeatre",
            "dxHtmlEditor-dialogImageCaption": "Ajouter image",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Texte alternatif",
            "dxHtmlEditor-dialogImageWidthField": "Largeur (px)",
            "dxHtmlEditor-dialogImageHeightField": "Hauteur (px)",
            "dxHtmlEditor-heading": "Titre",
            "dxHtmlEditor-normalText": "Texte normal"
        }
    })
});
