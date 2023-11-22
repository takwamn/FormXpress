import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormData } from '../../model/FormData';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  fieldOptions: { [key: string]: string[] } = {
    'select': [],
  };

  dynamicFormData: FormData = {
    fields: [],
    columnsPerRow: 0
  };
  value: string;
  key: string;

  getFieldOptions(fieldType: string): string[] {
    return this.fieldOptions[fieldType] || [];
  }

  constructor() { }

  ngOnInit(): void {
    this.initDynamicFormData();


  }

  public add(formData) {
    console.log('Form data to add:', formData);     
  }


  getValidators(label: string): { validators?: any[] } {

    if (label === 'nomEtudiant') {
      return { validators: [Validators.required] };
    }

    return {};
  }

  initDynamicFormData() {
    this.dynamicFormData = {
      fields: [
        { description: "Identifiant", type: 'text', placeholder: "Identifiant", label: 'identifiant', hidelabel: false, disabled: false, hidden: false, ...this.getValidators('identifiant'), defaultValue: "", options: [], selectedValue: null, key: "", value: "" },
        { description: "Nom", type: 'text', placeholder: "Nom", label: 'nomEtudiant', hidelabel: false, disabled: false, hidden: false, ...this.getValidators('nomEtudiant'), defaultValue: "", options: [], selectedValue: null, key: "", value: "" },
        { description: "Âge", type: 'number', placeholder: "Âge", hidelabel: false, label: 'ageEtudiant', disabled: false, hidden: false, ...this.getValidators('ageEtudiant'), defaultValue: "", options: [], selectedValue: null, key: "", value: "" },
        { description: "Moyenne", type: 'number', placeholder: "Moyenne", hidelabel: false, label: 'moyenneEtudiant', disabled: true, hidden: false, defaultValue: 40, options: [], selectedValue: null, key: "", value: "" },
        { description: "Adresse", type: 'text', placeholder: "Adresse", label: 'adresseEtudiant', hidelabel: false, disabled: true, hidden: false, defaultValue: "Tunis", ...this.getValidators('adresseEtudiant'), options: [], selectedValue: null, key: "", value: "" },
        { description: "Cours", type: 'select', placeholder: "Cours", label: 'coursEtudiant', hidelabel: false, disabled: false, hidden: false, defaultValue: "", options: [], selectedValue: "", key: this.key, value: this.value },
        { description: "Accepter", type: 'checkbox', placeholder: "Accepter", label: 'accepter', hidelabel: false, disabled: false, hidden: false, defaultValue: false, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selectedValue: 'Option 1', key: "", value: "" },
        { description: "Genre", type: 'radio', placeholder: "Genre", label: 'genre', hidelabel: false, disabled: false, hidden: false, defaultValue: false, options: ['Homme', 'Femme'], selectedValue: 'Homme', key: "", value: "" },
      ], columnsPerRow: 2,
    };
  }
  


}

