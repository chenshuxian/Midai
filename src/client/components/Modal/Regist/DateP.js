import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import { setUserBirthday } from '../../../redux/Users/Users.actions';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    formControl: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectCom = (props) => {

    const classes = useStyles();
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
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="birthday-month">{props.type}</InputLabel>
                <Select
                    labelId="birthday-month"
                    id="month"
                    value={props.value}
                    onChange={props.handleChange}
                    label={props.type}
                >
                    {
                        Array.isArray(props.arr) ? monthFn(props.arr) : dayYearFn(props.arr, props.value)
                    }
                </Select>
            </FormControl>
        </div>
    )
}

const DateP = () => {

    const dispatch = useDispatch();
    let birthday = useSelector((state) => state.user.users.birthday);
    birthday = birthday.split("-");
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
    const nowYear = new Date().getFullYear();
    // let birthday = new Array(3);
    // birthday[0] = nowYear;
    // birthday.fill("1", 1);

    // 將生日['1985','02','17'] 轉換成 1985-02-17 
    const birthdayHandle = (value, index) => {
        // if (value < 10)
        //     value = "0" + value;

        birthday[index] = value;

        return birthday.join("-");
    }

    const handleYearChange = (event) => {
        let newBirth = birthdayHandle(event.target.value, 0);
        dispatch(setUserBirthday(newBirth))
    };
    const handleMonthChange = (event) => {
        let newBirth = birthdayHandle(event.target.value, 1);
        dispatch(setUserBirthday(newBirth))
    }
    const handleDayChange = (event) => {
        let newBirth = birthdayHandle(event.target.value, 2);
        dispatch(setUserBirthday(newBirth))
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <SelectCom arr={month} type="月" value={birthday[1]} handleChange={handleMonthChange} />
            </Grid>
            <Grid item xs>
                <SelectCom arr={31} type="日" value={birthday[2]} handleChange={handleDayChange} />
            </Grid>
            <Grid item xs>
                <SelectCom arr={100} type="年" value={birthday[0]} handleChange={handleYearChange} />
            </Grid>
        </Grid>

    )
}

export default DateP;