import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'fcarrasco',
        name: 'Felipe Carrasco Farfán',
        isFollowing: false
    },
    {
        userName: 'AmitMSZ',
        name: 'Amit Martinez Salgado',
        isFollowing: false
    },
    {
        userName: 'rtapia',
        name: 'Rodrigo Tapia Santis',
        isFollowing: true
    },
]

export function App () {
    return(
    <section className='App'>
        {
            users.map(( { userName, name, isFollowing}) => {
                return(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    />
                )
            })
        }
    </section>
    )
}