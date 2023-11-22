import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../../model/FormField';
import { FormData } from '../../model/FormData';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {

  @Input() formData: FormData;
  form: FormGroup;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createFormGroup(this.formData.fields);
  }

  createFormGroup(fields: FormField[]): FormGroup {
    const group = this.fb.group({});
    fields.forEach(field => {
      const defaultValue = field.defaultValue !== undefined ? field.defaultValue : '';
      const fieldValidators = field.validators || [];
      const formControl = this.fb.control(defaultValue, fieldValidators);
      group.addControl(field.label, formControl);

      if (field.type === 'radio') {
        group.get(field.label).setValue(field.selectedValue);
      }
      if (field.type === 'select' && field.options && field.key && field.value) {
        field.options = field.options.map(option => ({
          [field.key]: option[field.key],
          [field.value]: option[field.value],
        }));
      }
    });

    return group;
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }


}

