
import { List, Badge, Table } from "flowbite-react";


const ResourcesList = ({ resources }) => {
    return (
        <Table>
            <Table.Body>
                {resources.map((item, index) => {
                    return (
                        <Table.Row key={index} className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.date}</Table.Cell>
                            <Table.Cell
                            ><a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" href={item.link}
                            >{item.title}</a
                                ></Table.Cell>
                            <Table.Cell><Badge color="failure">{item.tag}</Badge></Table.Cell>
                        </Table.Row>
                    );
                })}

            </Table.Body>
        </Table>
    );
}


export default ResourcesList;