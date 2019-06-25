import { h } from 'hyperapp'
import { Link } from "@hyperapp/router"

export default (state, actions) => (
<div class="container w-full mx-auto pt-20">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-green-600"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">Total Revenue</h5>
                            <h3 class="font-bold text-3xl text-gray-600">$3249 <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-orange-600"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">Total Users</h5>
                            <h3 class="font-bold text-3xl text-gray-600">249 <span class="text-orange-500"><i class="fas fa-exchange-alt"></i></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-yellow-600"><i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">New Users</h5>
                            <h3 class="font-bold text-3xl text-gray-600">2 <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-blue-600"><i class="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">Server Uptime</h5>
                            <h3 class="font-bold text-3xl text-gray-600">152 days</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-indigo-600"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">To Do List</h5>
                            <h3 class="font-bold text-3xl text-gray-600">7 tasks</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded p-3 bg-red-600"><i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h5 class="font-bold uppercase text-gray-400">Issues</h5>
                            <h3 class="font-bold text-3xl text-gray-600">3 <span class="text-red-500"><i class="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <hr class="border-b-2 border-gray-600 my-8 mx-4"></hr>
        <div class="flex flex-row flex-wrap flex-grow mt-2">
            <div class="w-full md:w-1/2 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                    <div class="border-b border-gray-800 p-3">
                        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div class="p-5">
                        <canvas id="chartjs-7" class="chartjs" width="undefined" height="undefined"></canvas>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                    <div class="border-b border-gray-800 p-3">
                        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div class="p-5">
                        <canvas id="chartjs-0" class="chartjs" width="undefined" height="undefined"></canvas>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                    <div class="border-b border-gray-800 p-3">
                        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div class="p-5">
                        <canvas id="chartjs-1" class="chartjs" width="undefined" height="undefined"></canvas>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                    <div class="border-b border-gray-800 p-3">
                        <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div class="p-5"><canvas id="chartjs-4" class="chartjs" width="undefined" height="undefined"></canvas>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                    <div class="border-b border-gray-800 p-3">
                        <h5 class="font-bold uppercase text-gray-600">Template</h5>
                    </div>
                    <div class="p-5">
                    </div>
                </div>
            </div>
            <div class="w-full p-3">
                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                    <div class="border-b border-gray-800 p-3">
                        <h5 class="font-bold uppercase text-gray-600">Table</h5>
                    </div>
                    <div class="p-5">
                        <table class="w-full p-5 text-gray-700">
                            <thead>
                                <tr>
                                    <th class="text-left text-gray-600">Name</th>
                                    <th class="text-left text-gray-600">Side</th>
                                    <th class="text-left text-gray-600">Role</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Obi Wan Kenobi</td>
                                    <td>Light</td>
                                    <td>Jedi</td>
                                </tr>
                                <tr>
                                    <td>Greedo</td>
                                    <td>South</td>
                                    <td>Scumbag</td>
                                </tr>
                                <tr>
                                    <td>Darth Vader</td>
                                    <td>Dark</td>
                                    <td>Sith</td>
                                </tr>                                   
                            </tbody>
                        </table>
                        <p class="py-2"><a href="#" class="text-white">See More issues...</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
)