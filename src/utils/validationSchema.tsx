import {z} from "zod"

export const validationSchema = z.object({
    fullName: z.string()
               .nonempty('お名前は必須です。')
               .min(8, 'お名前は8文字以上で入力してください。'),
    furigana:  z.string()
                .nonempty('フリガナは必須です。')
                .min(8, 'フリガナは8文字以上で入力してください。'),
    addressId: z.string()
                .nonempty('郵便番号は必須です。')
                .min(7, '郵便番号は7文字以上で入力してください。'),
    prefecture: z.number()
                .optional().refine(value => value !== undefined, {
                    message: "'都道府県は必須です。"
                  }),
    address1:  z.string()
                .nonempty('住所１は必須です。')
                .min(8,'住所１は8文字以上で入力してください。'),
    address2: z
        .string()
        .nonempty('住所2は必須です。')
        .min(8,'住所2は8文字以上で入力してください。'),
    gender: z
        .boolean()
        .optional().refine(value => value !== undefined, {
            message: "性別は必須です。"
          }),
    year: z
        .string()
        .nonempty('年は必須です。'),
    month: z
        .string()
        .nonempty('月は必須です。'),
    day: z
        .string()
        .nonempty('日は必須です。'),
    email: z
        .string()
        .nonempty('メールは必須です。')
        .email('メールアドレスが間違えるようです。再入力ください。'),
    fax: z
        .string()
        .nonempty('ファクスは必須です。')
        .min(10, 'ファクスは１０文字以上で入力してください。')
        .max(12,'ファクスは１２文字以上入力出来ません。'),
    phone: z
        .string()
        .nonempty('携帯電話は必須です。')
        .min(11, '携帯電話は１１文字以上で入力してください。')
        .max(13,'携帯電話は１２文字以上入力出来ません。'),
    activeEmail: z
        .boolean()
        .optional().refine(value => value !== undefined, {
            message: "'メルマガ受信設定は必須です。'"
          }),
    userId: z
        .string()
        .nonempty('ログイン　IDは必須です。')
        .min(8,'ログイン　IDは８文字以上で入力してください。'),
    password: z
        .string()
        .nonempty('パスワードは必須です。')
        .min(8, 'パスワードは８文字以上で入力してください。'),
    checkPassword: z
        .string()
        .nonempty('は必須です。')
        .min(8,'８文字以上で入力してください。')
}).refine((data) => data.password === data.checkPassword, {
    message: 'パスワードと一致しません。',
    path: ['checkPassword']
});