import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { Devise } from 'src/app/model/devise';
import { FormData } from '../../model/FormData';
import { JsonService } from '../../service/json.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  dataSourceDevise: Devise[] = [];

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

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.getAllDevise();
    this.initDynamicFormData();


  }

  public add(formData) {
    console.log('Form data to add:', formData);

    this.jsonService.add(formData).subscribe(
      (resp) => {
        console.log('Réponse de l\'ajout:', resp);
      },
      (err) => {
        console.log('Erreur lors de l\'ajout:', err);
      }
    );
  }


  getValidators(label: string): { validators?: any[] } {
    if (label === 'paysCod') {
      return { validators: [Validators.required] };
    }


    if (label === 'paysDesc') {
      return { validators: [Validators.required] };
    }

    if (label === 'paysAbr') {
      return { validators: [Validators.maxLength(3), Validators.pattern('^[a-zA-Z]*$')] };
    }

    return {};
  }

  getAllDevise() {
    this.jsonService.getAll().subscribe((res: ApiResponse<Devise>) => {
      console.log('%getAlldevise() line:70  ', 'color: #007acc;', res.data);
      this.dataSourceDevise = res.data.map((item: Devise) => Devise.fromJson(item));

      this.key = "id";
      this.value = "dvsCode";

      this.initDynamicFormData();


    });
  }



  initDynamicFormData() {
    this.dynamicFormData = {
      fields: [
        { description: "id", type: 'text', placeholder: "id", label: 'id', hidelabel: false, disabled: false, hidden: false, ...this.getValidators('id'), defaultValue: "", options: [], selectedValue: null, key: "", value: "" },
        { description: "Code", type: 'text', placeholder: "Code", label: 'paysCod', hidelabel: false, disabled: false, hidden: false, ...this.getValidators('paysCod'), defaultValue: "", options: [], selectedValue: null, key: "", value: "" },
        { description: "Description", type: 'text', placeholder: "Description", hidelabel: false, label: 'paysDesc', disabled: false, hidden: false, ...this.getValidators('paysDesc'), defaultValue: "", options: [], selectedValue: null, key: "", value: "" },
        { description: "Abréviation", type: 'number', placeholder: "Abréviation", hidelabel: false, label: 'paysAbr', disabled: true, hidden: false, defaultValue: 40, options: [], selectedValue: null, key: "", value: "" },
        { description: "Statut", type: 'text', placeholder: "Statut", label: 'paysStatus', hidelabel: false, disabled: true, hidden: false, defaultValue: "CRE", ...this.getValidators('paysStatus'), options: [], selectedValue: null, key: "", value: "" },
        { description: "Devise", type: 'select', placeholder: "Devise", label: 'Devise', hidelabel: false, disabled: false, hidden: false, defaultValue: "", options: this.dataSourceDevise, selectedValue: "", key: this.key, value: this.value },

       // { type: 'textarea', label: 'commentaire', rows: 5, disabled: false, hidden: false, defaultValue: "", options: [], selectedValue: null },
       // { type: 'select', label: 'genre', disabled: false, hidden: false, defaultValue: "", options: ['Masculin', 'Féminin', 'Autre'], selectedValue: 'Féminin' },
        { description: "accepter", type: 'checkbox', placeholder: "accepter", label: 'accepter', hidelabel: false, disabled: false, hidden: false, defaultValue: false, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selectedValue: 'Option 1', key: "", value: "" },
        { description: "choix", type: 'radio', placeholder: "choix", label: 'choix', hidelabel: false, disabled: false, hidden: false, defaultValue: false, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selectedValue: 'Option 1', key: "", value: "" },
      ], columnsPerRow: 2,
    };

  }

}

