import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemedComp = () => {

    const {theme} = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        boxShadow: theme === 'light' ? '0px 4px 6px rgba(0,0,0,0.1)' : '0px 4px 6px rgba(0,0,0,0.5)',
        color: theme === 'light' ? '#000000' : '#ffffff'

    }

  return (
    <div style={style}>ThemedComp
        <p> Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aspernatur voluptatem, sunt nostrum voluptatibus labore repellendus vitae laudantium minus adipisci iure natus et sit cupiditate illo odio error optio? Nihil.
        Perspiciatis officia neque accusamus velit nam saepe voluptatem itaque qui ipsum dicta sit, deserunt atque sequi veniam, ducimus facilis libero aliquam assumenda vero molestiae hic laboriosam. Deserunt amet eius veniam?
        Officiis placeat esse nemo tempora dolorum a, ipsam voluptatibus sunt aut iusto optio eos, exercitationem, repudiandae sit error minus inventore asperiores! Deleniti illo maxime eveniet. Saepe excepturi ullam cumque quas.
        Ullam sequi, numquam perferendis atque nam officiis animi eum ea, sint architecto placeat eveniet alias rerum corrupti autem nobis. Ab maxime laborum officiis odit fugiat eum voluptate quis dolorem nihil!
        Odit quaerat perspiciatis assumenda, eius in magni, molestias molestiae quos aut excepturi ducimus! In, corrupti ex! Nobis minus nihil ipsam neque harum non rem fuga temporibus incidunt iste. Odio, accusantium!
        Error dolorum, perspiciatis similique itaque delectus eum adipisci architecto consequatur quam nam minus totam ad commodi reiciendis at, voluptas quae odio a dolore quasi hic facilis vitae. Voluptatum, id earum.
        Illo accusamus, ratione cum dignissimos blanditiis culpa, ea sit tempore hic enim, necessitatibus labore explicabo consequuntur vel! Laboriosam provident perferendis eius molestias, tempore recusandae est quo distinctio ut culpa maiores.
        Distinctio, et id sapiente similique porro ullam excepturi nisi nesciunt expedita dolorum tempore doloremque animi, obcaecati illo quae! Animi perferendis soluta voluptatem et in voluptatum facere veritatis optio quidem cumque.
        Ducimus architecto aliquam iste repellendus? Delectus incidunt, id repellat aliquam quasi earum quia ducimus, quis non doloribus, nobis dolor facilis minima iure. Veritatis ducimus ea molestiae numquam officia. Adipisci, sequi!
        Harum ipsum, in reiciendis dignissimos voluptate tempore minus veniam reprehenderit aut. Nihil excepturi perferendis odio inventore tenetur omnis exercitationem ut voluptatibus suscipit cumque tempore soluta magni veritatis corporis, dicta repellat!</p>
    </div> 
  )
}

export default ThemedComp