import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

import Button from '@mui/material/Button';

import {useForm, Controller  } from 'react-hook-form'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

export default function Register() {
    
    // const [fullName, setFullName] = useState('');
    // const [katakana, setKatakana] = useState('');
    // const [addressId, setAddressId] = useState('');
    // const [prefecture, setPrefecture] = useState('');
    // const [address1, setAddress1] = useState('');
    // const [address2, setAddress2] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [fax, setFax] = useState('');
    // const [gender, setGender] = useState('');
    // const [year, setYear] = useState('例) 1998');
    // const [month, setMonth] = useState('1');
    // const [date , setDate] = useState('1');
    // const [activeEmail, setActiveEmail] = useState('');
    // const [userId, setUserId] = useState('');
    // const [password, setPassword] = useState('');
    // const [checkPass, setCheckPassword] = useState('');


    // const handlePrefecture = (event: SelectChangeEvent) => {
    //     setPrefecture(event.target.value as string);
    // };

    // const handleGender = (event: SelectChangeEvent) => {
    //     setGender(event.target.value as string);
    // };

    // const handleYear = (event: { target: { value: string } }) => {
    //     setYear(event.target.value);
    // }

    // const handleMonth = (event: { target: { value: string } }) => {
    //     setMonth(event.target.value);
    // }

    // const handleDate = (event: { target: { value: string } }) => {
    //     setDate(event.target.value);
    // }

    // const handleActiveEmail = (event: SelectChangeEvent) => {
    //     setActiveEmail(event.target.value as string);
    // };

    const prefectures = ['北海道', '青森県','岩手県', '秋田県', '宮城県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '福井県', '石川県', '富山県', '静岡県', '山梨県', '長野県', '愛知県', '岐阜県', '三重県', '和歌山県', '滋賀県', '奈良県', '京都府', '大阪府', '兵庫県', '岡山県', '広島県', '鳥取県', '島根県', '山口県', '香川県', '徳島県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '大分県', '熊本県', '宮崎県', '鹿児島県', '沖縄県']

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        
    }
    return (
            <div className='bg-[##E8E9E9]'>
                <Box sx={{ flexGrow: 1, maxWidth: 1200, margin: '0 auto', py: 16}}>
                <Typography variant="h4" align="center" gutterBottom>
                    新規会員登録
                </Typography>
                <Typography variant="body1" align="center" gutterBottom sx = {{ py: 2, my: 6 , background: "#EFF2F4"}}>
                    新規会員登録を行います。登録情報を入力後、「確認」ボタンをクリックしてください。
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                name="fullName"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Vui long dien thong tin vao' }}
                                render={({ field, fieldState }) => (
                                    <TextField
                                    {...field }
                                    fullWidth
                                    label="お名前 （必須）"
                                    placeholder="例) 山田　太郎"
                                    id="fullName"
                                    error={fieldState.invalid}
                                    // helperText={fieldState.error?.message}
                                    />
                                )}
                                />
                            </Item>
                            {errors.fullName && <p className='text-red-500'>{String(errors.fullName.message)}</p>}
                        </Grid>
                        {/* <Grid item xs={6}>
                        <Item><TextField fullWidth label="お名前(フリガナ)" placeholder='例) ヤマダ　タロウ' id="katakana" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><TextField fullWidth label="郵便番号 （必須）" placeholder='652-00xx' id="addressId" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="prefecture-select-label">都道府県 （必須）</InputLabel>
                                    <Select
                                        labelId="prefecture-select-label"
                                        id="prefecture"
                                        value={prefecture}
                                        label="都道府県 （必須）"
                                        onChange={handlePrefecture}
                                        >
                                            {prefectures.map((pref, index) => (
                                                <MenuItem key={index} value={index}>
                                                    {pref}
                                                </MenuItem>
                                            ))}
                                    </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><TextField fullWidth label="住所１ （必須）" placeholder='市区町村、番地等' id="address1" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><TextField fullWidth label="住所２" placeholder='アパート・マンション名、部屋番号等' id="address2" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><TextField fullWidth label="メール（必須）" placeholder='abc@gmail.com' id="email" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><TextField fullWidth label="電話番号（必須）" placeholder='	例) 03-1234-5678' id="phone" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item><TextField fullWidth label="FAX番号" placeholder='例) 03-1234-5678' id="fax" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>
                            <FormControl fullWidth>
                                    <InputLabel id="gender-select-label">性別</InputLabel>
                                    <Select
                                        labelId="gender-select-label"
                                        id="gender"
                                        value={gender}
                                        label="都道府県 （必須）"
                                        onChange={handleGender}
                                        >
                                            <MenuItem value={1}>男性</MenuItem>
                                            <MenuItem value={0}>女性</MenuItem>
                                    </Select>
                            </FormControl>
                        </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <FormControl sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="demo-customized-textbox">年</InputLabel>
                                    <BootstrapInput id="demo-customized-textbox" value={year} onChange={handleYear} placeholder='Year' />
                                </FormControl>
                                <FormControl sx={{ m: 1 }} variant="standard">
                                    <InputLabel id="demo-customized-select-label" sx={{display: 'flex', justifyContent: 'center'}}>月</InputLabel>
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    placeholder='Month'
                                    value={month}
                                    onChange={handleMonth}
                                    input={<BootstrapInput />}
                                    >
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((monthNumber) => (
                                            <MenuItem key={monthNumber} value={monthNumber}>
                                                {monthNumber}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-select-native">日</InputLabel>
                                        <NativeSelect
                                        placeholder='Day'
                                        id="demo-customized-select-native"
                                        value={date}
                                        onChange={handleDate}
                                        input={<BootstrapInput />}
                                        >
                                            {Array.from({ length: 31 }, (_, i) => i + 1).map((dayNumber) => (
                                                <option key={dayNumber} value={dayNumber}>{dayNumber}</option>
                                            ))}
                                        </NativeSelect>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">メルマガ受信設定</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={activeEmail}
                                        label="都道府県 （必須）"
                                        onChange={handleActiveEmail}
                                        >
                                            <MenuItem value={1}>受信する</MenuItem>
                                            <MenuItem value={0}>受信しない</MenuItem>
                                    </Select>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField fullWidth label="ログイン ID" placeholder='例) trantinh98' id="userId" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField fullWidth label="ログインパスワード （必須）" id="password" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item><TextField fullWidth label="再入力　パスワード （必須）" id="checkPassword" /></Item>
                        </Grid> */}
                        <Grid item xs={6} sx={{display: 'flex', justifyContent:"center", alignItems: 'center'}}>
                            <Button variant="contained" type="submit" sx={{px:4, py:2}} >確　認</Button>
                        </Grid>
                    </Grid>
                </form>
                </Box>
            </div>
  );
}
