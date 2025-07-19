import AnimatedText from '../components/AnimatedText';
import AnimatedButton from '../components/AnimatedButton';

export default function Body() {
    return (
        <div className='flex flex-col items-center justify-center gap-8 py-40 text-center'>
            <AnimatedText>
                User Tracker <br />
                Application
            </AnimatedText>

            <div className='flex items-center justify-center gap-6'>
                <AnimatedButton link="">
                    Register
                </AnimatedButton>

                <AnimatedButton link="">
                    Login
                </AnimatedButton>
            </div>            
        </div>
    );
}