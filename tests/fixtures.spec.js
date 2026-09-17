import{test ,expect} from './utils/fixtures'

test('any', async ({login})=>{

    console.log(await login.title());
})

test('blue', async ({login})=>{

    login.title();
})