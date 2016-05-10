import cloneDeep from 'lodash.clonedeep';
import isEqual   from 'lodash.isequal';
import set       from 'lodash.set';

import ValidatedQuickForm from './ValidatedQuickForm';

export default class AutoForm extends ValidatedQuickForm {
    constructor () {
        super(...arguments);

        this.model = cloneDeep(this.props.model);
    }

    componentWillReceiveProps ({model}) {
        super.componentWillReceiveProps(...arguments);

        if (!isEqual(this.props.model, model)) {
            this.model = cloneDeep(model);
            this.forceUpdate();
        }
    }

    getChildContextModel () {
        return this.model;
    }

    onChange (key, value) {
        set(this.model, key, value);
        super.onChange(...arguments);
        this.forceUpdate();
    }
}
