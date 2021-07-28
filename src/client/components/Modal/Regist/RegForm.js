import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import { TextField, Radios, Select, showErrorOnBlur, makeValidate } from 'mui-rff';
import { MenuItem, Button, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';
import { setRegState, hideRegModal, showRegWelcomeModal } from '../../../redux/Users/Users.actions';


const month = [
    { key: 1, value: '一月' },
    { key: 2, value: '二月' },
    { key: 3, value: '三月' },
    { key: 4, value: '四月' },
    { key: 5, value: '五月' },
    { key: 6, value: '六月' },
    { key: 7, value: '七月' },
    { key: 8, value: '八月' },
    { key: 9, value: '九月' },
    { key: 10, value: '十月' },
    { key: 11, value: '十一月' },
    { key: 12, value: '十二月' },
];

const startY = new Date().getFullYear();

const dayYearFn = (index, start) => {
    let a = new Array(index);
    a.fill(1);
    if (index > 31) {
        // 年的建立
        let nowYear = start;
        let startYear = nowYear - index;
        return a.map((value, index) => {
            return (<MenuItem key={index} value={startYear + index + 1}>{startYear + index + 1}</MenuItem>)
        })
    }
    // 日的建立
    return a.map((value, index) => {
        return (<MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>)
    })
}

const monthFn = (arr) => {
    console.log("monthFn" + arr);
    return arr.map((obj, index) => {
        return (<MenuItem key={index} value={obj.key}>{obj.value}</MenuItem>)
    })
}

const RegForm = () => {

    const dispatch = useDispatch();

    async function onSubmit(values) {
        console.log(values);
        dispatch(setRegState());
        dispatch(hideRegModal());
        dispatch(showRegWelcomeModal());
    }

    const schema = Yup.object().shape({
        lastName: Yup.string().required('名字為必要欄位'),
        firstName: Yup.string().required('姓為必要欄位'),
        email: Yup.string().email('email格式:xxx@gmail.com').required('信箱為必要欄位')
    });

    // Run the makeValidate function...
    const validate = makeValidate(
        schema
    );

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        label="名字"
                        name="lastName"
                        required={true}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" />
                    <TextField
                        label="姓"
                        name="firstName"
                        required={true}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" />
                    <InputLabel style={{ marginTop: '8' }}>生日</InputLabel>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Select name="month" label="選擇出生月" variant="outlined" formControlProps={{ margin: 'normal' }}>
                                {monthFn(month)}
                            </Select>
                        </Grid>
                        <Grid item xs>
                            <Select name="day" label="選擇出日" variant="outlined" formControlProps={{ margin: 'normal' }}>
                                {dayYearFn(31)}
                            </Select>
                        </Grid>
                        <Grid item xs>
                            <Select name="year" label="選擇出生年" variant="outlined" formControlProps={{ margin: 'normal' }}>
                                {dayYearFn(100, startY)}
                            </Select>
                        </Grid>
                    </Grid>
                    <TextField
                        label="信箱"
                        name="email"
                        placeholder="範例:jacky@mail.com"
                        required={true}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" />
                    <Button style={{ marginTop: '8' }} fullWidth variant="contained" color="secondary" type="submit">
                        同意並繼續
                    </Button>
                </form>
            )}
        />
    )
}

export default RegForm;