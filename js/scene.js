{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {

		"group" : {
			"position" : [ 0, 0, 0 ],
			"rotation" : [ 0, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],
			"visible"  : true,
			"children" : {

				"ground" : {
					"geometry" : "plane",
					"material" : "basic_gray",
					"position" : [ 100, 0, 0 ],
					"rotation" : [ -1.57, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true
				},

				"group1_100models" : {
					"geometry" : "group1_100models",
					"material" : "phong_object",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 50, 50, 50 ],
					"visible"  : true
				},

				"camera1": {
					"type"  : "PerspectiveCamera",
					"fov"   : 50,
					"aspect": 1.33333,
					"near"  : 1,
					"far"   : 1000,
					"position": [ 0, 0, 0 ],
					"target"  : [ 0, 0, 0 ]
				},

				"camera2": {
					"type"  : "OrthographicCamera",
					"left"  : 0,
					"right" : 1024,
					"top"   : 0,
					"bottom": 1024,
					"near"  : 1,
					"far"   : 1000,
					"position": [ 0, 0, 0 ],
					"target"  : [ 0, 0, 0 ]
				},

				"light1": {
					"type"		 : "DirectionalLight",
					"direction"	 : [ 1, 0, 0 ],
					"color" 	 : 16777215,
					"intensity"	 : 1
				},

				"light2": {
					"type"	  : "PointLight",
					"position": [ 0, 250, 0 ],
					"color"   : 16777215,
					"intensity"	 : 1.25
				}
			}
		}

	},

	"geometries": {

		"plane": {
			"type"   : "plane",
			"width"  : 10000,
			"height" : 10000,
			"widthSegments"  : 500,
			"heightSegments" : 500
		},

		"spin_tower": {
			"type": "binary",
			"url" : "models/obj/spinning_tower/spinning_tower2.js"
		},

		"wood_sculpture": {
			"type": "binary",
			"url" : "models/obj/wooden_sculpture/wooden_sculpture.js"
		},

		"windmill_sculpture": {
			"type": "binary",
			"url" : "models/obj/windmill_sculpture/windmill_sculpture.js"
		},

		"wind_sculpture": {
			"type": "binary",
			"url" : "models/obj/wind_sculpture/wind_sculpture.js"
		},

		"weird_sculpture": {
			"type": "binary",
			"url" : "models/obj/weird_sculpture/weird_sculpture.js"
		},

		"weird_blue_sculpture": {
			"type": "binary",
			"url" : "models/obj/weird_blue_sculpture/weird_blue_sculpture.js"
		},

		"shrine_sculpture": {
			"type": "binary",
			"url" : "models/obj/shrine_sculpture/shrine_sculpture.js"
		},

		"expanded_field_sculpture": {
			"type": "binary",
			"url" : "models/obj/expanded_field_sculpture/expanded_field_sculpture.js"
		},

		"urn_sculpture": {
			"type": "binary",
			"url" : "models/obj/urn_sculpture/urn_sculpture.js"
		},

		"primary_sculpture": {
			"type": "binary",
			"url" : "models/obj/primary_sculpture/primary_sculpture.js"
		},

		"pencils_sculpture": {
			"type": "binary",
			"url" : "models/obj/pencils_sculpture/pencils_sculpture.js"
		},

		"monalisa_sculpture": {
			"type": "binary",
			"url" : "models/obj/monalisa_sculpture/monalisa_sculpture.js"
		},

		"impossible_sculpture": {
			"type": "binary",
			"url" : "models/obj/impossible_sculpture/impossible_sculpture.js"
		},

		"abstract_dreamworld": {
			"type": "binary",
			"url" : "models/obj/abstract_dreamworld/abstract_dreamworld.js"
		},

		"math_sculpture": {
			"type": "binary",
			"url" : "models/obj/math_sculpture/math_sculpture.js"
		},

		"harlem_unisphere": {
			"type": "binary",
			"url" : "models/obj/harlem_unisphere/harlem_unisphere.js"
		},

		"bauhaus_sculpture": {
			"type": "binary",
			"url" : "models/obj/bauhaus_sculpture/bauhaus_sculpture.js"
		},

		"complex_geometry_sculpture": {
			"type": "binary",
			"url" : "models/obj/complex_geometry_sculpture/complex_geometry_sculpture.js"
		},

		"abstract_cubes_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_cubes_sculpture/abstract_cubes_sculpture.js"
		},

		"abstract_base_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_base_sculpture/abstract_base_sculpture.js"
		},

		"abstract_flat_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_flat_sculpture/abstract_flat_sculpture.js"
		},

		"abstract_flower_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_flower_sculpture/abstract_flower_sculpture.js"
		},

		"abstract_geometric_white_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_geometric_white_sculpture/abstract_geometric_white_sculpture.js"
		},

		"abstract_letter_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_letter_sculpture/abstract_letter_sculpture.js"
		},

		"abstract_morph_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_morph_sculpture/abstract_morph_sculpture.js"
		},

		"abstract_morph2_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_morph2_sculpture/abstract_morph2_sculpture.js"
		},

		"abstract_redblack_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_redblack_sculpture/abstract_redblack_sculpture.js"
		},

		"abstract_triangle_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_triangle_sculpture/abstract_triangle_sculpture.js"
		},


		"abstract_wtf_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_wtf_sculpture/abstract_wtf_sculpture.js"
		},

		"blue_diamond_sculpture": {
			"type": "binary",
			"url" : "models/obj/blue_diamond_sculpture/blue_diamond_sculpture.js"
		},

		"bulb_flower_sculpture": {
			"type": "binary",
			"url" : "models/obj/bulb_flower_sculpture/bulb_flower_sculpture.js"
		},

		"bull_sculpture": {
			"type": "binary",
			"url" : "models/obj/bull_sculpture/bull_sculpture.js"
		},

		"circle_string_sculpture": {
			"type": "binary",
			"url" : "models/obj/circle_string_sculpture/circle_string_sculpture.js"
		},

		"circle_tower_sculpture": {
			"type": "binary",
			"url" : "models/obj/circle_tower_sculpture/circle_tower_sculpture.js"
		},

		"circle_tower_twist_sculpture": {
			"type": "binary",
			"url" : "models/obj/circle_tower_twist_sculpture/circle_tower_twist_sculpture.js"
		},

		"crazy_window_sculpture": {
			"type": "binary",
			"url" : "models/obj/crazy_window_sculpture/crazy_window_sculpture.js"
		},

		"cylinder_cage_sculpture": {
			"type": "binary",
			"url" : "models/obj/cylinder_cage_sculpture/cylinder_cage_sculpture.js"
		},

		"french_fry_building_sculpture": {
			"type": "binary",
			"url" : "models/obj/french_fry_building_sculpture/french_fry_building_sculpture.js"
		},

		"gear_tower_sculpture": {
			"type": "binary",
			"url" : "models/obj/gear_tower_sculpture/gear_tower_sculpture.js"
		},

		"geometric_shrine_sculpture": {
			"type": "binary",
			"url" : "models/obj/geometric_shrine_sculpture/geometric_shrine_sculpture.js"
		},

		"glass_tower_sculpture": {
			"type": "binary",
			"url" : "models/obj/glass_tower_sculpture/glass_tower_sculpture.js"
		},


		"golden_curve_sculpture": {
			"type": "binary",
			"url" : "models/obj/golden_curve_sculpture/golden_curve_sculpture.js"
		},


		"golden_swoosh_sculpture": {
			"type": "binary",
			"url" : "models/obj/golden_swoosh_sculpture/golden_swoosh_sculpture.js"
		},


		"green_tank_sculpture": {
			"type": "binary",
			"url" : "models/obj/green_tank_sculpture/green_tank_sculpture.js"
		},

		"idk_wtf_sculpture": {
			"type": "binary",
			"url" : "models/obj/idk_wtf_sculpture/idk_wtf_sculpture.js"
		},

		"industrial_crazy_sculpture": {
			"type": "binary",
			"url" : "models/obj/industrial_crazy_sculpture/industrial_crazy_sculpture.js"
		},

		"minimal_primary_abstract_sculpture": {
			"type": "binary",
			"url" : "models/obj/minimal_primary_abstract_sculpture/minimal_primary_abstract_sculpture.js"
		},

		"minimal_white_sculpture": {
			"type": "binary",
			"url" : "models/obj/minimal_white_sculpture/minimal_white_sculpture.js"
		},

		"moya_primary_sculpture": {
			"type": "binary",
			"url" : "models/obj/moya_primary_sculpture/moya_primary_sculpture.js"
		},

		"noodle_sculpture": {
			"type": "binary",
			"url" : "models/obj/noodle_sculpture/noodle_sculpture.js"
		},

		"parametric_house_sculpture": {
			"type": "binary",
			"url" : "models/obj/parametric_house_sculpture/parametric_house_sculpture.js"
		},

		"primary_park_sculpture": {
			"type": "binary",
			"url" : "models/obj/primary_park_sculpture/primary_park_sculpture.js"
		},

		"parametric_tube_sculpture": {
			"type": "binary",
			"url" : "models/obj/parametric_tube_sculpture/parametric_tube_sculpture.js"
		},

		"primary_rings_sculpture": {
			"type": "binary",
			"url" : "models/obj/primary_rings_sculpture/primary_rings_sculpture.js"
		},

		"primary_tower_sculpture": {
			"type": "binary",
			"url" : "models/obj/primary_tower_sculpture/primary_tower_sculpture.js"
		},

		"purple_glass_sculpture": {
			"type": "binary",
			"url" : "models/obj/purple_glass_sculpture/purple_glass_sculpture.js"
		},

		"rbg_tunnel_sculpture": {
			"type": "binary",
			"url" : "models/obj/rbg_tunnel_sculpture/rbg_tunnel_sculpture.js"
		},

		"redwhitetower_sculpture": {
			"type": "binary",
			"url" : "models/obj/redwhitetower_sculpture/redwhitetower_sculpture.js"
		},

		"three_cubes_sculpture": {
			"type": "binary",
			"url" : "models/obj/three_cubes_sculpture/three_cubes_sculpture.js"
		},

		"twirls_sculpture": {
			"type": "binary",
			"url" : "models/obj/twirls_sculpture/twirls_sculpture.js"
		},

		"white_cross_sculpture": {
			"type": "binary",
			"url" : "models/obj/white_cross_sculpture/white_cross_sculpture.js"
		},

		"wooden_abstract_sculpture": {
			"type": "binary",
			"url" : "models/obj/wooden_abstract_sculpture/wooden_abstract_sculpture.js"
		},

		"yellow_orange_ring_sculpture": {
			"type": "binary",
			"url" : "models/obj/yellow_orange_ring_sculpture/yellow_orange_ring_sculpture.js"
		},

		"abstract_bike_wheel_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_bike_wheel_sculpture/abstract_bike_wheel_sculpture.js"
		},

		"abstract_container_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_container_sculpture/abstract_container_sculpture.js"
		},

		"abstract_headquarters_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_headquarters_sculpture/abstract_headquarters_sculpture.js"
		},

		"abstract_lilypad_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_lilypad_sculpture/abstract_lilypad_sculpture.js"
		},

		"abstract_multi_texture_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_multi_texture_sculpture/abstract_multi_texture_sculpture.js"
		},

		"abstract_mushroom_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_mushroom_sculpture/abstract_mushroom_sculpture.js"
		},

		"abstract_peg_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_peg_sculpture/abstract_peg_sculpture.js"
		},

		"abstract_pillars_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_pillars_sculpture/abstract_pillars_sculpture.js"
		},

		"abstract_piping_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_piping_sculpture/abstract_piping_sculpture.js"
		},

		"abstract_rachel_whiteread_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_rachel_whiteread_sculpture/abstract_rachel_whiteread_sculpture.js"
		},

		"abstract_bike_wheel_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_bike_wheel_sculpture/abstract_bike_wheel_sculpture.js"
		},

		"abstract_container_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_container_sculpture/abstract_container_sculpture.js"
		},

		"abstract_headquarters_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_headquarters_sculpture/abstract_headquarters_sculpture.js"
		},

		"group1_100models": {
			"type": "binary",
			"url" : "models/obj/group1_100models/group1_100models.js"
		},

		"abstract_lilypad_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_lilypad_sculpture/abstract_lilypad_sculpture.js"
		},

		"abstract_multi_texture_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_multi_texture_sculpture/abstract_multi_texture_sculpture.js"
		},

		"abstract_mushroom_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_mushroom_sculpture/abstract_mushroom_sculpture.js"
		},

		"abstract_peg_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_peg_sculpture/abstract_peg_sculpture.js"
		},

		"abstract_pillars_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_pillars_sculpture/abstract_pillars_sculpture.js"
		},

		"abstract_piping_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_piping_sculpture/abstract_piping_sculpture.js"
		},

		"abstract_swoopy_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_swoopy_sculpture/abstract_swoopy_sculpture.js"
		},

		"abstract_wire_sculpture": {
			"type": "binary",
			"url" : "models/obj/abstract_wire_sculpture/abstract_wire_sculpture.js"
		},

		"adobe_block_house_sculpture": {
			"type": "binary",
			"url" : "models/obj/adobe_block_house_sculpture/adobe_block_house_sculpture.js"
		},

		"amplifier_sculpture": {
			"type": "binary",
			"url" : "models/obj/amplifier_sculpture/amplifier_sculpture.js"
		},

		"art_slots_sculpture": {
			"type": "binary",
			"url" : "models/obj/art_slots_sculpture/art_slots_sculpture.js"
		},

		"art_word_sculpture": {
			"type": "binary",
			"url" : "models/obj/art_word_sculpture/art_word_sculpture.js"
		},

		"art_word_sculpture": {
			"type": "binary",
			"url" : "models/obj/art_word_sculpture/art_word_sculpture.js"
		},

		"big_l_sculpture": {
			"type": "binary",
			"url" : "models/obj/big_l_sculpture/big_l_sculpture.js"
		},

		"black_pillars_sculpture": {
			"type": "binary",
			"url" : "models/obj/black_pillars_sculpture/black_pillars_sculpture.js"
		},

		"blue_curve_sculpture": {
			"type": "binary",
			"url" : "models/obj/blue_curve_sculpture/blue_curve_sculpture.js"
		},

		"checker_sculpture": {
			"type": "binary",
			"url" : "models/obj/checker_sculpture/checker_sculpture.js"
		},

		"circle_tree_sculpture": {
			"type": "binary",
			"url" : "models/obj/circle_tree_sculpture/circle_tree_sculpture.js"
		},

		"complex_crazyfuck_room_sculpture": {
			"type": "binary",
			"url" : "models/obj/complex_crazyfuck_room_sculpture/complex_crazyfuck_room_sculpture.js"
		},

		"crazy_bench_sculpture": {
			"type": "binary",
			"url" : "models/obj/crazy_bench_sculpture/crazy_bench_sculpture.js"
		},

		"cutout_squares_sculpture": {
			"type": "binary",
			"url" : "models/obj/cutout_squares_sculpture/cutout_squares_sculpture.js"
		},

		"eagle_sculpture": {
			"type": "binary",
			"url" : "models/obj/eagle_sculpture/eagle_sculpture.js"
		},

		"floating_dna_sculpture": {
			"type": "binary",
			"url" : "models/obj/floating_dna_sculpture/floating_dna_sculpture.js"
		},

		"impossible_shingles_sculpture": {
			"type": "binary",
			"url" : "models/obj/impossible_shingles_sculpture/impossible_shingles_sculpture.js"
		},

		"impossible_world_sculpture": {
			"type": "binary",
			"url" : "models/obj/impossible_world_sculpture/impossible_world_sculpture.js"
		},

		"nice_vase_sculpture": {
			"type": "binary",
			"url" : "models/obj/nice_vase_sculpture/nice_vase_sculpture.js"
		},

		"pink_aztek_sculpture": {
			"type": "binary",
			"url" : "models/obj/pink_aztek_sculpture/pink_aztek_sculpture.js"
		},

		"platform_city_sculpture": {
			"type": "binary",
			"url" : "models/obj/platform_city_sculpture/platform_city_sculpture.js"
		},

		"primary_balls_sculpture": {
			"type": "binary",
			"url" : "models/obj/primary_balls_sculpture/primary_balls_sculpture.js"
		},

		"primary_incomplete_sculpture": {
			"type": "binary",
			"url" : "models/obj/primary_incomplete_sculpture/primary_incomplete_sculpture.js"
		},

		"red_spike_sculpture": {
			"type": "binary",
			"url" : "models/obj/red_spike_sculpture/red_spike_sculpture.js"
		},

		"robot_arm_sculpture": {
			"type": "binary",
			"url" : "models/obj/robot_arm_sculpture/robot_arm_sculpture.js"
		},

		"robot_sculpture": {
			"type": "binary",
			"url" : "models/obj/robot_sculpture/robot_sculpture.js"
		},

		"rocky_pyramid_sculpture": {
			"type": "binary",
			"url" : "models/obj/rocky_pyramid_sculpture/rocky_pyramid_sculpture.js"
		},

		"tall_thin_cubes_sculpture": {
			"type": "binary",
			"url" : "models/obj/tall_thin_cubes_sculpture/tall_thin_cubes_sculpture.js"
		},

		"tree_spike_sculpture": {
			"type": "binary",
			"url" : "models/obj/tree_spike_sculpture/tree_spike_sculpture.js"
		},

		"tree_stump_sculpture": {
			"type": "binary",
			"url" : "models/obj/tree_stump_sculpture/tree_stump_sculpture.js"
		}

	},

	"embeds": {

	},

	"materials": {

		"basic_gray": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": "black", "wireframe": true }
		},

		"phong_hand": {
			"type": "MeshPhongMaterial",
			"parameters": { "ambient": 14531481, "specular": 2236962, "shininess": 40, "wrapAround": true, "wrapRGB": [ 0.15, 0.02, 0.01 ] }
		},

		"phong_object": {
			"type": "MeshFaceMaterial",
			"parameters": { "color": 16737894, "ambient": 16737894, "specular": 2236962, "shininess": 40, "wrapAround": true, "wrapRGB": [ 0.15, 0.02, 0.01 ] }
		}
	},

	"textures": {

	},

	"fogs":	{
		"basic": {
			"type": "linear",
			"color": [1,1,1],
			"near": 0,
			"far": 1000
		},

		"exponential": {
			"type": "exp2",
			"color": [1,1,1],
			"density": 0.005
		},

		"black": {
			"type": "exp2",
			"color": [0,0,0],
			"density": 0.005
		}
	},

	"defaults": {
		"bgcolor": [0,0,0],
		"bgalpha": 1,
		"camera": "camera1",
		"fog": "basic"
	}

}
