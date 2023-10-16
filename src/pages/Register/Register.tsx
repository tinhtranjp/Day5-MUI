import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

import Button from '@mui/material/Button';

import {useForm, Controller} from 'react-hook-form'

// import LoginForm from '~/models/LoginForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { validationSchema } from '~/utils/validationSchema';

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

    const prefectures = ['北海道', '青森県','岩手県', '秋田県', '宮城県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '福井県', '石川県', '富山県', '静岡県', '山梨県', '長野県', '愛知県', '岐阜県', '三重県', '和歌山県', '滋賀県', '奈良県', '京都府', '大阪府', '兵庫県', '岡山県', '広島県', '鳥取県', '島根県', '山口県', '香川県', '徳島県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '大分県', '熊本県', '宮崎県', '鹿児島県', '沖縄県']

    const {
        control,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm({mode:"onChange" ,resolver: zodResolver(validationSchema)});

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
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="お名前 （必須）"
                                        placeholder="例) 山田　太郎"
                                        id="fullName"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.fullName && <p className='text-red-500 mt-4'>{String(errors.fullName.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="furigana"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            {...field }
                                            fullWidth
                                            label="お名前(フリガナ)（必須）"
                                            placeholder="例) ヤマダ　タロウ"
                                            id="furigana"
                                            error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.furigana && <p className='text-red-500 mt-4'>{String(errors.furigana.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="addressId"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            {...field }
                                            fullWidth
                                            label="郵便番号 （必須）"
                                            placeholder="652-00xx"
                                            id="addressId"
                                            error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.addressId && <p className='text-red-500 mt-4'>{String(errors.addressId.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="prefecture-select-label" error={!!errors.prefecture}>都道府県 （必須）</InputLabel>
                                <Controller
                                    name="prefecture"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            labelId="prefecture-select-label"
                                            id="prefecture"
                                            error={!!errors.prefecture}
                                            label="都道府県 （必須）"
                                        >
                                            {prefectures.map((pref, index) => (
                                                <MenuItem key={index} value={index}>
                                                    {pref}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                                {errors.prefecture && <p className='text-red-500 mt-4'>{String(errors.prefecture.message)}</p>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="address1"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="住所１ （必須）"
                                        placeholder="市区町村、番地等"
                                        id="address1"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.address1 && <p className='text-red-500 mt-4'>{String(errors.address1.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="address2"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="住所2 （必須）"
                                        placeholder="アパート・マンション名、部屋番号等"
                                        id="address2"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.address2 && <p className='text-red-500 mt-4'>{String(errors.address2.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="メール（必須）"
                                        placeholder="abc@gmail.com"
                                        id="email"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.email && <p className='text-red-500 mt-4'>{String(errors.email.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="電話番号（必須）"
                                        placeholder="例) 03-1234-5678"
                                        id="phone"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.phone && <p className='text-red-500 mt-4'>{String(errors.phone.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="fax"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="FAX番号"
                                        placeholder="例) 03-1234-5678"
                                        id="fax"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.fax && <p className='text-red-500 mt-4'>{String(errors.fax.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <FormControl fullWidth>
                                <InputLabel id="gender-select-label" error={!!errors.gender} >性別</InputLabel>
                                <Controller
                                        name="gender"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                onChange={e => field.onChange(e.target.value === "true")}
                                                labelId="gender-select-label"
                                                id="gender"
                                                label="性別 （必須）"
                                                error={!!errors.gender}
                                                >
                                                <MenuItem value="true">男性</MenuItem>
                                                <MenuItem value="false">女性</MenuItem>
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Item>
                            {errors.gender && <p className='text-red-500 mt-4'>{String(errors.gender.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <FormControl sx={{ m: 1 }} variant="standard" error={!!errors.year}>
                                    <InputLabel htmlFor="year">年</InputLabel>
                                    <Controller
                                        name="year"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <BootstrapInput {...field} placeholder='Year' />}
                                    />
                                    {errors.year && <p className='text-red-500 mt-4'>{String(errors.year.message)}</p>}
                                </FormControl>

                                <FormControl sx={{ m: 1 }} variant="standard" error={!!errors.month}>
                                    <InputLabel id="month-label" sx={{display: 'flex', justifyContent: 'center'}}>月</InputLabel>
                                    <Controller
                                        name="month"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                labelId="month-label"
                                                input={<BootstrapInput />}
                                                displayEmpty   
                                            >
                                                <MenuItem value="">-----</MenuItem>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map((monthNumber) => (
                                                    <MenuItem key={monthNumber} value={monthNumber + ""}>
                                                        {monthNumber}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                    {errors.month && <p className='text-red-500 mt-4'>{String(errors.month.message)}</p>}
                                </FormControl>

                                <FormControl sx={{ m: 1 }} variant="standard" error={!!errors.day}>
                                    <InputLabel htmlFor="day">日</InputLabel>
                                    <Controller
                                        name="day"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <NativeSelect {...field} input={<BootstrapInput />}>
                                                <option value="" disabled>-----</option>
                                                {Array.from({ length: 31 }, (_, i) => i + 1).map((dayNumber) => (
                                                    <option key={dayNumber} value={dayNumber}>{dayNumber}</option>
                                                ))}
                                            </NativeSelect>
                                        )}
                                    />
                                    {errors.day && <p className='text-red-500 mt-4'>{String(errors.day.message)}</p>}
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <FormControl fullWidth>
                                    <InputLabel id="email-receipt-label" error={!!errors.activeEmail}>メルマガ受信設定</InputLabel>
                                    <Controller
                                            name="activeEmail"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    onChange={e => field.onChange(e.target.value === "true")}
                                                    labelId="email-receipt-label"
                                                    id="email-receipt-select"
                                                    defaultValue={null}
                                                    label="こちらのケースは（必須）"
                                                    error={!!errors.activeEmail}
                                                    >
                                                    <MenuItem value="true">受信する</MenuItem>
                                                    <MenuItem value="false">受信しない</MenuItem>
                                                </Select>
                                            )}
                                        />
                                </FormControl>
                            </Item>
                            {errors.activeEmail && <p className='text-red-500 mt-4'>{String(errors.activeEmail.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="userId"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="ログイン ID"
                                        placeholder="例) trantinh98"
                                        id="userId"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.userId && <p className='text-red-500 mt-4'>{String(errors.userId.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'こちらのケースは必須です' }}
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="ログインパスワード （必須）"
                                        placeholder="Password enter..."
                                        id="password"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.password && <p className='text-red-500 mt-4'>{String(errors.password.message)}</p>}
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Controller
                                    name="checkPassword"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'こちらのケースは必須です', validate: value => value === watch('password') || 'パスワードが一致しません' }}
                                    render={({ field, fieldState }) => (
                                        <TextField
                                        {...field }
                                        fullWidth
                                        label="ログインパスワード （必須）"
                                        placeholder="上のようにご入力ください"
                                        id="checkPassword"
                                        error={fieldState.invalid}
                                        />
                                    )}
                                />
                            </Item>
                            {errors.checkPassword && <p className='text-red-500 mt-4'>{String(errors.checkPassword.message)}</p>}
                        </Grid>
                        <Grid item xs={6} sx={{display: 'flex', justifyContent:"center", alignItems: 'center'}}>
                            <Button variant="contained" type="submit" sx={{px:4, py:2}} >確　認</Button>
                        </Grid>
                    </Grid>
                </form>
                </Box>
            </div>
  );
}
