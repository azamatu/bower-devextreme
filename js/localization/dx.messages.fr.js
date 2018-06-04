/*!
* DevExtreme (dx.messages.fr.js)
* Version: 18.1.3 (build 18155)
* Build date: Mon Jun 04 2018
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
        fr: {
            Yes: "Oui",
            No: "Non",
            Cancel: "Annuler",
            Clear: "Vider",
            Done: "Terminé",
            Loading: "Chargement...",
            Select: "Sélection...",
            Search: "Recherche",
            Back: "Retour",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Pas de données",
            "validation-required": "Obligatoire",
            "validation-required-formatted": "{0} est obligatoire",
            "validation-numeric": "La valeur doit être un nombre",
            "validation-numeric-formatted": "{0} doit être un nombre",
            "validation-range": "La valeur ne se trouve pas dans la plage valide",
            "validation-range-formatted": "{0} ne se trouve pas dans la plage valide",
            "validation-stringLength": "La longueur de la valeur est incorrecte",
            "validation-stringLength-formatted": "La longueur de {0} est incorrecte",
            "validation-custom": "La valeur est invalide",
            "validation-custom-formatted": "{0} est invalide",
            "validation-compare": "La valeur est inappropriée",
            "validation-compare-formatted": "{0} est inappropriée",
            "validation-pattern": "La valeur ne correspond pas au modèle",
            "validation-pattern-formatted": "{0} ne correspond pas au modèle",
            "validation-email": "L'adresse email est invalide",
            "validation-email-formatted": "{0} est invalide",
            "validation-mask": "La valeur est invalide",
            "dxLookup-searchPlaceholder": "Nombre minimum de caractères: {0}",
            "dxList-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxList-pulledDownText": "Relacher pour actualiser...",
            "dxList-refreshingText": "Actualisation...",
            "dxList-pageLoadingText": "Chargement...",
            "dxList-nextButtonText": "Suivant",
            "dxList-selectAll": "Sélectionner tout",
            "dxListEditDecorator-delete": "Supprimer",
            "dxListEditDecorator-more": "Plus",
            "dxScrollView-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxScrollView-pulledDownText": "Relacher pour actualiser...",
            "dxScrollView-refreshingText": "Mise à jour...",
            "dxScrollView-reachBottomText": "Chargement...",
            "dxDateBox-simulatedDataPickerTitleTime": "Choisissez l'heure",
            "dxDateBox-simulatedDataPickerTitleDate": "Choisissez la date",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Choisissez la date et l'heure",
            "dxDateBox-validation-datetime": "La valeur doit être une date ou une heure.",
            "dxFileUploader-selectFile": "Choisissez un fichier",
            "dxFileUploader-dropFile": "Enlever fichier",
            "dxFileUploader-bytes": "Bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Télécharger",
            "dxFileUploader-uploaded": "Téléchargé",
            "dxFileUploader-readyToUpload": "Pret à télécharger",
            "dxFileUploader-uploadFailedMessage": "Echec du téléchargement",
            "dxRangeSlider-ariaFrom": "De {0}",
            "dxRangeSlider-ariaTill": "à {0}",
            "dxSwitch-onText": "ON",
            "dxSwitch-offText": "OFF",
            "dxForm-optionalMark": "optionnel",
            "dxForm-requiredMessage": "{0} est obligatoire",
            "dxNumberBox-invalidValueMessage": "La valeur doit être un nombre",
            "dxDataGrid-columnChooserTitle": "Choisir les colonnes",
            "dxDataGrid-columnChooserEmptyText": "Faites glisser une colonne ici pour la cacher",
            "dxDataGrid-groupContinuesMessage": "Suite à la page suivante",
            "dxDataGrid-groupContinuedMessage": "Suite de la page précédente",
            "dxDataGrid-groupHeaderText": "Grouper avec cette colonne",
            "dxDataGrid-ungroupHeaderText": "Dégrouper",
            "dxDataGrid-ungroupAllText": "Dégrouper tout",
            "dxDataGrid-editingEditRow": "Editer",
            "dxDataGrid-editingSaveRowChanges": "Sauvegarder",
            "dxDataGrid-editingCancelRowChanges": "Annuler",
            "dxDataGrid-editingDeleteRow": "Supprimer",
            "dxDataGrid-editingUndeleteRow": "Restaurer",
            "dxDataGrid-editingConfirmDeleteMessage": "Êtes-vous sûr de vouloir supprimer cet élément ?",
            "dxDataGrid-validationCancelChanges": "Annuler les changements",
            "dxDataGrid-groupPanelEmptyText": "Faites glisser une colonne ICI pour grouper par celle-ci",
            "dxDataGrid-noDataText": "Pas de données",
            "dxDataGrid-searchPanelPlaceholder": "Recherche...",
            "dxDataGrid-filterRowShowAllText": "(tous)",
            "dxDataGrid-filterRowResetOperationText": "Réinitialiser",
            "dxDataGrid-filterRowOperationEquals": "Egale",
            "dxDataGrid-filterRowOperationNotEquals": "Différent de",
            "dxDataGrid-filterRowOperationLess": "Plus petit",
            "dxDataGrid-filterRowOperationLessOrEquals": "Plus petit ou égal",
            "dxDataGrid-filterRowOperationGreater": "Plus grand",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Plus grand ou égal",
            "dxDataGrid-filterRowOperationStartsWith": "Commence par",
            "dxDataGrid-filterRowOperationContains": "Contient",
            "dxDataGrid-filterRowOperationNotContains": "Ne contient pas",
            "dxDataGrid-filterRowOperationEndsWith": "Termine par",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "Début",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrer le texte",
            "dxDataGrid-trueText": "Vrai",
            "dxDataGrid-falseText": "Faux",
            "dxDataGrid-sortingAscendingText": "Tri croissant",
            "dxDataGrid-sortingDescendingText": "Tri décroissant",
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
            "dxDataGrid-columnFixingUnfix": "Détacher",
            "dxDataGrid-columnFixingLeftPosition": "A gauche",
            "dxDataGrid-columnFixingRightPosition": "A droite",
            "dxDataGrid-exportTo": "Exporter",
            "dxDataGrid-exportToExcel": "Exporter sous Excel",
            "dxDataGrid-excelFormat": "Fichier Excel",
            "dxDataGrid-selectedRows": "Lignes sélectionnées",
            "dxDataGrid-exportSelectedRows": "Exporter les lignes sélectionnées",
            "dxDataGrid-exportAll": "Exporter tout",
            "dxDataGrid-headerFilterEmptyValue": "(aucune valeur)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuler",
            "dxDataGrid-ariaColumn": "Colonne",
            "dxDataGrid-ariaValue": "Valeur",
            "dxDataGrid-ariaFilterCell": "Filtre de cellule",
            "dxDataGrid-ariaCollapse": "Réduire",
            "dxDataGrid-ariaExpand": "Etendre",
            "dxDataGrid-ariaDataGrid": "Grille",
            "dxDataGrid-ariaSearchInGrid": "Rechercher dans la grille",
            "dxDataGrid-ariaSelectAll": "Sélectionner tout",
            "dxDataGrid-ariaSelectRow": "Sélectionner ligne",
            "dxDataGrid-filterBuilderPopupTitle": "Création de filtre",
            "dxDataGrid-filterPanelCreateFilter": "Créer un filtre",
            "dxDataGrid-filterPanelClearFilter": "Supprimer",
            "dxDataGrid-filterPanelFilterEnabledHint": "Activer le filtre",
            "dxTreeList-ariaTreeList": "Liste arborescente",
            "dxTreeList-editingAddRowToNode": "Ajouter",
            "dxPager-infoText": "Page {0} sur {1} ({2} élements)",
            "dxPager-pagesCountText": "sur",
            "dxPivotGrid-grandTotal": "Total général",
            "dxPivotGrid-total": "Total {0}",
            "dxPivotGrid-fieldChooserTitle": "Liste des champs",
            "dxPivotGrid-showFieldChooser": "Afficher la liste des champs",
            "dxPivotGrid-expandAll": "Etendre tout",
            "dxPivotGrid-collapseAll": "Réduire tout",
            "dxPivotGrid-sortColumnBySummary": 'Trier par colonne "{0}"',
            "dxPivotGrid-sortRowBySummary": 'Trier par ligne "{0}"',
            "dxPivotGrid-removeAllSorting": "Supprimer les tris",
            "dxPivotGrid-dataNotAvailable": "ND",
            "dxPivotGrid-rowFields": "Lignes",
            "dxPivotGrid-columnFields": "Colonnes",
            "dxPivotGrid-dataFields": "Valeurs",
            "dxPivotGrid-filterFields": "Filtres",
            "dxPivotGrid-allFields": "Tous les champs",
            "dxPivotGrid-columnFieldArea": "Déposer les champs de colonne ici",
            "dxPivotGrid-dataFieldArea": "Déposer les champs de données ici",
            "dxPivotGrid-rowFieldArea": "Déposer les champs de ligne ici",
            "dxPivotGrid-filterFieldArea": "Déposer les champs de filtre ici",
            "dxScheduler-editorLabelTitle": "Titre",
            "dxScheduler-editorLabelStartDate": "Date de début",
            "dxScheduler-editorLabelEndDate": "Date de fin",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "Récurrence",
            "dxScheduler-openAppointment": "Définir un évenement",
            "dxScheduler-recurrenceNever": "Jamais",
            "dxScheduler-recurrenceDaily": "Quotidien",
            "dxScheduler-recurrenceWeekly": "Hebdomadaire",
            "dxScheduler-recurrenceMonthly": "Mensuel",
            "dxScheduler-recurrenceYearly": "Annuel",
            "dxScheduler-recurrenceEvery": "Chaque",
            "dxScheduler-recurrenceEnd": "Jusqu'à",
            "dxScheduler-recurrenceAfter": "Après",
            "dxScheduler-recurrenceOn": "Le",
            "dxScheduler-recurrenceRepeatDaily": "Jour(s)",
            "dxScheduler-recurrenceRepeatWeekly": "Semaine(s)",
            "dxScheduler-recurrenceRepeatMonthly": "Mois(s)",
            "dxScheduler-recurrenceRepeatYearly": "Année(s)",
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
            "dxScheduler-confirmRecurrenceEditMessage": "Voulez-vous éditer cet évenement ou la série entière ?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Voulez-vous supprimer cet évenement ou la série entière ?",
            "dxScheduler-confirmRecurrenceEditSeries": "Editer serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Supprimer serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Editer évenement",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Supprimer évenement",
            "dxScheduler-noTimezoneTitle": "Pas de fuseau horaire",
            "dxScheduler-moreAppointments": "{0} en plus",
            "dxCalendar-todayButtonText": "Aujourd'hui",
            "dxCalendar-ariaWidgetName": "Calendrier",
            "dxColorView-ariaRed": "Rouge",
            "dxColorView-ariaGreen": "Vert",
            "dxColorView-ariaBlue": "Bleu",
            "dxColorView-ariaAlpha": "Transparence",
            "dxColorView-ariaHex": "Code couleur",
            "dxTagBox-selected": "{0} selectionnés",
            "dxTagBox-allSelected": "Tous sélectionnés ({0})",
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
            "dxFilterBuilder-filterOperationEquals": "Est égal à",
            "dxFilterBuilder-filterOperationNotEquals": "Est différent de",
            "dxFilterBuilder-filterOperationLess": "Est plus petit que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Est plus petit ou égal à",
            "dxFilterBuilder-filterOperationGreater": "Est plus grand que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Est plus grand ou égal à",
            "dxFilterBuilder-filterOperationStartsWith": "Commence par",
            "dxFilterBuilder-filterOperationContains": "Contient",
            "dxFilterBuilder-filterOperationNotContains": "Ne contient pas",
            "dxFilterBuilder-filterOperationEndsWith": "Finit par",
            "dxFilterBuilder-filterOperationIsBlank": "Est vide",
            "dxFilterBuilder-filterOperationIsNotBlank": "N'est pas vide",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Est parmi",
            "dxFilterBuilder-filterOperationNoneOf": "N'est pas parmi"
        }
    })
});
